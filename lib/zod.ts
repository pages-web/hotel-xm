import { z } from "zod";

export const mailZod = z
  .string()
  .min(1, { message: "Fill an input" })
  .regex(
    /^([A-Z0-9_+-]+\.?)*[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/,
    "Wrong mail."
  );
export const phoneZod = z
  .string()
  .regex(
    /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/,
    "Invalid Phone number"
  )
  .min(1, { message: "Phone is required" });
