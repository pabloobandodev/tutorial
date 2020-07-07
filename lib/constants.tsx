import {
  FaTwitter,
  FaGithub,
  FaLinkedinIn,
  FaStackOverflow,
} from 'react-icons/fa'
import { Social } from 'lib/types'

export const SITE_TITLE = 'Pablo Obando 🧙'
export const SITE_URL = 'https://pabloobando.dev/'
export const AUTHOR_NAME_DATOCMS = 'Pablo Obando'
export const socialMedia: Social = [
  {
    name: 'facebook',
    url: 'https://www.twitter.com/pabloobandodev/',
    icon: <FaTwitter />,
  },
  {
    name: 'github',
    url: 'https://github.com/pabloobandodev',
    icon: <FaGithub />,
  },
  {
    name: 'linkedin',
    url: 'https://www.linkedin.com/in/pabloobandodev',
    icon: <FaLinkedinIn />,
  },
  {
    name: 'stackoverflow',
    url: 'https://stackoverflow.com/story/pabloobandodev',
    icon: <FaStackOverflow />,
  },
]
