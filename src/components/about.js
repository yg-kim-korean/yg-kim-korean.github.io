import React from "react"
import Fade from "react-reveal/Fade"
import data from "../yourdata"
import Slider from '@farbenmeer/react-spring-slider';
import PropTypes from 'prop-types'
import mancity from '../images/mancity.jpg'
import wembly from '../images/wembly.jpg'
import paris from '../images/paris.jpg'
import madrid from '../images/madrid.jpg'
const About = () => {
  
	const BulletComponent = ({onClick, isActive}) => (
		<li
			style={{
        borderRadius:'50%',
				width: '10px',
				height: '10px',
        backgroundColor: 'white',
				margin: '0 4px',
				opacity: isActive && '0.5'
			}}
			onClick={onClick}
		/>
	);

	BulletComponent.propTypes = {
		onClick: PropTypes.func.isRequired,
		isActive: PropTypes.bool.isRequired
	};

  return (
    <div className="section" id="about">
      <div className="container">
        <div className="about-section">
          <div className="content">
            <Fade bottom cascade>
              <h1>About Me</h1>
            </Fade>
            <p>
              {data.aboutParaOne}
              <br></br>
              <br></br>
              {data.aboutParaTwo}
              <br></br>
              <br></br>
              {data.aboutParaThree}
            </p>
          </div>
          <div className="image-wrapper">
            <Slider activeIndex={4}
                    auto='3000'
                    hasBullets
                    BulletComponent={BulletComponent}>
              <img className="image-wrapper__img" src={mancity} alt="about"></img>
              <img className="image-wrapper__img" src={madrid} alt="about"></img>
              <img className="image-wrapper__img" src={wembly} alt="about"></img>
              <img className="image-wrapper__img" src={paris} alt="about"></img>
            </Slider>
          </div>
          {/* <div className="image-wrapper">
            <img src={data.aboutImage} alt="about"></img>
          </div> */}
        </div>
      </div>
    </div>
  )
}

export default About
