import { z } from "zod";

export const formSchema = z.object({
    // Todo implement remaining fields
    firstName: z.string().min(1),
});
