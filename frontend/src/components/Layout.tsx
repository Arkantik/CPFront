import { ReactNode } from "react";
import Header from "./Header";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <Header />
            <main className="container mx-auto flex flex-col items-center gap-4 p-4">{children}</main>
        </>
    );
};
