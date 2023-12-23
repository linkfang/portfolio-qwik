import { component$, useSignal } from '@builder.io/qwik'
import { css } from '~/styled-system/css'
import BatteryCharging from '~/media/icons/battery-charging.svg?jsx'
import { chips, inProgressCtn } from '~/constant/styles'

// Styles
const cardCtn = css({
  boxShadow: '0px 0px 20px rgba(0,0,0,0.1)',
  backgroundColor: '#fff',
  width: 500,
  overflow: 'hidden',
  transition: 'all 0.25s ease-out',
  position: 'relative',
  borderRadius: '3px',
  '&:hover': {
    boxShadow: '0px 0px 25px rgba(0,0,0,0.16)',
    transform: 'translateY(-4px)',
    '& .preview-bg': { width: 130 },
  },
})

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
  bottom: '30px',
})

// Types
type TWebAppCardProps = {
  title: string
  techs: string[]
  description: string
  href: string
  img: string
  gif: string
  isOnGoing?: boolean
}

// Components
export const WebAppCard = component$<TWebAppCardProps>(({ title, techs, description, href, img, gif, isOnGoing }) => {
  const showGif = useSignal(false)
  return (
    <div class={cardCtn} onMouseEnter$={() => (showGif.value = true)} onMouseLeave$={() => (showGif.value = false)}>
      <div
        class={css({
          maxHeight: 'min(calc(56.6vw - 30px), 283px)',
          overflow: 'hidden',
          borderBottom: '3px solid black',
          borderImage: 'linear-gradient(to right, #b3d3ff, #b3f0ff) 30',
        })}
      >
        <img
          width={500}
          height={283}
          src={showGif.value ? gif : img}
          alt={`${showGif.value ? 'Screen recording' : 'Screenshot'} of ${title}`}
        />
      </div>

      <div class={textCtn}>
        <h2 class={css({ fontSize: 22, marginBottom: '-5px', color: '#2A538C' })}>{title}</h2>

        <div class={css({ display: 'flex', gap: '10px', flexWrap: 'wrap' })}>
          {techs.map((tech) => (
            <span key={tech} class={chips}>
              {tech}
            </span>
          ))}
        </div>

        <p class={css({ color: 'gray.600' })}>{description}</p>

        <div class={css({ textAlign: 'right', height: '30px' })}>
          <a href={href} target="blank" rel="noopener noreferrer" class={previewCtn}></a>
          <a href={href} target="blank" rel="noopener noreferrer" class={previewText}>
            Try it out
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
