import ControlPointRoundedIcon from '@mui/icons-material/ControlPointRounded';
import { Balance, BoxLeft, BoxRight, Wallet } from './styles'
import { ComponentProps } from 'react';

export interface WalletProps extends ComponentProps<typeof Wallet> {
  totalBalance: number
  addFoundsLink: string
}

export function WalletComponent({ totalBalance, addFoundsLink }: WalletProps) {
  return (
    <Wallet>
      <Balance>
        <BoxLeft>
          <span className="title">Total Balance</span>
          <h1 className="total">
            {totalBalance ?
              totalBalance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
              : null}
          </h1>
        </BoxLeft>
        <BoxRight>
          <a href={addFoundsLink}>
            <ControlPointRoundedIcon
              sx={{
                color: "black",
                fontSize: "2.5rem",
                marginTop: "1rem"
              }}
            />
          </a>
        </BoxRight>
      </Balance>
    </Wallet>
  )
}