import "./Home.css";

function Home() {
  return (
    <div className='splash-background'>
      <div className='overlay'></div>

      <div className='info-container'>
        <p className="splash-main-info">
          Welcome to our site! Are you or a loved one searching for an assistive
          device to help better navigate your life? Here at AI AT Ally, you can easily do more
          research to find the right technology for you, depending
          on your needs. Whether you want to learn more about certain assistive
          technologies, write our comment or submit a rating, our site is the right one for you and your family! 
        </p>
        <div className='splash-button-container'>
          <button className='find-AT-button'>Find my AT</button>
          <button className='learn-AT-button'>Learn more about AT</button>
        </div>
      </div>

      <div className='AT-info'>
        <h1>What is assistive technology (AT)</h1>
        <p>
          Assistive technology (AT) is any item, piece of equipment, software
          program, or product system that is used to increase, maintain, or
          improve the functional capabilities of persons with disabilities.
          Assistive technology helps people who have difficulty speaking,
          typing, writing, remembering, pointing, seeing, hearing, learning,
          walking, and many other things. Different disabilities require
          different assistive technologies.{" "}
        </p>
      </div>
    </div>
  );
}

export default Home;
