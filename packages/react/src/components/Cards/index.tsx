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
  DropdownContent
} from './styles'

export interface CardsProps extends ComponentProps<typeof CardBox> {
  prefix?: string
}

export function Cards({ }: CardsProps) {
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
                checked={open}
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
            <CardLabel className="label">BALANCE</CardLabel>
            <h1 className="title">
              {balanceValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
            </h1>
          </CardBalance>

          <div>
            <CardNumber>
              <CardLabel className="label">Card Number</CardLabel>
              {`•••• ${cardNumber}`}
            </CardNumber>

            <CardBottom>
              <CardExpiry>
                <CardLabel className="label">Expiry Date</CardLabel>
                {expiryDate}
              </CardExpiry>

              <CardCVV>
                <CardLabel className="label">CVV</CardLabel>
                {cvv}
              </CardCVV>
            </CardBottom>
          </div>
        </CardMain>
      </CardBlock>
    </CardBox>
  )
}

