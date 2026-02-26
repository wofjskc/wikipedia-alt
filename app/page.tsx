import { WikiHeader } from '@/components/wiki-header'
import { WikiSidebar } from '@/components/wiki-sidebar'
import { WikiArticle } from '@/components/wiki-article'
import { WikiFooter } from '@/components/wiki-footer'

export default function Page() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: '#fff' }}>
      <WikiHeader />
      <div style={{ display: 'flex', flex: 1 }}>
        <WikiSidebar />
        <div style={{
          flex: 1,
          borderLeft: '1px solid #a7d7f9',
        }}>
          <WikiArticle />
        </div>
      </div>
      <WikiFooter />
    </div>
  )
}
