import type { Meta, StoryObj } from '@storybook/react'
import { Transactions, TransactionsProps } from '@jarvis-ui/react'

export default {
  title: 'Finance/Transactions',
  component: Transactions,
  args: {
    title: 'Netflix',
    amount: 39.90,
    category: 'Streaming',
    type: 'withdraw',
  },
  argTypes: {
    type: {
      options: ['withdraw', 'deposit'],
      control: {
        type: 'inline-radio',
      },
    },
  }
} as Meta<TransactionsProps>

export const Primary: StoryObj<TransactionsProps> = {}
