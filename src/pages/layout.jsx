import Header from "@/components/header";

import { usePathname, useRouter } from "next/navigation";
import {checkIsPublicRoute} from '@/functions/check-is-public';
import PrivateRoute from "@/components/PrivateRoute";
import { useEffect } from "react";
export default function RootLayout({ children }) {
   const isChildInLogged =  children.type && children.type.name === 'Logged'; // Verifique o nome do componente filho

   // Verifica se a rota é pública 
   const pathName = usePathname();
   const isPublic = checkIsPublicRoute(pathName)
   
    
   
    return (
    
       <div className="h-full w-full">
         
         {!isPublic && <Header/>}
         {isPublic && children}
         {!isPublic && <PrivateRoute>{children}</PrivateRoute>}
         
       </div>
     
    )
  }