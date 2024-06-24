import React from "react";

const MyComponent = () => {
  return (
    <div>
      <div className="categoryBox">
        <h1>Find Your Perfect Travel Insurance Match</h1>
        <h3>Tailored Plans for Every Traveler, Destination, and Activity</h3>
        <p>
          Heading to a tropical beach, a bustling city, or scaling mountain
          peaks? We’ve got you covered. Our plans are specifically designed to
          align with your destination and activities, ensuring comprehensive
          protection no matter where your journey takes you. With our
          personalized approach, you’ll find the perfect insurance plan that
          fits your travel style and needs, giving you peace of mind to fully
          enjoy your travel experiences.
        </p>
        <div className="planBox row">
          <i className="fa fa-trash" aria-hidden="true" />
          <div className="col-sm-3">
            <a className="">
              {/* <img
                className="CategoryIcon1"
                width={30}
                height={30}
                src="https://localhost:5001/images/default-source/default-album/icnstudent8aff681e-c01a-4281-b6ea-1c3080d0fb88.png"
                alt=""
              /> */}
              {/* <h3>Student</h3> */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
