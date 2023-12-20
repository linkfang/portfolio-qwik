import { cardImg } from './styles'

import MusicPlayer from '~/media/music-player.jpg?jsx'
import NearbyFoods from '~/media/nearby-foods.jpg?jsx'
import GitHubSearcher from '~/media/github-searcher.jpg?jsx'
import Tundra from '~/media/tundra.jpg?jsx'

export const MOBILE_APPS_ARRAY = [
  {
    title: 'Nearby Foods',
    img: <NearbyFoods class={cardImg} alt="Screenshot of Nearby Foods" />,
    description: '',
    hover: '',
    href: 'https://github.com/amberyiyao/react-native-yelp',
    techs: ['React Native', 'Yelp API'],
  },
  {
    title: 'Music Player',
    img: <MusicPlayer class={cardImg} alt="Screenshot of Staff Music Player" />,
    description: '',
    hover: '',
    href: 'https://github.com/linkfang/player',
    techs: ['Cordova'],
  },
  {
    title: 'Github Searcher',
    img: <GitHubSearcher class={cardImg} alt="Screenshot of GitHub Searcher" />,
    description: '',
    hover: '',
    href: 'https://github.com/linkfang/github-searcher',
    techs: ['Kotlin', 'GitHub API'],
  },
  {
    title: 'Tundra',
    img: <Tundra class={cardImg} alt="Screenshot of GitHub Searcher" />,
    description: '',
    hover: '',
    href: 'https://github.com/linkfang/tundra',
    techs: ['Cordova'],
  },
]
