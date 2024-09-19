import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ControlledForm from "./components/ControlledForm";
import Form from "./components/Form";
import { ThemeProvider } from "./components/theme/theme-provider";
import { ThemeToggle } from "./components/theme/theme-toggle";

export default function App() {
    return (
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
            <div className="absolute top-4 right-4">
                <ThemeToggle />
            </div>
            <div className="my-8 flex h-full w-screen flex-col items-center">
                <div className="w-96 ">
                    <header className="items-start space-y-2 pb-2">
                        <h1 className="font-bold text-4xl text-primary">
                            Sign Up
                        </h1>
                        <p className="text-foreground">* Required Field</p>
                    </header>
                    <div className="space-y-2 text-left">
                        <Tabs defaultValue="account" className="w-[400px]">
                            <TabsList>
                                <TabsTrigger value="html">
                                    html form
                                </TabsTrigger>
                                <TabsTrigger value="shadcn">
                                    controlled shadcn form
                                </TabsTrigger>
                            </TabsList>
                            <TabsContent value="html">
                                <Form />
                            </TabsContent>
                            <TabsContent value="shadcn">
                                <ControlledForm />
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
            </div>
        </ThemeProvider>
    );
}
