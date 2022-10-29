# @0xreeko/next-ga

Google Analytics script component for NextJs to avoid recurrent setup in every build.

**How to install**

```
npm i @0xreeko/next-ga
```

**How to use**
Grab your measurement ID from the Google Analytics dashboard and plug it into NextGA's mID prop. Use in `_app.tsx` entrypoint file.

```jsx
// app.tsx

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { NextGA } from '@0xreeko/next-ga'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <NextGA mId={`${process.env.NEXT_GA}`} />
            <Component {...pageProps} />
        </>
    )
}

export default MyApp
 
```