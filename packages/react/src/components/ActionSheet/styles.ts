import { keyframes, styled } from '../../styles'

export const ActionSheetContainer = styled('div', {})

export const ActionButton = styled('button', {
  backgroundColor: '$red300',
  color: '$white',
  fontSize: '$sm',
  width: '$32',
  height: '$16',
  borderRadius: '$sm',
  padding: '$4',
  cursor: 'pointer',
  fontWeight: 'bold',
  border: 'none',
})

const ActiveAnimation = keyframes({
  from: {
    transform: 'translatey(100%)',
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
    transform: 'translatey(100%)',
  }
})

export const ActionSheetContent = styled('div', {
  position: 'fixed',
  left: '10%',
  bottom: 20,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '$gray300',
  width: '25vw',
  borderRadius: '$4',
  zIndex: 1,
  padding: '$2 $1',
  animationFillMode: 'forwards',
  fontFamily: '$default',

  'a': {
    color: '$black',
    padding: '$3 $4',
    textDecoration: 'none',
    display: 'block',
  },

  '&.active': {
    animation: `${ActiveAnimation} 0.5s`,
  },

  '&.inactive': {
    animation: `${InactiveAnimation} 0.5s`,
  },
})

export const CancelButton = styled('button', {
  color: '$red300',
  fontWeight: '$bold',
  width: '80%',
  padding: '$2',
  marginTop: '$2',
  border: 'none',
  backgroundColor: 'transparent',
  fontFamily: '$default',
})