import { keyframes, styled } from '../../styles'

export const ActionSheetContainer = styled('div', {})

export const ActionButton = styled('button', {
  backgroundColor: '$red300',
  color: '$white',
  fontSize: '$sm',
  width: '$4',
  height: '$8',
  borderRadius: '$2',
  padding: '$4',
  cursor: 'pointer',
  fontWeight: 'bold',
  border: 'none',
})

const ActiveAnimation = keyframes({
  from: {
    transform: 'translatey(100 %)',
    opacity: 0,
  },
  to: {
    transform: 'translatey(0%)',
  }
})

const InactiveAnimation = keyframes({
  from: {
    transform: 'translatey(0%)',
    opacity: 1,
  },
  to: {
    transform: 'translatey(100 %)',
  }
})

export const ActionSheetContent = styled('div', {
  position: 'fixed',
  left: '10%',
  bottom: 0,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '$red300',
  width: '80vw',
  height: '40vh',
  borderRadius: '$4',
  zIndex: 1,
  padding: '$2 $1',
  animationFillMode: 'forwards',

  '&.active': {
    animation: `${ActiveAnimation} 0.5s`,
  },

  '&.inactive': {
    animation: `${InactiveAnimation} 0.5s`,
  },
})

export const ActionSheetLabel = styled('a', {
  color: '$black',
  padding: '$3 $4',
  textDecoration: 'none',
  display: 'block',
})