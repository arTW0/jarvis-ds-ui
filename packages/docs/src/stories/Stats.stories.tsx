import type { Meta, StoryObj } from '@storybook/react'
import { Stats, StatsProps } from '@jarvis-ui/react'

export default {
  title: 'Finance/Stats',
  component: Stats,
  args: {
    title: 'Incoming',
    value: 100,
    typeValue: 'positive',
  },
  argTypes: {
    typeValue: {
      options: ['positive', 'negative'],
      control: {
        type: 'inline-radio',
      },
    },
  }
} as Meta<StatsProps>

export const Primary: StoryObj<StatsProps> = {}
