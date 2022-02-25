function calcola(surname,name,sex,birthplace,provincia,birthday){
    check(name);
    //First 6 letters

}
function check(value){
    const name=[];
    let vocali=0;
    let consonanti=0;
    for(let i=0;name.length<3;i++){
        if(value.charAt(i)==("A"||"E"||"I"||"O"||"U")){
            vocali.push(value.charAt(i));
        }
        else if(value.charAt(i)!=("A"||"E"||"I"||"O"||"U")){
            consonanti.push(value.charAt(i));
        }
    }
    if(consonanti.length>=3){
        return(consonanti[0]+consonanti[1]+consonanti[2]);
    }
    else if(vocali.length>=3){
        result="";
        for(let i=0;)

    }
    else{

    }

}