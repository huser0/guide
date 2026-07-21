import { themes } from '../theme/themes.js'

const statusLabels = {
  available: { label: 'Disponível', className: 'badge-available' },
  'coming-soon': { label: 'Em breve', className: 'badge-coming' },
}

function openLink(url) {
  window.location.href = url
}

export default function GuideCard({ guide, index }) {
  const t = themes[guide.theme] || themes.neutral
  const status = statusLabels[guide.status] || statusLabels['coming-soon']
  const hasUrl = guide.status === 'available' && guide.url
  const isClickable = hasUrl

  return (
    <div
      className={`guide-card ${!isClickable ? 'disabled' : ''}`}
      onClick={() => isClickable && openLink(guide.url)}
      style={{
        '--card-gradient': t.gradient,
        '--card-accent': t.accent,
        '--card-accent-soft': t.accentSoft,
        '--card-border': t.border,
      }}
    >
      <div className="card-top">
        <div className="card-icon-wrap" style={{ background: t.gradient }}>
          <span className="card-icon">{guide.icon}</span>
        </div>
        <div className="card-header-text">
          <div className="card-title">{guide.title}</div>
          <div className="card-subtitle">{guide.subtitle}</div>
        </div>
      </div>

      <p className="card-desc">{guide.description}</p>

      <div className="card-footer">
        <div className="card-tags">
          {guide.tags.map(tag => (
            <span key={tag} className="tag">{tag}</span>
          ))}
        </div>
        <span className={`status-badge ${status.className}`}>
          {status.label}
        </span>
      </div>
    </div>
  )
}
