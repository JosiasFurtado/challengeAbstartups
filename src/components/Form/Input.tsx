import React, { ChangeEvent, useRef, useEffect } from "react"
import { useField } from "@unform/core"

interface Props {
  name: string
}
type InputProps = JSX.IntrinsicElements["input"] & Props

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null)
  const { fieldName, registerField } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: "value",
      clearValue(ref: HTMLInputElement) {
        ref.value = ""
      },
    })
  }, [fieldName, registerField])

  return (
    <input
      className="border px-2 text-black w-full outline-none h-8 bg-white rounded-full"
      ref={inputRef}
      {...rest}
    />
  )
}

export default Input
