import { styled } from "../../styles";

export const Bill = styled('div', {
  background: '$red600',
  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.09)',
  borderRadius: '$md',
  padding: '$5 $6',
  textAlign: 'center',
  color: '$white',
  marginLeft: '$4',
  width: '25%',

  '.wrapper': {
    textAlign: 'center',
    marginBottom: '$4',
  },

  '.price': {
    fontSize: '$5',
    fontWeight: 700,
    color: '$gray100',
    letterSpacing: '-0.02rem',
    lineHeight: '$shorter',
    marginBottom: '$3',
  },

  '.btn': {
    height: '$9',
    padding: '$1 $4',
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

    background: '$red100 !important',
    borderColor: '$red300 !important',
    color: '$white !important',

    width: '100%',
  },

  'p': {
    fontSize: '$xxs',
    lineHeight: '$short',
    height: '$9',
    margin: '0 0 $3 0',
  }
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