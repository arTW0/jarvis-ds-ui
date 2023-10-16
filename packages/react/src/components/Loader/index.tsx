import { LoadingWrapper } from './styles'

export function Loader() {
  return (
    <LoadingWrapper>
      <img
        src={'../../assets/logo.png'}
        width={42}
        height={42}
        alt="logo"
        className="loading_icon"
      />
    </LoadingWrapper>
  )
}