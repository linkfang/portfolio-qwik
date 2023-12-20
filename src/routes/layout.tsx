import { component$, Slot } from '@builder.io/qwik'
import { Link, routeLoader$, useLocation } from '@builder.io/qwik-city'
import type { RequestHandler } from '@builder.io/qwik-city'
import { Footer } from '~/components/Footer'
import { css } from '~/styled-system/css'

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Control caching for this request for best performance and to reduce hosting costs:
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Always serve a cached response by default, up to a week stale
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
    maxAge: 5,
  })
}

export const useServerTimeLoader = routeLoader$(() => {
  return {
    date: new Date().toISOString(),
  }
})

// Styles
const navMenu = css({
  padding: '20px 0',
  boxShadow: '0px 0px 20px rgba(0,0,0,0.1)',
  position: 'fixed',
  left: 0,
  right: 0,
  zIndex: 10,
  backdropFilter: 'blur(8px)',
  backgroundColor: '#ffffff80',
})

const menuItemCtn = css({
  position: 'relative',
  fontSize: 22,
  fontWeight: 300,
  padding: '0 8px 2px',
  overflow: 'hidden',
  '&:hover': {
    '& i': {
      backgroundColor: '#f0f0f0',
      borderRadius: '2px',
      height: 2,
      display: 'block',
      position: 'absolute',
      width: '100%',
      left: 0,
      right: 0,
      bottom: 1,
      zIndex: -1,
      transition: 'all 0.3s ease-out',
    },
  },
})

const activeMenuItem = css({
  background: 'linear-gradient(to right, #b3d3ff, #b3f0ff)',
  borderRadius: '2px',
  height: 4,
  display: 'block',
  position: 'absolute',
  width: '100%',
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: -1,
  transition: 'all 0.3s ease-in',
})

const inactiveMenuItem = css({
  left: '-100%',
})

// Constants
const allPathNames = {
  webApps: '/web-apps/',
  mobileApps: '/mobile-apps/',
  designWorks: '/design-works/',
} as const

// Components
const MenuItem = component$<{ itemPathName: string; itemLabel: string }>(({ itemPathName, itemLabel }) => {
  const {
    url: { pathname },
  } = useLocation()

  return (
    <li class={menuItemCtn}>
      <i class={css({ left: '-100%' })}></i>
      <span class={pathname === itemPathName ? activeMenuItem : inactiveMenuItem}></span>
      <Link href={itemPathName}>{itemLabel}</Link>
    </li>
  )
})

export default component$(() => {
  return (
    <>
      <header class={css({ height: 140 })}>
        <nav class={navMenu}>
          <ul
            class={css({
              display: 'flex',
              gap: '50px',
              justifyContent: 'center',
            })}
          >
            <MenuItem itemPathName={allPathNames.webApps} itemLabel="Web Apps" />
            <MenuItem itemPathName={allPathNames.mobileApps} itemLabel="Mobile Apps" />
            <MenuItem itemPathName={allPathNames.designWorks} itemLabel="Design Works" />
          </ul>
        </nav>
      </header>
      {/* <div class={css({ backgroundImage: 'url("/bg-t.svg")' })}> */}
      <main>
        <Slot />
      </main>
      <Footer />
      {/* </div> */}
    </>
  )
})
