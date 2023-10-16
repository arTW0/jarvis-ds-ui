import { DropdownBox, DropdownButton, DropdownContent } from './styles'
import { useState } from "react";

export interface DropdownProps {
  options: {
    option: string
  }[]
  label: string
}

export function Dropdown({ options, label }: DropdownProps) {
  const [open, setOpen] = useState(false);

  const handleDropdownOpen = () => {
    setOpen(!open)
  }

  const optionsArray = [...options]

  return (
    <DropdownBox>
      <DropdownButton
        onClick={handleDropdownOpen}
      >
        {label}
      </DropdownButton>

      {open ?
        <DropdownContent>
          {optionsArray.map((item, index) => (
            <a
              key={`${item}${index}`}
              href="#"
            >
              {item.option}
            </a>
          ))}

        </DropdownContent>
        : null}

    </DropdownBox>
  )
}  
