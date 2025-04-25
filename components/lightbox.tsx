"use client";

import { useEffect } from 'react';

export default function Lightbox() {
  useEffect(() => {
    let images: string[] = [];
    let currentIndex = 0;

    const initLightbox = () => {
      document.querySelectorAll(".lightbox-trigger").forEach((trigger) => {
        trigger.addEventListener("click", function(this: HTMLElement, e: Event) {
          e.preventDefault();
          images = Array.from(document.querySelectorAll(".lightbox-trigger img")).map(img => (img as HTMLImageElement).dataset.full || (img as HTMLImageElement).src);
          currentIndex = Array.from(document.querySelectorAll(".lightbox-trigger")).indexOf(this);
          updateLightbox();
        });
      });
    };

    function updateLightbox() {
      const lightbox = document.getElementById("lightbox") as HTMLElement;
      const lightboxImg = document.getElementById("lightbox-img") as HTMLImageElement;
      const prevChevron = document.getElementById("prev") as HTMLElement;
      const nextChevron = document.getElementById("next") as HTMLElement;

      lightboxImg.src = images[currentIndex];
      lightbox.style.display = "block";

      prevChevron.style.display = currentIndex === 0 ? "none" : "flex";
      nextChevron.style.display = currentIndex === images.length - 1 ? "none" : "flex";
    }

    const setupEventListeners = () => {
      const prevBtn = document.getElementById("prev");
      const nextBtn = document.getElementById("next");
      const closeBtn = document.querySelector(".close");
      const lightbox = document.getElementById("lightbox");

      if (prevBtn) {
        prevBtn.addEventListener("click", function() {
          if (currentIndex > 0) {
            currentIndex--;
            updateLightbox();
          }
        });
      }

      if (nextBtn) {
        nextBtn.addEventListener("click", function() {
          if (currentIndex < images.length - 1) {
            currentIndex++;
            updateLightbox();
          }
        });
      }

      if (closeBtn) {
        closeBtn.addEventListener("click", function() {
          if (lightbox) {
            lightbox.style.display = "none";
          }
        });
      }

      if (lightbox) {
        lightbox.addEventListener("click", function(this: HTMLElement, e: Event) {
          if (e.target === this) {
            this.style.display = "none";
          }
        });
      }
    };

    // Initialize when the component mounts
    initLightbox();
    setupEventListeners();

    // Cleanup when component unmounts
    return () => {
      document.querySelectorAll(".lightbox-trigger").forEach((trigger) => {
        trigger.removeEventListener("click", () => {});
      });
      
      const prevBtn = document.getElementById("prev");
      const nextBtn = document.getElementById("next");
      const closeBtn = document.querySelector(".close");
      const lightbox = document.getElementById("lightbox");

      if (prevBtn) prevBtn.removeEventListener("click", () => {});
      if (nextBtn) nextBtn.removeEventListener("click", () => {});
      if (closeBtn) closeBtn.removeEventListener("click", () => {});
      if (lightbox) lightbox.removeEventListener("click", () => {});
    };
  }, []);

  return (
    <div id="lightbox" className="lightbox" style={{ overflow: 'hidden' }}>
      <span className="close">&times;</span>
      <span id="prev" className="chevron left">&#10094;</span>
      <img 
        className="lightbox-content" 
        id="lightbox-img" 
        alt="Lightbox content" 
        style={{
          maxWidth: '90vw',
          maxHeight: '90vh',
          width: 'auto',
          height: 'auto',
          margin: 'auto',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          objectFit: 'contain'
        }}
      />
      <span id="next" className="chevron right">&#10095;</span>
    </div>
  );
} 