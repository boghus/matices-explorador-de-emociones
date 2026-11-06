import type { KeyboardEvent } from 'react';
import type { Emotion } from '../../types/emotion';

type EmotionWheelProps = {
  emotions: Emotion[];
  selectedIds: string[];
  onToggle: (emotion: Emotion) => void;
};

const CENTER = 200;
const OUTER_RADIUS = 174;
const INNER_RADIUS = 72;

function polarPoint(radius: number, angle: number): { x: number; y: number } {
  const radians = ((angle - 90) * Math.PI) / 180;
  return {
    x: CENTER + radius * Math.cos(radians),
    y: CENTER + radius * Math.sin(radians),
  };
}

function sectorPath(startAngle: number, endAngle: number): string {
  const outerStart = polarPoint(OUTER_RADIUS, startAngle);
  const outerEnd = polarPoint(OUTER_RADIUS, endAngle);
  const innerEnd = polarPoint(INNER_RADIUS, endAngle);
  const innerStart = polarPoint(INNER_RADIUS, startAngle);
  const largeArc = endAngle - startAngle > 180 ? 1 : 0;

  return [
    `M ${outerStart.x} ${outerStart.y}`,
    `A ${OUTER_RADIUS} ${OUTER_RADIUS} 0 ${largeArc} 1 ${outerEnd.x} ${outerEnd.y}`,
    `L ${innerEnd.x} ${innerEnd.y}`,
    `A ${INNER_RADIUS} ${INNER_RADIUS} 0 ${largeArc} 0 ${innerStart.x} ${innerStart.y}`,
    'Z',
  ].join(' ');
}

export function EmotionWheel({ emotions, selectedIds, onToggle }: EmotionWheelProps) {
  const segmentAngle = 360 / emotions.length;

  function handleKeyDown(event: KeyboardEvent<SVGPathElement>, emotion: Emotion): void {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onToggle(emotion);
    }
  }

  return (
    <svg
      className="emotion-wheel"
      viewBox="0 0 400 400"
      role="group"
      aria-label="Rueda de emociones. Selecciona una o varias emociones."
    >
      <circle cx={CENTER} cy={CENTER} r={OUTER_RADIUS + 8} className="wheel-outline" />
      {emotions.map((emotion, index) => {
        const startAngle = index * segmentAngle;
        const endAngle = startAngle + segmentAngle;
        const middleAngle = startAngle + segmentAngle / 2;
        const labelPoint = polarPoint(124, middleAngle);
        const isSelected = selectedIds.includes(emotion.id);

        return (
          <g key={emotion.id}>
            <path
              d={sectorPath(startAngle + 1.2, endAngle - 1.2)}
              fill={emotion.color}
              className={`wheel-sector ${isSelected ? 'is-selected' : ''}`}
              role="button"
              tabIndex={0}
              aria-label={emotion.label}
              aria-pressed={isSelected}
              onClick={() => onToggle(emotion)}
              onKeyDown={(event) => handleKeyDown(event, emotion)}
            />
            <text
              x={labelPoint.x}
              y={labelPoint.y}
              className="wheel-label"
              textAnchor="middle"
              dominantBaseline="middle"
              pointerEvents="none"
            >
              {emotion.label}
            </text>
          </g>
        );
      })}
      <circle cx={CENTER} cy={CENTER} r={INNER_RADIUS - 5} className="wheel-center" />
      <text x={CENTER} y={CENTER - 8} className="wheel-center-title" textAnchor="middle">
        ¿Qué sientes?
      </text>
      <text x={CENTER} y={CENTER + 14} className="wheel-center-caption" textAnchor="middle">
        Explora a tu ritmo
      </text>
    </svg>
  );
}
