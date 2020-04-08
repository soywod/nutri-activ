import React, {FC} from "react"

import {ReactComponent as ButtonBackground} from "./button.svg"

import cs from "./button.module.scss"

export type PageButtonProps = {
  onClick: Function
}

const PageButton: FC<PageButtonProps> = props => {
  const {onClick: handleClick, children} = props

  return (
    <button className={cs.button} onClick={() => handleClick()}>
      <span className={cs.label}>{children}</span>
      <ButtonBackground className={cs.background} />
    </button>
  )
}

export default PageButton