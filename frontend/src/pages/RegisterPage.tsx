import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registered:", formData);
    navigate("/my-portfolio");
  };

  return (
    <div className='flex min-h-screen w-full bg-white font-sans overflow-hidden'>
      {/* القسم الأيسر: الفورم وعناصر التسجيل */}
      <div className='flex w-full flex-col justify-between px-6 py-8 lg:w-1/2 lg:px-16 xl:px-24 overflow-y-auto'>
        {/* الهيدر الصغير (اللوجو ورابط اللوجن) */}
        <div className='flex items-center justify-between'>
          <Link to='/' className='flex items-center gap-3'>
            <span className='flex h-10 w-10 -rotate-6 items-center justify-center rounded-xl bg-[#6753DB] text-white shadow-sm'>
              <svg
                viewBox='0 0 40 40'
                className='h-6 w-6 rotate-6'
                fill='white'
                aria-hidden='true'
              >
                <path d='M20 5 L21.8 10.5 L26 12 L21.8 13.5 L20 19 L18.2 13.5 L14 12 L18.2 10.5 Z' />
              </svg>
            </span>
            <span className='text-2xl font-bold tracking-tight text-[#19182A]'>
              Folio<span className='text-[#6753DB]'>.</span>
            </span>
          </Link>

          <div className='text-xs text-gray-500'>
            Already have an account?{" "}
            <Link
              to='/login'
              className='font-semibold text-[#6753DB] hover:underline'
            >
              Login
            </Link>
          </div>
        </div>
        {/* محتوى الفورم الرئيسي */}
        <div className='mx-auto w-full max-w-md my-auto py-8'>
          {/* أيقونة الترحيب والعنوان */}
          <div className='text-center mb-8'>
            <div className='mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#6753DB] text-white shadow-md'>
              <svg
                className='h-7 w-7'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z'
                />
              </svg>
            </div>
            <h1 className='text-3xl font-extrabold tracking-tight text-gray-900'>
              Create your Folio account
            </h1>
            <p className='mt-2 text-xs text-gray-500'>
              Build a portfolio that tells the story behind your code.
            </p>
          </div>

          {/* زرار الاستمرار بـ جيت هب */}
          <button
            type='button'
            className='w-full flex items-center justify-center gap-3 rounded-xl bg-[#13111C] py-3.5 px-4 text-xs font-medium text-white shadow-md transition hover:bg-gray-800'
          >
            <svg className='h-5 w-5 fill-current' viewBox='0 0 24 24'>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
              />
            </svg>
            Continue with GitHub
          </button>

          {/* فاصل (or) */}
          <div className='relative my-6'>
            <div className='absolute inset-0 flex items-center'>
              <div className='w-full border-t border-gray-200' />
            </div>
            <div className='relative flex justify-center text-xs uppercase'>
              <span className='bg-white px-3 text-gray-400 font-medium'>
                or
              </span>
            </div>
          </div>

          {/* الفورم التقليدية */}
          <form className='space-y-4' onSubmit={handleSubmit}>
            <div>
              <label className='block text-xs font-semibold text-gray-700 mb-1'>
                Full name
              </label>
              <input
                type='text'
                required
                placeholder=''
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className='w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:border-[#6753DB] focus:outline-none focus:ring-1 focus:ring-[#6753DB] transition'
              />
            </div>

            <div>
              <label className='block text-xs font-semibold text-gray-700 mb-1'>
                Email adddress
              </label>
              <input
                type='email'
                required
                placeholder='you@example.com'
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className='w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:border-[#6753DB] focus:outline-none focus:ring-1 focus:ring-[#6753DB] transition'
              />
            </div>

            <div>
              <label className='block text-xs font-semibold text-gray-700 mb-1'>
                Password
              </label>
              <div className='relative'>
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  placeholder=''
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                  className='w-full rounded-xl border border-gray-200 px-4 py-3 text-sm text-gray-900 focus:border-[#6753DB] focus:outline-none focus:ring-1 focus:ring-[#6753DB] transition pr-10'
                />
                <button
                  type='button'
                  onClick={() => setShowPassword(!showPassword)}
                  className='absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-gray-600'
                >
                  <svg
                    className='h-5 w-5'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M15 12a3 3 0 11-6 0 3 3 0 016 0z'
                    />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
                    />
                  </svg>
                </button>
              </div>
            </div>

            <button
              type='submit'
              className='w-full rounded-xl bg-[#6753DB] py-3.5 text-xs font-semibold text-white shadow-lg transition hover:bg-violet-700 mt-2 flex items-center justify-center gap-2'
            >
              Continue with email <span>→</span>
            </button>
          </form>

          {/* الشروط والأحكام */}
          <div className='text-center mt-6'>
            <p className='text-[11px] text-gray-400'>
              By continuing, you agree to Folio's Terms and Privacy Policy.
            </p>
          </div>
        </div>
        <div></div> {/* فاصل سفلي للميزان */}
      </div>

      {/* القسم الأيمن: الخلفية الداكنة والاقتباس (Desktop Only) */}
      <div className='hidden lg:flex lg:w-1/2 flex-col justify-between bg-[#19182A] p-12 relative overflow-hidden text-white'>
        {/* تأثيرات دوائر الخلفية */}
        <div className='absolute -right-20 -top-20 w-96 h-96 rounded-full border border-white/10 opacity-45 pointer-events-none'></div>
        <div className='absolute right-10 top-20 w-80 h-80 rounded-full border border-white/5 opacity-30 pointer-events-none'></div>
        <div></div> {/* فراغ علوي */}
        {/* محتوى الاقتباس */}
        <div className='max-w-md z-10 my-auto'>
          <div className='text-[#6753DB] text-5xl font-serif mb-4'>“</div>
          <h2 className='text-3xl font-bold tracking-tight leading-snug mb-6 text-white'>
            Your next opportunity starts with a portfolio that shows what you
            can do.
          </h2>
          <p className='text-xs text-gray-400'>
            Made for developers building what's next.
          </p>
        </div>
        <div></div> {/* فراغ سفلي */}
      </div>
    </div>
  );
}
