import { styled } from './styles'

const Button = styled('button', {
  fontFamily: '$default',
  backgroundColor: '$gray100',
  borderRadius: '$md',
  padding: '$4',
})

export function App() {
  return <Button>teste</Button>
}
