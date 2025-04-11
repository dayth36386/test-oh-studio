"use client";

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport
} from "./toast";
import { useToast } from "./use-toast";

export function Toaster() {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(function ({
        id,
        title,
        description,
        descriptionTwo,
        action,
        ...props
      }) {
        return (
          <Toast key={id} {...props}>
            <div className="flex gap-2 items-center">
              <div className="grid gap-1">
                {title && <ToastTitle>{title}</ToastTitle>}
                <div className="grid gap-1">
                  {description && (
                    <ToastDescription>{description}</ToastDescription>
                  )}
                  {descriptionTwo && (
                    <ToastDescription>{descriptionTwo}</ToastDescription>
                  )}
                </div>
              </div>
            </div>
            {action}
            <ToastClose />
          </Toast>
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
}
