import Footer from "./footer"
import Header from "./nav-bar";
export default function Layout ({children}){
    return(
        <>
        <Header/>
        {children}
        <Footer/>

        </>
    )
}