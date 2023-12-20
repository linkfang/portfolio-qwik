import { component$ } from '@builder.io/qwik'
import { css } from '~/styled-system/css'
import BatteryCharging from '~/media/icons/battery-charging.svg?jsx'
import type { JSX } from '@builder.io/qwik/jsx-runtime'
import { cardCtn, chips, inProgressCtn } from '~/constant/styles'

// Styles
const textCtn = css({
  padding: 25,
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
})

const previewCtn = [
  css({
    position: 'absolute',
    width: 15,
    height: '35px',
    backgroundColor: 'linear-gradient(to right, #b3d3ff, #b3f0ff)',
    right: 0,
    bottom: '25px',
    transition: 'all 0.25s ease-out',
    borderLeftRadius: '2px',
  }),
  'preview-bg',
]

const previewText = css({
  position: 'absolute',
  color: '#1A3966',
  right: '35px',
  bottom: '31px',
})

// Types
type TWebAppCardProps = {
  title: string
  techs: string[]
  description: string
  href: string
  img: JSX.Element
  isOnGoing?: boolean
}

// Components
export const WebAppCard = component$<TWebAppCardProps>(({ title, techs, description, href, img, isOnGoing }) => {
  return (
    <div class={css(cardCtn, css.raw({ width: 500, '&:hover': { '& .preview-bg': { width: 125 } } }))}>
      {img}

      <div class={textCtn}>
        <h2 class={css({ fontSize: 22, marginBottom: '-5px', color: '#2A538C' })}>{title}</h2>

        <div class={css({ display: 'flex', gap: '10px' })}>
          {techs.map((tech) => (
            <span key={tech} class={css(chips)}>
              {tech}
            </span>
          ))}
        </div>

        <p class={css({ color: 'gray.600' })}>{description}</p>

        <div class={css({ textAlign: 'right', height: '30px' })}>
          <a href={href} target="blank" rel="noopener noreferrer" class={previewCtn}></a>
          <a href={href} target="blank" rel="noopener noreferrer" class={previewText}>
            Preview
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
