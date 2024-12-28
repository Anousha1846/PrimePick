import React from "react";
import Link from "next/link";
import Searchbox from "../helper/Searchbox";
import { Heart, User } from "lucide-react";
import ShoppingCartButton from "../helper/ShoppingCartButton";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <div className="h-[12vh]  top-0  bg-white shadow-md ">
      <div className="flex items-center justify-between w-[95%] md:w-5/6 mx-auto  h-full ">
        {/* logo */}
        <section>
          <Link
            href="/"
            className="sm:text-4xl text-3xl font-extrabold text-burgundy flex items-center space-x-1 font-mono  "
          >
            PrimePick
          </Link>
        </section>
        {/* icons */}
        <div className="flex items-center space-x-3 sm:space-x-6">
          {/* ============================================= search ============================ */}
          <Searchbox />
          {/* ============================================= heart  ============================*/}
          <Heart size={22} cursor={"pointer"} />
          {/* ============================================= shopping cart ============================ */}
          <ShoppingCartButton />
          {/* ============================================= user icon ============================ */}
          {/* if signed in */}
          <SignedIn>
            <UserButton />
          </SignedIn>
          {/* if not signed in */}
          <SignedOut>
            <SignInButton>
              <User size={22} cursor={"pointer"} />
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
