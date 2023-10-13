import { ComponentProps } from 'react'
import { ComponentHeader } from './styles'

export interface ComponentsHeaderProps
  extends ComponentProps<typeof ComponentHeader> { }


export function ComponentsHeader(props: ComponentsHeaderProps) {
  return (
    <ComponentHeader {...props}>
      <h2 className="title">
        {title}
      </h2>
      <a href={pageLink} className="link">
        {labelLink}
      </a>
    </ComponentHeader>
  )
} 