import './Error.css'

function Error ( {errorRoute, messageRoute} ) {
  return (
   <div className='error-details'>
      <div className='error-bad-route-container'>
        <img
          className='error-bad-route-image'
          alt='back home picture with branches'
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlW9otdB44JzqHSBZjKkq7wTC8AGeI2exRoPuqymU1OvzAzA9KZB2jdf1SZwIS4ufaWzU&usqp=CAU'
        />
        <h1 className='error-bad-route-message'>ERROR!</h1>
        {errorRoute && <h3 className='error-bad-route'>{errorRoute}</h3>}
        <p className='bad-route-message'>{messageRoute}</p>
      </div>
    </div>
  )
}

export default Error