import React, { useState } from "react";
import { BsGoogle } from "react-icons/bs";

import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from "next/router";

export const Sign = () => {
  const { data: session, status } = useSession()
  const { push } = useRouter()
  const [email, setEmail] = useState("");

  console.log(session)
    if (status === 'loading') return <h1 className="h-[100vh] w-[100vw] flex justify-center items-center text-2xl ">Checking Authentication...</h1>

    if (session) {
      push('/')
    }

    const handleOAuthSignIn = (provider) => () => signIn(provider)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!email) return false

        signIn('email', { email, redirect: false })
    }
  return (
    <div className="bgImage flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit} className="max-w-lg w-full shadow-lg p-8 flex flex-col">
        <p className="text-3xl mb-4 text-center">Sign In</p>

        <label htmlFor="email">Email address</label>
        <input
          id="email"
          value={email}
          type="email"
          className="border py-2 px-4 border-gray-500 focus:outline-none mb-4"
          onChange={(e) => setEmail(e.target.value)}
        />

        <button
          className="mt-3 text-lg font-semibold py-4 px-4 bg-gray-600 text-gray-200"
          type="submit"
        >
          Sign In
        </button>
      </form>
      <button onClick={handleOAuthSignIn('google')} className="text-lg text-white font-semibold bg-blue-500 py-3 px-6 rounded-md focus:outline-none focus:ring-2">
        <BsGoogle className="inline" /> | Sign In with Google
      </button>
    </div>
  );
};
