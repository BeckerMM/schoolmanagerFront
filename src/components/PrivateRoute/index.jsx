import { useRouter } from "next/router";
import { APP_ROUTES } from "@/constants/app-routes";
import { getStaticProps } from "@/functions/check-user-Authenticate";
import { useEffect, useState } from "react";

const PrivateRoute = ({ children }) => {

    const route = useRouter();
    const [user, setUser] = useState(false)
    useEffect(() => {
        async function checkUser() {

            let autenticate = await getStaticProps();
            setUser(autenticate);
            if (!autenticate) {
                route.push(APP_ROUTES.public.login);
            }
        }
        checkUser();
    }, []);

    return (
        <>
            {getStaticProps() == null && null}
            {getStaticProps() && children}
        </>

    )
}


export default PrivateRoute;