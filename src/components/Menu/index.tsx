 import React, { useContext } from 'react'
import { Menu as UikitMenu} from 'moonwalkerswap-uikit'
import { useWeb3React } from '@web3-react/core'
import { allLanguages } from 'constants/localisation/languageCodes'
import { LanguageContext } from 'hooks/LanguageContext'
import useTheme from 'hooks/useTheme'
import useDustPrice from 'hooks/useDustPrice'
import useGetLocalProfile from 'hooks/useGetLocalProfile'
import useAuth from 'hooks/useAuth'
import links from './config'

const Menu: React.FC = (props) => {
  const { account } = useWeb3React()
  const { login, logout } = useAuth()
  const { selectedLanguage, setSelectedLanguage } = useContext(LanguageContext)
  const { isDark, toggleTheme } = useTheme()
  const dustPriceUsd = useDustPrice()
  const profile = useGetLocalProfile()

  return (
    <UikitMenu
      links={links}
      account={account as string}
      login={login}
      logout={logout}
      isDark={isDark}
      toggleTheme={toggleTheme}
      currentLang={selectedLanguage?.code || ''}
      langs={allLanguages}
      setLang={setSelectedLanguage}
      dustPriceUsd={dustPriceUsd}
      profile={profile}
      {...props}
    />
  )
}

export default Menu
