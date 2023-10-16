import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const StatsBox = styled('section', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridGap: '$4',
  padding: '0 $4',
  marginTop: '$4',
})

export interface BoxProps extends ComponentProps<typeof StatsBox> {
  as?: ElementType
}

StatsBox.displayName = 'StatsBox'