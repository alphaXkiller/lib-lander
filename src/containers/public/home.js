import React from 'react'
import Logo from './logo'
import './home.scss'

class Home extends React.Component {
  render() {
    return (
      <div className='content'>

        <section className='section-content'>
  				{/* <!-- CONTENT --> */}
          <div className="columns large-8 small-14">
            <div className="logo" id="logo">
              <div
                className="logobox"
                id="logobox"
                data-tilt data-tilt-reset="false"
                data-tilt-perspective="2000"
                >
                <Logo />
              </div>
            </div>
          </div>

          {/* <!-- CTA/FORM BLOCK --> */}
          <div className="columns large-6 small-14">
            <div className="copy_form">
              <h1 className="pink_on yne-activated">READY. SET. GO.</h1>
              <div className="clock"></div>
              <div className="copy">
                <p className="date bc-activated">September 22&ndash;24, 2017</p>
                <p className="text bc-activated">The frenzied anticipation of the first note of an unforgettable song. The electricity of thousands of people unified in one moment. The first savor of a new taste. The surprise and delight of an unexpected experience. A new friend, a new favorite, a new story to tell, a new view of our world. When the pulse of the city meets a passion for music, food, art and culture, you have something more than a festival. You have something beautiful.</p>
                <div className="form_box" id="form_box">
                  <form method="POST" action="https://lifeisbeautiful.activehosted.com/proc.php" name="emailsignup" id="_form_3_" className="emlform" encType="application/x-www-form-urlencoded">
                    <input type="hidden" name="u" value="3" />
                    <input type="hidden" name="f" value="3" />
                    <input type="hidden" name="s" />
                    <input type="hidden" name="c" value="0" />
                    <input type="hidden" name="m" value="0" />
                    <input type="hidden" name="act" value="sub" />
                    <input type="hidden" name="v" value="2" />

                    {/* <!--<input type="email" placeholder="your@email.com" id="email_address"  /> --> */}
                    <div className="_form-content">
                      <input type="text" name="email" placeholder="your@email.com" className="email_address cta1-activated" required />
                      <br />
                      <div className="_button-wrapper">
                        <button type="submit" className="submit_btn cta_off cta2-activated" id="_form_3_submit" value="JOIN THE PARTY">JOIN THE PARTY</button>
                      </div>
                      <div className="_clear-element" />
                    </div>
                    <div className="_form-thank-you" style={{display:'none'}}></div>
                  </form>

                </div>
              </div>
            </div>
          </div>
        </section>
          {/* <!-- CTA/FORM BLOCK --> */}

        <div style={{color: 'white'}}>

          <p>Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass.</p>
          <p>My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?</p>
          <p>My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?</p>
          <p>Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass.</p>
          <p>The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.</p>

        </div>
        <div style={{color: 'white'}}>

          <p>Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass.</p>
          <p>My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?</p>
          <p>My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?</p>
          <p>Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass.</p>
          <p>The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.</p>

        </div>
        <div style={{color: 'white'}}>

          <p>Normally, both your asses would be dead as fucking fried chicken, but you happen to pull this shit while I'm in a transitional period so I don't wanna kill you, I wanna help you. But I can't give you this case, it don't belong to me. Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass.</p>
          <p>My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?</p>
          <p>My money's in that office, right? If she start giving me some bullshit about it ain't there, and we got to go someplace else and get it, I'm gonna shoot you in the head then and there. Then I'm gonna shoot that bitch in the kneecaps, find out where my goddamn money is. She gonna tell me too. Hey, look at me when I'm talking to you, motherfucker. You listen: we go in there, and that nigga Winston or anybody else is in there, you the first motherfucker to get shot. You understand?</p>
          <p>Now that we know who you are, I know who I am. I'm not a mistake! It all makes sense! In a comic, you know how you can tell who the arch-villain's going to be? He's the exact opposite of the hero. And most times they're friends, like you and me! I should've known way back when... You know why, David? Because of the kids. They called me Mr Glass.</p>
          <p>The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness, for he is truly his brother's keeper and the finder of lost children. And I will strike down upon thee with great vengeance and furious anger those who would attempt to poison and destroy My brothers. And you will know My name is the Lord when I lay My vengeance upon thee.</p>

        </div>


				{/* <!-- CONTENT --> */}

        {/* <!-- FOOTER --> */}
        {/*<div className="libfooter desktop">
    			<ul>
    				<li><a href="mailto:LIBPress@rrpartners.com?subject=Life%20Is%20Beautiful%20Press%20Inquiry">Press</a></li>
    				<li>|</li>
    				<li><a href="mailto:sponsorships@lifeisbeautiful.com?subject=Life%20Is%20Beautiful%202017%20Sponsorship%20Inquiry">Sponsors</a></li>
    				<li>|</li>
    				<li><a href="legal.html">Legal</a></li>
    			</ul>
    			<span className="copyright">&copy; 2017 Life Is Beautiful. All Rights Reserved.</span>
    		</div> */}
        {/* <!-- FOOTER --> */}
	    </div>

    )
  }
}

export default Home
