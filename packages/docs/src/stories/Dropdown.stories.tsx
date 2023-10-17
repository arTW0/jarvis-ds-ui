import type { Meta, StoryObj } from '@storybook/react'
import { Dropdown, DropdownProps } from '@jarvis-ui/react'

export default {
  title: 'Options/Dropdown',
  component: Dropdown,
  args: {
    label: 'Dropdown',
    options: [
      { option: 'Option 1' },
      { option: 'Option 2' },
      { option: 'Option 3' },
      { option: 'Option 4' },
    ]
  },
  decorators: [
    (Story) => {
      return <>
        {Story()}
      </>
    }
  ]
} as Meta<DropdownProps>


export const Primary: StoryObj<DropdownProps> = {}
