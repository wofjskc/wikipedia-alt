export function WikiFooter() {
  return (
    <footer style={{
      borderTop: '1px solid #a2a9b1',
      background: '#f8f9fa',
      padding: '0.75rem 1rem',
      fontSize: '0.75rem',
      color: '#202122',
      fontFamily: 'sans-serif',
    }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '0.5rem' }}>
        <FooterLink label="Политика конфиденциальности" />
        <FooterLink label="Описание Википедии" />
        <FooterLink label="Отказ от ответственности" />
        <FooterLink label="Свяжитесь с нами" />
        <FooterLink label="Кодекс поведения" />
        <FooterLink label="Разработчики" />
        <FooterLink label="Статистика" />
        <FooterLink label="Заявление о куки" />
        <FooterLink label="Мобильная версия" />
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <svg width="88" height="31" viewBox="0 0 88 31" fill="none">
            <rect width="88" height="31" rx="2" fill="#f8f9fa" />
            <text x="44" y="12" textAnchor="middle" style={{ fontSize: '5px', fill: '#202122', fontFamily: 'sans-serif' }}>Wikimedia</text>
            <text x="44" y="22" textAnchor="middle" style={{ fontSize: '5px', fill: '#202122', fontFamily: 'sans-serif' }}>Foundation</text>
          </svg>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <svg width="80" height="15" viewBox="0 0 80 15" fill="none">
            <rect width="80" height="15" rx="2" fill="#f8f9fa" />
            <text x="40" y="11" textAnchor="middle" style={{ fontSize: '6px', fill: '#202122', fontFamily: 'sans-serif' }}>Powered by MediaWiki</text>
          </svg>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '0.5rem', color: '#54595d', fontSize: '0.7rem' }}>
        {'Текст доступен по лицензии Creative Commons Attribution-ShareAlike; в отдельных случаях могут действовать дополнительные условия.'}
      </div>
    </footer>
  )
}

function FooterLink({ label }: { label: string }) {
  return (
    <a href="#" style={{ color: '#0645ad', textDecoration: 'none', fontSize: '0.75rem' }}>
      {label}
    </a>
  )
}
