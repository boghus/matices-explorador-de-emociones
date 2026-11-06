import type { Emotion } from '../types/emotion';

/**
 * Primary labels transcribed from the visible wheel image in Alberto Barbero's
 * reference article. They are intentionally marked as pending validation.
 * Do not add child emotions until the complete source image and relationships
 * have been transcribed and checked.
 */
export const emotions: Emotion[] = [
  {
    id: 'miedo',
    label: 'Miedo',
    color: '#C9D8CF',
    description: 'Una emoción relacionada con la percepción de amenaza o peligro.',
    level: 1,
    sourceStatus: 'pending-validation',
  },
  {
    id: 'ira',
    label: 'Ira',
    color: '#E9B8AD',
    description: 'Una emoción que puede aparecer ante una frustración o un límite.',
    level: 1,
    sourceStatus: 'pending-validation',
  },
  {
    id: 'disgusto',
    label: 'Disgusto',
    color: '#D9C9E4',
    description: 'Una reacción de rechazo o aversión.',
    level: 1,
    sourceStatus: 'pending-validation',
  },
  {
    id: 'tristeza',
    label: 'Tristeza',
    color: '#BFCFE4',
    description: 'Una emoción que puede acompañar una pérdida o una experiencia difícil.',
    level: 1,
    sourceStatus: 'pending-validation',
  },
  {
    id: 'felicidad',
    label: 'Felicidad',
    color: '#F0DDA8',
    description: 'Una emoción asociada con bienestar, satisfacción o alegría.',
    level: 1,
    sourceStatus: 'pending-validation',
  },
  {
    id: 'sorpresa',
    label: 'Sorpresa',
    color: '#E9C7D8',
    description: 'Una reacción ante algo inesperado o novedoso.',
    level: 1,
    sourceStatus: 'pending-validation',
  },
];
