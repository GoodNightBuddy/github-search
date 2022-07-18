import React, { useContext, useState } from "react"
import { AlertContext } from "../context/alert/AlertContext"

export const Search = () => {

  const [value, setValue] = useState('')

  const {show, hide} = useContext(AlertContext)

  const onSubmit = (e) => {
    if(value.trim()) {
      console.log('Make request with: ', value);
      hide()
    }else {
      show('Enter user info')
    }
  }

  return (
    <div className="form-group">
    < input 
      type="text"
      className="form-control"
      placeholder="Enter user nickname..."
      onKeyDown={onSubmit}
      value={value}
      onChange={e => setValue(e.target.value)}
    />
    </div>
  )
}