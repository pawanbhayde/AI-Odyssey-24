import { brainwaveSymbol, check } from "../assets";
import { Aidept, collabApps, collabContent, collabText, CIS, CoE} from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";
import Heading from "./Heading"; 

const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container relative z-2">
				<Heading
					className="md:max-w-md lg:max-w-2xl"
					title="Challenge the Boundaries, Master AI Innovation"
				/>
      <div className="container lg:flex">
        <div className="max-w-[32rem]">
          <h2 className="h2 mb-4 md:mb-8">
            About AI Odyssey
          </h2>
                <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p>


          <Button href="https://tally.so/r/mBXEe4">Register Now</Button>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          {/* <p className="body-2 mb-8 text-n-4 md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p> */}
          <ul className="max-w-[45rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={18} height={18} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>

          <div className="relative left-1/2 flex w-[16rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-40 aspect-square m-auto border border-n-6 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-n-8 rounded-full">
                  <img
                    src={brainwaveSymbol}
                    width={48}
                    height={48}
                    alt="brainwave"
                  />
                </div>
              </div>
            </div>

            <ul>
              {collabApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[1.6rem] origin-bottom rotate-${
                    index * 45
                  }`}
                >
                  <div
                    className={`relative -top-[1.6rem] flex w-[3.2rem] h-[3.2rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      index * 45
                    }`}
                  >
                    <img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>

        </div>


        </div>
      </div>

      <div className="container lg:flex">
        <div className="max-w-full">
          <h6 className="h4 mb-4 mt-16 md:mb-8">
            AI Department
          </h6>
          <p className="body-2 max-w-[45rem] mb-8 text-n-4 md:mb-full lg:mb-full lg:w-full lg:mx-auto">
            {Aidept}
          </p>
          <LeftCurve/>
      </div>
      <div>
        <img src="" alt="" />
      </div>
    
      <RightCurve/>


      </div>

      <div className="container lg:flex">
        <div className="max-w-full">
          <h6 className="h4 mb-4 mt-16 md:mb-8">
            Centre of Excellence(AIML) 
          </h6>
          <p className="body-2 max-w-[45rem] mb-8 text-n-4 md:mb-full lg:mb-full lg:w-full lg:mx-auto">
            {CoE}
          </p>
          <LeftCurve/>
      <div>
        <img src="" alt="" />
      </div>
          <RightCurve/>

      </div>
      </div>

      <div className="container lg:flex">
        <div className="max-w-full">
          <h6 className="h4 mb-4 mt-16 md:mb-8">
            IEEE CIS SBC 
          </h6>
          <p className="body-2 max-w-[45rem] mb-8 text-n-4 md:mb-full lg:mb-full lg:w-full lg:mx-auto">
            {CIS}
          </p>
          <LeftCurve/>
      </div>
      <div>
        <img src="" alt="" />
      </div>

          <RightCurve/>

      </div>

    </Section>
  );
};

export default Collaboration;
