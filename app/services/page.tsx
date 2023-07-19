import React from "react";
import Container from "../components/Container";
import VisaTypes from "./VisaTypes";

const Services = () => {
  return (
    <>
      <div
        style={{ backgroundImage: "url(/office.jpg)" }}
        className={`h-72 bg-no-repeat bg-cover w-full `}
      ></div>
      <Container>
        <section className="my-8  px-4 mx-auto max-w-screen-xl ">
        <div className="text-center my-8">
          <h1 className="text-2xl ">Our Services</h1>
        </div>
        <VisaTypes />
        </section>
        
      </Container>
    </>
  );
};

export default Services;
