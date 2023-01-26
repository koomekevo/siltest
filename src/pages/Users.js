import React, { useEffect, useState } from 'react'
import HeaderSignedIn from '../components/HeaderSignedIn'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then((res) => {
        console.log(res.data)
        setUsers(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div>
      <HeaderSignedIn />
      <div className='flex justify-center items-center relative overflow-x-auto'>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Name
              </th>
              <th scope='col' className='px-6 py-3'>
                Username
              </th>
              <th scope='col' className='px-6 py-3'>
                Email
              </th>
              <th scope='col' className='px-6 py-3'>
                User Albums
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((data) => {
              return (
                <tr
                  key={data.id}
                  class='bg-white border-b dark:bg-gray-800 dark:border-gray-700'
                >
                  <td className='px-6 py-4'>{data.name}</td>
                  <td className='px-6 py-4'>{data.username}</td>
                  <td className='px-6 py-4'>{data.email}</td>
                  <td className='px-6 py-4'>
                    <button
                      type='button'
                      className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
                    >
                      <Link to='/UserAlbums' exact>
                        View Albums
                      </Link>
                    </button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Users
