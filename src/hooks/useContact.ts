import { FormEvent, useRef, useState } from "react";
import { toast } from "react-toastify";

// Replace with your actual Formspree form ID
const FORMSPREE_FORM_ID = "xpwdvrkz"; // Get this from Formspree.io

export const useContact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [currentAnimation, setCurrentAnimation] = useState("idle");
  const [isLoading, setIsLoading] = useState(false);

  const handleFocus = () => {
    setCurrentAnimation("walk");
  };

  const handleBlur = () => {
    setCurrentAnimation("idle");
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("hit");

    try {
      // Get form data
      const formData = new FormData(formRef.current!);
      
      // Send form data to Formspree
      const response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        toast("Thanks for your message 😃", {
          type: "success",
        });

        formRef.current?.reset();

        setTimeout(() => {
          setCurrentAnimation("idle");
        }, 4000);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to send message");
      }
    } catch (err) {
      console.log("error", err);
      setCurrentAnimation("idle");
      toast("Failed to send message 😢", {
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    formRef,
    currentAnimation,
    handleBlur,
    handleFocus,
    handleSubmit,
  };
};
