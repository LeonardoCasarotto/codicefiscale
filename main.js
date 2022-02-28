function calcola(surname,name,sex,birthplace,provincia,birthday){
     //let nomecog= inizio(surname.toUpperCase(),name.toUpperCase());
        let codicefiscale= inizio(surname,name)+data(birthday,sex)+codicecatastale(birthplace,provincia);
        codicefiscale =codiceverifica(codicefiscale);
     //data(birthday,sex);
    //TODO Check all ;
}
function inizio(cognome,nome){
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
    return cognome+nome;
}
function data(date,sex){

    let year = date.slice(2,4)
    console.log(date);
    let m=date.slice(5,7);
    let mesi={"01":"A","02":"B","03":"C","04":"D","05":"E","06":"H","07":"L","08":"M","09":"P","10":"R","11":"S","12":"T"};
    m= mesi[m];
    let day=date.slice(8);
    if(sex=="Femmina"){
    day=Number(day)+40;
    }
    
    return year+m+day;


}

function codicecatastale(value,district){

    $.ajax({
        url: "./data/codici.json",
        dataType: "json",
        type: "get",
        cache: false,
        success: function (obj){
            const keyone= "nome";
            const keytwo = "sigla";
            //TODO Change colors

            result= obj.comuni.find((x => x[keyone] ==value&& x[keytwo]==district))
            return result["codiceCatastale"];
            
        }
    })
    
}
function codiceverifica(codicefiscale){

}
    
   
