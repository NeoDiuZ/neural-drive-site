'use client';

import { useEffect, useRef } from 'react';
import styles from './AnimatedBackground.module.css';

const AnimatedBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let dots = [];

    // Responsive configuration based on screen size
    const getResponsiveConfig = () => {
      const isMobile = width < 768;
      const isTablet = width >= 768 && width < 1024;
      
      if (isMobile) {
        return {
          dotCount: 25,           // Much fewer dots on mobile
          connectionDistance: 80,  // Shorter connection distance
          speed: 0.3,             // Slower animation
          dotOpacity: 0.6,        // Slightly more visible dots
          lineWidth: 0.5          // Thinner lines
        };
      } else if (isTablet) {
        return {
          dotCount: 45,           // Medium number for tablets
          connectionDistance: 100,
          speed: 0.4,
          dotOpacity: 0.5,
          lineWidth: 0.6
        };
      } else {
        return {
          dotCount: 80,           // Full density for desktop
          connectionDistance: 150,
          speed: 0.5,
          dotOpacity: 0.5,
          lineWidth: 0.8
        };
      }
    };

    let config = getResponsiveConfig();

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      config = getResponsiveConfig();
      // Reinitialize dots with new config
      dots = [];
      init();
    });

    class Dot {
      constructor(x, y, speedX, speedY, radius, color) {
        this.x = x;
        this.y = y;
        this.speedX = speedX;
        this.speedY = speedY;
        this.radius = radius;
        this.color = color;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        if (this.x > width || this.x < 0) {
          this.speedX = -this.speedX;
        }
        if (this.y > height || this.y < 0) {
          this.speedY = -this.speedY;
        }
        this.x += this.speedX;
        this.y += this.speedY;
      }
    }

    const init = () => {
      dots = []; // Clear existing dots
      for (let i = 0; i < config.dotCount; i++) {
        const radius = Math.random() * 1.5 + 1;
        dots.push(
          new Dot(
            Math.random() * width,
            Math.random() * height,
            (Math.random() - 0.5) * config.speed,
            (Math.random() - 0.5) * config.speed,
            radius,
            `rgba(255, 255, 255, ${config.dotOpacity})`
          )
        );
      }
    };

    const connect = () => {
      for (let i = 0; i < dots.length; i++) {
        for (let j = i; j < dots.length; j++) {
          const distance = Math.sqrt(
            Math.pow(dots[i].x - dots[j].x, 2) + Math.pow(dots[i].y - dots[j].y, 2)
          );
          if (distance < config.connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${(1 - distance / config.connectionDistance) * 0.8})`;
            ctx.lineWidth = config.lineWidth;
            ctx.stroke();
          }
        }
      }
    };
    
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, width, height);
      dots.forEach(dot => {
        dot.update();
        dot.draw();
      });
      connect();
    };

    init();
    animate();
    
    return () => {
      window.cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', () => {});
    }
  }, []);

  return <canvas ref={canvasRef} className={styles.backgroundCanvas} />;
};

export default AnimatedBackground; 