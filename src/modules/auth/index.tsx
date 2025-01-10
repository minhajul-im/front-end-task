"use client";

import { BaseModal } from "@/components/common/base-modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { closeModal, openModal } from "@/store/modal-slice";
import { Button } from "@/components/ui/button";
import { Login } from "./login";
import { Register } from "./register";

export const Authentication = () => {
  const { isOpen } = useSelector((state: RootState) => state.modal);
  const dispatch = useDispatch();

  const renderModalContent = () => {
    switch (isOpen) {
      case "LOGIN":
        return <Login />;
      case "REGISTER":
        return <Register />;
      default:
        return null;
    }
  };

  return (
    <main>
      <div className="flex gap-4">
        <Button onClick={() => dispatch(openModal("LOGIN"))}>login</Button>
        <Button onClick={() => dispatch(openModal("REGISTER"))}>
          register
        </Button>
      </div>

      {isOpen && (
        <BaseModal onClose={() => dispatch(closeModal())}>
          <section className="w-[343px] md:w-[478px]">
            {renderModalContent()}
          </section>
        </BaseModal>
      )}
    </main>
  );
};
