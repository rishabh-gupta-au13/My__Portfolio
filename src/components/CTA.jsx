import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Have a project in mind? <br className="sm:block hidden" />
        Let’s build something together!
      </p>

      {/* <Link
        to="https://cloud.appwrite.io/v1/storage/buckets/669390a7002c5ccd5f16/files/66d40b6e002d231f3ab0/view?project=6693908a0030efcb787b&mode=admin"
        className="btn"
        target="_blank"
      >
        Download Resume
      </Link> */}

      <Link to="https://www.linkedin.com/in/rishabh-gupta-b2835a1a6/" className="btn">
        Connect
      </Link>
    </section>
  );
};

export default CTA;
