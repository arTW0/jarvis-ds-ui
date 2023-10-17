import { styled } from '../../styles'

export const AppFooter = styled('div', {
  position: 'fixed',
  left: 0,
  bottom: 0,
  width: '100%',
  borderTop: '1px solid $gray300',
  color: '$white',
  padding: '$4',
  fontSize: '$xs',
  textAlign: 'center',
  lineHeight: 'base',
  background: '$red400',
  marginTop: '$6',
  fontFamily: '$default',
})

export const FooterTitle = styled('div', {
  fontWeight: '$medium',
  marginBottomm: '$2',
  color: '$white'
})
