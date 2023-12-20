import { css } from '~/styled-system/css'

import SelfCheckout from '~/media/self-checkout.jpg?jsx'
import FlowerDelivery from '~/media/flower-delivery.jpg?jsx'
import InstantTutor from '~/media/instant-tutor.jpg?jsx'
import GroupStudy from '~/media/group-study.jpg?jsx'

export const DESIGN_WORKS_ARRAY = [
  {
    title: 'Self-checkout',
    img: (
      <SelfCheckout
        class={css({
          borderBottom: '3px solid black',
          borderImage: 'linear-gradient(to right, #b3d3ff, #b3f0ff) 30',
          width: '801px',
        })}
        alt="Screenshot of Self-checkout system"
      />
    ),
    description: '',
    hover: '',
    href: 'https://1drv.ms/f/s!Apc5AcFl00C1y59YcKvfBo-tFaDlyA?e=VQa8g0',
  },
  {
    title: 'Group Study',
    img: (
      <GroupStudy
        class={css({
          borderBottom: '3px solid black',
          borderImage: 'linear-gradient(to right, #b3d3ff, #b3f0ff) 30',
          width: '285px',
        })}
        alt="Screenshot of Group Study"
      />
    ),
    description: '',
    hover: '',
    href: 'https://1drv.ms/u/s!Apc5AcFl00C1y6MUYC6DELK52tVEug?e=Q3mPwk',
  },
  {
    title: 'Instant Tutor',
    img: (
      <InstantTutor
        class={css({
          borderBottom: '3px solid black',
          borderImage: 'linear-gradient(to right, #b3d3ff, #b3f0ff) 30',
          width: '285px',
        })}
        alt="Screenshot of Group Study"
      />
    ),
    description: '',
    hover: '',
    href: 'https://1drv.ms/u/s!Apc5AcFl00C1y6MbEEkLab05ztJmFA?e=VwpWDU',
  },
  {
    title: 'Flower delivery',
    img: (
      <FlowerDelivery
        class={css({
          borderBottom: '3px solid black',
          borderImage: 'linear-gradient(to right, #b3d3ff, #b3f0ff) 30',
          width: '278px',
        })}
        alt="Screenshot of Group Study"
      />
    ),
    description: '',
    hover: '',
    href: 'https://1drv.ms/u/s!Apc5AcFl00C1y6MR22WNGoU7uJUVYQ?e=Q9eUiB',
  },
]
