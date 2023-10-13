import { AppFooter, FooterTitle } from './styles'

export function Footer() {
  return (
    <AppFooter>
      <FooterTitle>
        © {year} CREDFRANCO – Soluções Financeiras.
      </FooterTitle>
      Todos os direitos reservados.
    </AppFooter>
  )
}