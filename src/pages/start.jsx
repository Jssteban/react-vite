import { features } from "../utils/features";

const Start = () =>{
      return (
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center bg-primary">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-terceary">
                Pitchfork Kickstarter Taxidermy
              </h1>
              <p className="lg:w-1/2 w-full leading-relaxed text-secondary">
                Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table.
              </p>
            </div>
            <div className="flex flex-wrap -m-4 ">
              {features.map((feature, index) => (
                <div key={index} className="xl:w-1/3 md:w-1/2 p-4">
                  <div className="border border-gray-200 p-6 rounded-lg bg-primary">
                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-indigo-100 text-terceary mb-4">
                      {feature.icon}
                    </div>
                    <h2 className="text-lg text-secondary font-medium title-font mb-2">{feature.title}</h2>
                    <p className="leading-relaxed text-base text-secondary">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <button className="flex mx-auto mt-16 text-primary bg-terceary border-0 py-2 px-8 focus:outline-none hover:bg-terceary rounded-full text-lg">
              Button
            </button>
          </div>
        </section>
      );
    };
export default Start;