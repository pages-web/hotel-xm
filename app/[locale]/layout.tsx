import type { Metadata } from "next";
import "./globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import DefaultLayout from "@/components/layout";
import { Toaster } from "@/components/ui/toaster";
import Apollo from "./ApolloClient";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default async function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <Apollo>
            <DefaultLayout locale={locale}>{children}</DefaultLayout>
          </Apollo>
        </NextIntlClientProvider>
        <Toaster />
      </body>
    </html>
  );
}
