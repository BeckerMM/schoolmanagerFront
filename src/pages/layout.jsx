import Header from "@/components/header";

export default function RootLayout({ children }) {
   const isChildInLogged = children && children.type && children.type.name === 'logged'; // Verifique o nome do componente filho

    return (
    
       <div className="h-full w-full">
        <Header/>
              {children}
       </div>
     
    )
  }