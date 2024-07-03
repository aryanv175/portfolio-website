import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-161513 text-white text-center">
      <h2 className="text-3xl font-bold mb-8">Contact</h2>
      <p className="text-xl mb-4">
        Looking for full time software developer internships and entry level positions.
      </p>
      <p className="text-xl mb-4">
        Contact me at: <a href="mailto:jobs.aryanverma@gmail.com" className="gradient-text">jobs.aryanverma@gmail.com</a>
      </p>
      <div className="flex justify-center space-x-4 mt-8">
        <a href="https://x.com/DevWithAryan" className="text-white text-2xl"><i className="fab fa-twitter">Twitter</i></a>
        <a href="https://github.com/aryanv175" className="text-white text-2xl"><i className="fab fa-github">Github</i></a>
        <a href="https://www.linkedin.com/in/aryanv175/" className="text-white text-2xl"><i className="fab fa-linkedin">LinkedIn</i></a>
      </div>
    </section>
  );
}

export default Contact;
