import React from 'react'
import { Helmet,HelmetProvider } from 'react-helmet-async'

import Header from './Header'
import Footer from './Footer'

const Main = ( props ) => {
    return (
        <HelmetProvider>
            <Helmet titleTemplate='%s | OHTUBE'
            defaultTitle='OHTUBE'
            defer={false}>
                {props.title&&<title>{props.title}</title>}
                <meta name ="desciption" content={props.description}/>
            </Helmet>
            <Header />
            <main id="main" role="main">
                {props.children}
            </main>
            <Footer />
        </HelmetProvider>
    )
}

export default Main