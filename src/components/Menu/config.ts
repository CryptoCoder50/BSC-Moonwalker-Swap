import { MenuEntry } from 'moonwalkerswap-uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://moon-walker-swap-front-end-main.vercel.app/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    initialOpenState: true,
    items: [
      {
        label: 'Exchange',
        href: '/swap',
      },
      {
        label: 'Liquidity',
        href: '/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: 'https://moon-walker-swap-front-end-main.vercel.app/farms',
   },
   {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://moon-walker-swap-front-end-main.vercel.app/pools',
   },


  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://bsc-swap-info-grte2j46w-cryptocoder50.vercel.app',
      },
      {
        label: 'Tokens',
        href: 'https://bsc-swap-info-grte2j46w-cryptocoder50.vercel.app/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://bsc-swap-info-grte2j46w-cryptocoder50.vercel.app/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://bsc-swap-info-grte2j46w-cryptocoder50.vercel.app/accounts',
      },
    ],
  },

  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/CryptoCoder50',
      },
      {
        label: 'Docs',
        href: 'https://bsc-docs.moonwalker.network',
      },
      {
        label: 'Blog',
        href: 'https://moonastrojim.medium.com/',
      },
    ],
  },
]

export default config
