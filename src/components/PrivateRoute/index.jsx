import { useRouter } from "next/router";
import { APP_ROUTES } from "@/constants/app-routes";
import { checkUserAuthenticate } from "@/functions/check-user-Authenticate";
import { useEffect } from "react";
const PrivateRoute = ({ children }) => {

    const route = useRouter();

    const isLogged = checkUserAuthenticate();

    
    useEffect(() => {
        if(!isLogged){
            route.push(APP_ROUTES.public.login)
        }
    }, [isLogged,route])

    console.log(isLogged)
    return(
        <>
        {!isLogged && null}
        {isLogged && children}
        </>

    )
}


export default PrivateRoute;