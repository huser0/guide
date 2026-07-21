import { useState, useEffect } from 'react'
import Header from './components/Header.jsx'
import GuideCard from './components/GuideCard.jsx'

import guidesData from './data/guides.json'

function App() {
  const [guides, setGuides] = useState([])

  useEffect(() => {
    setGuides(guidesData)
  }, [])

  const available = guides.filter(g => g.status === 'available')
  const coming = guides.filter(g => g.status !== 'available')

  return (
    <div className="app-layout">
      <Header />

      <main className="main-area">
        <section className="hero">
          <div className="hero-tag">// Estude. Pratique. Certifique-se.</div>
          <h1 className="hero-h1">
            Seus guias de estudo <span>em um só lugar</span>
          </h1>
          <p className="hero-sub">
            Catálogo central de guias interativos. Clique em um card para acessar o
            guia completo — cada um é um projeto independente com seu próprio deploy.
          </p>
        </section>

        {available.length > 0 && (
          <section className="guides-section">
            <h2 className="section-label">Disponíveis</h2>
            <div className="guides-grid">
              {available.map((g, i) => (
                <GuideCard key={g.id} guide={g} index={i} />
              ))}
            </div>
          </section>
        )}

        {coming.length > 0 && (
          <section className="guides-section">
            <h2 className="section-label">Em breve</h2>
            <div className="guides-grid">
              {coming.map((g, i) => (
                <GuideCard key={g.id} guide={g} index={i} />
              ))}
            </div>
          </section>
        )}

        {guides.length === 0 && (
          <div className="empty-state">
            <p>Nenhum guia cadastrado ainda.</p>
            <p className="empty-hint">Adicione guias em <code>src/data/guides.json</code></p>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
