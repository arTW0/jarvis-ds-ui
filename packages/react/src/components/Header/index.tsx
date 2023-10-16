import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';

import { BoxLeft, BoxLogo, Header, MenuIcon } from './styles'

import { Modal } from "../Modal";

import { useState } from "react";

export interface HeaderProps {
  children?: React.ReactNode;
  activeModal?: string;
  activeNotifications?: string;
  notificationLink?: string;
}

export function HeaderComponent({ children, activeModal, activeNotifications, notificationLink }: HeaderProps) {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  return (
    <Header>
      <BoxLeft>
        {activeModal === "on" ?
          <MenuIcon onClick={() => { setModalIsOpen }}>
            <MenuRoundedIcon />
          </MenuIcon>
          : <div></div>
        }

        <Modal
          show={() => { modalIsOpen }}
          onClose={() => { setModalIsOpen }}
          children={children}
        />

      </BoxLeft>

      <BoxLogo>
        <img
          src="/"
          width={160}
          height={100}
          alt="logo"
        />
      </BoxLogo>

      {activeNotifications === "on" ?
        <a
          href={notificationLink}
          className="box-right"
        >
          <NotificationsNoneRoundedIcon sx={{ color: "white" }} />
        </a>
        : <div></div>}
    </Header>
  )
}