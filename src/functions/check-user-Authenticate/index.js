

export const getStaticProps= async () =>{
    
    if( localStorage.getItem('user')!=""&& localStorage.getItem('user')!=null){
        return localStorage.getItem('user');
    }else{
        return null;
    }
   

}



