const { z } = require("zod");

// Creating an object schema
const signupSchema = z.object({
    name: z
        .string({ required_error: "Name is required" })
        .trim()
        .min(3, { message: "Name must be at least of 3 characters" })
        .max(255, { message: "Name must not be more than 255 characters" }),
    email: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(3, { message: "Email must be at least of 3 characters" })
        .max(255, { message: "Email must not be more than 255 characters" }),
    phone: z
        .string({ required_error: "Phone is required" })
        .trim()
        .min(10, { message: "Phone must be at least of 10 characters" })
        .max(20, { message: "Phone must not be more than 20 characters" }),
    password: z
        .string({ required_error: "Password is required" })
        .min(7, { message: "Password must be at least of 6 characters" })
        .max(1024, "Password can't be greater than 1024 characters"),
    cpassword: z
        .string({ required_error: "Password is required" })
        .min(7, { message: "Password must be at least of 6 characters" })
        .max(1024, "Password can't be greater than 1024 characters"),
    type: z.enum(['patient', 'doctor', 'admin']),
    licenceno: z.string().optional(),
    special: z.string().optional(),
    secretkey: z.string().optional(),
    isValid: z.enum(['Active', 'In-active']).default('In-active'),
});

const loginSchema = z.object({

    name: z.string().optional(),
    emails: z
        .string({ required_error: "Email is required" })
        .trim()
        .email({ message: "Invalid email address" })
        .min(3, { message: "Email must be at least of 3 characters" })
        .max(255, { message: "Email must not be more than 255 characters" }),

    phone: z.string().optional(),
    passwords: z
        .string({ required_error: "Password is required" })
        .min(7, { message: "Password must be at least of 6 characters" })
        .max(1024, "Password can't be greater than 1024 characters"),
    cpassword: z.string().optional(),
    type: z.enum().optional(),
    licenceno: z.string().optional(),
    special: z.string().optional(),
    secretkey: z.string().optional(),
    isValid: z.enum().optional(),

});

module.exports = signupSchema, loginSchema; 