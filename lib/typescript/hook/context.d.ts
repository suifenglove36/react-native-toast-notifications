import React from "react";
import ToastContainer from "../toast-container";
export type ToastType = Pick<ToastContainer, "show" | "update" | "hide" | "hideAll" | "isOpen">;
declare const ToastContext: React.Context<ToastType>;
export default ToastContext;
