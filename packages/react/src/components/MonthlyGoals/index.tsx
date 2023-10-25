import { Bill, Pay, IconBox } from './styles'

import PixRoundedIcon from '@mui/icons-material/PixRounded';

import { CurrencyDollar, CreditCard, ShoppingCartSimple, Bank, House } from 'phosphor-react'

export interface MonthlyBillsProps {
  categoryIcon: string | string[];
  price: number | number[];
  description: string | string[];
  pageToPay: string;
  bgColor?: string;
  buttonColor?: string;
  labelButtonColor?: string;
}

export function MonthlyBills({ categoryIcon, description, pageToPay, price, bgColor = '$red600', buttonColor = '$gray200', labelButtonColor = '$gray600' }: MonthlyBillsProps) {
  return (
    <Bill css={{ backgroundColor: bgColor }}>
      <div className="wrapper">
        <IconBox>
          {categoryIcon === "pix" ? <PixRoundedIcon />
            : categoryIcon === "credit-card" ? <CreditCard />
              : categoryIcon === "transfer" ? <CurrencyDollar />
                : categoryIcon === "shopping" ? <ShoppingCartSimple />
                  : categoryIcon === "loan" ? <Bank />
                    : categoryIcon === "rent" ? <House />
                      : null
          }
        </IconBox>
      </div>
      <div className="price">
        {price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
      </div>
      <p>{description}</p>
      <Pay
        css={{
          color: labelButtonColor,
          backgroundColor: buttonColor
        }}
        href={pageToPay}
      >
        PAY NOW
      </Pay>
    </Bill>
  )
}