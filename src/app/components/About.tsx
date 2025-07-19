import { html } from "framer-motion/client";
import { NextSeo } from "next-seo";

export default function RootLayout({children}:{children: React.ReactNode}){
    return(
        <html lang="en">
          <head>
            <NextSeo
            title="Beulah | Web3 Developer & Educator"
            description="Portfolio of a Web3 developer from Nigeria"
            openGraph={{
                url: 'https://beutech.dev',
                title: 'Beutech | Web3 Developer & Educator',
                description : 'Explore my Web3 Developer and community contributions.',
                images: [{url : '/images/Beu.jpg'}]
            }}
            />
          </head>
          <body>
            {children}
          </body>
        </html>
    )
}