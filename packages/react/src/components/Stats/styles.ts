import { styled } from "../../styles";

export const StatBox = styled('div', {
  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.09)',
  borderRadius: '$md',
  padding: '$5 $6',
  fontFamily: '$default',

  '.value': {
    fontSize: '$xl',
    fontWeight: '$bold',
    letterSpacing: '-0.02em',
    lineHeight: '$shorter',
  },

  '.text-success': {
    color: '$green100',
  },

  '.text-danger': {
    color: '$red400',
  }
})

export const Title = styled('div', {
  fontSize: '$xs',
  fontWeight: '$medium',
  display: 'block',
  marginBottom: '$2',
  lineHeight: '$short',
})