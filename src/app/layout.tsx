import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import AlbumCard from "@/components/AlbumCard";
import { getAlbums } from "@/functions/getAlbums";
import type { AlbumBase } from "@/types";
import AlbumList from "@/components/AlbumList";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "API jsonplaceholder",
  description: "",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let albums: AlbumBase[] = [];
  let errorFetch: string = "";
  try {
    albums = await getAlbums();
    if (!albums.length) {
      throw new Error("Faild the request");
    }
  } catch (error) {
    if (error instanceof Error) {
      errorFetch = `${error.name} - ${error.message}`;
    }
  }

  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <h1 className="capitalize, font-light text-slate-700 text-balance text-center my-8 text-[2rem] underline underline-offset-8">
          API {"&lbrace;" + "JSON" + "&rbrace;"} placeholder
        </h1>
        <hr className="my-12" />
        <main className="grid grid-cols-[minmax(300px,_3fr)_1fr]">
          <div className="border-r-2">
            <h2 className="text-center uppercase font-semibold my-8">
            Post List (Client Components)
            </h2>
            {/* Client Component*/}
              {children}
          </div>
          {/* Server Component */}
          <div>
            <h2 className="text-center uppercase font-semibold my-8">
             Album Lista  (Server Components)
            </h2>
            {albums.length ? (
              <AlbumList albums={albums} />
            ) : (
              <div className="text-red-500 font-semibold text-center text-pretty">
                {errorFetch}
              </div>
            )}
          </div>
        </main>
        <Toaster />
      </body>
    </html>
  );
}
