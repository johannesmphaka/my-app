"use client";

import { Label, TextInput } from "flowbite-react";

export default function Page1() {
  return (
    <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="email3" value="Your email" />
      </div>
      <TextInput
        helperText={
          <>
            We’ll never share your details. Read our
            <a
              className="ml-1 font-medium text-cyan-600 hover:underline dark:text-cyan-500"
              href="/forms"
            >
              Privacy Policy
            </a>
            .
          </>
        }
        id="email3"
        placeholder="name@flowbite.com"
        required
        type="email"
      />
    </div>
  );
}
