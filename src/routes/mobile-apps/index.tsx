import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { MobileAppCard } from '~/components/MobileAppCard'
import { MOBILE_APPS_ARRAY } from '~/constant/mobileApp'
import { css } from '~/styled-system/css'

export default component$(() => {
  return (
    <div class={css({ display: 'flex', flexWrap: 'wrap', gap: '45px', justifyContent: 'center' })}>
      {MOBILE_APPS_ARRAY.map((mobileApp) => (
        <MobileAppCard key={mobileApp.title} {...mobileApp} />
      ))}
    </div>
  )
})

export const head: DocumentHead = {
  title: `Mobile Apps | Zhou's Portfolio`,
  meta: [
    {
      name: 'description',
      content: `Zhou's portfolio. It contains most Zhou's personal mobile app projects, which has elegant transition and animation and great performance`,
    },
  ],
}
