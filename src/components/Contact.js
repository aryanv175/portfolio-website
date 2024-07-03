import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-black text-white text-center">
      <h2 className="text-3xl font-bold mb-8">Contact</h2>
      <p className="text-xl mb-4">
        Seasonal Full Stack Software Engineer with over 8 years of hands-on experience in designing and implementing robust, scalable, and innovative web solutions.
      </p>
      <p className="text-xl mb-4">
        Contact me at: <a href="mailto:email@example.com" className="text-pink-500">email@example.com</a>
      </p>
      <div className="flex justify-center space-x-4 mt-8">
        <a href="https://x.com/DevWithAryan" className="text-white text-2xl"><i className="fab fa-twitter"></i></a>
        <a href="https://github.com/aryanv175" className="text-white text-2xl"><i className="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/aryanv175/" className="text-white text-2xl"><i className="fab fa-linkedin"></i></a>
      </div>
    </section>
  );
}

export default Contact;
