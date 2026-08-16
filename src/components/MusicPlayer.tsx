"use client";

import { useEffect, useRef, useState } from "react";
import { music } from "@/lib/site";

const STORAGE_KEY = "aww-music";

/**
 * Background music, split into a hook and two small pieces.
 *
 * ── Why it is shaped this way ─────────────────────────────────────────────
 * The toggle needs to appear in two different places in the header — beside
 * the menu button on phones, and inside the navigation on desktop — and only
 * one is ever visible at a time. Rendering two buttons is fine; rendering two
 * <audio> elements is not, because each would keep its own playback state and
 * they would fight. So the state lives once, in the hook, and the buttons are
 * presentational.
 *
 * ── Behaviour ─────────────────────────────────────────────────────────────
 * Deliberately silent on arrival. Nothing plays until someone asks for it —
 * people open this site at work, on a bus, or beside someone sleeping, and
 * sound they did not choose is startling rather than calming. It also means
 * we never fight the browser's autoplay blocking.
 *
 * The choice is remembered for the visit, so music continues across pages for
 * anyone who wanted it and stays off for everyone else.
 *
 * To switch it off entirely, clear the music file in the admin panel — every
 * piece below disappears on its own.
 */
export function useMusicPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [ready, setReady] = useState(false);

  // Restore a previous choice. Deferred to a microtask so we aren't calling
  // setState synchronously inside the effect, which triggers a cascading
  // render. The button fades in once this has settled.
  useEffect(() => {
    let cancelled = false;
    queueMicrotask(() => {
      if (cancelled) return;
      setReady(true);
      if (sessionStorage.getItem(STORAGE_KEY) !== "on") return;
      const el = audioRef.current;
      if (!el) return;
      el.volume = music.volume;
      el.play().then(
        () => !cancelled && setPlaying(true),
        () => !cancelled && setPlaying(false), // browser declined; stay quiet
      );
    });
    return () => {
      cancelled = true;
    };
  }, []);

  function toggle() {
    const el = audioRef.current;
    if (!el) return;
    if (playing) {
      el.pause();
      setPlaying(false);
      sessionStorage.setItem(STORAGE_KEY, "off");
    } else {
      el.volume = music.volume;
      el.play().then(
        () => {
          setPlaying(true);
          sessionStorage.setItem(STORAGE_KEY, "on");
        },
        () => setPlaying(false),
      );
    }
  }

  return { audioRef, playing, ready, toggle, enabled: Boolean(music.file) };
}

/** The audio element. Rendered exactly once, inside the header. */
export function MusicAudio({
  audioRef,
}: {
  audioRef: React.RefObject<HTMLAudioElement | null>;
}) {
  if (!music.file) return null;
  // preload="none" means the file is not fetched at all unless someone asks
  // for it — nobody pays for audio they never play.
  return <audio ref={audioRef} src={music.file} loop preload="none" />;
}

/**
 * The toggle button. Safe to render more than once; see the note above.
 *
 * Both sizes are icon-only, on purpose. A version with a "Play music" label
 * measured 150px — wider than any navigation link — and pushed the desktop
 * navigation into the logo. The icon carries the meaning; the accessible name
 * and the hover tooltip carry the words.
 *
 *   "sm"  44px — the phone and tablet control, sized to the minimum
 *                comfortable tap target
 *   "lg"  48px — the desktop control, deliberately larger than the phone one
 */
export function MusicToggle({
  playing,
  ready,
  toggle,
  size = "sm",
  className = "",
}: {
  playing: boolean;
  ready: boolean;
  toggle: () => void;
  size?: "sm" | "lg";
  className?: string;
}) {
  if (!music.file) return null;

  const large = size === "lg";
  const icon = large ? 18 : 15;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-pressed={playing}
      aria-label={playing ? music.pauseLabel : music.playLabel}
      title={music.credit}
      className={`inline-flex shrink-0 items-center justify-center rounded-full border border-white/10 bg-surface/50 text-cream-muted transition-colors hover:border-gold/40 hover:text-cream ${
        large ? "h-12 w-12" : "h-11 w-11"
      } ${ready ? "opacity-100" : "opacity-0"} ${className}`}
    >
      <span aria-hidden="true" className="text-gold">
        {playing ? (
          /* pause */
          <svg
            width={icon}
            height={icon}
            viewBox="0 0 14 14"
            fill="currentColor"
          >
            <rect x="2" y="1" width="3.5" height="12" rx="1" />
            <rect x="8.5" y="1" width="3.5" height="12" rx="1" />
          </svg>
        ) : (
          /* play */
          <svg
            width={icon}
            height={icon}
            viewBox="0 0 14 14"
            fill="currentColor"
          >
            <path d="M3 1.5v11a.75.75 0 0 0 1.14.64l9-5.5a.75.75 0 0 0 0-1.28l-9-5.5A.75.75 0 0 0 3 1.5Z" />
          </svg>
        )}
      </span>
    </button>
  );
}
