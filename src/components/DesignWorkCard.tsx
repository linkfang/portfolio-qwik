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
    <div class={css(cardCtn, css.raw({ width: 'auto' }))}>
      {img}

      <div class={css(textCtn, css.raw({ padding: '15px 20px' }))}>
        <h2 class={css({ fontSize: 20, color: '#2A538C' })}>{title}</h2>
      </div>
      <div class={css({ textAlign: 'right' })}>
        <a
          href={href}
          target="blank"
          rel="noopener noreferrer"
          class={[css(previewCtn, css.raw({ bottom: '13px' })), 'preview-bg']}
        ></a>
        <a href={href} target="blank" rel="noopener noreferrer" class={css(previewText, css.raw({ bottom: '18px' }))}>
          View
        </a>
      </div>
    </div>
  )
})