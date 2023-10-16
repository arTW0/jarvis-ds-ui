import { AppFooter, FooterTitle } from './styles'

export function Footer() {
  const year = new Date().getFullYear()
  return (
    <AppFooter>
      <FooterTitle>
        © {year} CREDFRANCO – Soluções Financeiras.
      </FooterTitle>
      Todos os direitos reservados.
    </AppFooter>
  )
}