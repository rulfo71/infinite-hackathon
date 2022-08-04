import infinite from './infinite.svg'

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="info-text title-text">
        <img src={infinite} alt="" className="title-image" />
        <br />
        <strong className='float-left'>GENESIS EDITION</strong>
        <strong className="float-right"> #0 </strong>
      </div>
      <div className="item">
        <div className="info-text"><span className="dot"></span> <strong>Date</strong> 7-9 October 2022</div>
        <div className="info-text"><span className="dot"></span> <strong>Location</strong> Bogota Colombia </div>
      </div>
      <div className="info-text">
        <span class="dot"/> <strong>Infinite Genesis </strong>
          is the inaugural edition of a more intimate hackathon built for <strong>hackers first</strong>.
          <br />Specializing in DeFi and DAOs, hackers will have 48 hours to realize their wildest concepts in a <strong> comfortable and accommodating environment</strong>.
          <br />Projects will compete for a variety of prizes, including Infinite <strong>trophies, medals, NFTs and crypto</strong>!
          <br />The judging will be public and streamed live.
      </div>
    </div>
  );
}

export default App;
