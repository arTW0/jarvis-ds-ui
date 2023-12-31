import type { Meta, StoryObj } from '@storybook/react'
import { SavingGoals, SavingGoalsProps } from '@jarvis-ui/react'

export default {
  title: 'Finance/Saving Goals',
  component: SavingGoals,
  args: {
    goal: 'New Car',
    category: 'living',
    amount: 10000,
    locked: 5000,
    bgColor: '$red600'
  },
} as Meta<SavingGoalsProps>

export const Primary: StoryObj<SavingGoalsProps> = {}

export const DarkMode: StoryObj<SavingGoalsProps> = {
  args: {
    bgColor: '$gray700'
  }
}