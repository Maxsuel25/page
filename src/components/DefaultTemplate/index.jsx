import { Footer } from "../Footer"
import { Header } from "../Header"

export const DefaultTemplate = ({children}) => {
    return (
        // Fragment - Tag fantasma
        // Existe no React, mas não renderiza no HTML 
        <> 
            <Header/>
            <main>
                {children}
            </main>
            <Footer/>
        </>
    )
}