import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'
import { DesignWorkCard } from '~/components/DesignWorkCard'
import { DESIGN_WORKS_ARRAY } from '~/constant/designWork'
import { css } from '~/styled-system/css'

export default component$(() => {
  return (
    <div class={css({ display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'center' })}>
      {DESIGN_WORKS_ARRAY.map((designWork) => (
        <DesignWorkCard key={designWork.title} {...designWork} />
      ))}
    </div>
  )
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
