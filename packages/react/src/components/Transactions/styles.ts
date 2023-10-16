import { styled } from "../../styles"

export const TransactionsBox = styled('section', {
  padding: '0 $4'
})

export const Transaction = styled('a', {
  background: '$white',
  boxShadow: '0 $px $1 0 rgba(0, 0, 0, 0.09)',
  borderRadius: '$md',
  padding: '$5 $6',
  marginBottom: '$2',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  textDecoration: 'none',

  '.price': {
    fontWeight: '$bold',
    letterSpacing: '-0.03em',
    color: '$green300',
  },

  '.text-danger': {
    color: '$red400',
  }
})

export const BoxRight = styled('div', {
  paddingLeft: '$2',
})

export const Details = styled('div', {
  color: '$gray500',
})