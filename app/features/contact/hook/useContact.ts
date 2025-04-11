import React from "react";
import { useState } from "react";
import { z } from "zod";

import type { IFormEmail } from "~/types/gobal";
import { FormEmailSchema } from "~/utils/validate/formEmail";
export default function useContact() {
  const dataForm: IFormEmail[] = [
    {
      label: "Your Name",
      filledName: "name",
      type: "text",
      placeholder: "Name",
      typeInput: "input"
    },
    {
      label: "Email",
      type: "text",
      filledName: "email",
      placeholder: "Email",
      typeInput: "input"
    },
    {
      label: "Message",
      type: "text",
      filledName: "message",
      placeholder: "Message",
      typeInput: "textarea"
    }
  ];
  const [errors, setErrors] = useState<z.ZodIssue[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    if (data) {
      try {
        await FormEmailSchema.partial().parseAsync({
          name: data["Your Name"],
          email: data["Email"],
          message: data["Message"]
        });
        const form = document.querySelector("form");
        setErrors([]);
        form?.reset();
      } catch (error) {
        if (error instanceof z.ZodError) {
          setErrors(error.issues);
          console.log("Validation failed", error.issues);
          console.log(errors);
        }
      }
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    filledName: IFormEmail["filledName"]
  ) => {
    const { name, value } = e.target;
    clearFieldError(filledName, value, setErrors);
    console.log(`${name}: ${value}`);
  };

  const handleTextareaChange = (
    e: React.ChangeEvent<HTMLTextAreaElement>,
    filledName: IFormEmail["filledName"]
  ) => {
    const { name, value } = e.target;
    clearFieldError(filledName, value, setErrors);
    console.log(`${name}: ${value}`);
  };

  const getError = (field: string) => {
    return errors.find((error) => error.path[0] === field)?.message;
  };

  const clearFieldError = async <T extends keyof typeof FormEmailSchema.shape>(
    field: T,
    value: unknown,
    setErrors: React.Dispatch<React.SetStateAction<z.ZodIssue[]>>
  ) => {
    try {
      const fieldSchema = FormEmailSchema.shape[field];
      if (!fieldSchema) return;

      await fieldSchema.parseAsync(value);

      setErrors((prev) => prev.filter((error) => error.path[0] !== field));
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldError = error.issues.find(
          (issue) => issue.path[0] === field
        );
        if (fieldError) {
          setErrors((prev) => ({
            ...prev,
            [field]: fieldError.message
          }));
        }
      }
    }
  };
  return {
    handleSubmit,
    handleInputChange,
    handleTextareaChange,
    getError,
    dataForm,
    errors,
    setErrors,
    FormEmailSchema,
    clearFieldError
  };
}
