import react from "react";
import Hero from "../components/hero/Hero";
import Section from "../components/section/section";
import About from "../components/section/subsections/about";
import ImageSection from "../components/section/subsections/Image";
import Rooms from "../components/rooms/index";
import Testimonials from "../components/testimonials";
import Footer from "../components/footer/footer";
import Newsletter from "../components/newsletter/Newsletter";

const LandingPage = () => {
  // Hero title and subtitle
  const heroTitle = "Hotel that Defines a <br /> New Dimension of Luxury.";
  const title = "Up To 60% Off Book Your Dream Rooms Online Now!";

  return (
    <div className="wrapper">
      <Hero heroTitle={heroTitle} title={title} />
      <Section classes="bg-grey about-section bg-image">
        <div className="row">
          <div className="col-md-6">
            <ImageSection />
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-4">
            <About />
          </div>
        </div>
      </Section>
      <Section
        classes="bg-white rooms wow animate__animated animate__fadeIn animate__slow"
        title="Our Packages"
      >
        <Rooms />
      </Section>
      <Section
        classes="bg-grey testimonials bg-image wow animate__animated animate__fadeIn animate__slow"
        title="Our Happy Clients"
      >
        <Testimonials />
      </Section>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default LandingPage;
