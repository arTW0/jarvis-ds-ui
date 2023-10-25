import { UserCircle, ChartBar, SquaresFour, GearSix } from 'phosphor-react'

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
          <UserCircle className={active == 'profile' ? 'active' : ''} />
        </ItemContent>
      </Item>

      <Item href={appsLink}>
        <ItemContent>
          <ChartBar className={active == 'overview' ? 'active' : ''} />
        </ItemContent>
      </Item>

      <Item href={overviewLink}>
        <ItemContent>
          <SquaresFour className={active == 'apps' ? 'active' : ''} />
        </ItemContent>
      </Item>

      <Item href={settingsLink}>
        <ItemContent>
          <GearSix className={active == 'settings' ? 'active' : ''} />
        </ItemContent>
      </Item>
    </BottomBox>
  )
}

BottomMenu.displayName = 'BottomMenu'
