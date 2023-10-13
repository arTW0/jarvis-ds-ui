import { DropDown, DropDownButton, DropDownContent } from './styles'
import { useState } from "react";

export interface DropdownProps
  extends DropdownProps<typeof Dropdown> { }

export function Dropdown(props: DropdownProps) {
  const [open, setOpen] = useState(false);

  const handleDropdownOpen = () => {
    setOpen(!open)
  }

  const optionsArray = [...option]

  return (
    <Dropdown>
      <DropdownButton
        checked={open}
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

    </Dropdown>
  )
}  
