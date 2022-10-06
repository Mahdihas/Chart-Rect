import React from 'react'
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
  const { isbn13,url,image,price,title,subtitle} = book;
  return (
//     <div className="card  bg-base-100 shadow-xl">
//   <figure><img src={image} alt="Shoes" /></figure>
//   <div className="card-body">
//     <h2 className="card-title">Shoes!</h2>
//     <p>If a dog chews shoes whose shoes does he choose?</p>
//     <div className="card-actions justify-end">
//       <button className="btn btn-primary">Buy Now</button>
//     </div>
//   </div>
// </div>
    
<Link to={`../book/${isbn13}`} aria-label='View Item'>
<div className='relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl'>
  <img
    className='object-cover w-full  '
    src={image}
    alt=''
  />
  <div className='absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100'>
    <p className='mb-4 text-lg font-bold text-gray-100'>{title}</p>
    <br />
    <p className='text-sm tracking-wide text-gray-300'>{subtitle}</p>
    <br />
    <p className='text-sm tracking-wide text-gray-300'>Price: {price}</p>
  </div>
</div>
</Link>
  )
}

export default Book