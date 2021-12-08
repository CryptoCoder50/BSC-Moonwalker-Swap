import { MenuEntry } from 'moonwalkerswap-uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: 'https://bsc-home.moonwalker.network',
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
    href: 'https://bsc-home.moonwalker.network/farms',
   },
   {
    label: 'Pools',
    icon: 'PoolIcon',
    href: 'https://bsc-home.moonwalker.network/pools',
   },


  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Overview',
        href: 'https://bsc-info.moonwalker.network',
      },
      {
        label: 'Tokens',
        href: 'https://bsc-info.moonwalker.network/tokens',
      },
      {
        label: 'Pairs',
        href: 'https://bsc-info.moonwalker.network/pairs',
      },
      {
        label: 'Accounts',
        href: 'https://bsc-info.moonwalker.network/accounts',
      },
    ],
  },

  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/MoonWalkerJim',
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
