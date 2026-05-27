"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import { GalleryImage } from "@/data/portfolio";

export function ProjectGallery({ gallery }: { gallery: GalleryImage[] }) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const prev = useCallback(() => {
    setLightboxIndex((i) => {
      if (i === null) return null;
      return (i - 1 + gallery.length) % gallery.length;
    });
  }, [gallery.length]);

  const next = useCallback(() => {
    setLightboxIndex((i) => {
      if (i === null) return null;
      return (i + 1) % gallery.length;
    });
  }, [gallery.length]);

  const onClose = useCallback(() => {
    setLightboxIndex(null);
  }, []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex, prev, next, onClose]);

  return (
    <>
      <div className="grid gap-12">
        {gallery.map((img, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <button
              onClick={() => setLightboxIndex(idx)}
              className="w-full relative rounded-xl overflow-hidden border border-border shadow-md group cursor-zoom-in transition-all hover:ring-2 hover:ring-text-primary"
              style={{ aspectRatio: "16/9" }}
            >
              {img.src.endsWith(".mp4") ? (
                <video
                  src={img.src}
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  muted
                  loop
                  playsInline
                  autoPlay
                />
              ) : (
                <Image
                  src={img.src}
                  alt={img.caption}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 100vw, 900px"
                />
              )}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center pointer-events-none">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity px-4 py-2 bg-black/60 text-white rounded-full text-sm font-medium backdrop-blur-sm flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg>
                  Enlarge
                </span>
              </div>
            </button>
            <div className="mt-4 flex flex-col items-center text-center">
              <p className="text-text-secondary font-medium">{img.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center py-6 px-4"
          style={{ background: "rgba(0,0,0,0.9)", backdropFilter: "blur(8px)" }}
          onClick={onClose}
        >
          <div className="relative w-full h-full max-w-6xl flex flex-col items-center justify-center" onClick={(e) => e.stopPropagation()}>
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-50 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors flex items-center justify-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>

            {/* Main Image */}
            <div className="relative w-full h-[85vh] flex items-center justify-center">
              <div className="relative w-full h-full">
                {gallery[lightboxIndex].src.endsWith(".mp4") ? (
                  <video
                    src={gallery[lightboxIndex].src}
                    className="w-full h-full object-contain"
                    controls
                    autoPlay
                    playsInline
                  />
                ) : (
                  <Image
                    src={gallery[lightboxIndex].src}
                    alt={gallery[lightboxIndex].caption}
                    fill
                    className="object-contain"
                    sizes="100vw"
                    priority
                  />
                )}
              </div>

              {/* Navigation */}
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black/80 border border-white/20 flex items-center justify-center text-white transition-all hover:scale-110"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-black/50 hover:bg-black/80 border border-white/20 flex items-center justify-center text-white transition-all hover:scale-110"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
              </button>

              {/* Counter */}
              <div className="absolute top-4 left-4 bg-black/60 text-white/80 text-sm font-mono px-3 py-1.5 rounded-full border border-white/20">
                {lightboxIndex + 1} / {gallery.length}
              </div>
            </div>

            {/* Caption */}
            <div className="mt-4 text-center">
              <p className="text-white text-lg font-medium tracking-wide">{gallery[lightboxIndex].caption}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
