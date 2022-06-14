import Head from "next/head";
import { FC } from "react";
import { Navbar, SideMenu } from "../ui";

interface Props  {
    title: String,
    pageDescription?: String,
    imageFullUrl?: String,
    children?: any
}


export const ShopLayout:FC<Props> = ({children, title, pageDescription, imageFullUrl}) =>  {
  return (
    <>
    <Head>
        <title>{title}</title>
        <meta name="description" content={pageDescription}/>

        {
            imageFullUrl && (
                <meta name="description" content={imageFullUrl}/>
            )
        }
    </Head>
    <nav>
    <Navbar/>
    </nav>

<SideMenu/>

    <main style={{margin: '80px auto', maxWidth: '1440px', padding: '0 30px'}}>
    {children}
    </main>
    <footer>

    </footer>
    </>
  )
}
