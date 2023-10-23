import { ComponentProps } from 'react'
import { BoxRight, Details, Transaction, TransactionsBox } from './styles'

export interface TransactionsProps extends ComponentProps<typeof TransactionsBox> {
  title: string;
  category: string;
  amount: number;
  type: string;
  key: string;
  bgColor?: string;
  labelColor?: string;
}

export function Transactions({ title, amount, category, key, type, bgColor = '$gray500', labelColor = '$gray100' }: TransactionsProps) {
  return (
    <TransactionsBox key={key}>
      <Transaction
        href="#"
        css={{ backgroundColor: bgColor }}
      >
        <Details css={{ color: labelColor }}>
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