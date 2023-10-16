import LeaderboardRoundedIcon from '@mui/icons-material/LeaderboardRounded';
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
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
  items: {
    icon: string
    label: string
    link: string
  }[]
}

export function BottomMenu({ items }: BottomMenuProps) {
  const itemsArray = [...items]
  return (
    <BottomBox>
      {itemsArray.map((item, index) => (
        <Item href={item.link} className="active">
          <ItemContent key={`${item}${index}`}>
            {item.icon === "overview" ? <LeaderboardRoundedIcon className='icon' />
              :
              item.icon === "profile" ? <AccountBoxRoundedIcon className='icon' />
                :
                item.icon === "transactions" ? <SyncAltRoundedIcon className='icon' />
                  :
                  item.icon === "settings" ? <SettingsRoundedIcon className='icon' />
                    :
                    item.icon === "cards" ? <CreditCardRoundedIcon className='icon' />
                      :
                      item.icon === "bills" ? <ReceiptLongRoundedIcon className='icon' />
                        :
                        item.icon === "apps" ? <AppsRoundedIcon className='icon' />
                          :
                          item.icon === "pages" ? <ArticleRoundedIcon className='icon' />
                            :
                            item.icon === "logout" ? <ExitToAppRoundedIcon className='icon' />
                              :
                              item.icon === "goals" ? <SavingsRoundedIcon className='icon' />
                                :
                                item.icon === "help" ? <HelpOutlineRoundedIcon className='icon' />
                                  :
                                  null}
            <strong>{item.label}</strong>
          </ItemContent>
        </Item>
      ))}
    </BottomBox>
  )
}