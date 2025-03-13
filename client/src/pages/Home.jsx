import { Analytics } from "../components/Analytics";

export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p style={{ textAlign: "left" }}>My Mern Stack Website</p>
              <h1 style={{ textAlign: "left" }}>Welcome to Deepak Sinha</h1>
              <p style={{ textAlign: "left" }}>
                Are you ready to take your business to the next level with
                cutting-edge IT solutions? Look no further! At Deepak Sinha, we
                specialize in providing innovative IT services and solutions
                tailored to meet your unique needs.
              </p>

              <div className="btn btn-group" style={{ textAlign: "left" }}>
                <a href="/contact">
                  <button className="btn" style={{ marginRight: "10px" }}>
                    Connect Now
                  </button>
                </a>

                <a href="/services">
                  <button className="btn secondary-btn">Learn More</button>
                </a>
              </div>
            </div>

            {/* hero images */}
            <div className="hero-image">
              <img src="/images/home.png" alt="home image" />
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section  */}
      <section style={{ marginTop: "5rem" }}>
        <Analytics></Analytics>
      </section>

      {/* 3rd section  */}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          {/* hero images  */}
          <div className="hero-image">
            <img
              src="/images/design.png"
              alt="coding together"
              width="400"
              height="500"
            />
          </div>

          <div className="hero-content">
            <p style={{ textAlign: "left" }}>We are here to help you</p>
            <h1 style={{ textAlign: "left" }}>Get Started Today</h1>
            <p style={{ textAlign: "left" }}>
              Ready to take the first step towards a more efficient and secure
              IT infrastructure? Contact us today for a free consultation and
              lets discuss how Deepak Sinha can help your business thrive in the
              digital age.
            </p>
            <div className="btn btn-group" style={{ textAlign: "left" }}>
              <a href="/contact">
                <button className="btn">Connect Now</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">Learn More</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
