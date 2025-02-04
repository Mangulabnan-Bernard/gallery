import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

 export default function TopNav() {
  return (
    <nav className="flex items-center justify-between border-b p-4 text-xl font-semibold">
     <a href="/gallery" className="cursor-pointer">Gallery</a>
     <div> 
     <SignedOut>
        <SignInButton/>
     </SignedOut>
     <SignedIn>
        <UserButton/>
     </SignedIn>
     </div>
    </nav>
  );
}