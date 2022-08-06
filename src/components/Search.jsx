import React, { useContext, useState } from "react"
import { AlertContext } from "../context/alert/AlertContext"
import GithubContext from "../context/github/githubContext"

export const Search = () => {

  const [value, setValue] = useState('')

  const alert = useContext(AlertContext)
  const github = useContext(GithubContext)

  const onSubmit = (e) => {
    if (e.keyCode !== 13) return

    github.clearUsers()

    if (value.trim()) {
      alert.hide()
      github.search(value.trim())
    } else {
      alert.show('Enter user info')
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