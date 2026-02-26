import { WikiInfobox } from './wiki-infobox'

export function WikiArticle() {
  return (
    <article style={{
      flex: 1,
      padding: '1rem 1.5rem',
      fontFamily: "'Linux Libertine', Georgia, Times, serif",
      fontSize: '0.875rem',
      lineHeight: '1.6',
      color: '#202122',
      maxWidth: '960px',
    }}>
      {/* Title */}
      <h1 style={{
        fontSize: '1.8rem',
        fontWeight: 'normal',
        borderBottom: '1px solid #a2a9b1',
        paddingBottom: '0.25rem',
        marginBottom: '0.5rem',
        fontFamily: "'Linux Libertine', Georgia, Times, serif",
      }}>
        ALT Linux Team
      </h1>

      {/* Categories line */}
      <div style={{ fontSize: '0.75rem', color: '#54595d', marginBottom: '1rem', fontFamily: 'sans-serif' }}>
        {'Материал из Википедии — свободной энциклопедии'}
      </div>

      <WikiInfobox />

      {/* Intro */}
      <p style={{ marginBottom: '0.75rem' }}>
        <b>ALT Linux Team</b> (ALT — <WikiLink>рекурсивная аббревиатура</WikiLink>, команда ALT Linux) — сообщество,
        объединяющее разработчиков <WikiLink>свободного программного обеспечения</WikiLink>, работающих над проектами,
        связанными с репозиторием <WikiLink>Сизиф</WikiLink> и <WikiLink>дистрибутивами ALT Linux</WikiLink>.
      </p>

      <p style={{ marginBottom: '0.75rem' }}>
        В него входят разработчики из <WikiLink>России</WikiLink>, <WikiLink>Белоруссии</WikiLink>,{' '}
        <WikiLink>Украины</WikiLink>, <WikiLink>Казахстана</WikiLink>, <WikiLink>Румынии</WikiLink> и{' '}
        <WikiLink>Бразилии</WikiLink>. Команда ALT, занимающаяся сборкой и поддержкой пакетов в репозитории,
        насчитывает около 250 человек. Сообщество пользователей — более тысячи человек в телеграм-канале,
        более 15 тысяч зарегистрировавшихся на форуме. Команда тесно сотрудничает с российской компанией
        {' '}<WikiLink>{'«'}Базальт СПО{'»'}</WikiLink> (ранее — <WikiLink>{'«'}Альт Линукс{'»'}</WikiLink>).
      </p>

      {/* Table of contents */}
      <TableOfContents />

      {/* Section: Разработка */}
      <SectionHeading id="development" number={1} title="Разработка" />

      <p style={{ marginBottom: '0.75rem' }}>
        Основным объектом и одновременно инструментом разработки сообщества является репозиторий программных продуктов{' '}
        <WikiLink>Сизиф</WikiLink> — как само хранилище, так и система сборки, проверки качества и публикации пакетов
        (т. н. {' '}<WikiLink>{'«'}сборочница{'»'}</WikiLink>). Все собственные разработки сообщества и многие персональные проекты
        участников ALT также <WikiLink>ведутся в рамках репозитория</WikiLink> и сборочницы, т. к. это позволяет
        воспользоваться её техническими преимуществами и поместить пакет в дистрибутив.
      </p>

      <p style={{ marginBottom: '0.75rem' }}>
        На основе <WikiLink>Сизифа</WikiLink> выпускаются т. н. {' '}<WikiLink>{'«'}регулярные сборки{'»'}</WikiLink> — установочные
        образы системы в различных конфигурациях (от {'«'}пустой системы{'»'} и минимального образа до сервера разработки и
        всевозможных десктоп-окружений), для нескольких аппаратных архитектур (на время правки — 15 вариантов
        конфигураций, некоторые из них — для пяти архитектур: i586, x86_64, aarch64, armh и mipsel). На основе последней
        стабильной ветки репозитория ({'«'}платформы{'»'}) выпускаются аналогичные по свойствам сборки —{' '}
        <WikiLink>{'«'}стартовые наборы{'»'}</WikiLink>. {'«'}Регулярки{'»'} и {'«'}стартеркиты{'»'} выходят в полуавтоматическом режиме,
        предназначены для ознакомления, своевременного тестирования процедуры сборки дистрибутивов и — при надлежащем
        опыте — развёртывания операционных систем. Полноценными дистрибутивами они не являются. На базе той же последней
        стабильной платформы выпускает свои дистрибутивы компания {'«'}Базальт СПО{'»'}.
      </p>

      <p style={{ marginBottom: '0.75rem' }}>
        Собственные разработки ALT Linux Team распространяются под <WikiLink>свободными лицензиями</WikiLink>. Среди его
        участников есть и разработчики основных компонентов <WikiLink>Linux</WikiLink>.
      </p>

      {/* Section: История */}
      <SectionHeading id="history" number={2} title="История" />

      <p style={{ marginBottom: '0.75rem' }}>
        Сообщество ALT Linux Team образовалось в <WikiLink>Москве</WikiLink>, в <WikiLink>2001</WikiLink> году из проекта
        IPLabs Linux Team. Помимо основной задачи — развития репозитория — ALT, тесно взаимодействуя и в известной степени
        пересекаясь с сообществом вокруг сайта <WikiLink>Linux.Ru.Net</WikiLink>{' '}
        <WikiLink>(архивировано 2010 г.)</WikiLink>, команда занималась популяризацией Linux,{' '}
        <WikiLink>кроссплатформенного</WikiLink> свободного ПО, и <WikiLink>свободного лицензирования</WikiLink> в целом.
        Выпускались сборники со свободно распространяемой музыкой, проводился подмосковный слёт{' '}
        <WikiLink>LinuxFest</WikiLink>, выпускался {'«'}коробочный{'»'} сборник программ для Windows{' '}
        {'«'}<WikiLink>Свободный офис</WikiLink>{'»'} и т. п.
      </p>

      <p style={{ marginBottom: '0.75rem' }}>
        В настоящее время под эгидой сообщества продолжают выходить <WikiLink>книги</WikiLink> под свободными лицензиями.
      </p>

      {/* Section: См. также */}
      <SectionHeading id="see-also" number={3} title="См. также" />

      <ul style={{ marginLeft: '1.5rem', marginBottom: '0.75rem', listStyleType: 'disc' }}>
        <li><WikiLink>Сизиф (репозиторий)</WikiLink></li>
        <li><WikiLink>ALT Linux (дистрибутив Linux)</WikiLink></li>
      </ul>

      {/* Section: Примечания */}
      <SectionHeading id="notes" number={4} title="Примечания" />

      <div style={{ fontSize: '0.8125rem', fontFamily: 'sans-serif' }}>
        <ol style={{ marginLeft: '1.5rem', marginBottom: '0.75rem' }}>
          <li style={{ marginBottom: '0.25rem' }}>
            <span style={{ verticalAlign: 'super', fontSize: '0.7rem', color: '#0645ad' }}>{'^ '}</span>
            {'Страница сообщества ALT Linux Team на ALT Linux Wiki'}
          </li>
          <li style={{ marginBottom: '0.25rem' }}>
            <span style={{ verticalAlign: 'super', fontSize: '0.7rem', color: '#0645ad' }}>{'^ '}</span>
            {'Официальный сайт ALT Linux'}
          </li>
        </ol>
      </div>

      {/* Section: Ссылки */}
      <SectionHeading id="links" number={5} title="Ссылки" />

      <ul style={{ marginLeft: '1.5rem', marginBottom: '0.75rem', listStyleType: 'disc', fontSize: '0.8125rem', fontFamily: 'sans-serif' }}>
        <li style={{ marginBottom: '0.25rem' }}>
          <a href="https://www.altlinux.org" style={{ color: '#0645ad', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
            Официальный сайт ALT Linux
          </a>
        </li>
        <li style={{ marginBottom: '0.25rem' }}>
          <a href="https://packages.altlinux.org" style={{ color: '#0645ad', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
            Репозиторий Сизиф
          </a>
        </li>
        <li style={{ marginBottom: '0.25rem' }}>
          <a href="https://en.altlinux.org" style={{ color: '#0645ad', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
            ALT Linux Wiki (англ.)
          </a>
        </li>
        <li style={{ marginBottom: '0.25rem' }}>
          <a href="https://bugzilla.altlinux.org" style={{ color: '#0645ad', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
            Система отслеживания ошибок ALT Linux
          </a>
        </li>
        <li style={{ marginBottom: '0.25rem' }}>
          <a href="https://lists.altlinux.org" style={{ color: '#0645ad', textDecoration: 'none' }} target="_blank" rel="noopener noreferrer">
            Списки рассылки ALT Linux
          </a>
        </li>
      </ul>

      {/* Categories */}
      <div style={{
        marginTop: '2rem',
        padding: '0.5rem',
        borderTop: '1px solid #a2a9b1',
        fontSize: '0.8125rem',
        fontFamily: 'sans-serif',
      }}>
        <span style={{ color: '#54595d' }}>Категория: </span>
        <a href="#" style={{
          display: 'inline-block',
          background: '#f8f9fa',
          border: '1px solid #a2a9b1',
          borderRadius: '2px',
          padding: '0.1rem 0.35rem',
          color: '#0645ad',
          textDecoration: 'none',
          fontSize: '0.75rem',
        }}>
          ALT Linux
        </a>
      </div>
    </article>
  )
}

function WikiLink({ children }: { children: React.ReactNode }) {
  return (
    <a href="#" style={{ color: '#0645ad', textDecoration: 'none' }}>
      {children}
    </a>
  )
}

function SectionHeading({ id, number, title }: { id: string; number: number; title: string }) {
  return (
    <h2
      id={id}
      style={{
        fontSize: '1.35rem',
        fontWeight: 'normal',
        borderBottom: '1px solid #a2a9b1',
        paddingBottom: '0.2rem',
        marginTop: '1.5rem',
        marginBottom: '0.5rem',
        fontFamily: "'Linux Libertine', Georgia, Times, serif",
      }}
    >
      <span style={{ display: 'none' }}>{number}</span>
      <span>{title}</span>
      <span style={{ fontSize: '0.75rem', fontFamily: 'sans-serif', marginLeft: '0.5rem', fontWeight: 'normal' }}>
        <a href="#" style={{ color: '#54595d', textDecoration: 'none' }}>[править | править код]</a>
      </span>
    </h2>
  )
}

function TableOfContents() {
  return (
    <div style={{
      display: 'inline-block',
      border: '1px solid #a2a9b1',
      background: '#f8f9fa',
      padding: '0.5rem 1rem',
      marginBottom: '1rem',
      marginTop: '0.5rem',
      fontSize: '0.8125rem',
      fontFamily: 'sans-serif',
    }}>
      <div style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '0.35rem' }}>Содержание</div>
      <ol style={{ marginLeft: '1.25rem', lineHeight: '1.8' }}>
        <li>
          <a href="#development" style={{ color: '#0645ad', textDecoration: 'none' }}>Разработка</a>
        </li>
        <li>
          <a href="#history" style={{ color: '#0645ad', textDecoration: 'none' }}>История</a>
        </li>
        <li>
          <a href="#see-also" style={{ color: '#0645ad', textDecoration: 'none' }}>См. также</a>
        </li>
        <li>
          <a href="#notes" style={{ color: '#0645ad', textDecoration: 'none' }}>Примечания</a>
        </li>
        <li>
          <a href="#links" style={{ color: '#0645ad', textDecoration: 'none' }}>Ссылки</a>
        </li>
      </ol>
    </div>
  )
}
