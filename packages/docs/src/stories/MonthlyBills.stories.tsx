import type { Meta, StoryObj } from '@storybook/react'
import { MonthlyBills, MonthlyBillsProps } from '@jarvis-ui/react'

export default {
  title: 'Finance/Monthly Bills',
  component: MonthlyBills,
  args: {
    price: 100,
    description: 'Pix',
    categoryIcon: 'pix',
  },
  argTypes: {
    categoryIcon: {
      options: ['pix', 'transfer', 'shopping', 'credit-card', 'loan', 'rent'],
      control: {
        type: 'inline-radio',
      },
    },
  }
} as Meta<MonthlyBillsProps>

export const Primary: StoryObj<MonthlyBillsProps> = {}
