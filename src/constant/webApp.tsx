/* eslint-disable qwik/jsx-img */
// Add the disable because of the bug Qwik has

import cheerUp from '~/media/cheer-up.jpg'
import cheerUpGif from '~/media/cheer-up.gif'
import hansonAgrochemical from '~/media/hanson-agrochemical.jpg'
import hansonAgrochemicalGif from '~/media/hanson-agrochemical.gif'
import pchemConsulting from '~/media/pchem-consulting.jpg'
import pchemConsultingGif from '~/media/pchem-consulting.gif'
import movieRec from '~/media/movie-rec.jpg'
import movieRecGif from '~/media/movie-rec.gif'
import staffManagement from '~/media/staff-management.jpg'
import staffManagementGif from '~/media/staff-management.gif'

// Window size for gif recording: 1450px * 823px

export const WEB_APPS_ARRAY = [
  {
    title: 'Staff Management Portal',
    img: staffManagement,
    gif: staffManagementGif,
    description:
      'Get a great idea on who are experts on required skills and are ready for next project with a glance. Add/edit individual employee or upload a csv file to create/update multiple ones.',
    href: 'https://staff-management-portal.vercel.app/',
    techs: ['Next.js', 'PostgreSQL', 'Prisma', 'tRPC', 'Vercel'],
    isOnGoing: true,
  },
  {
    title: 'Cheer Up',
    img: cheerUp,
    gif: cheerUpGif,
    description:
      'Login with your spotify account and enjoy personalized recommendation based on your tastes. The beautiful seamless transition makes everything more enjoyable!',
    href: 'https://cheerup-ten.vercel.app/',
    techs: ['React', 'Spotify API', 'Single Sign On', 'Vercel', 'Azure'],
  },
  {
    title: 'PChem Consulting Inc.',
    img: pchemConsulting,
    gif: pchemConsultingGif,
    description:
      'Well designed UI with responsive support make it pleasant to read and use on both large and small screens .',
    href: 'https://www.pchemconsulting.com/',
    techs: ['React', 'GitHub Actions', 'GitHub Pages', 'Vite'],
  },
  {
    title: 'Hanson Agrochemical Consulting',
    img: hansonAgrochemical,
    gif: hansonAgrochemicalGif,
    description:
      'Responsive design, multi-language support and elegant transition make it enjoyable to use for more people.',
    href: 'http://www.hansonagrochemical.com/',
    techs: ['React', 'GitHub Pages', 'Multi-language'],
  },
  {
    title: 'Movie Recommendation',
    img: movieRec,
    gif: movieRecGif,
    description: 'Integrated with The Movie DB API to help you find your next favorite movie and TV series!',
    href: 'https://linkfang.github.io/API-Project/',
    techs: ['HTML', 'CSS', 'JavaScript', 'The Movie DB API'],
  },
]
