import mockupIllustration from '../assets/illustration-mockups.svg';
import huddleLogo from '../assets/logo.svg';

import { FacebookIconSVG } from '../components/FacebookIconSVG';
import { TwitterIconSVG } from '../components/TwitterIconSVG';
import { GithubIconSVG } from '../components/GithubIconSVG';

export function HuddleDashboard() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-8 md:py-12">
      {/* Logo at the top */}
      <div className="mb-12 md:mb-16">
        <img src={huddleLogo} alt="Huddle Logo" className="w-32 md:w-48" />
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-center">

        {/* Left Column - Mockup Illustration */}
        <div className="flex-1">
          <img
            src={mockupIllustration}
            alt="Huddle App Interface Illustration"
            className="w-full max-w-xl mx-auto"
          />
        </div>

        {/* Right Column - Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white font-poppins leading-tight mb-5">
            Build The Community <br className="hidden md:block" />
            Your Fans Will Love
          </h1>

          <p className="text-white/85 text-base md:text-lg leading-relaxed mb-8 max-w-md mx-auto md:mx-0">
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as
            you engage in genuine discussion.
          </p>

          <button className="bg-white text-[hsl(257,40%,49%)] hover:bg-[hsl(300,69%,71%)] hover:text-white px-12 py-3 rounded-full shadow-lg font-semibold text-base transition-all duration-300 hover:scale-105">
            Register
          </button>
        </div>
      </div>

      {/* Social Icons*/}
      <div className="flex justify-center md:justify-end gap-4 mt-16 md:mt-20">
        <FacebookIconSVG />
        <TwitterIconSVG />
        <GithubIconSVG />
      </div>
    </div>
  );
};