import { useState, useRef, useEffect } from 'react';

interface BlurImageProps {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
}

export const BlurImage = ({ src, alt, className = '', imgClassName = '' }: BlurImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: '50px' }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const img = imgRef.current;
    if (!img) return;

    if (img.complete) {
      setIsLoaded(true);
    }
  }, [isInView]);

  return (
    <div ref={containerRef} className={`relative overflow-hidden ${className}`}>
      <div
        className={`absolute inset-0 bg-stone-200 transition-opacity duration-700 ease-out ${
          isLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        style={{ willChange: 'opacity' }}
      />
      {isInView && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          className={`transition-all duration-700 ease-out ${
            isLoaded ? 'opacity-100 blur-0 scale-100' : 'opacity-0 blur-sm scale-105'
          } ${imgClassName}`}
          style={{ willChange: 'opacity, filter, transform' }}
        />
      )}
    </div>
  );
};
