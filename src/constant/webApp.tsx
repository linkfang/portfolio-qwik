import CheerUp from '~/media/cheer-up.jpeg?jsx'
import HansonAgrochemical from '~/media/hanson-agrochemical.jpeg?jsx'
import PchemConsulting from '~/media/pchem-consulting.jpeg?jsx'
import MovieRec from '~/media/movie-recommendation.jpeg?jsx'
import StaffManagement from '~/media/staff-management.jpeg?jsx'

import { css } from '~/styled-system/css'
import { cardImg } from './styles'

export const WEB_APPS_ARRAY = [
  {
    title: 'Staff Management Portal',
    img: <StaffManagement class={css(cardImg)} alt="Screenshot of Staff Management Portal" />,
    description:
      'Get a great idea on who are experts on required skills and are ready for next project with a glance. Add/edit individual employee or upload a csv file to create/update multiple ones.',
    hover: '',
    href: 'https://staff-management-portal.vercel.app/',
    techs: ['Next.js', 'PostgreSQL', 'Prisma', 'tRPC', 'Vercel'],
    isOnGoing: true,
  },
  {
    title: 'Cheer Up',
    img: <CheerUp class={css(cardImg)} alt="Screenshot of Cheer up" />,
    description:
      'Login with your spotify account and enjoy personalized recommendation based on your tastes. The beautiful seamless transition makes everything more enjoyable!',
    hover: '',
    href: 'https://cheerup-ten.vercel.app/',
    techs: ['React', 'Spotify API', 'Single Sign On', 'Vercel', 'Azure'],
  },
  {
    title: 'PChem Consulting Inc.',
    img: <PchemConsulting class={css(cardImg)} alt="Screenshot of PChem Consulting Inc." />,
    description:
      'Well designed UI with responsive support make it pleasant to read and use on both large and small screens .',
    hover: '',
    href: 'https://www.pchemconsulting.com/',
    techs: ['React', 'GitHub Actions', 'GitHub Pages', 'Vite'],
  },
  {
    title: 'Hanson Agrochemical Consulting',
    img: <HansonAgrochemical class={css(cardImg)} alt="Screenshot of Hanson Agrochemical Consulting" />,
    description:
      'Responsive design, multi-language support and elegant transition make it enjoyable to use for more people.',
    hover: '',
    href: 'http://www.hansonagrochemical.com/',
    techs: ['React', 'GitHub Pages', 'Multi-language'],
  },
  {
    title: 'Movie Recommendation',
    img: <MovieRec class={css(cardImg)} alt="Screenshot of Movie Recommendation" />,
    description: 'Integrated with The Movie DB API to help you find your next favorite movie and TV series!',
    hover: '',
    href: 'https://linkfang.github.io/API-Project/',
    techs: ['HTML', 'CSS', 'JavaScript', 'The Movie DB API'],
  },
]
