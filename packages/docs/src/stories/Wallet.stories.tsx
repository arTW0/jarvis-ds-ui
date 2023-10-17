import type { Meta, StoryObj } from '@storybook/react'
import { WalletComponent, WalletProps } from '@jarvis-ui/react'

export default {
  title: 'Finance/Wallet',
  component: WalletComponent,
  args: {
    totalBalance: 2643.31,
    addFounndsLink: '/'
  },
} as Meta<WalletProps>

export const Primary: StoryObj<WalletProps> = {}
