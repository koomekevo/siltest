import React, { useEffect, useState } from 'react'
import HeaderSignedIn from '../components/HeaderSignedIn'
import axios from 'axios'

const Photos = () => {
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then((res) => {
        console.log(res.data)
        setPhotos(res.data)
      })
      .catch((err) => console.log(err))
  }, [])

  const handleClick = (e) => {
    e.preventDefault()
    window.open(e.target.href)
  }

  return (
    <div>
      <HeaderSignedIn />
      <div className='flex justify-center items-center relative overflow-x-auto'>
        <table className='w-full text-sm text-left text-gray-500 dark:text-gray-400'>
          <thead className='text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Album ID
              </th>
              <th scope='col' className='px-6 py-3'>
                Photo Title
              </th>
              <th scope='col' className='px-6 py-3'>
                Image URL
              </th>
            </tr>
          </thead>
          <tbody>
            {photos.map((data) => {
              return (
                <tr
                  key={data.id}
                  class='bg-white border-b dark:bg-gray-800 dark:border-gray-700'
                >
                  <td className='px-6 py-4'>{data.albumId}</td>
                  <td className='px-6 py-4'>{data.title}</td>
                  <td className='px-6 py-4'>
                    <a href={data.url} onClick={handleClick}>
                      View Image
                    </a>
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

export default Photos
