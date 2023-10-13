import { styled } from '../../styles'

export const ComponentHeader = styled('section', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '$8',
  marginBottom: '$4',
  padding: '0 $4',

  '.title': {
    margin: 0,
    fontSize: '$xl',
    letterSpacing: '-0.01em',
    lineHeight: '$short',
    paddingRight: '$4',
    fontWeight: '$bold',
  },

  '.link': {
    color: '$red500',
    fontSize: '$sm',
    fontWeight: '$500',
    textDecoration: 'none',
  }
})

