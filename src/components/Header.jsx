export default function Header({ theme, toggleTheme }) {
  return (
    <header className="app-header">
      <div className="header-left">
        <span className="logo-hub">G</span>
        <span className="logo-text">Study Guides Hub</span>
      </div>
      <div className="header-sep" />
      <span className="header-subtitle">Catálogo de guias</span>
      <div className="header-right">
        <button className="theme-btn" onClick={toggleTheme} title="Alternar tema">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
        <span className="hub-badge">Em constante expansão</span>
      </div>
    </header>
  )
}
