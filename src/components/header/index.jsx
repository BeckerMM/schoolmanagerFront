import { useRouter } from "next/navigation"
import {getStaticProps} from "@/functions/check-user-authenticate";
import { useEffect, useState } from "react";

export default () => {


    const [user , setUser] = useState('')
    useEffect(() => {
        async function checkUser() {

            setUser(JSON.parse(await getStaticProps()));
          
        }
        checkUser();
    }, []);
    
    console.log(user)
    const router= useRouter();
    return (

        
        <div className="h-[8%] w-full bg-[#f5f5f5] flex justify-around items-center border border-thin">
           
           {user.userEnum == 'SECRETARY' &&
            <h1 className="buttonHeader"
               onClick={() => {router.push({
                     pathname: "/logged/register",
               })}} 
            >Register</h1>}
        {user.userEnum == 'PROFESSOR' &&
            <h1 className="buttonHeader" 
            onClick={() => {router.push({
                pathname: "/logged/test",
            }   )}}
            >Testes</h1>
        }
            <h1 className="buttonHeader">Gerar Nota</h1>
            <h1 className="buttonHeader">Relatórios</h1>


            {user.userEnum =='SECRETARY' &&
            <h1 className="buttonHeader" onClick={
                () => {
                    router.push({
                        pathname: "/logged/discipline"
                    })
                }
            }>Registrar disciplina</h1>
        }
        </div>

    )

}