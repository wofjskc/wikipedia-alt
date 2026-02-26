export function WikiHeader() {
  return (
    <header>
      {/* Top personal bar */}
      <div style={{ background: '#fff', borderBottom: '1px solid #a7d7f9', fontSize: '0.75rem', padding: '0.25rem 1rem', display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', color: '#202122' }}>
        <a href="#" style={{ color: '#0645ad', textDecoration: 'none' }}>Создать учётную запись</a>
        <a href="#" style={{ color: '#0645ad', textDecoration: 'none' }}>Войти</a>
      </div>

      {/* Main header bar */}
      <div style={{ background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.5rem 1rem', borderBottom: '1px solid #a7d7f9' }}>
        {/* Logo area */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <WikipediaLogo />
          <div>
            <div style={{ fontSize: '1.1rem', fontFamily: "'Linux Libertine', Georgia, Times, serif", letterSpacing: '1px' }}>
              Википедия
            </div>
            <div style={{ fontSize: '0.7rem', color: '#54595d' }}>
              Свободная энциклопедия
            </div>
          </div>
        </div>

        {/* Search bar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
          <div style={{ position: 'relative' }}>
            <input
              type="text"
              placeholder="Поиск в Википедии"
              style={{
                border: '1px solid #a2a9b1',
                borderRadius: '2px',
                padding: '0.35rem 0.5rem',
                fontSize: '0.8125rem',
                width: '280px',
                outline: 'none',
                fontFamily: 'sans-serif',
              }}
            />
          </div>
          <button
            style={{
              background: '#f8f9fa',
              border: '1px solid #a2a9b1',
              borderRadius: '2px',
              padding: '0.35rem 0.75rem',
              fontSize: '0.8125rem',
              cursor: 'pointer',
              fontFamily: 'sans-serif',
            }}
          >
            Найти
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ background: '#fff', display: 'flex', borderBottom: '1px solid #a7d7f9', paddingLeft: '11rem' }}>
        <TabItem label="Статья" active />
        <TabItem label="Обсуждение" />
        <div style={{ flex: 1 }} />
        <TabItem label="Читать" active />
        <TabItem label="Править" />
        <TabItem label="Править код" />
        <TabItem label="История" />
      </div>
    </header>
  )
}

function TabItem({ label, active = false }: { label: string; active?: boolean }) {
  return (
    <div
      style={{
        padding: '0.5rem 0.75rem',
        fontSize: '0.8125rem',
        color: active ? '#202122' : '#0645ad',
        borderBottom: active ? '2px solid #36c' : '2px solid transparent',
        cursor: 'pointer',
        fontFamily: 'sans-serif',
      }}
    >
      {label}
    </div>
  )
}

function WikipediaLogo() {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="25" cy="25" r="24" stroke="#000" strokeWidth="0.5" fill="none" />
      <g transform="translate(10, 8)" style={{ fontSize: '6px', fontFamily: 'serif', fill: '#000' }}>
        <text x="0" y="6">{'W'}</text>
        <text x="7" y="10">{'И'}</text>
        <text x="1" y="15">{'К'}</text>
        <text x="10" y="6">{'И'}</text>
        <text x="16" y="10">{'П'}</text>
        <text x="22" y="6">{'Е'}</text>
        <text x="14" y="15">{'Д'}</text>
        <text x="21" y="13">{'И'}</text>
        <text x="26" y="10">{'Я'}</text>
      </g>
      <text x="25" y="36" textAnchor="middle" style={{ fontSize: '5px', fontFamily: 'serif', fill: '#000' }}>
        {'WIKIPEDIA'}
      </text>
      {/* Puzzle-piece globe shape */}
      <g transform="translate(13, 10)">
        <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10z" fill="none" stroke="#ccc" strokeWidth="0.3" />
      </g>
    </svg>
  )
}
