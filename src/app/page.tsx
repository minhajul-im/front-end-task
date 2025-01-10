import { Authentication } from "@/modules/auth";

import React from "react";

export default async function page() {
  return (
    <main className="flex justify-center items-center h-screen">
      <Authentication />
    </main>
  );
}
