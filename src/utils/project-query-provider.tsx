"use client"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { useState } from "react";

interface ProjectQueryProviderProps {
    children: React.ReactNode;
};

export default function ProjectQueryProvider({children}: ProjectQueryProviderProps) {
    const [projectClient] = useState<QueryClient>(() => new QueryClient());

    return (
        <QueryClientProvider client={projectClient}>
            {children}
        </QueryClientProvider>
    );
};
