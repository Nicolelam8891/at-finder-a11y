import "./Home.css";
import { useEffect } from "react";
import Finding_AT from '../assets/Finding_AT.png';
import RobotBook from '../assets/RobotBook.png'

function Home( {handleButtonClick} ) {

  useEffect(() => {
    document.title = 'Home Page - AI AT Ally';
  }, [])

  return (
    <div className="splash-page-container">
      <div className='splash-image'></div>
      <div className='overlay'></div>
      <div className='info-container'>
        <p className="main-page-text"> <em>Are you or a loved one in need of assistive technology (AT)?</em> </p>
        <p className="main-page-text-2">Welcome to AI AT Ally! We use generative artificial intelligence (AI) to find tools that support the needs of people with disabilities. Please explore the site to learn more, leave comments, or rate tools you may have experience using.</p>
        <div className='splash-button-container'>
          <button className='find-AT-button' onClick={() => handleButtonClick('/findmyat')}>  Search for my assistive technology!
          <img src={Finding_AT} alt="Robot-AT-hand" className="AT-magnify-image"></img>
          </button>
          <button className='learn-AT-button' onClick={() => handleButtonClick('/learnat')}>Learn about assistive technology!
          <img src={RobotBook} alt="Robot-AT-hand" className="robot-learn-more-image"></img>
          </button>
         
        </div>
        {/* <div className='splash-button-container'>
          <button className='find-AT-button' onClick={() => handleButtonClick('/findmyat')}>Find my AT</button>
          <button className='learn-AT-button' onClick={() => handleButtonClick('/learnat')}>Learn more about AT</button>
          <button className='all-comments' onClick={() => handleButtonClick('/testcomments')}>Get Comments</button>
        </div> */}
      </div>
    </div>
    
  );
}

export default Home;

   {/* <div className='AT-info'>
        <h2 className="what-is-at">What is assistive technology?</h2>
        <div className="info-description">
        <p className="info-description">Assistive Technology is anything a person might use to help them manage the effects of a disability.</p>
        <p className="info-description">Assistive technology helps people who have difficulty speaking, typing, writing, remembering, pointing, seeing, hearing, learning, walking, and many other things. Different disabilities require different assistive technologies.</p>
        </div>
      </div> */}