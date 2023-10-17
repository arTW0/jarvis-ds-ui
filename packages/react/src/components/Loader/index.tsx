import { ComponentProps, ElementType } from 'react'
import { LoadingWrapper } from './styles'

export interface LoaderProps extends ComponentProps<typeof LoadingWrapper> {
  logo: string
}

export function Loader({ logo }: LoaderProps) {
  return (
    <LoadingWrapper>
      <img
        src={logo}
        width={42}
        height={42}
        alt="logo"
        className="loading-icon"
      />
    </LoadingWrapper>
  )
}
