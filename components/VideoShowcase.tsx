"use client";

import { useRef, useState } from "react";

export default function VideoShowcase() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    const v = videoRef.current;
    if (!v) return;
    setPlaying(true);
    v.play().catch(() => setPlaying(false));
  };

  return (
    <section className="section video-section" id="video">
      <div className="container">
        <div className="section-head center">
          <div className="eyebrow center reveal">A Fluxa em 60 segundos</div>
          <h2 className="section-title reveal reveal-delay-1">
            Do pedido ao cliente <span className="mark">voltando</span>.
          </h2>
          <p className="section-sub reveal reveal-delay-2">
            Veja em um minuto como o cardápio, a cozinha e a reativação pelo
            WhatsApp trabalham juntos no seu restaurante.
          </p>
        </div>

        <div className="video-frame reveal reveal-delay-2">
          <video
            ref={videoRef}
            src="/fluxa-video-lp.mp4"
            poster="/fluxa-video-capa.jpg"
            preload="none"
            playsInline
            controls={playing}
            onEnded={() => setPlaying(false)}
          />
          {!playing && (
            <button type="button" className="video-play" onClick={play} aria-label="Assistir ao vídeo da Fluxa Foods">
              <span className="video-play-btn" aria-hidden="true">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5z" />
                </svg>
              </span>
              <span className="video-play-label">Assistir · 1 min</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
