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

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
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
      for (let i = 0; i < 80; i++) {
        const radius = Math.random() * 1.5 + 1;
        dots.push(
          new Dot(
            Math.random() * width,
            Math.random() * height,
            (Math.random() - 0.5) * 0.5,
            (Math.random() - 0.5) * 0.5,
            radius,
            'rgba(255, 255, 255, 0.5)'
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
          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(255, 255, 255, ${1 - distance / 150})`;
            ctx.lineWidth = 0.8;
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