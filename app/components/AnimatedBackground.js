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
      const isSmallWindow = width < 1200 && height < 800;
      
      if (isMobile) {
        return {
          dotCount: 12,           // Much fewer dots on mobile (reduced from 25)
          connectionDistance: 60, // Even shorter connection distance (reduced from 80)
          speed: 0.2,             // Even slower animation (reduced from 0.3)
          dotOpacity: 0.4,        // Lower opacity for subtlety (reduced from 0.6)
          lineWidth: 0.3,         // Much thinner lines (reduced from 0.5)
          maxConnections: 2       // Limit connections per dot
        };
      } else if (isTablet || isSmallWindow) {
        return {
          dotCount: 30,           // Fewer dots for tablets/small windows (reduced from 45)
          connectionDistance: 80, // Shorter connections (reduced from 100)
          speed: 0.3,             // Slower speed (reduced from 0.4)
          dotOpacity: 0.4,        // Lower opacity
          lineWidth: 0.4,         // Thinner lines (reduced from 0.6)
          maxConnections: 3       // Limit connections per dot
        };
      } else {
        return {
          dotCount: 60,           // Reduced even for desktop (from 80)
          connectionDistance: 120, // Slightly shorter (from 150)
          speed: 0.4,             // Slightly slower (from 0.5)
          dotOpacity: 0.5,
          lineWidth: 0.6,         // Thinner lines (from 0.8)
          maxConnections: 4       // Limit connections per dot
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
        let connectionCount = 0;
        for (let j = i + 1; j < dots.length; j++) {
          if (connectionCount >= config.maxConnections) break;
          
          const distance = Math.sqrt(
            Math.pow(dots[i].x - dots[j].x, 2) + Math.pow(dots[i].y - dots[j].y, 2)
          );
          if (distance < config.connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${(1 - distance / config.connectionDistance) * 0.6})`;
            ctx.lineWidth = config.lineWidth;
            ctx.stroke();
            connectionCount++;
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