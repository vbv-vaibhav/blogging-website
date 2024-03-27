import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";
import { SignupInput } from "@vbv-vaibhav/blog-medium-common";

const Auth = ({ type }: { type: "signup" | "signin" }) => {
  const [postInputs, setPostInputs] = useState<SignupInput>({
    name: "",
    username: "",
    password: "",
  });

  return (
    <div>
      <div className="h-screen flex justify-center flex-col">
        <div className="flex justify-center">
          <div>
            <div className={type === "signin" ? "px-2" : "px-10"}>
              <div className="text-4xl font-bold text-center">
                {type === "signin"
                  ? "Log in to your account"
                  : "Create an account"}
              </div>
              <div className="text-gray-500 text-center">
                {type === "signin"
                  ? "Don't have an account?"
                  : "Already have an account?"}
                <Link
                  to={type === "signin" ? "/signup" : "/signin"}
                  className="ml-2 underline"
                >
                  {type === "signin" ? "Sign Up" : "Login"}
                </Link>
              </div>
            </div>
            <div className="pt-6">
              <LabelledInput
                label="Name"
                placeholder="Full Name"
                onChange={(e) => {
                  setPostInputs({
                    ...postInputs,
                    name: e.target.value,
                  });
                }}
              />
              <LabelledInput
                label="Username"
                placeholder="Email Address"
                onChange={(e) => {
                  setPostInputs({
                    ...postInputs,
                    username: e.target.value,
                  });
                }}
              />
              <LabelledInput
                label="Password"
                placeholder="New Password"
                type="password"
                onChange={(e) => {
                  setPostInputs({
                    ...postInputs,
                    password: e.target.value,
                  });
                }}
              />
              <button
                type="button"
                className="mt-8 w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                {type === "signup" ? "Sign up" : "Sign in"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface LabelledInputType {
  label: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}

function LabelledInput({
  label,
  placeholder,
  onChange,
  type,
}: LabelledInputType) {
  return (
    <div>
      <div>
        <label className="block mb-2 text-sm text-black font-semibold pt-4">
          {label}
        </label>
        <input
          onChange={onChange}
          type={type || "text"}
          id="first_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder={placeholder}
          required
        />
      </div>
    </div>
  );
}

export default Auth;
