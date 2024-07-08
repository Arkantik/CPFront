import { ReactNode } from "react";
import Header from "./Header";
import Head from "next/head";

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <Head>
                <title>Checkpoint - Front</title>
                <meta name="description" content="country website" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main className="container mx-auto flex flex-col items-center gap-4 p-4">{children}</main>
        </>
    );
};
