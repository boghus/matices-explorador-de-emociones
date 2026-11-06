import { EmotionSelection } from './components/emotion-selection/EmotionSelection';
import { EmotionWheel } from './components/emotion-wheel/EmotionWheel';
import { emotions } from './data/emotions';
import { useEmotionSelection } from './hooks/useEmotionSelection';

export default function App() {
  const { selectedEmotions, toggleEmotion, clearSelection } = useEmotionSelection();

  return (
    <main className="min-h-screen px-5 py-8 sm:px-8 sm:py-12">
      <div className="mx-auto max-w-6xl">
        <header className="mb-10 flex flex-col gap-3 sm:mb-14">
          <a className="brand-mark" href="/" aria-label="Matices, inicio">
            <span className="brand-symbol" aria-hidden="true">m.</span>
            <span>matices</span>
          </a>
          <div className="max-w-2xl">
            <p className="eyebrow mb-3">Un momento para ti</p>
            <h1 className="page-title">Ponerle nombre a lo que sientes también es una forma de escucharte.</h1>
            <p className="page-intro">
              Explora las emociones sin prisa. Puedes elegir una, varias o simplemente observar.
              No hay respuestas correctas ni tienes que llegar a ningún lugar.
            </p>
          </div>
        </header>

        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.8fr)] lg:gap-16">
          <section className="wheel-card" aria-labelledby="wheel-heading">
            <div className="mb-5 text-center">
              <p className="eyebrow">Explora libremente</p>
              <h2 id="wheel-heading" className="section-title">¿Qué emoción se acerca a lo que sientes?</h2>
            </div>
            <EmotionWheel
              emotions={emotions}
              selectedIds={selectedEmotions.map((emotion) => emotion.id)}
              onToggle={toggleEmotion}
            />
            <p className="wheel-hint">Toca una emoción para seleccionarla. Puedes elegir varias.</p>
          </section>

          <aside className="flex flex-col gap-6">
            <div className="reflection-card">
              <span className="reflection-icon" aria-hidden="true">✳</span>
              <h2 className="section-title">No necesitas tenerlo todo claro.</h2>
              <p>
                A veces una palabra basta. Otras veces necesitamos explorar un poco más.
                Quédate con lo que tenga sentido para ti.
              </p>
            </div>
            <EmotionSelection
              emotions={selectedEmotions}
              onRemove={toggleEmotion}
              onClear={clearSelection}
            />
            <p className="catalog-note">
              <strong>Sobre esta rueda:</strong> esta primera versión muestra las seis etiquetas
              principales transcritas de la imagen de referencia. El catálogo completo y sus
              relaciones siguen pendientes de validación; por eso todavía no mostramos matices
              de segundo y tercer nivel.
            </p>
          </aside>
        </div>

        <footer className="mt-14 border-t border-stone-200/80 pt-6 text-sm text-stone-500">
          Matices es un espacio de exploración personal, no una evaluación ni un diagnóstico.
        </footer>
      </div>
    </main>
  );
}
