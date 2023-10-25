import { ComponentProps, useState } from 'react';

import { Balance, BoxLeft, BoxRight, Title, Total, Wallet, ShowBalance } from './styles'

import { EyeClosed, Eye } from 'phosphor-react';

export interface WalletProps extends ComponentProps<typeof Wallet> {
  totalBalance: number
  addFoundsLink: string,
  bgColor?: string;
  labelColor?: string;
}

export function WalletComponent({ totalBalance, bgColor = '$red600', labelColor = '$gray100', }: WalletProps) {

  const [showBalance, setShowBalance] = useState(true);

  return (
    <Wallet>
      <Balance css={{ backgroundColor: bgColor }}>
        <BoxLeft>
          <Title css={{ color: labelColor }}>
            Total Balance
          </Title>
          <Total>
            {
              showBalance ?
                totalBalance ?
                  totalBalance.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
                  : 'R$ 0,00'
                : 'R$ •••••'
            }
          </Total>
        </BoxLeft>
        <BoxRight>
          <ShowBalance>
            {
              showBalance ?
                <Eye
                  onClick={() => setShowBalance(!showBalance)}
                />
                :
                <EyeClosed
                  onClick={() => setShowBalance(!showBalance)}
                />
            }
          </ShowBalance>
        </BoxRight>
      </Balance>
    </Wallet>
  )
}