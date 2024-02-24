// AboutPage.jsx
import './About.css';
import user from './carlsen about.jpg'
const AboutPage = () => {
  return (
    <div className='top'>
      <div className='bod'>  
      <img src={user} className='abi' height={700} width={670} 
     
        />
      </div>
      <div className="about-container">
      <h1>About Us</h1>
      <p>
      "Welcome to Gambit Paradise, where passion meets strategy and excellence is cultivated.
      At Gambit Paradise, our academy provides a supportive and enriching environment for growth.
      <br></br>
 we offer a comprehensive range of resources, including interactive lessons, insightful strategy sessions, and engaging tournaments.
 <p></p>
 Our mission is to inspire a lifelong love for chess while fostering critical thinking, sportsmanship, and camaraderie among our members.Join us on this exciting journey as we explore the boundless possibilities of the game and celebrate the art of chessmanship together.
<p></p>
 Gambit Paradise is your ultimate destination for all things chess.Come be a part of our thriving community and unlock your full potential on the chessboard!
 <div>

Welcome to Gambit Paradise. Let's make every move count."
</div>


<b>Age of Entry :</b>The entry age of online training is 6 years. The entry age of onboard – training is 5.5 Years
<br></br>

<b>Our Recommendation :</b>We recommend weekly 2 classes / Monthly 8 classes.
<br></br>
<b>Training Method :</b> Training through starchess website
<br></br>

<b>Students :</b> Starchess having students across UAE, US, UK etc.,
<br></br>
  </p>
    </div>
    </div>
    
  );
};

export default AboutPage;
