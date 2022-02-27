function calcola(surname,name,sex,birthplace,provincia,birthday){
    check(surname.toUpperCase(),name.toUpperCase())
    //First 6 letters
    //TODO Check all ;
}
function check(cognome,nome){
    let consonanti=[];
    let vocali=[];
    //cognome
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

   else if(consonanti.length>0&&consonanti.length<3){
        cognome="";

        for(let i=0;i<consonanti.length;i++){
            cognome+=consonanti[i];

        }
        for(let i=0;cognome.length<3&&vocali[i]!=='undefined';i++){
            if(typeof vocali[i]!=="undefined"){
                cognome+=vocali[i];
            }
            else{
                cognome+="X"
            }

        }

    }






   //nome

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
        nome = consonanti[0]+consonanti[2]+consonanti[3];
    }
    else if(consonanti.length==3){
        nome = consonanti[0]+consonanti[1]+consonanti[2];
    }
    
    else if(consonanti.length<3){
        if(consonanti.length>0){
            nome="";
            
            for(let i=0;i<consonanti.length;i++){
                nome+=consonanti[i];

            }
            for(let i=0;nome.length<3&&vocali[i]!=='undefined';i++){
                if(typeof vocali[i]!=="undefined"){
                    nome+=vocali[i];
                }
                else{
                    nome+="X";
                }


            }


            
        }
    }
    console.log(cognome,nome);
}

    
   
