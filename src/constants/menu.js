const main = [
  { text: 'HOME', path: '/' },
  { text: 'TICKETS', path: '/ticket' },
  { text: 'LINEUP', path: '/lineup' },
  { text: 'VIBE', path: '/vibe' },
  { text: 'NEWS', path: '/news' },
  { text: 'NEIGHBORHOOD', path: '/neighborhood' },
  { text: 'PLANNING', path: '/planning' },
  { text: 'MERCH', url: 'https://shop.lifeisbeautiful.com/' }
]

const sub = {
  left: [
    { text: 'ABOUT', path: '/about' },
    { text: 'HISTORY', path: '/history' },
    { text: 'CONTACT', mail: 'mailto:info@lifeisbeautiful.com' },
    { text: 'MEDIA', mail: 'mailto:LIBPress@rrpartners.com?subject=Life%20Is%20Beautiful%20Press%20Inquiry'},
    // { text: 'FAQ', path: '/' }
  ]
  ,
  right: [
    { text: 'IMPACT', path: '/impact' },
    { text: 'SPONSORS', path: '/sponsors' },
    // { text: 'VOLUNTEERS', path: '/planning#volunteer' },
    // { text: 'JOBS', path: '/' },
    // { text: 'INTERNSHIP', path: '/' },
    // { text: 'CHARITY', path: '/' },
    { text: 'LEGAL', url: 'https://lifeisbeautiful.com/policy.html' }
  ]

}

export default {
  main, sub
}
