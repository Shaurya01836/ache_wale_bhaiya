import React from "react";

function LogoCloud() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          Trusted by the Most Inovative and Active Clubs of College
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            alt="Transistor"
            src="https://www.piet.poornima.org/images/council/uam.png"
            width={128}
            height={108}
            className="col-span-2 max-h-25 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Reform"
            src="https://www.piet.poornima.org/images/council/councillogo.png"
            width={158}
            height={88}
            className="col-span-2 max-h-27 w-full object-contain lg:col-span-1"
          />
          <img
            alt="Tuple"
            src="https://www.poornima.org/wp-content/uploads/2018/03/cropped-PG1-1.png"
            width={158}
            height={88}
            className="col-span-2 max-h-27 w-full object-contain lg:col-span-1"
          />
          <img
            alt="SavvyCal"
            src="https://i.ibb.co/QMpbHbK/Whats-App-Image-2024-10-15-at-9-43-52-PM-1-removebg-preview.png"
            width={158}
            height={88}
            className="col-span-2 max-h-27 w-full object-contain sm:col-start-2 lg:col-span-1"
          />
          <img
            alt="Statamic"
            src="https://i.ibb.co/QcBYdkP/Whats-App-Image-2024-10-16-at-4-30-14-PM.jpg"
            width={108}
            height={88}
            className="col-span-2 max-h-27 w-full object-contain sm:col-start-2 lg:col-span-1"
          />
        </div>
      </div>
    </div>
  );
}

export default LogoCloud;
