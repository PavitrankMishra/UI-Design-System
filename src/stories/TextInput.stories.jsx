import React from "react";
import TextInput from "../Components/TextInput";

export default {
  title: "TextInput",
  component: TextInput,
};

export const Default = () => (
  <TextInput
    label="Name"
    labelClassName="text-red-500 border border-green-500"
    className="text-red-500"
    helperText="Enter your full name"
    helperTextClassName="text-red-500"
  />
);

export const RequiredField = () => (
  <TextInput label="Email" required placeholder="Enter your email" />
);

export const WithHelperText = () => (
  <TextInput
    label="Username"
    helperText="This will be your unique identifier"
    placeholder="Choose a username"
  />
);

export const ErrorState = () => (
  <TextInput
    label="Password"
    required
    error
    helperText="Password is required"
    placeholder="Enter your password"
  />
);

export const FullWidthInput = () => (
  <TextInput label="Address" fullWidth placeholder="Enter your full address" />
);
