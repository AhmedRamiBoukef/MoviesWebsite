import Image from "next/image";
import { HeaderItem } from "./HeaderItem";
import {
  HomeIcon,
  BadgeCheckIcon,
  CollectionIcon,
  SearchIcon,
  UserIcon,
  LightningBoltIcon,
} from "@heroicons/react/outline";
import { useRouter } from 'next/router'
import { useSession, signIn, signOut } from 'next-auth/react'

export const Header = () => {
  const { data: session } = useSession()

	const { push, asPath } = useRouter()
  const handleSignOut = async () => {
		const data = await signOut({ redirect: false, callbackUrl: '/home' })

		push(data.url)
	}
  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
        <button className="px-6 rounded py-2 bg-blue-900" onClick={handleSignOut}>click me</button>
      </div>
      <Image
        className="object-contain"
        src="https://links.papareact.com/ua6"
        width={200}
        height={100}
        alt="hulu"
      />
    </header>
  );
};
