import Script from "next/script";

export default function Head() {
  return (
    <>
      <title> Webibee</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="description"
        content="Unleash your Visual Brilliance 🌏 with Webibee"
      />
      <link rel="icon" href="/favicon.ico" />
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-32W93HZEP8"
      ></Script>
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-32W93HZEP8');
        `}
      </Script>
    </>
  );
}
