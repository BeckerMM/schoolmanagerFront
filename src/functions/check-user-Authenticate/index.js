

export const getStaticProps= async () =>{
    
    if( localStorage.getItem('user')!=""&& localStorage.getItem('user')!=null){
        return true;
    }else{
        return false;
    }
   

}



