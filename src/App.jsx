import { useState, useEffect, useMemo } from 'react'
import Header from './components/Header.jsx'
import GuideCard from './components/GuideCard.jsx'

import guidesData from './data/guides.json'

function App() {
  const [guides, setGuides] = useState([])
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light')
  const [search, setSearch] = useState('')

  useEffect(() => {
    setGuides(guidesData)
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  function toggleTheme() {
    setTheme(t => t === 'light' ? 'dark' : 'light')
  }

  const filteredGuides = useMemo(() => {
    if (!search.trim()) return guides
    const q = search.toLowerCase()
    return guides.filter(g =>
      g.title.toLowerCase().includes(q) ||
      g.description.toLowerCase().includes(q) ||
      g.tags.some(t => t.toLowerCase().includes(q))
    )
  }, [guides, search])

  const available = filteredGuides.filter(g => g.status === 'available')
  const coming = filteredGuides.filter(g => g.status !== 'available')

  return (
    <div className="app-layout">
      <Header theme={theme} toggleTheme={toggleTheme} />

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

        <div className="hub-search">
          <input
            className="hub-search-input"
            type="text"
            placeholder="Buscar guia por nome, descrição ou tag…"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </div>

        {available.length > 0 && (
          <section className="guides-section">
            <h2 className="section-label">Disponíveis · {available.length}</h2>
            <div className="guides-grid">
              {available.map((g, i) => (
                <GuideCard key={g.id} guide={g} index={i} />
              ))}
            </div>
          </section>
        )}

        {coming.length > 0 && (
          <section className="guides-section">
            <h2 className="section-label">Em breve · {coming.length}</h2>
            <div className="guides-grid">
              {coming.map((g, i) => (
                <GuideCard key={g.id} guide={g} index={i} />
              ))}
            </div>
          </section>
        )}

        {filteredGuides.length === 0 && guides.length > 0 && (
          <div className="empty-state">
            <p>Nenhum guia encontrado para "<strong>{search}</strong>"</p>
          </div>
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
