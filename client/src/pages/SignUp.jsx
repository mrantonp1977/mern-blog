import { Link } from "react-router-dom";
import { Button, Label, TextInput } from 'flowbite-react'


export default function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-10">
        {/* LEFT SIDE */}
        <div className="flex-1">
        <Link
        to="/"
        className="font-bold dark:text-white text-4xl"
      >
        <span
          className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 
            to-pink-500 rounded-lg text-white"
        >
          Antonis blog App
        </span>
      </Link>
      <p className="text-sm mt-6">
        This is a blog website that you can create your own posts. You can sign up with your email and password or with your Google Account.
      </p>
        </div>
        {/* RIGHT SIDE */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Your username"/>
              <TextInput 
                type="text"
                placeholder="Username"
                id="username"              
              />
            </div>
            <div>
              <Label value="Your Email"/>
              <TextInput 
                type="email"
                placeholder="name@company.com"
                id="email"              
              />
            </div>
            <div>
              <Label value="Your Password"/>
              <TextInput 
                type="password"
                placeholder="*********"
                id="password"                            
              />
            </div>
            <Button gradientDuoTone='purpleToPink' type="submit">
              Sign Up
            </Button>
          </form>
          <div className="flex gap-3 text-sm mt-6">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-blue-700">Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  )
}
