// Testimonials.js

import React from 'react';
import styles from './Testimonials.module.css';

const testimonialsData = [
  {
    quote: "HariKala Venture Management not only helped us secure funding but also provided invaluable strategic guidance that accelerated our growth. Their team's expertise and dedication are truly commendable.",
    author: 'John Doe',
    stars: 5
  },
  {
    quote: "Partnering with HariKala Venture Management was the best decision we made for our startup. Their tailored solutions and unwavering support have been instrumental in overcoming challenges and achieving our goals.",
    author: 'Jane Smith',
    stars: 5
  },
  {
    quote: "We are extremely grateful for the support provided by HariKala Venture Management. Their strategic insights and connections in the industry have been invaluable for our company's growth.",
    author: 'Emily Johnson',
    stars: 5
  }
];

const Testimonials = () => {
  return (
    <div className={styles.testimonialsContainer}>
      {testimonialsData.map((testimonial, index) => (
        <div key={index} className={styles.testimonial}>
          <div className={styles.avatar}>
            <img src="https://via.placeholder.com/50" alt="User Avatar" />
          </div>
          <div className={styles.content}>
            <p className={styles.quote}>
              "{testimonial.quote}"
            </p>
            <div className={styles.author}>
              <h4>{testimonial.author}</h4>
              <div className={styles.rating}>
                {[...Array(testimonial.stars)].map((_, i) => (
                  <span key={i} role="img" aria-label="star">⭐️</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Testimonials;
