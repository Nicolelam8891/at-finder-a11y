import './Error.css'

function Error ( {errorRoute, messageRoute} ) {
  return (
   <div className='error-details'>
      <div className='error-bad-route-container'>
        <img
          className='error-bad-route-image'
          alt='back home picture with branches'
          src='https://www.ucdenver.edu/images/librariesprovider38/default-album/people-w-disabilities-sized.jpg?sfvrsn=c3a5c3ba_0'
        />
        <h1 className='error-bad-route-message'>ERROR!</h1>
        {errorRoute && <h3 className='error-bad-route'>{errorRoute}</h3>}
        <p className='bad-route-message'>{messageRoute}</p>
      </div>
    </div>
  )
}

export default Error