import React from 'react';

const BalaEmployee = () => {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Bala/Employye Detail</title>
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
          <h1>Mr. Balasurya Selvam</h1>
          <h3>Front-End Developer</h3>
          <p>
            Meet Bala, a seasoned front-end developer whose expertise in HTML, CSS, and JavaScript transforms digital
            landscapes into captivating experiences. With an eye for detail and a passion for pixel-perfection, Tom
            crafts seamless user interfaces that mesmerize audiences. His dedication to staying abreast of the
            latest trends and technologies ensures that his creations not only meet but exceed expectations,
            solidifying his reputation as a front-end virtuoso in the ever-evolving realm of web development.
          </p>
          <button className="header-button1">Book Demo</button>
        </div>
        <div>
          <img className="img-header" src="https://source.unsplash.com/random/200x200/?professional man?2" alt="" />
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

export default BalaEmployee;
