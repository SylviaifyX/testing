

export default function Wrapper({children, className}){
    return(
        <div  className={`mx-auto  w-11/12  max-w-screen-2xl ${
            typeof className === "string" ? className : "" }`}>
            {children}       
        </div>
    )
}