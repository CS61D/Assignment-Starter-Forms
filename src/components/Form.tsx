import "../styles.css";
// TODO: any imports you may need

const schema = z.object({
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
type Inputs = null; // replace the null

export default function Form() {
  /**
   * TODO Part 1: Grab any needed return props from useForm. 
   * Pass your custom type into useForm.
   * Pass zodResolver into useForm.
   */

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
      </div>
      <div>
        {/*
         * TODO: First Name
         * Input Type: <input type="text">
         */}
      </div>
      <div>
        {/*
         * TODO: Last Name
         * Input Type: <input type="text">
         */ }
      </div>
      <div>
        {/*
         * TODO: Role
         * Input Type: <select>
         */}
      </div>
      <div>
        {/*
         * TODO: Date of Birth
         * Input Type: <input type="date">
         */}
      </div>
      <div>
        {/*
         * TODO: Create Password
         * Input Type: <input type="password">
         */}
        <div>
          <p>Password must:</p>
          <li>Be between 8-20 characters</li>
          <li>Contain at least one lowercase letter</li>
          <li>Contain at least one uppercase letter</li>
          <li>Contain at least one digit</li>
        </div>
      </div>
      <div>
        {/*
         * TODO: Confirm Password
         * Input Type: <input type="password">
         */}
      </div>
      <div>
        {/*
         * TODO: Subscription Opt-in
         * Input Type: <input type="checkbox">
         */}
      </div>
      
      {/* TODO: Submit Button */}
    </form>
  );
}
