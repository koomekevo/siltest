import React, { useEffect, useState } from 'react'
import HeaderSignedIn from '../components/HeaderSignedIn'
import axios from 'axios'

const Albums = () => {
  const [albums, setAlbums] = useState([])

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/albums')
      .then((res) => {
        console.log(res.data)
        setAlbums(res.data)
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
              <th scope='col' className='px-6 py-3'>Album ID</th>
              <th scope='col' className='px-6 py-3'>User ID</th>
              <th scope='col' className='px-6 py-3'>Album Title</th>
            </tr>
          </thead>
          <tbody>
            {albums.map((data) => {
              return (
                <tr key={data.id} class='bg-white border-b dark:bg-gray-800 dark:border-gray-700'>
                  <td className='px-6 py-4'>{data.id}</td>
                  <td className='px-6 py-4'>{data.userId}</td>
                  <td className='px-6 py-4'>{data.title}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Albums
