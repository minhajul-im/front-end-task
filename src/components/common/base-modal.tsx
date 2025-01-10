import React from "react";
import { X } from "lucide-react";
import { createPortal } from "react-dom";
import { Button } from "../ui/button";

export const BaseModal = ({
  onClose,
  children,
}: {
  onClose: () => void;
  children: React.ReactNode;
}) => {
  return createPortal(
    <main className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <section className="bg-white p-4 rounded">
        <div className="flex justify-end">
          <Button variant="ghost" onClick={onClose}>
            <X className="font-bold" />
          </Button>
        </div>
        <section className="px-6 pb-6">{children}</section>
      </section>
    </main>,
    document.body
  );
};
