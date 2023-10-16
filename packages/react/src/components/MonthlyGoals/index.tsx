import { Bill, IconBox } from './styles'

import PixRoundedIcon from '@mui/icons-material/PixRounded';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded';
import AccountBalanceRoundedIcon from '@mui/icons-material/AccountBalanceRounded';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';

export function MonthlyBills() {
  return (
    <Bill>
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
      <a href={pageToPay} className="btn">PAY NOW</a>
    </Bill>
  )
}