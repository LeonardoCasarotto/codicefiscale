var codicecat;
function calcola(surname,name,sex,birthplace,provincia,birthday){
        //if is empty
        if(surname==""||
            name==""||
            sex==""||
            birthplace==""||
            provincia==""){
            
            errore();
            return 0;
        }
        birthplace=adapt(birthplace);
        codicecatastale(birthplace,provincia);
        let codicefiscale= inizio(surname,name)+data(birthday,sex)+codicecat;
        codicefiscale =codiceverifica(codicefiscale);
        //if is invalid
        if(codicefiscale.includes("undefined")){
            errore();
            return 0;
        }
        document.getElementById("cf").innerHTML=codicefiscale;
        document.getElementById("form").style.display = "none";
        document.getElementById("result").style.display = "block";
        
       


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
                cognome+="X";
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

    let year = date.slice(2,4);
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
    
    var result;
    $.ajax({
        url: "./data/codici.json",
        dataType: "json",
        type: "get",
        async: false, // this doesn't allow to start the next function without having completed this one
        cache: false,
        success: function (obj){
            const keyone= "nome";
            const keytwo = "sigla";

            result= obj.comuni.find((x => x[keyone] ==value&& x[keytwo]==district));
            codicecat =result["codiceCatastale"];

        }
    });


}
function codiceverifica(codicefiscale){
    let dispari=0;
    let pari=0;
    const legdisp = {"0":"1",
                    "1":"0",
                    "2":"5",
                    "3":"7",
                    "4":"9",
                    "5":"13",
                    "6":"15",
                    "7":"17",
                    "8":"19",
                    "9":"21",
                    "A":"1",
                    "B":"0",
                    "C":"5",
                    "D":"7",
                    "E":"9",
                    "F":"13",
                    "G":"15",
                    "H":"17",
                    "I":"19",
                    "J":"21",
                    "K":"2",
                    "L":"4",
                    "M":"18",
                    "N":"20",
                    "O":"11",
                    "P":"3",
                    "Q":"6",
                    "R":"8",
                    "S":"12",
                    "T":"14",
                    "U":"16",
                    "V":"10",
                    "W":"22",
                    "X":"25",
                    "Y":"24",
                    "Z":"23"

    }
    
    for(let i=0;i<codicefiscale.length;i++){
        //IF IS EVEN
        if(i%2==1){
            //IF IS NAN
            if(isNaN(codicefiscale.charAt(i))){
                pari+=(codicefiscale.charCodeAt(i))-65;

            }
            //ELSE
            else{
                pari+=Number(codicefiscale.charAt(i));

            }
            
        }
        //IF IS UNEVEN
        else if(i%2==0){
            dispari+=Number(legdisp[codicefiscale.charAt(i)]);
        }
    }
    
    

    return codicefiscale+ String.fromCharCode((pari+dispari)%26+65);
    

}
function adapt(value){
    value.toLowerCase();
    value= value.charAt(0).toUpperCase()+value.slice(1);
    for(let i=0;i<value.length;i++){
        if(value.charAt(i-1)==" "){
            value=value.slice(0,i) +value.charAt(i).toUpperCase()+value.slice(i+1);
        }
        
    }
    return value;
    
}
function ritenta(){
    svuotaform();
    document.getElementById("form").style.display = "block";
    document.getElementById("result").style.display = "none";
    document.getElementById("invalid").style.display = "none";

}
function errore(){
    document.getElementById("form").style.display = "none";
    document.getElementById("invalid").style.display = "block";
}
function svuotaform(){
    document.getElementById('surname').value="";
        document.getElementById('name').value="";
        document.getElementById('sex').value="Maschio";
        document.getElementById('birthplace').value="";
        document.getElementById('provincia').value="";
        document.getElementById('birthday').value="";
}


