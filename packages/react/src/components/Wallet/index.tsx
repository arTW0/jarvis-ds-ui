import ControlPointRoundedIcon from '@mui/icons-material/ControlPointRounded';
import { Balance, BoxLeft, BoxRight, Title, Total, Wallet } from './styles'
import { ComponentProps } from 'react';

export interface WalletProps extends ComponentProps<typeof Wallet> {
  totalBalance: number
  addFoundsLink: string,
  bgColor?: string;
  labelColor?: string;
}

export function WalletComponent({ totalBalance, addFoundsLink, bgColor = '$red600', labelColor = '$gray100', }: WalletProps) {
  return (
    <Wallet>
      <Balance css={{ backgroundColor: bgColor }}>
        <BoxLeft>
          <Title css={{ color: labelColor }}>
            Total Balance
          </Title>
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