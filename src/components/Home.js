import "./Home.css";

function Home() {
  return (
    <div className='splash-background'>
      <div className='overlay'></div>
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
      <div className='info'>
        <p>
          Welcome to our site! Are you or a loved one searching for an assistive
          device to help you better navigate your life? You can easily do more
          research on our site to find the right technology for you, depending
          on your needs. Whether you want to learn more about certain assistive
          technologies or write our comment, our site is the right one for you
          to find your needs!
        </p>
      </div>
      <button className='find-AT-button'>Find my AT</button>
      <button className='learn-AT-button'>Learn more about AT</button>
    </div>
  );
}

export default Home;
