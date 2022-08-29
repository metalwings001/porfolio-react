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
  
  const element = <div>Poggers<div>BIG POG</div></div>

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
      <p className='about-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, veniam sunt! Facilis aperiam quia doloremque illum laboriosam sequi laudantium accusantium ad aliquid, itaque ipsa delectus saepe consectetur incidunt nobis nostrum enim unde corporis. Quia assumenda mollitia quisquam suscipit laudantium exercitationem nihil!</p>
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
          <img className='work-image' src={weather}></img>
          <div className='work-image-text'> Weather Forecast App</div>
        </div>
        <div className='work-box'> <div className='work-text'>Weather Forecast App</div>
        <div className='work-details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum at provident quo repellat assumenda, porro ab! Provident reiciendis quasi vero dolorum fugit quod repudiandae, tempora, quia velit ex dignissimos magni quidem repellendus dicta hic doloribus. Mollitia eligendi laudantium officiis sed!</div>
        <div className='work-bar'>
          <a href='#' className='work-btn'>DEMO</a> <a href='#' className='work-btn'>CODE</a>
        </div>
        </div>
      </div>
      <div className='work-item'>
      <div className='work-box'> <div className='work-text'>Product Landing Page</div>
        <div className='work-details'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita rerum corporis laborum quas laboriosam inventore, veritatis doloremque temporibus eos explicabo sit enim! Debitis nobis quibusdam qui ex tenetur quasi tempore!</div>
        <div className='work-bar'>
          <a href='#' className='work-btn'>DEMO</a> <a href='#' className='work-btn'>CODE</a>
        </div>
        </div>
        <div className='work-image-box'>  
          <img className='work-image' src={web2}></img>
          <div className='work-image-text'> Product Landing Page </div>
        </div>
      </div>
      <div className='work-item'>
        <div className='work-image-box'>  
          <img className='work-image' src={web1}></img>
          <div className='work-image-text'> Product Help Center </div>
        </div>
       
        <div className='work-box'> <div className='work-text'>Product Help Center</div>
        <div className='work-details'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non delectus atque tempore reprehenderit ipsam dolor!</div>
        <div className='work-bar'>
          <a href='#' className='work-btn'>DEMO</a> <a href='#' className='work-btn'>CODE</a>
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
      <div className='work-details'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum at provident quo repellat assumenda, porro ab! Provident reiciendis quasi vero dolorum fugit quod repudiandae, tempora, quia velit ex dignissimos magni quidem repellendus dicta hic doloribus. Mollitia eligendi laudantium officiis sed!</div>
      <div className='work-bar'>
        <a href='#' className='work-btn'>DEMO</a> <a href='#' className='work-btn'>CODE</a>
      </div>
      
      </div>
     
      <div className='work-image-box'>  
          <img className='work-image' src={weather}></img>
          <div className='work-image-text'> Weather Forecast App</div>
      </div>
      
    </div>
    <div className='work-item'>
    <div className='work-box'> <div className='work-text'>Product Landing Page</div>
      <div className='work-details'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita rerum corporis laborum quas laboriosam inventore, veritatis doloremque temporibus eos explicabo sit enim! Debitis nobis quibusdam qui ex tenetur quasi tempore!</div>
      <div className='work-bar'>
        <a href='#' className='work-btn'>DEMO</a> <a href='#' className='work-btn'>CODE</a>
      </div>
      </div>
      <div className='work-image-box'>  
        <img className='work-image' src={web2}></img>
        <div className='work-image-text'> Product Landing Page </div>
      </div>
    </div>
    <div className='work-item'>
      
     
      <div className='work-box'> <div className='work-text'>Product Help Center</div>
      <div className='work-details'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non delectus atque tempore reprehenderit ipsam dolor!</div>
      <div className='work-bar'>
        <a href='#' className='work-btn'>DEMO</a> <a href='#' className='work-btn'>CODE</a>
      </div></div>
      <div className='work-image-box'>  
        <img className='work-image' src={web1}></img>
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
          <li className='footer-list-item'><a href='#'><img className='linked' src={linked} ></img></a> </li>
          <li className='footer-list-item'><a href='#' ><img className='gitHub' src={gitHub} ></img></a> </li>
          <li className='footer-list-item'><a href='#' ><img className='codepen' src={codepen} ></img></a> </li>

        </ul>
        <div className='footer-name'>Justin De León</div>
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
