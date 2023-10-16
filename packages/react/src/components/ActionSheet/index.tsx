import { useState } from 'react'
import {
  ActionButton,
  ActionSheetContainer,
  ActionSheetContent,
  CancelButton
} from './styles'

export interface ActionSheetProps {
  labelButton: string
  children: React.ReactNode
}

export function ActionSheet({ labelButton, children }: ActionSheetProps) {
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

  return (
    <ActionSheetContainer>
      <ActionButton
        onClick={() => {
          handleActionSheetOpen()
          handleOnTheScreen()
        }}
      >
        {labelButton}
      </ActionButton>
      {isOnTheScreen && (
        <ActionSheetContent className={open ? "active" : "inactive"}>
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

ActionSheet.displayName = 'ActionSheet'