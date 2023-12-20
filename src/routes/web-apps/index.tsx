import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { css } from '~/styled-system/css'
import { WebAppCard } from '~/components/WebAppCard'
import { WEB_APPS_ARRAY } from '~/constant/webApp'

export default component$(() => {
  return (
    <div class={css({ display: 'flex', flexWrap: 'wrap', gap: '45px', justifyContent: 'center' })}>
      {WEB_APPS_ARRAY.map((webApp) => (
        <WebAppCard key={webApp.title} {...webApp} />
      ))}
    </div>
  )
})

export const head: DocumentHead = {
  title: `Wep Apps | Zhou's Portfolio`,
  meta: [
    {
      name: 'description',
      content: `Zhou's portfolio. It contains most Zhou's personal web app projects, which has elegant transition and animation and great performance`,
    },
  ],
}
