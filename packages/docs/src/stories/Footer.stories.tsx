import type { Meta, StoryObj } from '@storybook/react'
import { Footer, FooterProps } from '@jarvis-ui/react'

export default {
  title: 'Form/Footer',
  component: Footer,
  args: {
    as: 'footer',
  },
  decorators: [
    (Story) => {
      return <>
        {Story()}
      </>
    }
  ]
} as Meta<FooterProps>


export const Primary: StoryObj<FooterProps> = {}
