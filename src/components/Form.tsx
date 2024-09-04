import "../styles.css";
// TODO: any imports you may need
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z
  .object({
    /**
     * TODO Part 1: Define the shape of the form data.
     * List out form fields:
     * - Email                    (string)
     * - First name               (string)
     * - Last name                (string)
     * - Role                     (string)
     * - Date of birth            (string)
     * - Password creation        (string)
     * - Password confirmation    (string)
     * - Subscription opt-in/out  (boolean)
     */
    email: z.string().email().min(1, "Email is required"),
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    role: z.string().optional(),
    dateOfBirth: z.string().refine((date) => {
      return new Date(date) < new Date();
    }, "Date cannot be in the future"),
    createPassword: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .max(20, "Password must be at most 20 characters")
      .regex(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
        "Password must contain at least one lowercase letter, one uppercase letter, and one digit"
      ),
    confirmPassword: z
      .string()
      .min(8, "Password must be at least 8 characters"),
    subscription: z.boolean(),
  })
  .refine((data) => data.createPassword === data.confirmPassword, {
    message: "The confirmation password must match the created password",
    path: ["confirmPassword"],
  });
/**
 * TODO Part 2: Add validation using Zod methods:
 * - Required fields (i.e. cannot be empty):
 *      - Email
 *      - First name
 *      - Last name
 *      - Create password
 *      - Confirm password
 * - Optional fields (i.e. user can leave them blank):
 *      - Role
 *      - Date of birth
 *      - Subscription opt-in/out, in that the user can leave
 *        the checkbox unchecked. You can choose whether or not to
 *        call Zod's .optional() method on this field.
 * - Email format: Please use Zod's built-in .email() validation method.
 * - Date of birth: Date cannot be in the future.
 * - Create password: The user's password must:
 *      - Be between 8-20 characters
 *      - Contain at least one lowercase letter
 *      - Contain at least one uppercase letter
 *      - Contain at lease one digit
 * - Confirm password: The user must enter the same password in the
 *   confirmation field as in the creation field.
 */

// TODO Part 1: Infer off the schema to create your custom type.
type Inputs = z.infer<typeof schema>; // replace the null

export default function Form() {
  /**
   * TODO Part 1: Grab any needed return props from useForm.
   * Pass your custom type into useForm.
   * Pass zodResolver into useForm.
   */
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
  });

  // Please do *not* change this onSubmit function.
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/*
       * TODO Part 1: Fill out the contents of the form.
       * Don't forget about the existence of the label element!
       */}
      {/* TODO Part 2: Display error messages below each field. */}
      <div>
        {/*
         * TODO: Email
         * Input Type: <input type="email">
         * Notes: Please have a placeholder example email.
         */}
        <label htmlFor="email">Email Address *</label>
        <input id="email" type="text" {...register("email")} />
        {errors.email && (
          <p className="error-message">{errors.email.message}</p>
        )}
      </div>

      <div>
        {/*
         * TODO: First Name
         * Input Type: <input type="text">
         */}
        <label htmlFor="firstName">First Name *</label>
        <input id="firstName" type="text" {...register("firstName")} />
        {errors.firstName && (
          <p className="error-message">{errors.firstName.message}</p>
        )}
      </div>

      <div>
        {/*
         * TODO: Last Name
         * Input Type: <input type="text">
         */}
        <label htmlFor="lastName">Last Name *</label>
        <input id="lastName" type="text" {...register("lastName")} />
        {errors.lastName && (
          <p className="error-message">{errors.lastName.message}</p>
        )}
      </div>

      <div>
        {/*
         * TODO: Role
         * Input Type: <select>
         */}
        <label htmlFor="role">Role</label>
        <select id="role" {...register("role")}>
          <option value="">Select One</option>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="parent">Parent or Guardian</option>
        </select>
        {errors.role && <p className="error-message">{errors.role.message}</p>}
      </div>

      <div>
        {/*
         * TODO: Date of Birth
         * Input Type: <input type="date">
         */}
        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input id="dateOfBirth" type="date" {...register("dateOfBirth")} />
        {errors.dateOfBirth && (
          <p className="error-message">{errors.dateOfBirth.message}</p>
        )}
      </div>

      <div>
        {/*
         * TODO: Create Password
         * Input Type: <input type="password">
         */}
        <div>
          <label htmlFor="createPassword">Create Password *</label>
          <input
            id="createPassword"
            type="password"
            {...register("createPassword")}
          />
          <p>Password must:</p>
          <li>Be between 8-20 characters</li>
          <li>Contain at least one lowercase letter</li>
          <li>Contain at least one uppercase letter</li>
          <li>Contain at least one digit</li>
        </div>
        {errors.createPassword && (
          <p className="error-message">{errors.createPassword.message}</p>
        )}
      </div>

      <div>
        {/*
         * TODO: Confirm Password
         * Input Type: <input type="password">
         */}
        <label htmlFor="confirmPassword">Confirm Password *</label>
        <input
          id="confirmPassword"
          type="password"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <p className="error-message">{errors.confirmPassword.message}</p>
        )}
      </div>

      <div>
        {/*
         * TODO: Subscription Opt-in
         * Input Type: <input type="checkbox">
         */}
        <label htmlFor="subscription">Subscribe to out email newsletter:</label>
        <input
          id="subscription"
          type="checkbox"
          {...register("subscription")}
        />
      </div>

      {/* TODO: Submit Button */}
      <button type="submit">Submit</button>
    </form>
  );
}
