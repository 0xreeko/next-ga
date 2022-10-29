import * as React from 'react';
import Script from 'next/script'

interface NextGAProps {
  mId: string
}

export const NextGA = ({ mId }: NextGAProps) => {
  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${mId}`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${mId}');
                `}
      </Script>
    </>
  )
}

// Delete me
export const Thing = () => {
  return <div>the snozzberries taste like snozzberries</div>;
};
