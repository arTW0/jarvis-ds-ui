import type { Meta, StoryObj } from '@storybook/react'
import { Box, ActionSheet, ActionSheetProps } from '@jarvis-ui/react'

export default {
  title: 'Form/Action Sheet',
  component: ActionSheet,
  args: {
    labelButton: 'Open Action Sheet',
    children: (
      <Box
        as="label"
        css={{ display: 'flex', flexDirection: 'column', gap: '$2', border: 'none' }}
      >
        <Box>Option 1</Box>
        <Box>Option 2</Box>
        <Box>Option 3</Box>
        <Box>Option 4</Box>
      </Box>
    ),
  },
  decorators: [
    (Story) => {
      return (
        <Box
          as="label"
          css={{ display: 'flex', flexDirection: 'column', gap: '$2', border: 'none' }}
        >
          {Story()}
        </Box>
      )
    },
  ]
} as Meta<ActionSheetProps>

export const Primary: StoryObj<ActionSheetProps> = {
  args: {},
}