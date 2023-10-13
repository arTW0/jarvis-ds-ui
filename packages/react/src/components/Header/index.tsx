import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';

import { useState } from "react";

import { BoxLeft, BoxLogo, Header, MeunuIcon } from './styles'

export function HeaderComponent() {
  return (
    <Header>
      <div className="box-left">
        {activeModal === "on" ?
          <button className="menu-icon" onClick={setModalIsOpen}>
            <MenuRoundedIcon />
          </button>
          : <div></div>
        }

        <Modal
          show={modalIsOpen}
          onClose={setModalIsOpen}
          children={children}
          width={"75vw"}
          height={"100vh"}
          backgroundColor={"#AE2736"}
        >
          {children}
        </Modal>

      </div>

      <div className="box-logo">
        <img
          src="/"
          width={160}
          height={100}
          alt="logo"
          priority={true}
        />
      </div>

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