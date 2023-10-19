import LeaderboardRoundedIcon from '@mui/icons-material/LeaderboardRounded';
import PersonRoundedIcon from '@mui/icons-material/PersonRounded';
import SyncAltRoundedIcon from '@mui/icons-material/SyncAltRounded';
import ArticleRoundedIcon from '@mui/icons-material/ArticleRounded';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import HelpOutlineRoundedIcon from '@mui/icons-material/HelpOutlineRounded';
import ReceiptLongRoundedIcon from '@mui/icons-material/ReceiptLongRounded';
import ExitToAppRoundedIcon from '@mui/icons-material/ExitToAppRounded';
import SavingsRoundedIcon from '@mui/icons-material/SavingsRounded';

import { ComponentProps } from 'react'
import { BottomBox, Item, ItemContent } from './styles'

export interface BottomMenuProps extends ComponentProps<typeof BottomBox> {
  profileLink: string
  overviewLink: string
  appsLink: string
  settingsLink: string
  active: string
}

export function BottomMenu({ appsLink, settingsLink, overviewLink, profileLink, active }: BottomMenuProps) {
  return (
    <BottomBox>
      <Item href={profileLink}>
        <ItemContent>
          <PersonRoundedIcon className={active == 'profile' ? 'active' : ''} />
        </ItemContent>
      </Item>

      <Item href={appsLink}>
        <ItemContent>
          <LeaderboardRoundedIcon className={active == 'overview' ? 'active' : ''} />
        </ItemContent>
      </Item>

      <Item href={overviewLink}>
        <ItemContent>
          <AppsRoundedIcon className={active == 'apps' ? 'active' : ''} />
        </ItemContent>
      </Item>

      <Item href={settingsLink}>
        <ItemContent>
          <SettingsRoundedIcon className={active == 'settings' ? 'active' : ''} />
        </ItemContent>
      </Item>

    </BottomBox>
  )
}

BottomMenu.displayName = 'BottomMenu'
