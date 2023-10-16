import { ComponentProps } from 'react'
import { BoxRight, Details, Transaction, TransactionsBox } from './styles'

export interface TextInputProps extends ComponentProps<typeof TransactionsBox> {
  prefix?: string
}

export function Transactions({ prefix, ...props }: TextInputProps) {
  return (
    <TransactionsBox key={key}>
      <Transaction href="#">
        <Details>
          <strong>{title}</strong>
          <p>{category}</p>
        </Details>
        <BoxRight>
          <div
            className={type === "deposit" ? "price" : "price text-danger"}
          >
            {type === "deposit" ? amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }) : `- ${amount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`}
          </div>
        </BoxRight>
      </Transaction>
    </TransactionsBox>
  )
}