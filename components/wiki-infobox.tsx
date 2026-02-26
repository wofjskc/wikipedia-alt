export function WikiInfobox() {
  return (
    <table
      style={{
        float: 'right',
        clear: 'right',
        margin: '0 0 1rem 1rem',
        border: '1px solid #a2a9b1',
        background: '#f8f9fa',
        borderSpacing: 0,
        borderCollapse: 'collapse',
        fontSize: '0.875rem',
        width: '22rem',
        fontFamily: 'sans-serif',
        lineHeight: '1.5',
      }}
    >
      <tbody>
        {/* Title */}
        <tr>
          <td
            colSpan={2}
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              fontSize: '1.1rem',
              padding: '0.5rem',
              background: '#eaecf0',
              borderBottom: '1px solid #a2a9b1',
              fontFamily: "'Linux Libertine', Georgia, Times, serif",
            }}
          >
            ALT Linux
          </td>
        </tr>

        {/* Logo placeholder */}
        <tr>
          <td
            colSpan={2}
            style={{
              textAlign: 'center',
              padding: '0.75rem',
              borderBottom: '1px solid #eaecf0',
            }}
          >
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '115px',
              height: '80px',
              background: '#fff',
              border: '1px solid #c8ccd1',
              borderRadius: '2px',
              color: '#54595d',
              fontSize: '0.75rem',
            }}>
              <svg width="80" height="50" viewBox="0 0 80 50" fill="none">
                <rect width="80" height="50" rx="4" fill="#fff" />
                <text x="40" y="20" textAnchor="middle" style={{ fontSize: '10px', fill: '#c00', fontWeight: 'bold', fontFamily: 'sans-serif' }}>ALT</text>
                <text x="40" y="35" textAnchor="middle" style={{ fontSize: '8px', fill: '#333', fontFamily: 'sans-serif' }}>Linux</text>
              </svg>
            </div>
            <div style={{ fontSize: '0.75rem', color: '#54595d', marginTop: '0.25rem' }}>
              Логотип
            </div>
          </td>
        </tr>

        {/* Info rows */}
        <InfoRow label="Тип организации" value="сообщество разработчиков" />
        <InfoRow label="Основание" value="2001" />
        <InfoRow label="Расположение" value="Россия, Белоруссия, Украина, Казахстан, Румыния, Бразилия" />
        <InfoRow label="Основной продукт">
          <a href="#" style={{ color: '#0645ad', textDecoration: 'none' }}>Сизиф</a> (репозиторий)
        </InfoRow>
        <InfoRow label="Участников" value="~250 (разработчики пакетов)" />
        <InfoRow label="Сотрудничает с">
          <a href="#" style={{ color: '#0645ad', textDecoration: 'none' }}>Базальт СПО</a>
        </InfoRow>
        <InfoRow label="Сайт">
          <a href="https://www.altlinux.org" style={{ color: '#0645ad', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
            altlinux.org
          </a>
        </InfoRow>
      </tbody>
    </table>
  )
}

function InfoRow({ label, value, children }: { label: string; value?: string; children?: React.ReactNode }) {
  return (
    <tr>
      <th
        style={{
          textAlign: 'left',
          verticalAlign: 'top',
          padding: '0.35rem 0.5rem',
          background: '#eaecf0',
          borderBottom: '1px solid #eaecf0',
          fontWeight: 'normal',
          width: '40%',
          fontSize: '0.8125rem',
          color: '#202122',
        }}
      >
        {label}
      </th>
      <td
        style={{
          padding: '0.35rem 0.5rem',
          borderBottom: '1px solid #eaecf0',
          fontSize: '0.8125rem',
          color: '#202122',
        }}
      >
        {children || value}
      </td>
    </tr>
  )
}
