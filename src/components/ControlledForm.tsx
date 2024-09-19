import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

import { useToast } from "@/hooks/use-toast";
import { formSchema as schema } from "@/lib/validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { CalendarIcon, TrashIcon } from "lucide-react";
import { type SubmitHandler, useFieldArray, useForm } from "react-hook-form";
import type { z } from "zod";

// Todo Uncomment me after adding the input component
// import { Input } from "@/components/ui/input";

type Inputs = z.infer<typeof schema>;

export default function ControlledForm() {
    const { toast } = useToast();

    const form = useForm<Inputs>({
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
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                {/* Select implemented for you */}
                <FormField
                    control={form.control}
                    name="" // Todo Add name
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Role</FormLabel>
                            <Select
                                onValueChange={field.onChange}
                                defaultValue={field.value}
                            >
                                <FormControl>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a role" />
                                    </SelectTrigger>
                                </FormControl>
                                <SelectContent>
                                    <SelectItem value="student">
                                        Student
                                    </SelectItem>
                                    <SelectItem value="educator">
                                        Educator
                                    </SelectItem>
                                    <SelectItem value="parent/guardian">
                                        Parent or Guardian
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Checkbox implemented for you */}
                <FormField
                    control={form.control}
                    name="" // Todo Add name
                    render={({ field }) => (
                        <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                            <FormControl>
                                <Checkbox
                                    checked={field.value}
                                    onCheckedChange={field.onChange}
                                />
                            </FormControl>
                            <div className="space-y-1 leading-none">
                                <FormLabel>
                                    Subscribe to our email newsletter
                                </FormLabel>
                            </div>
                        </FormItem>
                    )}
                />

                <Button type="submit">Submit</Button>
            </form>
        </Form>
    );
}
