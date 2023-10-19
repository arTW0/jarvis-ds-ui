import type { Meta, StoryObj } from '@storybook/react'
import { Box, ActionSheet, ActionSheetProps } from '@jarvis-ui/react'

export default {
  title: 'Options/Action Sheet',
  component: ActionSheet,
  args: {
    labelButton: 'Open Action Sheet',
    children: (
      <>
        <Box css={{ border: 'none', marginBottom: '0.25rem' }}>Option 1</Box>
        <Box css={{ border: 'none', marginBottom: '0.25rem' }}>Option 2</Box>
        <Box css={{ border: 'none', marginBottom: '0.25rem' }}>Option 3</Box>
        <Box css={{ border: 'none', marginBottom: '0.25rem' }}>Option 4</Box>
      </>
    ),
  },
  decorators: [
    (Story) => {
      return <>
        {Story()}
      </>
    },
  ]
} as Meta<ActionSheetProps>

export const Primary: StoryObj<ActionSheetProps> = {
  args: {},
}