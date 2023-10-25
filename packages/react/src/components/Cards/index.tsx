import { ComponentProps, useState } from 'react'

import { DotsThreeOutline, PencilSimple, CaretDoubleUp, Trash } from 'phosphor-react'

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
  cardColor?: string;
}

export function Cards({ balanceValue, cardNumber, cvv, expiryDate, linkDelete, linkEdit, linkUpdate, cardColor = '$red400' }: CardsProps) {
  const [open, setOpen] = useState(false);

  const handleDropdownOpen = () => {
    setOpen(!open)
  }

  return (
    <CardBox>
      <CardBlock css={{ backgroundColor: cardColor }}>
        <CardMain>
          <CardButton>
            <Dropdown>
              <DropdownButton
                onClick={handleDropdownOpen}
              >
                <DotsThreeOutline />
              </DropdownButton>

              {open ?
                <DropdownContent>
                  <div>
                    <PencilSimple className="icon" />
                    <a href={linkEdit}>Editar</a>
                  </div>
                  <div>
                    <CaretDoubleUp className="icon" />
                    <a href={linkUpdate}>Atualizar</a>
                  </div>
                  <div>
                    <Trash className="icon" />
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
    </CardBox >
  )
}

