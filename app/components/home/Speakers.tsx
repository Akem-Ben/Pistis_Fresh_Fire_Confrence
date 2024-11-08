export const SpeakersSection = () => {
  return (
    <section className="relative">
      <div className="flex flex-col justify-center items-center">
        <div>
          <img src="/speakers/speakers.png" alt="Speakers" width="500px" />
        </div>
        <div className="font-serif text-[40px] text-white italic font-bold flex flex-col justify-center items-center mb-10">
          Meet God's choice ministers for you this season
        </div>
        <div className="flex gap-16">
          <div className="flex gap-10 items-center justify-center p-4">
            <div className="border rounded-full bg-opacity-20 flex justify-center items-center bg-yellow-100">
              <img
                src="/speakers/pastor-japheth.png"
                width="200px"
                alt="Pastor Japheth Joseph"
                className="h-auto rounded-full object-cover text-gray-700"
              />
            </div>
            <div className="">
              <h3 className="text-white font-serif text-[20px] italic font-bold flex flex-col justify-center items-center">
                Pst Japheth Joseph
              </h3>
              <p className="text-[16px] text-white font-serif flex flex-col justify-center items-center mb-6">
                The Pistis Place Global
              </p>
              <p className="text-[16px] w-[300px] text-white font-serif flex flex-col justify-center items-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>

          <div className="flex gap-10 items-center justify-center p-4">
            <div className="">
              <h3 className="text-white font-serif text-[20px] italic font-bold flex flex-col justify-center items-center">
                Apt Michael Orokpo
              </h3>
              <p className="text-[16px] text-white font-serif flex flex-col justify-center items-center mb-6">
                Encounter Jesus Ministries Int'l
              </p>
              <p className="text-[16px] w-[300px] text-white font-serif flex flex-col justify-center items-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
            <div className="border rounded-full bg-opacity-20 flex justify-center items-center bg-yellow-100">
              <img
                src="/speakers/apst-orokpo.png"
                width="200px"
                alt="Apostle Michael Orokpo"
                className="h-auto rounded-full object-cover text-gray-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
