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
      <Script id="clarity">
        {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
    })(window, document, "clarity", "script", "i7hzoh7g3e")`}
      </Script>
    </>
  );
}
