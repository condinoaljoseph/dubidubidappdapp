import NextAuth from "next-auth/next";
import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authenticate } from "../../../lens/authentication/authenticate";

export const authOptions = {
	providers: [
		CredentialsProvider({
			name: "Credentials",
			credentials: {
				address: { label: "Address", type: "text" },
				signature: { label: "Signature", type: "text" }
			},
			async authorize(credentials, req) {
				try {
					const { address, signature }: any = credentials;
					const accessTokens = await authenticate(address, signature);

					return {
						id: address,
						name: address,
						token: accessTokens.data.authenticate.accessToken
					}
				} catch (error: any) {
					throw new Error(error.response.data.msg);
				}
			}
		})
	],
	callbacks: {
		jwt: ({ token, user }) => {
			if (user) {
				token.user = user; 
			}

			return token;
		},
		session: ({ session, token }: any) => {
			session.user = token.user
			return session;
		}
	}
} as NextAuthOptions

export default NextAuth(authOptions)