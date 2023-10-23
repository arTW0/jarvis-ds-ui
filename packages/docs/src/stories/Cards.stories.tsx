import type { Meta, StoryObj } from '@storybook/react'
import { Cards, CardsProps } from '@jarvis-ui/react'

export default {
  title: 'Finance/Cards',
  component: Cards,
  args: {
    balanceValue: 1000,
    cardNumber: '1234',
    expiryDate: '12 / 29',
    cvv: '123',
    linkDelete: '#',
    linkEdit: '#',
    linkUpdate: '#',
    cardColor: '$red400'
  },
  decorators: [
    (Story) => {
      return (
        <>
          {Story()}
        </>
      )
    }
  ]
} as Meta<CardsProps>

export const Primary: StoryObj<CardsProps> = {}

export const DarkMode: StoryObj<CardsProps> = {
  args: {
    cardColor: '$gray700'
  }
}