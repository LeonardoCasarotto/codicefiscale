function calcola(surname,name,sex,birthplace,provincia,birthday){
    console.log(check(name))
    //First 6 letters

}
function check(cognome,nome){
    let consonanti=[];
    let vocali=[];
   for(let i=0;i<cognome.length;i++){
       if(cognome.charAt(i)=="A"||
           cognome.charAt(i)=="E"||
           cognome.charAt(i)=="I"||
           cognome.charAt(i)=="O"||
           cognome.charAt(i)=="U"){
           vocali.push(cognome.charAt(i));
       }
       else{
            consonanti.push(cognome.charAt(i));
       }
   }
   if(consonanti.length>=3){
       cognome = consonanti[0]+consonanti[1]+consonanti[2];
   }
    consonanti=[];
    vocali=[];
    for(let i=0;i<nome.length;i++){
        if(nome.charAt(i)=="A"||
            nome.charAt(i)=="E"||
            nome.charAt(i)=="I"||
            nome.charAt(i)=="O"||
            nome.charAt(i)=="U"){
            vocali.push(nome.charAt(i));
        }
        else{
            consonanti.push(nome.charAt(i));
        }
    }
    if(consonanti.length>=4){
        cognome = consonanti[0]+consonanti[2]+consonanti[4];
    }
    else if(consonanti.length=3){
        cognome = consonanti[0]+consonanti[1]+consonanti[2];
    }
    else if(consonanti.length<3&&consonanti.length>0){


    }



}