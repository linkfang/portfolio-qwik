import { component$ } from '@builder.io/qwik'
import { css } from '~/styled-system/css'
import type { JSX } from '@builder.io/qwik/jsx-runtime'
import { cardCtn, previewCtn, previewText, textCtn } from '~/constant/styles'

type TDesignWorkCardProps = {
  title: string
  href: string
  img: JSX.Element
}

export const DesignWorkCard = component$<TDesignWorkCardProps>(({ title, href, img }) => {
  return (
    <div class={css(cardCtn)}>
      {img}

      <div class={css(textCtn)}>
        <h2 class={css({ fontSize: 20, marginBottom: '-5px', color: '#2A538C' })}>{title}</h2>

        <div class={css({ textAlign: 'right' })}>
          <a href={href} target="blank" rel="noopener noreferrer" class={previewCtn}></a>
          <a href={href} target="blank" rel="noopener noreferrer" class={css(previewText)}>
            Repo
          </a>
        </div>
      </div>
    </div>
  )
})
