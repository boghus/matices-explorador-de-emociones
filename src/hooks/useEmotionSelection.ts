import { useState } from 'react';
import type { Emotion } from '../types/emotion';

export function useEmotionSelection() {
  const [selectedEmotions, setSelectedEmotions] = useState<Emotion[]>([]);

  function toggleEmotion(emotion: Emotion): void {
    setSelectedEmotions((current) =>
      current.some((item) => item.id === emotion.id)
        ? current.filter((item) => item.id !== emotion.id)
        : [...current, emotion],
    );
  }

  function clearSelection(): void {
    setSelectedEmotions([]);
  }

  return { selectedEmotions, toggleEmotion, clearSelection };
}
