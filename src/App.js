import React from 'react'
import {useState, useEffect} from 'react'
import { useMediaQuery } from 'react-responsive'
import './styles.css'

import me from './images/me.jpg'
import program from'./images/program.svg'
import program2 from'./images/program2.svg'
import program3 from'./images/program3.svg'
import desktop from './images/desktop-cropped.svg'
import keyboard from './images/keayboard.png'
import pencil from './images/pencil.PNG'
import folder from './images/folder.png'
import reactImage from './images/react.png'
import weather from './images/weather.png'
import pricing from './images/pricing2.png'
import help from './images/help.PNG'
import weatherMobile from './images/weather-mobile.PNG'
import pricingMobile from './images/pricing-mobile.PNG'
import helpMobile from './images/help-mobile.PNG'
import linked from './images/LinkedIn2.png'
import gitHub from './images/github.png'
import downArrow from './images/downarrow.png'
import down2 from './images/down2.png'
import dIcon from './images/D.png'
import jd from './images/JD.PNG'
import codepen from './images/codepen2.png'
import web1 from './images/web1-img.PNG'
import web2 from './images/web2-img.PNG'



const NavDesktop = () => {
  const isDesktop = useMediaQuery({ minWidth: 1125 })
  return (

    <div>
      
     <nav className="header-container">
        <div className="logo">
          <div className="hex"></div>
          <img className='logo-img' src={jd} alt='a pic of a JD logo' /> 
          
           <div className="logo-title">
              Justin De León
           </div>
        </div>
        <ul className='nav-list'>
          <li className='nav-item'><a href='#about-container' className='left'>ABOUT</a></li>
          <li className='nav-item'><a href='#work-container' className='left'>WORK</a></li>
          <li className='nav-item'><a href='#contact-container' className='left'>CONTACT</a></li>
        </ul>
        
      </nav>
      <SectionOne isDesktop = {isDesktop}  />
      <About  isDesktop />
      {isDesktop ? <WorkDesktop /> : <WorkMobile /> }
      
      <Contact isDesktop />
      <Footer  isDesktop />
    </div>
  )
}

const NavMobile = () => {
  const [isToggled, setToggled] = useState(false)
  const isDesktop = useMediaQuery({ minWidth: 1125 })
  

  let myclassName = 'nav-list-mobile'

  const handleClick = (event) => {
    setToggled(!isToggled)

  }

  return (
    <div>
      
     <div className="header-container">
        <div className="logo">
          <img className='logo-img' src={jd} alt='a pic of a JD logo' /> 
           <div className="logo-title">
              Justin De León
           </div>
        </div>

        <div className={isToggled ? 'hamburger-lines active' : 'hamburger-lines'} onClick={handleClick}> 
        
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span> 
        </div>  

        {/*isToggled ? element : <div> not pog </div>*/}
        <ul className={isToggled ? 'nav-list-mobile active' : 'nav-list-mobile'}>
          <li className='nav-item-mobile'><a href='#about-container' className='left left2'>ABOUT</a></li>
          <div className="hline"></div>
          <li className='nav-item-mobile'><a href='#work-container' className='left left2'>WORK</a></li>
          <div className="hline"></div>
          <li className='nav-item-mobile'><a href='#contact-container' className='left left2'>CONTACT</a></li>
          <div className="hline"></div>
        </ul>
      </div>

      


      
      <SectionOne isDesktop = {isDesktop}  />
      <About  isDesktop />
      {isDesktop ? <WorkDesktop /> : <WorkMobile /> }
      
      <Contact isDesktop />
      <Footer  isDesktop />
      
    </div>
  )

}
const SectionOne = ({isDesktop}) => {
  return (
    <div>
      <div className="section-one-container">
        <div className='section-one-side-to-side'>
          {isDesktop ? <img className='program-image' src={program3} alt='program image'></img> 
          : <img className='program-image' src={desktop} alt='program image'></img>}
          <div className='main-text'>Hi, I am <span className='my-name'>Justin De León</span>
          <div className='job-text'>Front-End Dev</div></div>
        </div>
        <a href='#about-container'><img className='downarrow' src={down2}></img></a>
      </div>
    
      
    </div>
  )
}

const About = () => {
  return (
    <div className='about-container' id='about-container'>
     
      <div className="about-title" >
        About Me
      </div>
      <img className='face-image' src={me} alt='pic of my face'></img>
      <p className='about-text'>Hello I am Justin and I am passionate about front-end development. After graduating with a B.S. in Computer Science I have been working on various front-end projects. I am experienced and familiar with front-end framework ReactJs along with JavaScript and CSS. 
</p>
      <div className="about-box">
        <div className='box-title'>
          What I am 
        </div>
        <div className='about-item-container'>
          <div className="about-item">
            <img className='about-image' src={keyboard}></img>
            Front-End Dev
          </div>
          <div className="about-item">
          <img className='about-image' src={pencil}></img>
            Responsive Web Designer
            
          </div>
          <div className="about-item">
            <img className='about-image' src={reactImage}></img>
            React Developer
            
          </div>
          </div>
      </div>

    </div>
  )
}
const WorkDesktop = () => {
  return (
    <div className='work-container' id='work-container'>
      <div className='work-title'><div className='work-text-alt'>Some Of My Work</div></div>
      <div className='work-item'>
      <div className='work-image-box'>  
          <a target="_blank" href='https://metalwings001.github.io/forecast-app/'><img className='work-image' src={weather}></img></a>
          <div className='work-image-text'> Weather Forecast App</div>
        </div>
        <div className='work-box'> <div className='work-text'>Weather Forecast App</div>
        <div className='work-details'>Created an app that provides you with a 5 day weather forecast. Made using ReactJs alongside OpenWeather API and Nominatim API to get your geographical data and weather conditions.</div>
        <div className='work-bar'>
          <a href='https://metalwings001.github.io/forecast-app/' target="_blank" className='work-btn'>DEMO</a> <a target="_blank" href='https://github.com/metalwings001/weather_app_public' className='work-btn'>CODE</a>
        </div>
        </div>
      </div>
      <div className='work-item'>
      <div className='work-box'> <div className='work-text'>Product Landing Page</div>
        <div className='work-details'>Created a fully responsive product landing page layout. The landing page design is dynamic and robust featuring essential techniques and features when desiging a product landing page. Created using CSS with the use of flexbox. </div>
        <div className='work-bar'>
          <a target="_blank" href='https://metalwings001.github.io/product-landing-page/' className='work-btn'>DEMO</a> <a target="_blank" href='https://github.com/metalwings001/product-landing-page/tree/master' className='work-btn'>CODE</a>
        </div>
        </div>
        <div className='work-image-box'>  
          <a target="_blank" href='https://metalwings001.github.io/product-landing-page/'><img className='work-image' src={web2}></img></a>
          <div className='work-image-text'> Product Landing Page </div>
        </div>
      </div>
      <div className='work-item'>
        <div className='work-image-box'>  
          <a target="_blank" href='https://metalwings001.github.io/help-center/'><img className='work-image' src={web1}></img></a>
          <div className='work-image-text'> Product Help Center </div>
        </div>
       
        <div className='work-box'> <div className='work-text'>Product Help Center</div>
        <div className='work-details'>Created a responsive Product help center page. The page contains usefully layout techniques for all areas and features for users to navigate the website easily. Created using CSS with the use of flexbox. </div>
        <div className='work-bar'>
          <a target="_blank" href='https://metalwings001.github.io/help-center/' className='work-btn'>DEMO</a> <a target="_blank" href='https://github.com/metalwings001/help-center' className='work-btn'>CODE</a>
        </div></div>
      
       
      </div>
    </div>
  )
}

const WorkMobile = () => {
  return(
    <div className='work-container' id='work-container'>
    <div className='work-title'><div className='work-text-alt'>Some Of My Work</div></div>
    <div className='work-item'>
      
      <div className='work-box'> <div className='work-text'>Weather Forecast App</div>
      <div className='work-details'>Created an app that provides you with a 5 day weather forecast. Made using ReactJs alongside OpenWeather API and Nominatim API to get your geographical data and weather conditions.</div>
      <div className='work-bar'>
      <a href='https://metalwings001.github.io/forecast-app/' target="_blank" className='work-btn'>DEMO</a> <a target="_blank" href='https://github.com/metalwings001/weather_app_public' className='work-btn'>CODE</a>
      </div>
      
      </div>
     
      <div className='work-image-box'>  
        <a target="_blank" href='https://metalwings001.github.io/forecast-app/'><img className='work-image' src={weather}></img></a>
        <div className='work-image-text'> Weather Forecast App</div>
      </div>
      
    </div>
    <div className='work-item'>
    <div className='work-box'> <div className='work-text'>Product Landing Page</div>
      <div className='work-details'>Created a fully responsive product landing page layout. The landing page design is dynamic and robust featuring essential techniques and features when desiging a product landing page. Created using CSS with the use of flexbox.</div>
      <div className='work-bar'>
      <a target="_blank" href='https://metalwings001.github.io/product-landing-page/' className='work-btn'>DEMO</a> <a target="_blank" href='https://github.com/metalwings001/product-landing-page/tree/master' className='work-btn'>CODE</a>
      </div>
      </div>
      <div className='work-image-box'>  
        <a target="_blank" href='https://metalwings001.github.io/product-landing-page/'><img className='work-image' src={web2}></img></a>
        <div className='work-image-text'> Product Landing Page </div>
      </div>
    </div>
    <div className='work-item'>
      
     
      <div className='work-box'> <div className='work-text'>Product Help Center</div>
      <div className='work-details'>Created a responsive Product help center page. The page contains usefully layout techniques for all areas and features for users to navigate the website easily. Created using CSS with the use of flexbox.</div>
      <div className='work-bar'>
      <a target="_blank" href='https://metalwings001.github.io/help-center/' className='work-btn'>DEMO</a> <a target="_blank" href='https://github.com/metalwings001/help-center' className='work-btn'>CODE</a>
      </div></div>
      <div className='work-image-box'>  
        <a target="_blank" href='https://metalwings001.github.io/help-center/'><img className='work-image' src={web1}></img></a>
        <div className='work-image-text'> Product Help Center </div>
      </div>
     
    </div>
  </div>
)}

const Resume = () => {

}
const Contact = () => {
  return (
    <div className='contact-container' id='contact-container'>
     
      <div className='contact-form'>
        <form className='contact-form' action="https://formsubmit.co/jadeleon3@gmail.com" method="POST">
          <div className='contact-title'>Get In Touch</div>
          <input className='form-item'type="text" name="name" required placeholder='Name'/> 
          <input className='form-item' type="email" name ="email" required placeholder='Email'/>
          <textarea className='form-item' placeholder="Your Message" name="message" rows="10" required></textarea>
          <button className='contact-btn' type="submit">Send</button>
        </form>
      </div> 
      
    </div>
  )
}

const Footer = () => {
  return(
    <div>
      <div className='footer-line'>
       

      </div>
      <footer className='footer-container'>
        <ul className='footer-list'>
          <li className='footer-list-item'><a target="_blank" href='https://www.linkedin.com/in/justin-de-leon-1180a1213/'><img className='linked' src={linked} ></img></a> </li>
          <li className='footer-list-item'><a target="_blank" href='https://github.com/metalwings001' ><img className='gitHub' src={gitHub} ></img></a> </li>
          

        </ul>
        <div className='footer-name'>Justin De León</div>
        <div className='footer-name'>Email me: jadeleon3@gmail.com</div>
      </footer>
    </div>
  )
}

const App = () => {
  const isDesktop = useMediaQuery({ minWidth: 1125 })
  
  return (
    <div>
     
      {isDesktop ? <NavDesktop /> : <NavMobile />}
     
    
    </div>
  )

}

export default App;
