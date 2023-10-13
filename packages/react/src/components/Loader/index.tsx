import { LoadingWrapper } from './styles'

export function Loader() {
  return (
    <LoadingWrapper>
      <img
        src={imageLogo}
        width={42}
        height={42}
        alt="logo"
        priority={false}
        className="loading_icon"
      />
    </LoadingWrapper>
  )
}