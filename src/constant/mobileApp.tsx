import musicPlayer from '~/media/music-player.webp'
import nearbyFoods from '~/media/nearby-foods.webp'
import gitHubSearcher from '~/media/github-searcher.webp'
import tundra from '~/media/tundra.webp'
import musicPlayerGif from '~/media/music-player.gif'
import nearbyFoodsGif from '~/media/nearby-foods.gif'
import gitHubSearcherGif from '~/media/github-searcher.gif'
import tundraGif from '~/media/tundra.gif'

export const MOBILE_APPS_ARRAY = [
  {
    title: 'Nearby Foods',
    img: nearbyFoods,
    gif: nearbyFoodsGif,
    description: '',
    href: 'https://github.com/amberyiyao/react-native-yelp',
    techs: ['React Native', 'Yelp API'],
  },
  {
    title: 'Music Player',
    img: musicPlayer,
    gif: musicPlayerGif,
    description: '',
    href: 'https://github.com/linkfang/player',
    techs: ['Cordova'],
  },
  {
    title: 'Github Searcher',
    img: gitHubSearcher,
    gif: gitHubSearcherGif,
    description: '',
    href: 'https://github.com/linkfang/github-searcher',
    techs: ['Kotlin', 'GitHub API'],
  },
  {
    title: 'Tundra',
    img: tundra,
    gif: tundraGif,
    description: '',
    href: 'https://github.com/linkfang/tundra',
    techs: ['Cordova'],
  },
]
