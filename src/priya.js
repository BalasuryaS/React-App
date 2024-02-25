import React from 'react';

const PriyaEmployee = () => {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>priya/Employye Detail</title>
      <link rel="stylesheet" href="style.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&family=Poppins:wght@300&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      <nav className="navbar1">
        <h1>Navabrind IT Solutions PVT. Ltd.,</h1>
        <div className="navbar-links1">
          <p className="navbar-link1"><a href="index.html">Home</a></p>
          <p className="navbar-link1"><a href="career.html">Career</a></p>
          <p className="navbar-link1"><a href="contact.html">Contact Us</a></p>
        </div>
      </nav>
      <div className="header1">
        <div>
          <h1>Miss. Priya Bhavani</h1>
          <h3>Talent Acquisition Team</h3>
          <p>
            Meet Priya, the driving force behind talent acquisition, meticulously crafting teams of exceptional
            individuals. With a keen eye for potential, Emily navigates the ever-evolving landscape of recruitment,
            identifying top-tier candidates who align perfectly with organizational goals. Her strategic prowess and
            insightful approach to hiring ensure that every addition enhances team dynamics and fosters innovation.
            Emily's dedication to building diverse, high-performing teams propels companies forward, making her an
            indispensable asset in the competitive realm of talent acquisition.
          </p>
          <button className="header-button1">Book Demo</button>
        </div>
        <div>
          <img className="img-header" src="https://source.unsplash.com/random/300x300/?Professional girl?5" alt="" />
        </div>
      </div>
      <div className="footer1">
        <div className="footer-news1">
          <h2>Navabrind IT Solutions Pvt. Ltd..,</h2>
          <p> A Unique Customer Experience Through Omnichannel</p>
          <div className="footer-news-icons1">
            <i className="fa-brands fa-instagram" />
            <i className="fa-brands fa-twitter" />
            <i className="fa-brands fa-facebook" />
          </div>
          <h5>@ 2023 Navabrind IT Solutions Pvt. Ltd..,.com</h5>
        </div>
      </div>
    </div>
  );
};

export default PriyaEmployee;
