import React, { useEffect, useState } from 'react'
import HeaderSignedIn from '../components/HeaderSignedIn'
import axios from 'axios'

const UserAlbums = () => {
  const [users, setUsers] = useState([])
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setUsers(response.data)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [])

  /* eslint-disable */
  useEffect(() => {
    if (users.length > 0) {
      users.map((user) => {
        axios
          .get(`https://jsonplaceholder.typicode.com/albums?userId=${user.id}`)
          .then((response) => {
            setAlbums((prevAlbums) => [...prevAlbums, ...response.data]);
          })
          .catch((error) => {
            console.error(error);
          });
      });
    }
  }, [users]);
  /* eslint-enable */

  return (
    <div>
      <HeaderSignedIn />
      <div className='flex justify-center items-center relative overflow-x-auto'>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Albums
              </th>
            </tr>
          </thead>
          <tbody>
            {albums.map((album) => {
              return (
                <tr
                  key={album.id}
                  class='bg-white border-b dark:bg-gray-800 dark:border-gray-700'
                >
                  <td className='px-6 py-4'>{album.title}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserAlbums
