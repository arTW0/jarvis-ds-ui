import { styled, keyframes } from '../../styles'

const LoadingAnimation = keyframes({
  from: {
    transform: 'rotate(0deg)'
  },
  to: {
    transform: 'rotate(360deg)'
  }
})

export const LoadingWrapper = styled('div', {
  position: 'fixed',
  width: '100%',
  height: '100%',
  left: 0,
  top: 0,
  zIndex: 99999,
  background: '$red300',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '.loading-icon': {
    animation: `${LoadingAnimation} 0.8s linear infinite`,
  }
})