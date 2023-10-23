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
})

export const Title = styled('h2', {
  margin: 0,
  fontSize: '$xl',
  letterSpacing: '-0.01em',
  lineHeight: '$short',
  paddingRight: '$4',
  fontWeight: '$bold',
})

export const Link = styled('a', {
  fontSize: '$sm',
  fontWeight: '$medium',
  textDecoration: 'none',
})

