import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return <>Hello design works</>
})

export const head: DocumentHead = {
  title: `Design Works | Zhou's Portfolio`,
  meta: [
    {
      name: 'description',
      content: `Zhou's portfolio. It contains most Zhou's personal design works, which has elegant design and great user experience`,
    },
  ],
}
