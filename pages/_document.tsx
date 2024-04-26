import { Html, Head, Main, NextScript } from "next/document"

export default function Document () {
  return (
    <Html>
      <Head>
        <meta name="title" content="DefiBank"/>
        <meta name="description" content="Defi Bank is a dapp created for testing deployment on IPSChain"/>

        <meta property="og:type" content="website"/>
        <meta property="og:url" content="https://bankdapp-ipschain.vercel.app/"/>
        <meta property="og:title" content="DefiBank"/>
        <meta property="og:description" content="Defi Bank is a dapp created for testing deployment on IPSChain"/>
        <meta property="og:image" content="https://bankdapp-ipschain.vercel.app/assets/LandingPage.png"/>

        <meta property="twitter:card" content="summary_large_image"/>
        <meta property="twitter:url" content="https://bankdapp-ipschain.vercel.app/"/>
        <meta property="twitter:title" content="DefiBank"/>
        <meta property="twitter:description" content="Defi Bank is a dapp created for testing deployment on IPSChain"/>
        <meta property="twitter:image" content="https://bankdapp-ipschain.vercel.app/assets/LandingPage.png"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
