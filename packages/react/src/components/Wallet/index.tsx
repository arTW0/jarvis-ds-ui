import ControlPointRoundedIcon from '@mui/icons-material/ControlPointRounded';
import { Balance, BoxLeft, BoxRight, Title, Total, Wallet } from './styles'
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
          <Title>Total Balance</Title>
          <Total>
            {totalBalance ?
              totalBalance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
              : null}
          </Total>
        </BoxLeft>
        <BoxRight>
          <a href={addFoundsLink}>
            <ControlPointRoundedIcon
              sx={{
                color: "white",
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