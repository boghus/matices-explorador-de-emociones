export type Emotion = {
  id: string;
  label: string;
  color: string;
  description: string;
  level: 1;
  sourceStatus: 'pending-validation';
};

export type EmotionSelection = Emotion[];
