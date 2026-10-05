import backgroundImage from "../assets/image 1.png";
import image2 from "../assets/logo 1.png";
import image3 from "../assets/image 3.png";

function Home() {
  const gyms = Array(5).fill({
    name: "Ldskla",
    location: "Vijay Nagar, Indore",
    fees: "1000Rs Per Month",
  });
  const gymsProuct=Array(5).fill({
    Name:"protine",
    discription:"1kg high protine and whight ganer",
    price:"1500Rs"
  })

  return (
    <div>
      <div>
        <img src={backgroundImage} alt="" className="h-150 w-full " />
      </div>
      <div className="bg-gray-50 min-h-screen pb-10">
        {/* 2. Headline */}
        <div className="w-fit m-auto p-5 border-4 border-gray-800 mt-5 rounded-2xl bg-white shadow-sm">
          <h1 className="font-bold text-3xl text-gray-800 text-center">
            FUCKOFF YOUR FEELINGS/PAST AND DO SOMETHING CRAZY
          </h1>
        </div>

        {/* 3. Section Title */}
        <div className="m-auto w-fit mt-8 mb-6 font-bold text-2xl text-gray-700">
          <h2>POPULAR GYMS</h2>
        </div>

        {/* 4. Gym Card Grid Container */}
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {gyms.map((gym, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col"
            >
              {/* Image Container */}
              <div className="h-48 w-full bg-gray-100 flex items-center justify-center p-4">
                <img
                  src={image2}
                  alt="Gym thumbnail"
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Card Content */}
              <div className="p-4 flex flex-col flex-grow justify-between gap-3">
                <div>
                  <h3 className="text-gray-800 mb-1">
                    <span className="font-semibold text-sm uppercase tracking-wider text-gray-400 block">
                      Gym Name
                    </span>
                    <span className="text-lg font-bold">{gym.name}</span>
                  </h3>

                  <p className="text-gray-600 text-sm">
                    <span className="font-semibold text-gray-500">
                      Location:{" "}
                    </span>
                    {gym.location}
                  </p>
                </div>

                {/* Bottom Action Row */}
                <div className="flex justify-between items-end pt-2 border-t border-gray-100">
                  <div>
                    <span className="font-semibold text-xs text-gray-400 block uppercase">
                      Fees
                    </span>
                    <p className="text-sm font-bold text-gray-700">
                      {gym.fees}
                    </p>
                  </div>
                  <button className="rounded-xl px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold text-sm transition-colors duration-200 shadow-sm">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <section>
          <h3 className="m-auto w-fit p-2 font-bold mt-5 mb-5">PRODUCT</h3>
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {gymsProuct.map((gym, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col"
            >
              {/* Image Container */}
              <div className="h-48 w-full bg-gray-100 flex items-center justify-center p-4">
                <img
                  src={image3}
                  alt="Gym thumbnail"
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Card Content */}
              <div className="p-4 flex flex-col flex-grow justify-between gap-3">
                <div>
                  <h3 className="text-gray-800 mb-1">
                    <span className="font-semibold text-sm uppercase tracking-wide block">
                      Porduct Name:
                    </span>
                    <span className="text-lg font-bold">{gym.Name}</span>
                  </h3>

                  <p className="text-gray-600 text-sm">
                    <span className="font-semibold">
                      discription:{" "}
                    </span>
                    {gym.discription}
                  </p>
                </div>

                {/* Bottom Action Row */}
                <div className="flex justify-between items-end pt-2 border-t border-gray-100">
                  <div>
                    <span className="font-semibold text-xs text-gray-400 block uppercase">
                      Rate:
                    </span>
                    <p className="text-sm font-bold text-gray-700">
                      {gym.price}
                    </p>
                  </div>
                  <button className="rounded-xl px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold text-sm transition-colors duration-200 shadow-sm">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
