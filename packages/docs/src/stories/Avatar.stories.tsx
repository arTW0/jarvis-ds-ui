import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@jarvis-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/arTW0.png',
    alt: 'Arthur Neves',
    bgColor: '$gray700',
    iconColor: '$gray200',
  },
  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}