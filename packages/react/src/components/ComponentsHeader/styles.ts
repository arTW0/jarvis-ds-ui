import { styled } from '../../styles'

export const ComponentHeader = styled('section', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  marginTop: '$8',
  marginBottom: '$4',
  padding: '0 $4',
  fontFamily: '$default',
  fontWeight: '$medium',

  '.title': {
    margin: 0,
    fontSize: '$xl',
    letterSpacing: '-0.01em',
    lineHeight: '$short',
    paddingRight: '$4',
    fontWeight: '$bold',
    color: '$gray100'
  },

  '.link': {
    color: '$red300',
    fontSize: '$sm',
    fontWeight: '$500',
    textDecoration: 'none',
  }
})

