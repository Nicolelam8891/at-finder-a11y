import "./Home.css";

function Home( {handleButtonClick} ) {
  return (
    
    <div className='splash-background'>
      <div className='overlay'></div>
      <div className='info-container'>
        <h2 className="welcome-header">Welcome to AI AT Ally</h2>
        <p>If you need to research assistive technologies (AT) for yourself or a loved one, you've come to the right place. AI AT Ally, uses generative artificial intelligence (AI) to find tools that support the needs of people with disabilities. Please explore the site to learn more, leave comments, or rate tools you may have experience using.</p>
        <div className='splash-button-container'>
          <button className='find-AT-button' onClick={() => handleButtonClick('/findmyat')}>Find my AT</button>
          <button className='learn-AT-button' onClick={() => handleButtonClick('/learnat')}>Learn more about AT</button>
        </div>
        {/* <div className='splash-button-container'>
          <button className='find-AT-button' onClick={() => handleButtonClick('/findmyat')}>Find my AT</button>
          <button className='learn-AT-button' onClick={() => handleButtonClick('/learnat')}>Learn more about AT</button>
          <button className='all-comments' onClick={() => handleButtonClick('/testcomments')}>Get Comments</button>
        </div> */}
      </div>
      <div className='AT-info'>
        <h2 className="what-is-at">What is assistive technology?</h2>
        <div className="info-description">
        <p className="info-description">Assistive Technology is anything a person might use to help them manage the effects of a disability.</p>
        <p className="info-description">Assistive technology helps people who have difficulty speaking, typing, writing, remembering, pointing, seeing, hearing, learning, walking, and many other things. Different disabilities require different assistive technologies.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
