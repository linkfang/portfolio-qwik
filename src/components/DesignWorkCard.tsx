import { component$, useSignal } from '@builder.io/qwik'
import { css } from '~/styled-system/css'

const cardCtn = css({
  boxShadow: '0px 0px 20px rgba(0,0,0,0.1)',
  backgroundColor: '#fff',
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

const textCtn = css({
  padding: '15px 20px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
})

const previewCtn = css({
  position: 'absolute',
  width: '10px',
  height: '35px',
  backgroundColor: 'linear-gradient(to right, #b3d3ff, #b3f0ff)',
  right: 0,
  bottom: '13px',
  transition: 'all 0.25s ease-out',
  borderLeftRadius: '2px',
})

const previewText = css({
  position: 'absolute',
  color: '#1A3966',
  right: '25px',
  bottom: '18px',
})

type TDesignWorkCardProps = {
  title: string
  href: string
  img: string
  gif: string
  width: number
  height: number
}

export const DesignWorkCard = component$<TDesignWorkCardProps>(({ title, href, img, gif, width, height }) => {
  const showGif = useSignal(false)

  return (
    <div class={cardCtn} onMouseEnter$={() => (showGif.value = true)} onMouseLeave$={() => (showGif.value = false)}>
      <img
        class={css({ borderBottom: '3px solid black', borderImage: 'linear-gradient(to right, #b3d3ff, #b3f0ff) 30' })}
        width={width}
        height={height}
        src={showGif.value ? gif : img}
        alt={`${showGif.value ? 'Screen recording' : 'Screenshot'} of ${title}`}
      />

      <div class={textCtn}>
        <h2 class={css({ fontSize: 20, color: '#2A538C' })}>{title}</h2>
      </div>

      <div class={css({ textAlign: 'right' })}>
        <a href={href} target="blank" rel="noopener noreferrer" class={[previewCtn, 'preview-bg']}></a>
        <a href={href} target="blank" rel="noopener noreferrer" class={previewText}>
          View
        </a>
      </div>
    </div>
  )
})
