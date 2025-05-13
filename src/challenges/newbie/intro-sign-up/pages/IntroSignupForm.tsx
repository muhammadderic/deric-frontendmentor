import { AlertCircle } from 'lucide-react';

import { useIntroSignupForm } from '../hooks/useIntroSignupForm';

import "../styles/style.css";

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  password?: string;
}

export function IntroSignupForm() {
  const {
    formData,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
  } = useIntroSignupForm();

  const inputFields = [
    {
      id: 'firstName',
      name: 'firstName',
      type: 'text',
      placeholder: 'First Name',
      value: formData.firstName
    },
    {
      id: 'lastName',
      name: 'lastName',
      type: 'text',
      placeholder: 'Last Name',
      value: formData.lastName
    },
    {
      id: 'email',
      name: 'email',
      type: 'email',
      placeholder: 'Email Address',
      value: formData.email
    },
    {
      id: 'password',
      name: 'password',
      type: 'password',
      placeholder: 'Password', value
        : formData.password
    },
  ];

  return (
    <div className="isf-container min-h-screen font-['Poppins',sans-serif] flex items-center justify-center">
      <div className="z-10 isf-bg-layer w-full min-h-screen flex items-center justify-center">

        <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-8 items-center'>
          {/* Left side - Hero content */}
          <div className="px-8 text-white text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Learn to code by watching others
            </h1>
            <p className="text-base md:text-lg opacity-90 leading-relaxed">
              See how experienced developers solve problems in real-time.
              Watching scripted tutorials is great, but understanding how
              developers think is invaluable.
            </p>
          </div>

          {/* Right side - Form section */}
          <div>
            {/* Trial offer banner */}
            <div className="bg-[#5D54A3] rounded-lg shadow-lg p-4 mb-6 text-center text-white">
              <span className="font-bold">Try it free 7 days</span>
              <span className="opacity-80"> then $20/mo. thereafter</span>
            </div>

            {/* Sign-up form */}
            <form
              onSubmit={handleSubmit}
              className="bg-white rounded-lg shadow-xl p-6 md:p-8 space-y-4"
            >
              {inputFields.map((field) => (
                <div key={field.id} className="relative">
                  <input
                    type={field.type}
                    id={field.id}
                    name={field.name}
                    placeholder={field.placeholder}
                    value={field.value}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    className={`
                    w-full px-5 py-4 border rounded-md text-sm font-semibold
                    placeholder:text-gray-400 focus:outline-none focus:ring-2
                    transition-colors duration-200
                    ${errors[field.name as keyof FormErrors]
                        ? 'border-[#FF7A7A] focus:ring-[#FF7A7A]/20 pr-12'
                        : 'border-gray-200 focus:ring-[#5D54A3]/20 focus:border-[#5D54A3]'
                      }
                  `}
                  />
                  {errors[field.name as keyof FormErrors] && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <AlertCircle className="w-5 h-5 text-[#FF7A7A]" />
                    </div>
                  )}
                  {errors[field.name as keyof FormErrors] && (
                    <p className="text-[#FF7A7A] text-xs italic mt-1 text-right">
                      {errors[field.name as keyof FormErrors]}
                    </p>
                  )}
                </div>
              ))}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#38CC8B] hover:bg-[#2eaf75] text-white font-semibold py-4 rounded-md uppercase tracking-wide shadow-md transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'CLAIMING YOUR FREE TRIAL...' : 'CLAIM YOUR FREE TRIAL'}
              </button>

              <p className="text-xs text-gray-500 text-center px-4">
                By clicking the button, you are agreeing to our
                <a href="#" className="text-[#FF7A7A] font-bold hover:underline ml-1">
                  Terms and Services
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};