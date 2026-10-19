import { useEffect, useRef, useState } from 'react';
import { gift } from './config';

type BurstHeart = { id: number; left: number; delay: number; rotation: number };

function Sparkles({ count = 26 }: { count?: number }) {
  return (
    <div className="sparkle-field" aria-hidden="true">
      {Array.from({ length: count }, (_, index) => (
        <span
          className={`sparkle sparkle-${index % 4}`}
          key={index}
          style={{
            left: `${(index * 47 + 8) % 100}%`,
            top: `${(index * 67 + 9) % 100}%`,
            animationDelay: `${(index % 8) * -0.7}s`,
            animationDuration: `${4 + (index % 5)}s`,
          }}
        />
      ))}
    </div>
  );
}

function Petals({ count = 13 }: { count?: number }) {
  return (
    <div className="petal-field" aria-hidden="true">
      {Array.from({ length: count }, (_, index) => (
        <span
          className="petal"
          key={index}
          style={{
            left: `${(index * 37 + 4) % 100}%`,
            animationDelay: `${(index % 9) * -1.4}s`,
            animationDuration: `${13 + (index % 6) * 2}s`,
            ['--petal-turn' as string]: `${(index % 2 ? 1 : -1) * (65 + index * 9)}deg`,
          }}
        />
      ))}
    </div>
  );
}

function BloomingTree({ blooming, onBloom, actionLabel = 'Chạm để hoa nở thêm một lần nữa' }: { blooming: boolean; onBloom: () => void; actionLabel?: string }) {
  return (
    <button
      className={`tree-button${blooming ? ' is-blooming' : ''}`}
      type="button"
      onClick={onBloom}
      aria-label={actionLabel}
    >
      <svg className="bloom-tree" viewBox="0 0 420 430" role="img" aria-labelledby="tree-title">
        <title id="tree-title">Cành hoa hồng phát sáng, món quà dành tặng mom</title>
        <defs>
          <radialGradient id="treeGlow">
            <stop stopColor="#f9bfd1" stopOpacity=".4" />
            <stop offset="1" stopColor="#f9bfd1" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="branch" x1=".1" y1="1" x2=".8" y2="0">
            <stop stopColor="#ad7589" />
            <stop offset="1" stopColor="#e0adbd" />
          </linearGradient>
          <linearGradient id="leaf" x1="0" x2="1" y1="1" y2="0">
            <stop stopColor="#9d8a98" />
            <stop offset="1" stopColor="#d9b6c2" />
          </linearGradient>
        </defs>
        <circle cx="220" cy="214" r="168" fill="url(#treeGlow)" className="tree-halo" />
        <g className="branch-lines" fill="none" stroke="url(#branch)" strokeLinecap="round">
          <path d="M203 405 C207 335 202 284 224 228 C244 177 278 130 325 89" strokeWidth="9" />
          <path d="M210 330 C169 285 130 247 81 220" strokeWidth="6" />
          <path d="M217 288 C268 271 309 243 354 203" strokeWidth="5" />
          <path d="M227 231 C192 188 168 150 151 101" strokeWidth="5" />
          <path d="M253 177 C290 176 328 160 360 134" strokeWidth="4" />
          <path d="M180 296 C147 310 116 331 91 357" strokeWidth="4" />
          <path d="M211 347 C252 333 284 317 312 289" strokeWidth="4" />
          <path d="M169 204 C134 191 108 166 91 137" strokeWidth="4" />
          <path d="M292 133 C282 101 283 76 292 52" strokeWidth="3" />
          <path d="M319 235 C345 242 370 241 391 230" strokeWidth="3" />
        </g>
        <g className="tree-leaves" fill="url(#leaf)">
          <ellipse cx="114" cy="202" rx="23" ry="9" transform="rotate(34 114 202)" />
          <ellipse cx="149" cy="253" rx="25" ry="9" transform="rotate(-21 149 253)" />
          <ellipse cx="174" cy="169" rx="23" ry="8" transform="rotate(47 174 169)" />
          <ellipse cx="267" cy="254" rx="23" ry="8" transform="rotate(-31 267 254)" />
          <ellipse cx="303" cy="185" rx="22" ry="8" transform="rotate(29 303 185)" />
          <ellipse cx="331" cy="151" rx="18" ry="7" transform="rotate(-23 331 151)" />
          <ellipse cx="121" cy="322" rx="22" ry="8" transform="rotate(-29 121 322)" />
          <ellipse cx="286" cy="310" rx="21" ry="7" transform="rotate(24 286 310)" />
          <ellipse cx="292" cy="83" rx="17" ry="6" transform="rotate(-48 292 83)" />
          <ellipse cx="367" cy="231" rx="17" ry="6" transform="rotate(-9 367 231)" />
        </g>
        <g className="tree-blossoms">
          <g className="blossom" transform="translate(326 90)"><circle r="16" /><circle r="8" /></g>
          <g className="blossom blossom-2" transform="translate(151 100)"><circle r="14" /><circle r="7" /></g>
          <g className="blossom blossom-3" transform="translate(361 133)"><circle r="13" /><circle r="6" /></g>
          <g className="blossom blossom-4" transform="translate(81 220)"><circle r="15" /><circle r="7" /></g>
          <g className="blossom blossom-5" transform="translate(354 204)"><circle r="14" /><circle r="6" /></g>
          <g className="blossom blossom-6" transform="translate(91 357)"><circle r="12" /><circle r="5" /></g>
          <g className="blossom blossom-7" transform="translate(312 289)"><circle r="12" /><circle r="5" /></g>
          <g className="blossom blossom-8" transform="translate(292 52)"><circle r="11" /><circle r="5" /></g>
          <g className="blossom blossom-9" transform="translate(391 230)"><circle r="11" /><circle r="5" /></g>
          <g className="blossom blossom-10" transform="translate(110 143)"><circle r="10" /><circle r="4" /></g>
          <g className="blossom blossom-11" transform="translate(174 297)"><circle r="12" /><circle r="5" /></g>
        </g>
      </svg>
      <span className="tree-caption">Một nhành hoa nhỏ, gửi Mẹ</span>
    </button>
  );
}

function Envelope({ onOpen }: { onOpen: () => void }) {
  return (
    <button className="envelope-button" type="button" onClick={onOpen} aria-label="Mở phong thư gửi mẹ">
      <span className="envelope-wrap" aria-hidden="true">
        <span className="envelope-glow" />
        <span className="envelope-card">20<span>/10</span></span>
        <span className="envelope-back" />
        <span className="envelope-front" />
        <span className="envelope-flap" />
        <span className="envelope-seal">♡</span>
        <span className="envelope-sparkle envelope-sparkle-one">✦</span>
        <span className="envelope-sparkle envelope-sparkle-two">✧</span>
      </span>
    </button>
  );
}

const transitionFlowers = ['✿', '❀', '✾', '✽', '❁'] as const;

function FlowerTransition() {
  return (
    <div className="flower-transition" role="status" aria-label="Một vòng hoa đang bay đến Mẹ" aria-live="polite">
      <div className="flower-transition-glow" aria-hidden="true" />
      {Array.from({ length: 76 }, (_, index) => {
        const x = ((index * 37 + 11) % 101) - 50;
        const y = ((index * 61 + 17) % 101) - 50;
        return (
          <span
            className={`transition-flower transition-flower-${index % 4}`}
            key={index}
            aria-hidden="true"
            style={{
              ['--flower-x' as string]: `${x}vw`,
              ['--flower-y' as string]: `${y}vh`,
              ['--flower-turn' as string]: `${(index * 47) % 360}deg`,
              ['--flower-scale' as string]: `${0.72 + (index % 5) * 0.14}`,
              ['--flower-delay' as string]: `${(index % 10) * 0.024}s`,
            }}
          >{transitionFlowers[index % transitionFlowers.length]}</span>
        );
      })}
      <p className="transition-message">Một vòng hoa yêu thương gửi Mom</p>
    </div>
  );
}

type GalleryPhoto = { src: string; alt: string; caption: string };

function GalleryCard({ photo, index }: { photo: GalleryPhoto; index: number }) {
  const [failed, setFailed] = useState(false);

  return (
    <figure className={`gallery-card gallery-card-${index % 4}`}>
      <div className="gallery-photo">
        {photo.src && !failed ? (
          <img src={photo.src} alt={photo.alt} loading={index === 0 ? 'eager' : 'lazy'} onError={() => setFailed(true)} />
        ) : (
          <div className="gallery-empty" role="img" aria-label={photo.src ? 'Ảnh chưa tải được' : `Khung chờ ảnh: ${photo.caption}`}>
            <span className="gallery-empty-flower" aria-hidden="true">✿</span>
          </div>
        )}
      </div>
      <figcaption>{photo.caption}</figcaption>
      <span className="gallery-tape" aria-hidden="true" />
    </figure>
  );
}

function App() {
  const [revealed, setRevealed] = useState(false);
  const [showBloomTransition, setShowBloomTransition] = useState(false);
  const [blooming, setBlooming] = useState(false);
  const [showNote, setShowNote] = useState(false);
  const [hugSent, setHugSent] = useState(false);
  const [musicAvailable, setMusicAvailable] = useState(false);
  const [musicPlaying, setMusicPlaying] = useState(false);
  const [hearts, setHearts] = useState<BurstHeart[]>([]);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    let active = true;
    fetch(gift.musicSrc, { method: 'HEAD' })
      .then((response) => {
        const type = response.headers.get('content-type') ?? '';
        if (active && response.ok && type.startsWith('audio/')) setMusicAvailable(true);
      })
      .catch(() => undefined);
    return () => { active = false; };
  }, []);

  const sendHeartBurst = () => {
    const id = Date.now();
    setHearts(Array.from({ length: 12 }, (_, index) => ({
      id: id + index,
      left: 12 + ((index * 23 + 7) % 76),
      delay: (index % 6) * 0.07,
      rotation: (index % 2 ? 1 : -1) * (12 + index * 5),
    })));
    window.setTimeout(() => setHearts([]), 2300);
  };

  const openGift = () => {
    if (revealed || showBloomTransition) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setRevealed(true);
      return;
    }
    setShowBloomTransition(true);
    window.setTimeout(() => {
      setShowBloomTransition(false);
      setRevealed(true);
    }, 2150);
  };
  const bloomAgain = () => {
    setBlooming(true);
    window.setTimeout(() => setBlooming(false), 1500);
  };

  const toggleMusic = async () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(gift.musicSrc);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.35;
      audioRef.current.addEventListener('ended', () => setMusicPlaying(false));
    }
    if (musicPlaying) {
      audioRef.current.pause();
      setMusicPlaying(false);
      return;
    }
    try {
      await audioRef.current.play();
      setMusicPlaying(true);
    } catch {
      setMusicPlaying(false);
      setMusicAvailable(false);
    }
  };

  return (
    <div className={`gift-site${revealed ? ' is-revealed' : ''}`}>
      <Petals count={revealed ? 11 : 8} />
      <Sparkles count={revealed ? 18 : 30} />
      {showBloomTransition && <FlowerTransition />}
      {hearts.length > 0 && (
        <div className="heart-burst" aria-hidden="true">
          {hearts.map((heart) => (
            <span
              className="burst-heart"
              key={heart.id}
              style={{ left: `${heart.left}%`, animationDelay: `${heart.delay}s`, ['--turn' as string]: `${heart.rotation}deg` }}
            >♡</span>
          ))}
        </div>
      )}

      {!revealed ? (
        <main className="intro-screen">
          <div className="night-orbit night-orbit-one" aria-hidden="true" />
          <div className="night-orbit night-orbit-two" aria-hidden="true" />
          <div className="intro-topline"><span className="mini-flower">✿</span> MỘT MÓN QUÀ NHỎ, TỪ CON GỬI MẸ <span className="mini-flower">✿</span></div>
          <div className="intro-layout">
            <div className="intro-copy">
              <p className="eyebrow">20 tháng 10 · ngày của Mẹ</p>
              <h1>Gửi Mẹ <em>Yêu</em> <span className="heading-heart">❤️</span></h1>
              <p className="intro-description">{gift.intro}</p>
              <div className="intro-rule"><span />♡<span /></div>
              <button className="primary-button" type="button" onClick={openGift}>
                Mở món quà của mẹ <span aria-hidden="true">♡</span>
              </button>
              <p className="intro-whisper">Con có một điều muốn nói với mẹ…</p>
            </div>
            <div className="intro-art">
              <div className="glow-branch"><BloomingTree blooming={false} onBloom={openGift} actionLabel="Mở món quà gửi mẹ" /></div>
              <Envelope onOpen={openGift} />
              <span className="orbit-label orbit-label-top">dành riêng cho mẹ</span>
              <span className="orbit-label orbit-label-bottom">mở ra nhé ♡</span>
            </div>
          </div>
          <div className="intro-bottom"><span>GỬI MẸ VỚI TẤT CẢ YÊU THƯƠNG</span><span className="bottom-line" /><span>20 · 10</span></div>
        </main>
      ) : (
        <>
          <header className="site-header">
            <a className="wordmark" href="#celebration" aria-label="Gửi Mẹ Yêu, về đầu trang">
              <span className="wordmark-flower">✿</span><span>gửi mẹ <em>yêu</em></span>
            </a>
            <nav className="site-nav" aria-label="Điều hướng trang">
              <a href="#letter">Lá thư</a>
              <a href="#last-wish">Lời chúc</a>
            </nav>
            {musicAvailable && (
              <button className="music-toggle" type="button" onClick={toggleMusic} aria-pressed={musicPlaying} aria-label={musicPlaying ? 'Tắt nhạc nền' : 'Bật nhạc nền'}>
                <span className={`music-bars${musicPlaying ? ' is-playing' : ''}`} aria-hidden="true"><i /><i /><i /></span>
                {musicPlaying ? 'Đang phát' : 'Bật nhạc'}
              </button>
            )}
          </header>

          <main>
            <section className="celebration-section" id="celebration" aria-labelledby="celebration-title">
              <div className="celebration-copy">
                <p className="eyebrow light-eyebrow"><span>✦</span> 20 · 10 <span>✦</span></p>
                <h2 id="celebration-title">{gift.headline.split(' 20/10')[0]}<br /><span>20/10</span></h2>
                <p className="hero-subtitle">{gift.subheadline}</p>
                <p className="hero-note">Gửi đến người phụ nữ dịu dàng nhất trong lòng con.</p>
                <a className="text-link" href="#letter">Đọc lời Ben gửi <span aria-hidden="true">↓</span></a>
              </div>
              <div className="tree-stage">
                <BloomingTree blooming={blooming} onBloom={bloomAgain} />
                <div className="stage-caption"><span />Thử chạm vào nhành hoa đê <span /></div>
                <button className="heart-button" type="button" onClick={sendHeartBurst} aria-label="Gửi mẹ những trái tim yêu thương">♡</button>
              </div>
              <div className="section-index"><span>01</span> · MÓN QUÀ DÀNH RIÊNG CHO MOM</div>
            </section>

            <section className="memory-gallery" aria-labelledby="gallery-title">
              <div className="gallery-heading">
                <p className="eyebrow">Album nhỏ của gia đình</p>
                <h2 id="gallery-title">Những khoảnh khắc khá skibidi </h2>
                <p>Mỗi tấm hình lưu giữ một chút kỷ niệm con dành cho Mẹ.</p>
              </div>
              <div className="gallery-grid">
                {gift.galleryPhotos.map((photo, index) => (
                  <GalleryCard photo={photo} index={index} key={`${index}-${photo.caption}`} />
                ))}
              </div>
            </section>

            <section className="letter-section" id="letter" aria-labelledby="letter-title">
              <div className="letter-aside">
                <p className="eyebrow">Một chút thương nhó</p>
                <h2 id="letter-title">Những điều<br />Ben <em>muốn nói</em></h2>
                <div className="letter-aside-flower" aria-hidden="true"><span>✿</span><small>♡</small></div>
                <button className={`small-envelope${showNote ? ' is-open' : ''}`} type="button" onClick={() => setShowNote(!showNote)} aria-expanded={showNote}>
                  <span className="small-envelope-icon" aria-hidden="true">✉</span>
                  {showNote ? 'Gấp lời nhắn lại' : 'Mở một lời nhắn nhỏ'}
                </button>
                {showNote && <p className="extra-note">{gift.extraNote}</p>}
              </div>

              <article className="letter-card" aria-label="Lá thư gửi mẹ">
                <div className="paper-corner paper-corner-left" aria-hidden="true">✿</div>
                <div className="paper-corner paper-corner-right" aria-hidden="true">✿</div>
                <p className="letter-date">Tháng Mười, gửi Mẹ yêu</p>
                <div className="letter-rule"><span />♡<span /></div>
                <div className="letter-copy">
                  {gift.letter.map((paragraph, index) => (
                    <p className={`letter-line letter-line-${index + 1}`} key={paragraph}>{paragraph}</p>
                  ))}
                </div>
                <div className="signature-block">
                  <span>Thương mẹ thật nhiều,</span>
                  <p className="signature">{gift.signature}</p>
                </div>
                <span className="paper-stamp" aria-hidden="true">20<br /><small>THÁNG 10</small></span>
              </article>
            </section>

            <section className="final-section" id="last-wish" aria-labelledby="final-title">
              <div className="final-flower final-flower-left" aria-hidden="true">✿</div>
              <div className="final-flower final-flower-right" aria-hidden="true">✿</div>
              <p className="eyebrow">Mãi là điều quý giá nhất</p>
              <div className="final-divider"><span />♡<span /></div>
              <h2 id="final-title">{gift.finalTitle}</h2>
              <p className="final-message">{gift.finalMessage}</p>
              <button className={`primary-button hug-button${hugSent ? ' is-hugged' : ''}`} type="button" onClick={() => { setHugSent(true); sendHeartBurst(); }}>
                {hugSent ? 'Mẹ nhận được cái ôm rồi nhé' : 'Gửi mẹ thêm một cái ôm'} <span aria-hidden="true">♡</span>
              </button>
              {hugSent && <p className="hug-response" role="status">{gift.hugMessage}</p>}
              <p className="final-signature">Với tất cả yêu thương <span>♥</span></p>
            </section>
          </main>
          <footer className="site-footer"><span>GỬI MẸ YÊU</span><span>✿</span><span>20 · 10 · 2026      Copyright by Anh Thong2ker9</span></footer>
        </>
      )}
    </div>
  );
}

export default App;
