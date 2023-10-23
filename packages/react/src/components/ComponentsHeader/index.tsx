import { ComponentProps } from 'react'
import { ComponentHeader, Link, Title } from './styles'

export interface ComponentsHeaderProps extends ComponentProps<typeof ComponentHeader> {
  title: string
  pageLink: string
  labelLink: string
  titleColor?: string
  linkColor?: string
}

export function ComponentsHeader({ title, pageLink, labelLink, titleColor = '$gray600', linkColor = '$red500' }: ComponentsHeaderProps) {
  return (
    <ComponentHeader>
      <Title css={{ color: titleColor }}>
        {title}
      </Title>
      <Link
        css={{ color: linkColor }}
        href={pageLink}
      >
        {labelLink}
      </Link>
    </ComponentHeader>
  )
} 