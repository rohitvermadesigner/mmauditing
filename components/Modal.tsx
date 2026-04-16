"use client";

import Image from "next/image";
import { ReactNode, useEffect } from "react";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex flex-col items-center justify-center overflow-y-auto">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
      />

      <div className="relative bg-white md:rounded-2xl shadow-lg p-2 w-full max-w-6xl z-10 max-h-[90vh] overflow-y-auto my-4 flex-shrink-0">
        {children}

        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-black cursor-pointer bg-white rounded-full"
        >
          <Image src="/images/close.svg" alt="" width={30} height={0} />
        </button>
      </div>
    </div>
  );
}