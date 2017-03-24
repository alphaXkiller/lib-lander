import React from 'react'

import Logo from './logo'

class Home extends React.Component {
  render() {
    return (
      <div className=''>

				{/* <!-- CONTENT --> */}
        <div className="columns large-4">
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
        <div className="columns large-3">
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

  								{/* <!--<input type="email"	placeholder="your@email.com" id="email_address"  /> --> */}
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
				{/* <!-- CTA/FORM BLOCK --> */}

				{/* <!-- CONTENT --> */}

        {/* <!-- FOOTER --> */}
        {/* <div className="libfooter desktop">
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
