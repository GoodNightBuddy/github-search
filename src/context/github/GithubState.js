import { useReducer } from "react"
import GithubContext from "./githubContext"
import githubReducer from "./githubReducer"

const GithubState = ({ children }) => {
  const initialState = {
    user: {},
    users: [],
    loading: false,
    repos: []
  }

  const [state, dispatch] = useReducer(githubReducer, initialState)

  return (
    <GithubContext.Provider value={{

    }}>
      {children}
    </GithubContext.Provider>
  )
}

export default GithubState