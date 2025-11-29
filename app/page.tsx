export default function Home() {
  return (
    <main className="bg-white text-black min-h-screen">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="h-[20vh] lg:h-[25vh] bg-gradient-to-b from-[#FF8800] to-white"></div>
        <div className="px-2 lg:px-8 -mt-[19vh] lg:-mt-[22vh] relative z-10">
          <div className="max-w-md lg:max-w-6xl mx-auto bg-white rounded-3xl overflow-hidden pt-4 lg:pt-8 px-4 lg:px-8">
          {/* Header with Logo */}
          <div className="pb-2 lg:pb-4 text-center">
              <img
                src="/icons/sat-robo-logo.svg"
                alt="Satvik Robotics"
                className="h-16 md:h-20 lg:h-28 w-auto mx-auto"
              />
              <div className="flex items-center justify-center gap-2 mt-2 lg:mt-3">
                <span className="text-xs md:text-sm lg:text-base text-black">An initiative of</span>
                <img
                  src="/icons/MT.png"
                  alt="Mahatayi Trust"
                  className="h-10 w-auto"
                />
                <span className="text-xs md:text-sm lg:text-base text-black">Mahatayi Trust®</span>
              </div>
            </div>

            {/* Main Content Area */}
            <div className="relative">
              {/* Heading - Centered */}
              <div className="text-center mb-6 lg:mb-8">
                <p className="text-base md:text-lg lg:text-2xl xl:text-3xl text-black mb-2 leading-relaxed">
                  <span className="whitespace-nowrap"><span className="font-bold">A 4-hour</span> <span className="font-semibold">hands-on</span></span> robotics adventure
                  <br />
                  for curious teens
                </p>
              </div>

              {/* Portrait Image - Centered */}
              <div className="flex justify-center mb-0">
                <img
                  src="/images/sat-mallan-1.png"
                  alt="Satvik M Patil and Mallangouda Patil"
                  className="w-64 md:w-56 lg:w-72 xl:w-80 h-auto object-contain"
                />
              </div>

              {/* Host Information */}
              <div className="bg-gray-50 rounded-2xl lg:rounded-3xl border border-gray-300 px-4 lg:px-6 py-3 lg:py-4 flex justify-between items-start">
                <div className="text-left">
                  <p className="text-sm lg:text-lg xl:text-xl font-bold text-black">Satvik M Patil</p>
                </div>
                <div className="text-right">
                  <p className="text-sm lg:text-lg xl:text-xl font-bold text-black">Mallanagouda Patil</p>
                  <p className="text-xs lg:text-sm text-black mt-1">Software Engineer</p>
                </div>
              </div>

              {/* From Mahatayi Gurukul - Centered */}
              <div className="text-center mt-4 lg:mt-5">
                <p className="text-sm md:text-base lg:text-lg xl:text-xl text-green-600 mb-4 lg:mb-6">
                  From Mahatayi Gurukul
                </p>
                <p className="text-sm md:text-base lg:text-xl xl:text-2xl text-black mb-1">
                  <span className="font-bold">Build - play - explore</span>
                </p>
                <p className="text-sm md:text-base lg:text-xl xl:text-2xl text-black">
                  no computers required.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Overview – Short & Fun */}
      <section className="px-4 lg:px-8 py-12 md:py-16 lg:py-20 max-w-3xl lg:max-w-5xl xl:max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-center mb-10 lg:mb-16 text-black">
          What Happens in the <br className="lg:hidden" /> 4-Hour Workshop?
        </h2>
        <div className="space-y-10 lg:space-y-12 text-[#333333] text-base md:text-lg lg:text-xl leading-relaxed">
          {/* Session 1 */}
          <div className="rounded-xl lg:rounded-2xl p-6 lg:p-8 bg-white">
            <p className="text-sm lg:text-base font-semibold text-[#FF8800] mb-2">
              40 minutes session
            </p>
            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-black mb-3 lg:mb-4">
              Session 1 — What is a Robot?
            </h3>
            <div className="mb-4 lg:mb-6">
              <img
                src="/images/S1.png"
                alt="Session 1"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <p className="lg:text-lg xl:text-xl">
              We explore what actually makes a robot a robot — sensors, brains, motors,
              and power. Students play a fun <strong>"Robot or Not?"</strong> sorting game
              that gets everyone thinking like real roboticists.
            </p>
          </div>

          {/* Session 2 */}
          <div className="rounded-xl lg:rounded-2xl p-6 lg:p-8 bg-white">
            <p className="text-sm lg:text-base font-semibold text-[#FF8800] mb-2">
              60 minutes session
            </p>
            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-black mb-3 lg:mb-4">
              Session 2 — Build Your First Robot Body
            </h3>
            <div className="mb-4 lg:mb-6">
              <img
                src="/images/S2.png"
                alt="Session 2"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <p className="lg:text-lg xl:text-xl">
              Using simple motors, wheels, and a basic chassis, every team assembles
              their own working robot. No coding yet — just hands-on building and
              watching it move the moment the switch is flipped!
            </p>
          </div>

          {/* Session 3 */}
          <div className="rounded-xl lg:rounded-2xl p-6 lg:p-8 bg-white">
            <p className="text-sm lg:text-base font-semibold text-[#FF8800] mb-2">
              60 minutes session
            </p>
            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-black mb-3 lg:mb-4">
              Session 3 — Unplugged Programming + Sensors
            </h3>
            <div className="mb-4 lg:mb-6">
              <img
                src="/images/S3.png"
                alt="Session 3"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <p className="lg:text-lg xl:text-xl">
              Students become robots! Through a hilarious "Human-Robot Game," they learn
              commands, loops, and conditions — without touching a computer. Then they
              watch demo robots that avoid obstacles, follow light, or react to bumps.
            </p>
          </div>

          {/* Session 4 */}
          <div className="rounded-xl lg:rounded-2xl p-6 lg:p-8 bg-white">
            <p className="text-sm lg:text-base font-semibold text-[#FF8800] mb-2">
              80 minutes session
            </p>
            <h3 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-black mb-3 lg:mb-4">
              Session 4 — Robot Challenges + Future Path
            </h3>
            <div className="mb-4 lg:mb-6">
              <img
                src="/images/S4.png"
                alt="Session 4"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <p className="lg:text-lg xl:text-xl">
              Teams test their creations in fun challenges like straight-line runs and
              accuracy tests. We wrap up with a simple roadmap showing how students can
              continue learning robotics in the next 1–3 years.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        id="contact"
        className="px-4 lg:px-8 py-12 md:py-16 lg:py-20 bg-white border-t border-gray-200"
      >
        <div className="max-w-4xl lg:max-w-6xl mx-auto text-center">
          <div className="mb-6 lg:mb-8 flex justify-center">
            <img
              src="/icons/MT.png"
              alt="Mahatayi Trust Logo"
              className="h-36 md:h-20 lg:h-24 xl:h-28 w-auto"
            />
          </div>
          <h3 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold font-poppins mb-6 lg:mb-8 text-black">
            Mahatayi Trust®
          </h3>

          <p className="text-[#333333] text-base md:text-lg lg:text-xl xl:text-2xl mb-8 lg:mb-10">
            Bringing robotics education to schools and communities
          </p>

          <div className="flex flex-col lg:flex-row gap-2 lg:gap-6 justify-center items-center mb-8 lg:mb-10">
            <a
              href="mailto:satvikpatil2012@gmail.com"
              className="text-[#333333] text-base md:text-lg lg:text-xl hover:text-[#FF8800] transition-colors"
            >
              satvikpatil2012@gmail.com
            </a>
            <a
              href="tel:+917892255310"
              className="text-[#333333] text-base md:text-lg lg:text-xl hover:text-[#FF8800] transition-colors"
            >
              +91 7892255310
            </a>
          </div>

          <div className="mt-8 lg:mt-10 pt-8 lg:pt-10 border-t border-gray-200">
            <p className="text-[#333333] text-sm lg:text-base">
              © {new Date().getFullYear()} Mahatayi Trust. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
