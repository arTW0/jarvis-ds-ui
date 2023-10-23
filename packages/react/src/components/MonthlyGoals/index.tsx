import { Bill, Pay, IconBox } from './styles'

import PixRoundedIcon from '@mui/icons-material/PixRounded';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

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
            : categoryIcon === "credit-card" ? <CreditCardRoundedIcon />
              : categoryIcon === "transfer" ? <AttachMoneyRoundedIcon />
                : categoryIcon === "shopping" ? <ShoppingBasketRoundedIcon />
                  : categoryIcon === "loan" ? <AccountBalanceRoundedIcon />
                    : categoryIcon === "rent" ? <HomeRoundedIcon />
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