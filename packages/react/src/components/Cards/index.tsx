import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded'
import EditRoundedIcon from '@mui/icons-material/EditRounded'
import UpgradeRoundedIcon from '@mui/icons-material/UpgradeRounded'
import CreditCardOffRoundedIcon from '@mui/icons-material/CreditCardOffRounded'

import { ComponentProps, useState } from 'react'

import {
  CardBalance,
  CardBlock,
  CardBox,
  CardBottom,
  CardButton,
  CardCVV,
  CardExpiry,
  CardLabel,
  CardMain,
  CardNumber,
  Dropdown,
  DropdownButton,
  DropdownContent,
  Title
} from './styles'

export interface CardsProps extends ComponentProps<typeof CardBox> {
  balanceValue: number;
  cardNumber: string;
  expiryDate: string;
  cvv: string;
  linkEdit: string;
  linkUpdate: string;
  linkDelete: string;
}

export function Cards({ balanceValue, cardNumber, cvv, expiryDate, linkDelete, linkEdit, linkUpdate }: CardsProps) {
  const [open, setOpen] = useState(false);

  const handleDropdownOpen = () => {
    setOpen(!open)
  }

  return (
    <CardBox>
      <CardBlock>
        <CardMain>
          <CardButton>
            <Dropdown>
              <DropdownButton
                onClick={handleDropdownOpen}
              >
                <MoreHorizRoundedIcon
                  sx={{ fontSize: "2rem" }}
                />
              </DropdownButton>

              {open ?
                <DropdownContent>
                  <div>
                    <EditRoundedIcon className="icon" />
                    <a href={linkEdit}>Editar</a>
                  </div>
                  <div>
                    <UpgradeRoundedIcon className="icon" />
                    <a href={linkUpdate}>Atualizar</a>
                  </div>
                  <div>
                    <CreditCardOffRoundedIcon className="icon" />
                    <a href={linkDelete}>Excluir</a>
                  </div>
                </DropdownContent>

                : null}

            </Dropdown>
          </CardButton>
          <CardBalance>
            <CardLabel>BALANCE</CardLabel>
            <Title>
              {balanceValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </Title>
          </CardBalance>

          <div>
            <CardNumber>
              <CardLabel>Card Number</CardLabel>
              {`•••• ${cardNumber}`}
            </CardNumber>

            <CardBottom>
              <CardExpiry>
                <CardLabel>Expiry Date</CardLabel>
                {expiryDate}
              </CardExpiry>

              <CardCVV>
                <CardLabel>CVV</CardLabel>
                {cvv}
              </CardCVV>
            </CardBottom>
          </div>
        </CardMain>
      </CardBlock>
    </CardBox>
  )
}

