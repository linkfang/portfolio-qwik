import { component$ } from '@builder.io/qwik'
import { css } from '~/styled-system/css'
import BatteryCharging from '~/media/icons/battery-charging.svg?jsx'
import type { JSX } from '@builder.io/qwik/jsx-runtime'
import { cardCtn, chips, inProgressCtn, previewCtn, previewText, textCtn } from '~/constant/styles'

type TMobileAppCardProps = {
  title: string
  techs: string[]
  description: string
  href: string
  img: JSX.Element
  isOnGoing?: boolean
}

export const MobileAppCard = component$<TMobileAppCardProps>(({ title, techs, href, img, isOnGoing }) => {
  return (
    <div class={css(cardCtn)}>
      {img}

      <div class={css(textCtn)}>
        <h2 class={css({ fontSize: 20, marginBottom: '-5px', color: '#2A538C' })}>{title}</h2>

        <div class={css({ display: 'flex', gap: '5px' })}>
          {techs.map((tech) => (
            <span key={tech} class={css(chips)}>
              {tech}
            </span>
          ))}
        </div>

        <div class={css({ textAlign: 'right' })}>
          <a href={href} target="blank" rel="noopener noreferrer" class={[css(previewCtn), 'preview-bg']}></a>
          <a href={href} target="blank" rel="noopener noreferrer" class={css(previewText)}>
            Repo
          </a>
        </div>
      </div>

      {isOnGoing && (
        <div class={css(inProgressCtn)}>
          <BatteryCharging class={css({ width: '18px', height: '18px', borderRadius: 20 })} />
          In Progress
        </div>
      )}
    </div>
  )
})
