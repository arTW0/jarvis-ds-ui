import type { Meta, StoryObj } from '@storybook/react'
import { Box, ComponentsHeader, ComponentsHeaderProps } from '@jarvis-ui/react'

export default {
  title: 'Typography/Components Header',
  component: ComponentsHeader,
  args: {
    title: 'Components Header',
    pageLink: '#',
    labelLink: 'View all components',
  },
  decorators: [
    (Story) => {
      return <>
        {Story()}
      </>
    }
  ]
} as Meta<ComponentsHeaderProps>


export const Primary: StoryObj<ComponentsHeaderProps> = {}

export const Alternative: StoryObj<ComponentsHeaderProps> = {
  args: {
    titleColor: '$red300',
    linkColor: '$gray300',
  },
}
