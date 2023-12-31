import { CloseButton, ModalContainer, ModalContent } from './styles'

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

export interface ModalProps {
  children?: React.ReactNode;
  show?: React.Dispatch<React.SetStateAction<boolean>>;
  onClose?: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Modal({ children, onClose, show }: ModalProps) {
  return (
    onClose ?
      <ModalContainer
        style={{
          transform: show ? "translateX(0%)" : "translateX(-290%)",
        }}
      >
        <ModalContent>
          <div className="border-top">
            <div>
              <AccountCircleRoundedIcon
                sx={{
                  color: "white",
                  fontSize: "2.5rem",
                }}
              />
            </div>
            <CloseButton
              onClick={() => {
                onClose(false);
              }}
            >
              <CloseRoundedIcon
                sx={{
                  fontSize: "2rem",
                }}
              />
            </CloseButton>
          </div>
          {children}
        </ModalContent>
      </ModalContainer>
      : null
  )
}