import { ComponentProps, ElementType, useState } from 'react'
import { Button } from '../Button'
import {
  ActionButton,
  ActionSheetContainer,
  ActionSheetContent,
  ActionSheetLabel
} from './styles'

export interface ActionSheetProps
  extends ComponentProps<typeof Button> {
  as?: ElementType
}

const [open, setOpen] = useState(false);
const [isOnTheScreen, setIsOnTheScreen] = useState(false);

const handleOnTheScreen = () => {
  if (isOnTheScreen) {
    setTimeout(() => {
      setIsOnTheScreen(false)
    }, 500)
    return
  }

  setIsOnTheScreen(true)
}

const handleActionSheetOpen = () => {
  setOpen(!open)
}

export function ActionSheet(props: ActionSheetProps) {
  return (
    <ActionSheetContainer>
      <ActionButton
        checked={open}
        onClick={() => {
          handleActionSheetOpen()
          handleOnTheScreen()
        }}
      >
        {labelButton}
      </ActionButton>
      {isOnTheScreen && (
        <ActionSheetContent isOpened={open} className={open ? "active" : "inactive"}>
          {children}

          <CancelButton onClick={() => {
            handleActionSheetOpen()
            handleOnTheScreen()
          }}>
            Cancel
          </CancelButton>
        </ActionSheetContent>
      )}
    </ActionSheetContainer>
  )
}
