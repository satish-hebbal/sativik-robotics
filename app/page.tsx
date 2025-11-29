export default function Home() {
  return (
    <main className="bg-white text-black min-h-screen">
      {/* Hero Section */}
      <section className="bg-white">
        <div className="h-[20vh] bg-gradient-to-b from-[#FF8800] to-white"></div>
        <div className="px-2 -mt-[18vh] relative z-10">
          <div className="max-w-md mx-auto bg-white rounded-3xl overflow-hidden pt-4 px-4">
          {/* Header with Logo */}
          <div className="pb-2">
              <img
                src="/icons/sat-robo-logo.svg"
                alt="Satvik Robotics"
                className="h-16 md:h-20 w-auto"
              />
            </div>

            {/* Main Content Area */}
            <div className=" relative">
              {/* Text Content and Hero Image Side by Side */}
              <div className="flex items-start">
                {/* Text Content */}
                <div className="flex-1 space-y-4 pt-12">
                  <p className="text-base md:text-lg text-black mb-2">
                    <span className="font-bold">A 4-hour</span> <span className="font-semibold">hands-on</span>
                    <br />
                    robotics adventure
                    <br />
                    for curious teens
                    <br />
                    (Ages 14-16)
                  </p>

                  <div>
                  <p className="text-sm md:text-base text-black mb-1">
                    <span className="font-bold">Build - play - explore</span>
                  </p>
                  <p className="text-sm md:text-base text-black">
                    no computers required.
                  </p>
                  </div>
                </div>

                {/* Portrait Image */}
                <div className="flex-shrink-0">
                  <img
                    src="/images/Satvik-hero-figure.png"
                    alt="Satvik M Patil"
                    className="w-48 h-auto object-contain"
                  />
                </div>
              </div>

              {/* Host Information */}
              <div className="bg-white rounded-2xl border-2 border-gray-200 px-4 py-3 flex justify-between items-center">
                <div className="text-left">
                  <p className="text-xs text-gray-600 mb-1">Your Host</p>
                </div>
                <div className="text-right">
                  <p className="text-sm font-bold text-black">Satvik M Patil</p>
                  <p className="text-xs text-gray-700">Mahatayi Gurukul</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Overview – Short & Fun */}
      <section className="px-4 py-12 md:py-16 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10 text-black">
          What Happens in the <br /> 4-Hour Workshop?
        </h2>
        <div className="space-y-10 text-[#333333] text-base md:text-lg leading-relaxed">
          {/* Session 1 */}
          <div className="rounded-xl p-6 bg-white">
            <p className="text-sm font-semibold text-[#FF8800] mb-2">
              40 minutes
            </p>
            <h3 className="text-2xl font-bold text-black mb-3">
              Session 1 — What is a Robot?
            </h3>
            <p>
              We explore what actually makes a robot a robot — sensors, brains, motors,
              and power. Students play a fun <strong>"Robot or Not?"</strong> sorting game
              that gets everyone thinking like real roboticists.
            </p>
          </div>

          {/* Session 2 */}
          <div className="rounded-xl p-6 bg-white">
            <p className="text-sm font-semibold text-[#FF8800] mb-2">
              60 minutes
            </p>
            <h3 className="text-2xl font-bold text-black mb-3">
              Session 2 — Build Your First Robot Body
            </h3>
            <p>
              Using simple motors, wheels, and a basic chassis, every team assembles
              their own working robot. No coding yet — just hands-on building and
              watching it move the moment the switch is flipped!
            </p>
          </div>

          {/* Session 3 */}
          <div className="rounded-xl p-6 bg-white">
            <p className="text-sm font-semibold text-[#FF8800] mb-2">
              60 minutes
            </p>
            <h3 className="text-2xl font-bold text-black mb-3">
              Session 3 — Unplugged Programming + Sensors
            </h3>
            <p>
              Students become robots! Through a hilarious "Human-Robot Game," they learn
              commands, loops, and conditions — without touching a computer. Then they
              watch demo robots that avoid obstacles, follow light, or react to bumps.
            </p>
          </div>

          {/* Session 4 */}
          <div className="rounded-xl p-6 bg-white">
            <p className="text-sm font-semibold text-[#FF8800] mb-2">
              80 minutes
            </p>
            <h3 className="text-2xl font-bold text-black mb-3">
              Session 4 — Robot Challenges + Future Path
            </h3>
            <p>
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
        className="px-4 py-12 md:py-16 bg-white border-t border-gray-200"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold font-poppins mb-6 text-black">
            Mahatayi Trust
          </h3>

          <p className="text-[#333333] text-base md:text-lg mb-8">
            Bringing robotics education to schools and communities
          </p>

          <div className="flex flex-col gap-2 justify-center items-center mb-8">
            <a
              href="mailto:satvikpatil2012@gmail.com"
              className="text-[#333333] text-base md:text-lg hover:text-[#FF8800]"
            >
              satvikpatil2012@gmail.com
            </a>
            <a
              href="tel:+917892255310"
              className="text-[#333333] text-base md:text-lg hover:text-[#FF8800]"
            >
              +91 7892255310
            </a>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-200">
            <p className="text-[#333333] text-sm">
              © {new Date().getFullYear()} Mahatayi Trust. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
