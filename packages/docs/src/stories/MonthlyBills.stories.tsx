import type { Meta, StoryObj } from '@storybook/react'
import { MonthlyBills, MonthlyBillsProps } from '@jarvis-ui/react'

export default {
  title: 'Finance/Monthly Bills',
  component: MonthlyBills,
  args: {
    price: 100,
    description: 'Pix',
    categoryIcon: 'pix',
    bgColor: '$red600',
    buttonColor: '$gray200',
    labelButtonColor: '$gray600',
  },
  argTypes: {
    categoryIcon: {
      options: ['pix', 'transfer', 'shopping', 'credit-card', 'loan', 'rent'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<MonthlyBillsProps>

export const Primary: StoryObj<MonthlyBillsProps> = {}

export const DarkMode: StoryObj<MonthlyBillsProps> = {
  args: {
    bgColor: '$gray600',
    buttonColor: '$gray500',
    labelButtonColor: '$gray200',
  },
}