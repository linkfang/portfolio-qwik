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
  zIndex: 1,
  backdropFilter: 'blur(8px)',
  backgroundColor: '#ffffff80',
  '@media (max-width: 880px)': {
    position: 'absolute',
  },
})

const navMenuList = css({
  display: 'flex',
  padding: '0 60px',
  gap: '50px',
  justifyContent: 'center',
  '@media (max-width: 1100px) and (min-width: 880px)': {
    justifyContent: 'flex-start',
  },
  '@media (max-width: 660px)': {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '15px',
  },
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

const socialMenuCtn = css({
  position: 'fixed',
  right: '60px',
  top: '26px',
  display: 'flex',
  gap: '35px',
  alignItems: 'center',
  zIndex: 20,
  '@media (max-width: 880px)': {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 'unset',
    bottom: '75px',
    justifyContent: 'center',
  },
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
      <header class={css({ height: 140, '@media (max-width: 660px)': { height: 220 } })}>
        <nav class={navMenu}>
          <ul class={navMenuList}>
            <MenuItem itemPathName={allPathNames.webApps} itemLabel="Web Apps" />
            <MenuItem itemPathName={allPathNames.mobileApps} itemLabel="Mobile Apps" />
            <MenuItem itemPathName={allPathNames.designWorks} itemLabel="Design Works" />
          </ul>
        </nav>

        <ul class={socialMenuCtn}>
          <li class={menuItemCtn}>
            <a href="https://www.linkedin.com/in/linkfang/" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 16 16"
                class={css({ fill: '#6b7280', transition: 'all 0.3s ease-out', '&:hover': { fill: '#0a66c2' } })}
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401m-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4" />
              </svg>
            </a>
          </li>

          <li class={menuItemCtn}>
            <a href="https://github.com/linkfang" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 16 16"
                class={css({ fill: '#6b7280', transition: 'all 0.3s ease-out', '&:hover': { fill: '#010409' } })}
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
            </a>
          </li>

          <li class={menuItemCtn}>
            <a href="https://medium.com/@linkfang" target="_blank" rel="noopener noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="23"
                height="23"
                viewBox="0 0 16 16"
                class={css({ fill: '#6b7280', transition: 'all 0.3s ease-out', '&:hover': { fill: '#292929' } })}
              >
                <path d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8m4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236M16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795" />
              </svg>
            </a>
          </li>
        </ul>
      </header>

      <main>
        <Slot />
      </main>

      <Footer />
    </>
  )
})
