import type { Meta, StoryObj } from '@storybook/react'
import { Box, BottomMenu, BottomMenuProps } from '@jarvis-ui/react'

export default {
  title: 'Navigation/Bottom Menu',
  component: BottomMenu,
  args: {
    items: [
      { label: "Meu perfil", icon: "profile", link: "/" },
      // {label: "Dashboard", icon: "overview", link: "/"},
      // {label: "Transições", icon: "transactions", link: "/"},
      // {label: "Meus cartões", icon: "cards", link: "/"},
      { label: "Contas", icon: "bills", link: "/" },
      // {label: "Objetivos", icon: "goals", link: "/"},
      { label: "Configurações", icon: "settings", link: "/settings" },
      // {label: "Páginas", icon: "pages", link: "/"},
      { label: "Sair", icon: "logout", link: "/" },
      // {label: "Apps", icon: "apps", link: "/"},
    ]
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
} as Meta<BottomMenuProps>

export const Primary: StoryObj<BottomMenuProps> = {
  args: {},
}