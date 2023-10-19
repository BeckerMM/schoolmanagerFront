import { useRouter } from "next/navigation"


export default () => {

    const router= useRouter();
    return (
        <div className="h-[8%] w-full bg-gray-500 flex justify-around items-center">
            <h1 className="buttonHeader"
               onClick={() => {router.push({
                     pathname: "/logged/register",
               })}} 
            >Register</h1>

            <h1 className="buttonHeader">Testes</h1>
            <h1 className="buttonHeader">Gerar Nota</h1>
            <h1 className="buttonHeader">Relatórios</h1>
            <h1 className="buttonHeader">Registrar disciplina</h1>
        </div>

    )

}