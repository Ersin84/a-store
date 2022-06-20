import { FiLock, FiMail } from 'react-icons/fi';

//internal  import
// import Error from '@component/form/Error';
// import useLoginSubmit from '@hooks/useLoginSubmit';
// import InputArea from '@component/form/InputArea';

import React from 'react';
import ReactDOM from 'react-dom';
import GoogleOneTapLogin from 'react-google-one-tap-login';

ReactDOM.render(
  <GoogleOneTapLogin onError={(error) => console.log(error} onSuccess={(response) => console.log(response} googleAccountConfigs={{ client_id: 162887562432-b05sed3sm3ajh9h055hp1n5fi667g4i1.apps.googleusercontent.com }} />,
  document.getElementById('root')
);

  return (
    <>
      <div className="text-center mb-6">
        <h2 className="text-3xl font-bold font-serif">Login</h2>
        <p className="text-sm md:text-base text-gray-500 mt-2 mb-8 sm:mb-10">
          Login with your email and password
        </p>
      </div>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col justify-center"
      >
        <div className="grid grid-cols-1 gap-5">
          <div className="form-group">
            <InputArea
              register={register}
              defaultValue=""
              label="Email"
              name="registerEmail"
              type="email"
              placeholder="Email"
              Icon={FiMail}
            />
            <Error errorName={errors.registerEmail} />
          </div>
          <div className="form-group">
            <InputArea
              register={register}
              defaultValue=""
              label="Password"
              name="password"
              type="password"
              placeholder="Password"
              Icon={FiLock}
            />

            <Error errorName={errors.password} />
          </div>

          <div className="flex items-center justify-between">
            <div className="flex ms-auto">
              <button
                type="button"
                onClick={() => setShowResetPassword(true)}
                className="text-end text-sm text-heading ps-3 underline hover:no-underline focus:outline-none"
              >
                Forgot password?
              </button>
            </div>
          </div>
          <button
            disabled={loading}
            type="submit"
            className="w-full text-center py-3 rounded bg-emerald-500 text-white hover:bg-emerald-600 transition-all focus:outline-none my-1"
          >
            Login
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;
