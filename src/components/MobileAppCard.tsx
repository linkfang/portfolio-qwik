import { component$ } from '@builder.io/qwik'
import { css } from '~/styled-system/css'
import BatteryCharging from '~/media/icons/battery-charging.svg?jsx'
import type { JSX } from '@builder.io/qwik/jsx-runtime'
import { chips, inProgressCtn, previewCtn, previewText, textCtn } from '~/constant/styles'

const cardCtn = css({
  boxShadow: '0px 0px 20px rgba(0,0,0,0.1)',
  backgroundColor: '#fff',
  width: 300,
  overflow: 'hidden',
  transition: 'all 0.25s ease-out',
  position: 'relative',
  borderRadius: '3px',
  '&:hover': {
    boxShadow: '0px 0px 25px rgba(0,0,0,0.16)',
    transform: 'translateY(-4px)',
    '& .preview-bg': { width: 90 },
  },
})

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
    <div class={cardCtn}>
      {img}

      <div class={textCtn}>
        <h2 class={css({ fontSize: 20, marginBottom: '-5px', color: '#2A538C' })}>{title}</h2>

        <div class={css({ display: 'flex', gap: '5px' })}>
          {techs.map((tech) => (
            <span key={tech} class={chips}>
              {tech}
            </span>
          ))}
        </div>

        <div class={css({ textAlign: 'right' })}>
          <a href={href} target="blank" rel="noopener noreferrer" class={[previewCtn, 'preview-bg']}></a>
          <a href={href} target="blank" rel="noopener noreferrer" class={previewText}>
            Repo
          </a>
        </div>
      </div>

      {isOnGoing && (
        <div class={inProgressCtn}>
          <BatteryCharging class={css({ width: '18px', height: '18px', borderRadius: 20 })} />
          In Progress
        </div>
      )}
    </div>
  )
})
