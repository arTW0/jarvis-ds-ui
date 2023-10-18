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
  background: '$red600',
  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.09)',
  borderRadius: '$md',
  padding: '$4 $5',
})

export const Title = styled('span', {
  fontWeight: '$medium',
  display: 'block',
  marginBottom: '$1',
  color: '$gray100'
})

export const Total = styled('h1', {
  fontWeight: '$bold',
  letterSpacing: '-0.01em',
  lineHeight: '$tall',
  fontSize: '$4xl',
  color: '$gray100'
})

export const BoxLeft = styled('div', {
  paddingRight: '$2'
})

export const BoxRight = styled('div', {
  padding: 0,
  color: '$gray100'
})