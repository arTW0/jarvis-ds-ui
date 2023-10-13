import { styled } from "../../styles";

export const ModalContainer = styled('div', {
  position: 'absolute',
  top: 0,
  left: '-2.7rem',
  zIndex: 10,
  transitionProperty: 'all',
  boxShadow: '50px 50px 50px 500px rgba(0, 0, 0, 0.5)',
})

export const ModalContent = styled('div', {
  width: '$40',
  height: '100vh',
  backgroundColor: '$red400',
  padding: '$3',
  overflow: 'y',

  '.border-top': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '$4 0',
    padding: '0 $4',
  }
})

export const CloseButton = styled('button', {
  border: 'none',
  backgroundColor: 'transparent',
  color: '$white',
  fontSize: '$5',
})
