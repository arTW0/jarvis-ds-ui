import { ComponentProps } from 'react'
import { ComponentHeader } from './styles'

export interface ComponentsHeaderProps extends ComponentProps<typeof ComponentHeader> {
  title: string,
  pageLink: string,
  labelLink: string
}

export function ComponentsHeader({ title, pageLink, labelLink }: ComponentsHeaderProps) {
  return (
    <ComponentHeader>
      <h2 className="title">
        {title}
      </h2>
      <a href={pageLink} className="link">
        {labelLink}
      </a>
    </ComponentHeader>
  )
} 