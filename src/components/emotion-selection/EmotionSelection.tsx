import type { Emotion } from '../../types/emotion';

type EmotionSelectionProps = {
  emotions: Emotion[];
  onRemove: (emotion: Emotion) => void;
  onClear: () => void;
};

export function EmotionSelection({ emotions, onRemove, onClear }: EmotionSelectionProps) {
  if (emotions.length === 0) {
    return (
      <p className="selection-empty" aria-live="polite">
        Tus emociones elegidas aparecerán aquí. Puedes elegir más de una.
      </p>
    );
  }

  return (
    <section className="selection-panel" aria-label="Emociones seleccionadas" aria-live="polite">
      <div className="selection-heading">
        <p className="eyebrow">Lo que has identificado</p>
        <button className="text-button" type="button" onClick={onClear}>
          Limpiar selección
        </button>
      </div>
      <ul className="selection-list">
        {emotions.map((emotion) => (
          <li key={emotion.id}>
            <span className="selection-dot" style={{ backgroundColor: emotion.color }} />
            <span>{emotion.label}</span>
            <button
              type="button"
              className="remove-button"
              aria-label={`Quitar ${emotion.label}`}
              onClick={() => onRemove(emotion)}
            >
              ×
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
