import type { Meta, StoryObj } from '@storybook/react'
import { BottomMenu, BottomMenuProps } from '@jarvis-ui/react'

export default {
  title: 'Navigation/Bottom Menu',
  component: BottomMenu,
  args: {
    appsLink: '#',
    cardsLink: '#',
    overviewLink: '#',
    profileLink: '#',
    active: 'overview',
  },
  argTypes: {
    active: {
      control: { type: 'radio' },
      options: ['profile', 'overview', 'apps', 'settings'],
    }
  },

  decorators: [
    (Story) => {
      return <>
        {Story()}
      </>
    },
  ],
} as Meta<BottomMenuProps>

export const Primary: StoryObj<BottomMenuProps> = {
  args: {},
}