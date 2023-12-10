import './Error.css'

function Error ( {errorRoute, messageRoute} ) {
  return (
   <div className='error-details'>
      <div className='error-bad-route-container'>
        <img
          className='error-bad-route-image'
          alt='back home picture with branches'
          src='https://www.inclusionhub.com/hubfs/Blog/disabled-people-in-park-setting-1.jpg'
        />
        <h1 className='error-bad-route-message'>ERROR!</h1>
        {errorRoute && <h3 className='error-bad-route'>{errorRoute}</h3>}
        <p className='bad-route-message'>{messageRoute}</p>
      </div>
    </div>
  )
}

export default Error