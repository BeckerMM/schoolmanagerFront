import Header from "@/components/header";

import { usePathname, useRouter } from "next/navigation";

export default function RootLayout({ children }) {
   const isChildInLogged =  children.type && children.type.name === 'Logged'; // Verifique o nome do componente filho

   const pathname = usePathname();
   
    return (
    
       <div className="h-full w-full">
         
          {pathname == "/login" ? null : <Header />}    
         { children }
         {console.log(pathname)}
       </div>
     
    )
  }