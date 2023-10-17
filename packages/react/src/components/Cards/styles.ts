import { styled } from '../../styles'

export const CardBox = styled('section', {
  padding: '0 $4',
  fontFamily: '$default'
})

export const CardBlock = styled('div', {
  height: '220px',
  width: '$80',
  borderRadius: '10px',
  background: '$red400',
  boxShadow: '0 $px $xs 0 rgba(0, 0, 0, 0.09)',
  color: '$gray500',
  position: 'relative',
})

export const CardMain = styled('div', {
  display: 'flex',
  alignItems: 'flex-end',
  position: 'absolute',
  left: 0,
  right: 0,
  bottom: 0,
  top: 0,
  backgroundImage: 'linear-gradient(-180deg, rgba(0, 0, 0, 0) 0 %, rgba(0, 0, 0, 0.23) 100 %)',
  borderRadius: '10px',
  padding: '$5 $6',
})

export const CardBalance = styled('div', {
  position: 'absolute',
  left: '$6',
  top: '$6',
})

export const Title = styled('h1', {
  fontWeight: '$bold',
  color: '$white',
  marginTop: '$2',
  fontSize: '$4xl',
})

export const CardLabel = styled('span', {
  fontSize: '$xs',
  letterSpacing: '$px',
  opacity: 0.5,
  lineHeight: '$shorter',
  marginBottom: '$sm',
  textTransform: 'uppercase',
  display: 'block',
  fontWeight: '$medium',
  color: '$red200',
})

export const CardNumber = styled('div', {
  fontSize: '$sm',
  letterSpacing: '$1',
  fontWeight: '$medium',
  color: '$white',
})

export const CardBottom = styled('div', {
  display: 'flex',
  alignItems: 'center',
  marginTop: '$5',
  color: '$white',
})

export const CardExpiry = styled('div', {
  fontWeight: '$medium',
  fontSize: '$sm',
  color: '$white',
  marginRight: '$4',
})

export const CardCVV = styled('div', {
  fontWeight: '$medium',
  fontSize: '$sm',
  color: '$white',
})

export const CardButton = styled('div', {
  position: 'absolute',
  right: '10px',
  top: '10px',
})

export const Dropdown = styled('div', {
  position: 'relative',
  display: 'inline-block',
})

export const DropdownButton = styled('button', {
  display: 'block',
  color: '$white',
  padding: '$px',
  fontSize: '$md',
  cursor: 'pointer',
  fontWeight: '$bold',
  backgroundColor: 'transparent',
  border: 'none',
})

export const DropdownContent = styled('button', {
  position: 'absolute',
  left: '-10px',
  minWidth: '$18',
  marginLeft: '-70px',
  background: '$red500',
  borderRadius: '$4',
  boxShadow: '0 $1 $8 rgba(0, 0, 0, 0.1)',
  backdropFilter: 'blur(5.9px)',
  WebkitBackdropFilter: 'blur(5.9px)',
  border: '$px solid rgba(255, 255, 255, 0.3)',

  'a': {
    color: '$white',
    padding: '$3 $4',
    textDecoration: 'none',
    display: 'block',
  },

  'div': {
    display: 'flex',
    alignItems: 'center',

    '.icon': {
      color: '$white',
      marginLeft: '$2',
      fontSize: '$2xl',
    }
  }
})