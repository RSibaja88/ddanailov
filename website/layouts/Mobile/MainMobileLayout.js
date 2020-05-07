import styled from 'styled-components'

import MainFooter from '@ddanailov/components/MainFooter'
import MobileSidebar from '@ddanailov/components/Sidebar/Mobille'
import MobileMenu from '@ddanailov/components/Menu/Mobile'

const PageHolder = styled.section`
  position: relative;

  display: block;
  padding: 0 0.75rem;
  padding-bottom: 70px;
`

const MainMobileLayout = Page => () => (
  <>
    <MobileSidebar />

    <MobileMenu />

    <PageHolder>
      <Page />

      <MainFooter />
    </PageHolder>
  </>
)

export default MainMobileLayout
