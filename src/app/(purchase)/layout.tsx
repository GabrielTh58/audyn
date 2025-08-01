import { StepsCartProvider } from "@/context/StepsCartContext";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <StepsCartProvider>
            {children}
        </StepsCartProvider>
    );
}
