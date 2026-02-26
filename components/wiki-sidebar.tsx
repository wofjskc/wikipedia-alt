export function WikiSidebar() {
  return (
    <nav style={{
      width: '10rem',
      minWidth: '10rem',
      fontSize: '0.8125rem',
      fontFamily: 'sans-serif',
      color: '#202122',
      padding: '0.75rem 0',
    }}>
      <SidebarSection title="">
        <SidebarLink label="Заглавная страница" />
        <SidebarLink label="Рубрикация" />
        <SidebarLink label="Указатель А — Я" />
        <SidebarLink label="Избранные статьи" />
        <SidebarLink label="Случайная статья" />
        <SidebarLink label="Текущие события" />
        <SidebarLink label="Пожертвовать" />
      </SidebarSection>

      <SidebarSection title="Участие">
        <SidebarLink label="Сообщить об ошибке" />
        <SidebarLink label="Сообщество" />
        <SidebarLink label="Форум" />
        <SidebarLink label="Свежие правки" />
        <SidebarLink label="Новые страницы" />
        <SidebarLink label="Справка" />
      </SidebarSection>

      <SidebarSection title="Инструменты">
        <SidebarLink label="Ссылки сюда" />
        <SidebarLink label="Связанные правки" />
        <SidebarLink label="Служебные страницы" />
        <SidebarLink label="Постоянная ссылка" />
        <SidebarLink label="Сведения о странице" />
        <SidebarLink label="Цитировать страницу" />
        <SidebarLink label="Получить короткий URL" />
      </SidebarSection>

      <SidebarSection title="Печать/экспорт">
        <SidebarLink label="Создать книгу" />
        <SidebarLink label="Скачать как PDF" />
        <SidebarLink label="Версия для печати" />
      </SidebarSection>

      <SidebarSection title="В других проектах">
        <SidebarLink label="Викисклад" />
      </SidebarSection>

      <SidebarSection title="На других языках">
        <SidebarLink label="English" />
        <SidebarLink label="Deutsch" />
        <SidebarLink label="Italiano" />
        <SidebarLink label="Polski" />
        <SidebarLink label="Ещё 9" />
      </SidebarSection>
    </nav>
  )
}

function SidebarSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: '0.5rem' }}>
      {title && (
        <div style={{
          fontWeight: 'normal',
          fontSize: '0.75rem',
          color: '#54595d',
          padding: '0.25rem 0.75rem',
          background: '#f8f9fa',
          borderBottom: '1px solid #c8ccd1',
          borderTop: '1px solid #c8ccd1',
        }}>
          {title}
        </div>
      )}
      <div style={{ padding: '0.25rem 0' }}>
        {children}
      </div>
    </div>
  )
}

function SidebarLink({ label }: { label: string }) {
  return (
    <a
      href="#"
      style={{
        display: 'block',
        padding: '0.15rem 0.75rem',
        color: '#0645ad',
        textDecoration: 'none',
        fontSize: '0.8125rem',
        lineHeight: '1.6',
      }}
    >
      {label}
    </a>
  )
}
