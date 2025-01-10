import React from "react";
import { RootState } from "@/store";
import { closeModal } from "@/store/modal-slice";
import { useDispatch, useSelector } from "react-redux";
import { Login } from "./login";
import { Register } from "./register";
import { BaseModal } from "@/components/common/base-modal";

export const Authentication = ({ children }: { children: React.ReactNode }) => {
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
    <>
      {children}

      {isOpen && (
        <BaseModal onClose={() => dispatch(closeModal())}>
          <section className="w-[300px] md:w-[478px] mx-4 md:mx-0">
            {renderModalContent()}
          </section>
        </BaseModal>
      )}
    </>
  );
};
