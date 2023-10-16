import { ComponentProps } from 'react'
import { BoxRight, Details, Transaction, TransactionsBox } from './styles'

export interface TransactionsProps extends ComponentProps<typeof TransactionsBox> {
  title: string;
  category: string;
  amount: number;
  type: string;
  key: string;
}

export function Transactions({ title, amount, category, key, type }: TransactionsProps) {
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