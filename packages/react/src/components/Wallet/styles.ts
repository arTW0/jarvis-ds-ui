import { styled } from "../../styles"

export const Wallet = styled('div', {
  padding: '0 $4',
  paddingTop: '$2',
})

export const Balance = styled('div', {
  display: 'flex',
  height: '$8',
  width: '$16',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginBottom: '$2',
  background: '$white',
  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.09)',
  borderRadius: '$md',
  padding: '$5 $6',

  '.tittle': {
    fontWeight: '$medium',
    display: 'block',
    marginBottom: '$2',
  },

  '.total': {
    fontWeight: '$bold',
    letterSpacing: '-0.01em',
    lineHeight: '$tall',
    fontSize: '$xl',
  }
})

export const BoxLeft = styled('div', {
  paddingRight: '$2'
})

export const BoxRight = styled('div', {
  padding: 0
})