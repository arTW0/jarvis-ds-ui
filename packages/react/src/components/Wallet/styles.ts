import { styled } from "../../styles"

export const Wallet = styled('div', {
  padding: '0 $4',
  fontFamily: '$default',
})

export const Balance = styled('div', {
  display: 'flex',
  height: '$32',
  width: '$64',
  alignItems: 'center',
  justifyContent: 'space-between',
  background: '$gray500',
  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.09)',
  borderRadius: '$md',
  padding: '$4 $5',

  '.tittle': {
    fontWeight: '$medium',
    display: 'block',
    marginBottom: '$1',
  },

  '.total': {
    fontWeight: '$bold',
    letterSpacing: '-0.01em',
    lineHeight: '$tall',
    fontSize: '$4xl',
  }
})

export const BoxLeft = styled('div', {
  paddingRight: '$2'
})

export const BoxRight = styled('div', {
  padding: 0
})