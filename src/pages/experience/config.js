import index from './index.vue'

export const routes = [
  {
    name: 'experience',
    path: '/experience',
    component: index,
    meta: {
      //
    },
  },
]

export const data = [
  {
    place: 'Google developer student clubs',
    role: 'Lead',
    description: `After spending one year in DSC, I wanted to lead the community to build
    amazing products for the community, hold technology events for students
    in my campus.`,
    tags: [
      {
        label: 'DSC-DUT',
        url: 'https://www.facebook.com/dscdut',
      },
      {
        label: 'Google',
        url: 'https://google.com',
      },
      {
        label: 'Developer student clubs',
        url: 'https://dsc.community.dev/da-nang-university-of-technology',
      },
    ],
    image: {
      src: '/img/me/8.jpg',
      alt: 'DSC Info Session 2020',
    },
  },
  {
    place: 'Nestsera technology',
    role: 'Frontend developer',
    description: `I have worked on 2 projects, both are management systems, using Nuxt.js SPA.
    As the frontend team leader, I defined the conventions, built the code base and managed
    merge requests on Gitlab.`,
    tags: [
      {
        label: 'Nestsera',
        url: 'https://nestsera.com',
      },
    ],
    image: {
      src: '/img/me/9.png',
      alt: 'Nestsera Technology',
    },
    theme: {
      background: '#48A9FE',
      color: 'white',
    },
  },
  {
    place: 'S-Group non-profit organization',
    role: 'Wordpress developer',
    description: `I joined S-Group and it was the first time i got my professional training in
    web development. I did so many projects and learned so many things.`,
    tags: [
      {
        label: 'Wordpress',
        url: 'https://wordpress.org',
      },
    ],
    image: {
      src: '/img/me/10.jpg',
      alt: 'DSC Info Session 2020',
    },
    theme: {
      background: '#EB8205',
      color: 'white',
    },
  },
]

export default { routes }
