import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
//import axios fr

export default function UserPage(props) {
  const initialUserState = {
    user: {},
    loading: true,
  }
  const [user, setUser] = useState(initialUserState)

  //useEffect(() => {
  // avec axios
    // const getUser = async () => {
    //   const { data } = await axios(`https://api.github.com/users/${props.match.params.userName}`)
    //     console.info(data)
    //   setUser(data)
    // }
    // async function getUser()
    // {
    //   const params = useParams();
    //   let response = await fetch(`https://api.github.com/users/${props.match.params.userName}`);
    //   let data = await response.json()
    //   setUser(data)
    // }
    // getUser()
    // }, [props.match.params.userName])
    const {userName} = useParams();
    useEffect(() => {
    if (userName) {
        const abortController = new AbortController();
        const getUser = async () => {
            const url = `https:/api.github.com/users/${userName}`;
            const res = await fetch(url, {
                method: 'GET',
                headers: { Accept: 'application/json' },
                signal: abortController.signal
            });
            if (res.ok && !abortController.signal.aborted) {
                const result = await res.json();
                setUser(result);
            }
        };

        getUser();
        return function cleanup() {
            abortController.abort();
              };
          }
      }, []);

  return user.loading ? (
    <div>Loading...</div>
  ) : (
    <div className="container">
      <h1></h1>

      <table>
        <thead>
          <tr>
           <th>ID</th>
            <th>Name</th>
            <th>Location</th>
            <th>Website</th>
            <th>Create</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.location}</td>
            <td>
              <a href={user.blog}>{user.blog}</a>
            </td>
            <td>{user.created_at}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
