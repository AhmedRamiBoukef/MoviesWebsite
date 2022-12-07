import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { MongoDBAdapter } from '@next-auth/mongodb-adapter'
import EmailProvider from "next-auth/providers/email";


import clientPromise from '../../../database/connectDB'

export default NextAuth({
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		}),
		EmailProvider({
			
			server: process.env.EMAIL_SERVER,
			from: process.env.EMAIL_FROM,
		  }),
	],
	pages: {
		signIn: '/home',
	},
	adapter: MongoDBAdapter(clientPromise),
})
