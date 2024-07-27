import { useForm, SubmitHandler } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";
import '../styles.css'

const requiredMsg = 'Required';
const passwordLenMsg = 'Password must be between 8-20 characters';
const passwordLowerMsg = 'Password must contain at least one lowercase letter';
const passwordUpperrMsg = 'Password must contain at least one uppercase letter';
const passwordNumMsg = 'Password must contain at least one digit';
 
const schema = z.object({
  email: z.string().min(1, requiredMsg)
    .email(),
  firstName: z.string().min(1, requiredMsg),
  lastName: z.string().min(1, requiredMsg),
  birthDate: z.string().optional(),
  role: z.string().optional(),
  password: z.string().min(1, requiredMsg)
    .min(8, passwordLenMsg)
    .max(20, passwordLenMsg)
    .regex(/[a-z]/, passwordLowerMsg)
    .regex(/[A-Z]/, passwordUpperrMsg)
    .regex(/[\d]/, passwordNumMsg),
  confirmPassword: z.string().min(1, requiredMsg),
  subscribe: z.boolean()
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"]
});

type Inputs = z.infer<typeof schema>;

export default function Form() {
    const { 
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: zodResolver(schema),
    });

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Email Address *</label>
                <input 
                    {...register("email")}
                    id="email" 
                    type="text"
                    placeholder="example@email.com" 
                />
                {errors.email && <p className="error-message">{errors.email.message}</p>}
            </div>
            <div>
                <label>First Name *</label>
                <input 
                    {...register("firstName")}
                    id="firstName"
                    type="text" 
                />
                {errors.firstName && <p className="error-message">{errors.firstName.message}</p>}
            </div>
            <div>
                <label>Last Name *</label>
                <input 
                    {...register("lastName")}
                    id="lastName"
                    type="text"
                />
                {errors.lastName && <p className="error-message">{errors.lastName.message}</p>}
            </div>
            <div>
                <label>Role</label>
                    <select {...register("role")}>
                    <option value="">Select One</option>
                    <option value="student">Student</option>
                    <option value="educator">Educator</option>
                    <option value="parent/guardian">Parent or Guardian</option>
                    </select>
                {errors.role && <p className="error-message">{errors.role.message}</p>}
            </div>
            <div>
                <label>Date of Birth</label>
                    <input 
                        {...register("birthDate")}
                        id="birthDate"
                        type="date"
                    />
                {errors.birthDate && <p className="error-message">{errors.birthDate.message}</p>}
            </div>
            <div>
                <label>Create Password *</label>
                <input 
                    {...register("password")} 
                    id="password"
                    type="password" 
                />
                {errors.password && <p className="error-message">{errors.password.message}</p>}
                <div>
                    <p>Password must:</p>
                    <li>
                        Be between 8-20 characters
                    </li>
                    <li>
                        Contain at least one lowercase letter
                    </li>
                    <li>
                        Contain at least one uppercase letter
                    </li>
                    <li>
                        Contain at least one digit
                    </li>
                </div>
            </div>
            <div>
                <label>Confirm Password *</label>
                <input 
                    {...register("confirmPassword")}
                    id="confirmPassword" 
                    type="password" 
                />
                {errors.confirmPassword && <p className="error-message">{errors.confirmPassword.message}</p>}
            </div>
            <div>
                Subscribe to our email newsletter:  
                <input 
                    {...register("subscribe")}
                    id="subscribe"
                    type="checkbox"
                />
            </div>
            <button type="submit">
            Submit
            </button>
        </form>
    )
}