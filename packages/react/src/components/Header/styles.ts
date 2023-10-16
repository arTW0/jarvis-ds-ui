import { styled } from "../../styles"

export const Header = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-around',
  position: 'relative',
  height: '$14',
  width: '100vw',
  background: '$red300',
})

export const MenuIcon = styled('button', {
  fontSize: '$4xl',
  color: '$white',
  backgroundColor: 'transparent',
  border: 'none',
})

export const BoxLogo = styled('div', {
  padding: '0 $3',
})

export const BoxLeft = styled('div', {
  height: '$14',
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
})
