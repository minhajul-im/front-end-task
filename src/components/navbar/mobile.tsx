import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Authentication } from "@/modules/auth";
import Image from "next/image";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "@/store/modal-slice";
import { RootState } from "@/store";
import { closeSheet, openSheet } from "@/store/sheet-slice";

export const Mobile = ({ children }: { children: React.ReactNode }) => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state: RootState) => state.sheet);

  const handleOpen = () => {
    dispatch(closeSheet());
    dispatch(openModal("LOGIN"));
  };

  return (
    <Sheet
      key="left"
      open={isOpen}
      onOpenChange={(open: boolean) =>
        open ? dispatch(openSheet()) : dispatch(closeSheet())
      }>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent side="left">
        <nav className="flex items-center gap-4 pb-4">
          <div className="w-10 h-10 relative">
            <Image
              src="/images/Logo.png"
              alt="logo"
              fill
              className="w-full h-full absolute"
            />
          </div>
          <h2 className="text-xl font-bold text-headingText">Fresh Harvest</h2>
        </nav>
        <ul className="flex flex-col gap-4 headingText text-xl font-medium">
          <li className="text-xl font-normal cursor-pointer">Home</li>
          <li className="text-xl font-normal cursor-pointer">Shop</li>
          <li className="text-xl font-normal cursor-pointer">Blog</li>
          <li className="text-xl font-normal cursor-pointer">About</li>
        </ul>
        <Authentication>
          <div
            onClick={handleOpen}
            className="text-xl font-normal cursor-pointer mt-4">
            Sign in
          </div>
        </Authentication>
      </SheetContent>
    </Sheet>
  );
};
