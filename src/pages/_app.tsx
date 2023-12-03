import MainLayout from "@/components/layouts/mainLayout";
import { AppProps } from "next/app";

export default function MyApp ({Component,pageProps} : AppProps) {
    return (
        <MainLayout>
            <Component {...pageProps}/>
        </MainLayout>
    )
}