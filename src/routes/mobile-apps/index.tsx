import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return <>Hello Mobile apps</>
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
