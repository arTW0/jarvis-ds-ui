import { styled } from "../../styles"

export const Goals = styled('div', {
  margin: '$4',
})

export const Item = styled('div', {
  background: '$white',
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
    color: '$black',
  },

  'p': {
    fontSize: '$xs',
    color: '$gray500',
  }
})

export const Price = styled('div', {
  fontWeight: '$bold',
  color: '$black',
})

export const Progress = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  fontSize: '$xs',
  fontWeight: '$medium',
  letterSpacing: 0,
  width: '100%',

  'progress': {
    borderRadius: '$2',
    width: '80%',
    height: '$6',
    boxShadow: '1px 1px 4px rgba( 0, 0, 0, 0.2)',
  },

  'progress::-webkit-progress-bar': {
    backgroundColor: 'emptyProgressbarColor',
    borderRadius: '$md',
  },

  'progress::-webkit-progress-value': {
    backgroundColor: 'fullProgressbarColor',
    borderRadius: '$sm',
    boxShadow: '0 0 0 1px rgba(0, 0, 0, 0.05)',
  }
})