import React from "react";
import { Button } from "../ui/button";
import { Authentication } from "@/modules/auth";
import { useDispatch } from "react-redux";
import { openModal } from "@/store/modal-slice";
import { Mobile } from "./mobile";
import { AlignJustify, Heart, ShoppingCart } from "lucide-react";

export const NavAction = () => {
  const dispatch = useDispatch();
  return (
    <nav className="flex gap-6 items-center text-white">
      <div className="hidden lg:block">
        <div className="flex items-center gap-4">
          <Heart />
          <p className="text-base font-normal">Favorite</p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <ShoppingCart />
          <span className="absolute -top-4 -right-4 w-6 h-6 bg-red-600 text-xs font-bold rounded-full flex items-center justify-center">
            1
          </span>
        </div>
        <p className="text-base font-normal hidden lg:block">Cart</p>
      </div>

      <div className="hidden lg:block">
        <Authentication>
          <Button
            onClick={() => dispatch(openModal("LOGIN"))}
            variant="outline"
            className="bg-transparent backdrop-blur-md text-white font-semibold rounded">
            Sign In
          </Button>
        </Authentication>
      </div>

      <div className="block lg:hidden ml-2">
        <Mobile>
          <AlignJustify size={24} className="cursor-pointer" />
        </Mobile>
      </div>
    </nav>
  );
};
