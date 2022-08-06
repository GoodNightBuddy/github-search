import React, { useContext, useEffect } from "react"
import { Link } from "react-router-dom"
import Loader from "../components/Loader"
import Repos from "../components/Repos"
import GithubContext from "../context/github/githubContext"

export const Profile = ({ match }) => {

  const { getUser, getRepos, loading, user, repos } = useContext(GithubContext)
  const urlName = match.params.name

  useEffect(() => {
    getUser(urlName)
    getRepos(urlName)
  }, [])

  if (loading) {
    return <Loader />
  }

  const {
    name, company, avatar_url, location, bio, blog, login, html_url, followers, following, public_repos, public_gists
  } = user

  return (
    <>
      <Link to="/" className="btn btn-link" >Go home</Link>
      <div className="card mb-4 border-0">
        <div className="car-body">
          <div className="row">
            <div className="col-sm-3 text-center">
              <img
                src={avatar_url}
                alt={name}
                style={{ width: '150px' }}
              />
              <h2>{name}</h2>
              {location && <p>Location: {location}</p>}
            </div>
            <div className="col">
              {
                bio && <>
                  <h3>BIO</h3>
                  <p>{bio}</p>
                </>
              }
              <a
                href={html_url}
                target="_blank"
                className="btn btn-dark"
                rel="noreferrer">
                Open profile</a>
              <ul>
                {login && <li>
                  <strong>Username: </strong> {login}
                </li>}
                {company && <li>
                  <strong>Company: </strong> {company}
                </li>}
                {blog && <li>
                  <strong>Website: </strong> {blog}
                </li>}
              </ul>
              <div className="badge badge-primary">Followers: {followers}</div>
              <div className="badge badge-success">Following: {following}</div>
              <div className="badge badge-infoy">Repositories: {public_repos}</div>
              <div className="badge badge-dark">Gists: {public_gists}</div>


            </div>
          </div>
        </div>
        <Repos repos={repos} />
      </div>
    </>
  )
}