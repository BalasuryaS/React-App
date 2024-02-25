import React from 'react';
import { Link } from 'react-router-dom';

const Employee = () => {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Employee Details</title>
      <link rel="stylesheet" href="style1.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
      <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&family=Poppins:wght@300&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossOrigin="anonymous" referrerPolicy="no-referrer" />
      <nav className="navbar">
        <h1>Navabrind IT Solutions PVT. Ltd.,</h1>
        <div className="navbar-links">
          <p className="navbar-link"><a href="index2.jsx">Home</a></p>
          <p className="navbar-link"><a href="career.jsx">Career</a></p>
          <p className="navbar-link"><a href="contact.jsx">Contact Us</a></p>
        </div>
      </nav>
      <div className="header">
        <div>
          <h1> A UNIQUE CUSTOMER EXPERIENCE </h1>
          <h1>THROUGH OMNICHANNEL</h1>
          <p>Our omnichannel solutions help brands deliver superior customer experiences through a unified approach
            that unifies technology, services, and strategy. We can help your company reduce cost to serve and
            average handle time while also improving first contact resolution and customer satisfaction.</p>
          <button className="header-button">Book Demo</button>
        </div>
        <div>
          <img className="img-header" src="https://source.unsplash.com/random/300x300/?ecommerce logo?" alt="" />
        </div>
      </div>
      <div className="service">
        <div className="service-container-1">
          <div>
            <h2>Our Service Offering</h2>
            <h2>Customer Experience</h2>
          </div>
          <div>
            <p>||we ensure that our customer have the best customer service experience</p>
          </div>
        </div>
        <div className="service-container-2">
          <div>
            <i className="fa-regular fa-face-smile" />
            <h4>E-Commerce Development</h4>
            <p>We helps you to leverage Magento, WooCommerce, Shopify and BigCommerce to create a visually rich and
              unique shopping experience for your customers.</p>
          </div>
          <div>
            <i className="fa-regular fa-face-smile" />
            <h4>Odoo ERP Implementation</h4>
            <p>We have implemented, integrated, customized, migrated, and currently support and maintain ERPs for
              several customers in Europe, the US, Middle East, and India. Our expertise in Odoo, Microsoft
              Dynamics and Oracle ERP are well recognized</p>
          </div>
          <div>
            <i className="fa-regular fa-face-smile" />
            <h4>Akeneo PIM Implementation</h4>
            <p>Create a memorable experience for your product. Intelligently build an emotional connection and
              share information in context through Akeneo product information management.</p>
          </div>
        </div>
      </div>
      <h2 style={{ padding: 20 }}>Employee Details...</h2>
      <div className="new-arrival">
        <div className="new-arrival-container">
          <img src="https://source.unsplash.com/random/200x200/?professional man?2" alt="" />
          <Link to="bala.js" className="button">Mr. Bala Selvam</Link>
        </div>
        <div className="new-arrival-container">
          <img src="https://source.unsplash.com/random/200x200/?Professional girl?3" alt="" />
          <Link to="saipalavi.js" className="button">Miss. Saipalavi</Link>
        </div>
        <div className="new-arrival-container">
          <img src="https://source.unsplash.com/random/200x200/?Professional man?4" alt="" />
          <Link to="shiva.js" className="button">Mr.Shiva Athreya</Link>
        </div>
        <div className="new-arrival-container">
          <img src="https://source.unsplash.com/random/200x200/?Professional girl?5" alt="" />
          <Link to="priya.js" className="button">Miss. Priya Shankar</Link>
        </div>
      </div>
      <div className="news-letter">
        <h1>Want to know more...?</h1>
        <p>We’re here to help you get started with Navabrind Marketplace</p>
        <div className="input-box"><input type="text" /> </div>
        <div><button>Book a Demo<i className="fa-solid fa-phone" /></button> </div>
      </div>
      <div className="footer">
        <div className="footer-news">
          <h2>Navabrind IT Solutions Pvt. Ltd..,</h2>
          <p> A Unique Customer Experience Through Omnichannel</p>
          <div className="footer-news-icons">
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

export default Employee;
