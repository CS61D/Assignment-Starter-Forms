import { useToast } from "@/hooks/use-toast";
import { formSchema as schema } from "@/lib/validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { type SubmitHandler, useForm } from "react-hook-form";
import type { z } from "zod";

type Inputs = null;

export default function Form() {
    const { toast } = useToast();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({
        resolver: zodResolver(schema),
    });

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        toast({
            title: "Form Submitted Successfully",
            description: (
                <div className="w-80">
                    <pre>{JSON.stringify(data, null, 2)}</pre>
                </div>
            ),
            variant: "success",
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex flex-col">
                <label htmlFor="firstName">First Name *</label>
                <input id="firstName" type="text" className="border" />
            </div>
            <button
                type="submit"
                className="rounded-md bg-primary p-2 text-primary-foreground"
            >
                Submit
            </button>
        </form>
    );
}
