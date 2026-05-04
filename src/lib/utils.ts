import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const safePlay = (videoElement: HTMLVideoElement | null) => {
  if (!videoElement) return;
  
  // Only attempt to play if the video is ready
  if (videoElement.readyState >= 2) {
    const playPromise = videoElement.play();
    if (playPromise !== undefined) {
      playPromise.catch((error) => {
        // Auto-play was prevented or interrupted
        if (error.name !== "AbortError") {
          console.debug("Video play error:", error);
        }
      });
    }
  } else {
    // If not ready, wait for it
    const handleCanPlay = () => {
      videoElement.play().catch(() => {});
      videoElement.removeEventListener('canplay', handleCanPlay);
    };
    videoElement.addEventListener('canplay', handleCanPlay);
  }
};

export const safePause = (videoElement: HTMLVideoElement | null) => {
  if (!videoElement || !videoElement.pause) return;
  try {
    videoElement.pause();
  } catch (error) {
    console.debug("Video pause error:", error);
  }
};

export const handleMediaError = (e: any) => {
  // Prevent unhandled [object Event] errors from bubbling up
  // especially for video/image loading failures
  if (e && e.nativeEvent instanceof Event) {
    console.debug("Media element error suppressed:", e);
    return;
  }
  console.error("Unhandled media error:", e);
};
