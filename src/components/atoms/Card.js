import React from "react"

const Card = ({ heading, paragraph, imgUrl, projectLink1,projectLink2 }) => {
  console.log(imgUrl);
  return (
    
    <div
      className="card"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2)),url(" +
          imgUrl +
          ")",
        backgroundSize:'contain'
      }}
    >
      <div className="content">
        <h1 className="header">{heading}</h1>
        <p className="text">{paragraph}</p>
        <a
          href={projectLink1 ? projectLink1 : "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Explore
        </a>
        <a
          href={projectLink2 ? projectLink2 : "#"}
          target="_blank"
          rel="noopener noreferrer"
          className="btn"
        >
          Github
        </a>
      </div>
    </div>
  )
}

export default Card
