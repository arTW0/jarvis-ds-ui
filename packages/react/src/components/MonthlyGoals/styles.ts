import { styled } from "../../styles";

export const Bill = styled('div', {
  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.09)',
  borderRadius: '$md',
  padding: '$5 $6',
  textAlign: 'center',
  color: '$white',
  width: '25%',
  fontFamily: '$default',

  '.wrapper': {
    textAlign: 'center',
    marginBottom: '$4',
  },

  '.price': {
    fontSize: '$5',
    fontWeight: '$bold',
    color: '$gray100',
    letterSpacing: '-0.02rem',
    lineHeight: '$shorter',
    marginBottom: '$3',
  },

  'p': {
    fontSize: '$xs',
    lineHeight: '$short',
    height: '$9',
    margin: '0 0 $3 0',
  }
})

export const Pay = styled('a', {
  height: '$9',
  padding: '$1 0',
  fontSize: '$xs',
  lineHeight: '$shorter',
  fontWeight: 500,
  boxShadow: 'none !important',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: '0.2s all',
  textDecoration: 'none !important',
  borderRadius: '$md',
  borderWidth: '$px',
  borderColor: '$gray100 !important',
  width: '100%',
})

export const IconBox = styled('div', {
  width: '$12',
  height: '$12',
  background: '$red400',
  borderRadius: '$md',
  lineHeight: '$short',
  color: '$white',
  fontSize: '$6',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
})