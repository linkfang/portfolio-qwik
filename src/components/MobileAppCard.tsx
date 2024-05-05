import { component$, useSignal } from '@builder.io/qwik'
import { css } from '~/styled-system/css'
import BatteryCharging from '~/media/icons/battery-charging.svg?jsx'
import { chips, inProgressCtn, previewCtn, previewText, textCtn } from '~/constant/styles'

const cardCtn = css({
  display: 'flex',
  flexDirection: 'column',
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
  },
})

type TMobileAppCardProps = {
  title: string
  techs: string[]
  description: string
  href: string
  img: string
  gif: string
  isOnGoing?: boolean
  buttonText?: string
}

export const MobileAppCard = component$<TMobileAppCardProps>(
  ({ title, techs, href, img, gif, isOnGoing, buttonText }) => {
    const showGif = useSignal(false)

    return (
      <div
        class={
          buttonText
            ? [
                cardCtn,
                css({
                  '&:hover': {
                    '& .preview-bg': { width: 95 },
                  },
                }),
              ]
            : [
                cardCtn,
                css({
                  '&:hover': {
                    '& .preview-bg': { width: 90 },
                  },
                }),
              ]
        }
        onMouseEnter$={() => (showGif.value = true)}
        onMouseLeave$={() => (showGif.value = false)}
      >
        <div
          class={css({
            height: '652px',
            overflow: 'hidden',
            borderBottom: '3px solid black',
            borderImage: 'linear-gradient(to right, #b3d3ff, #b3f0ff) 30',
          })}
        >
          <img
            width={300}
            height={652}
            src={showGif.value ? gif : img}
            alt={`${showGif.value ? 'Screen recording' : 'Screenshot'} of ${title}`}
          />
        </div>

        <div class={textCtn}>
          <h2
            class={css({
              fontSize: 20,
              marginBottom: '-5px',
              color: '#2A538C',
            })}
          >
            {title}
          </h2>

          <div
            class={css({
              display: 'flex',
              gap: '5px',
              flexWrap: 'wrap',
              alignItems: 'center',
              flex: 1,
              marginRight: 10,
            })}
          >
            {techs.map((tech) => (
              <span key={tech} class={chips}>
                {tech}
              </span>
            ))}
          </div>

          <div class={css({ textAlign: 'right' })}>
            <a
              href={href}
              target="blank"
              rel="noopener noreferrer"
              class={[previewCtn, 'preview-bg']}
              aria-label={`${title} website or repo`}
            ></a>
            <a
              href={href}
              target="blank"
              rel="noopener noreferrer"
              class={buttonText ? [previewText, css({ right: '14px' })] : [previewText, css({ right: '25px' })]}
            >
              {buttonText ?? 'Repo'}
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
  }
)
