import { styled } from "../../styles"

export const Goals = styled('div', {
  margin: '$4',
  fontFamily: '$default',
})

export const Item = styled('div', {
  boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.09)',
  borderRadius: '$md',
  padding: '$5 $6',
  marginBottom: '$3',
})

export const GoalContent = styled('div', {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  marginBottom: '$1',

  'h4': {
    margin: 0,
    fontSize: '$md',
    fontWeight: '$medium',
    color: '$gray100',
  },

  'p': {
    fontSize: '$xs',
    color: '$red100',
  }
})

export const Price = styled('div', {
  fontWeight: '$bold',
  color: '$gray100',
})

export const Progress = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: '$xs',
  fontWeight: '$medium',
  letterSpacing: 0,
  width: '100%',
  color: '$gray100'
})

export const ProgressBar = styled('progress', {
  width: '90%',
  height: '$6',
  boxShadow: '1px 1px 4px rgba( 0, 0, 0, 0.2)',
  backgroundColor: '$red100',
  borderRadius: '$md',

  '&::-webkit-progress-value': {
    backgroundColor: '$red500',
    borderRadius: '$md',
  }
})