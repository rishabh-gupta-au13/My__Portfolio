import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>
        Have a project in mind? <br className='sm:block hidden' />
        Let’s build something together!
      </p>
      <Link to='https://www.linkedin.com/in/jaisharma1710' className='btn'>
        Connect
      </Link>
    </section>
  );
};

export default CTA;
