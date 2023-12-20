import { css } from '~/styled-system/css'

export const cardCtn = css.raw({
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

export const textCtn = css.raw({
  padding: '8px 15px',
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
})

export const previewCtn = css.raw({
  position: 'absolute',
  width: '10px',
  height: '35px',
  backgroundColor: 'linear-gradient(to right, #b3d3ff, #b3f0ff)',
  right: 0,
  bottom: '28px',
  transition: 'all 0.25s ease-out',
  borderLeftRadius: '2px',
})

export const previewText = css.raw({
  position: 'absolute',
  color: '#1A3966',
  right: '25px',
  bottom: '33px',
})

export const chips = css.raw({
  backgroundColor: 'gray.200',
  padding: '2px 12px',
  borderRadius: 20,
  fontSize: 14,
  color: 'gray.600',
})

export const inProgressCtn = css.raw({
  padding: '5px 10px',
  position: 'absolute',
  top: '25px',
  right: '25px',
  backgroundColor: '#584CD9',
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  gap: 2,
  fontSize: 14,
  borderRadius: '2px',
})

export const cardImg = css.raw({
  borderBottom: '3px solid black',
  borderImage: 'linear-gradient(to right, #b3d3ff, #b3f0ff) 30',
})
