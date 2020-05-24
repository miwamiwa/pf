function sortElements(){

  let result = [  ];

  for(let i=0; i<entries.length; i++){

    if( selectedTag=="all"|| entries[i].info.tags.includes(selectedTag) ){

      if(result.length==0) result.push(i);
      else {
        let positionFound=-1;

        for(let j=0; j<result.length; j++){

          if( positionFound==-1 ){
            if(sortBy=="date"&&date1isAfterDate2( entries[i].info.date, entries[ result[j] ].info.date ))
             positionFound=j;
            else if(sortBy=="name"&& name1isBeforeName2( entries[i].info.title, entries[ result[j] ].info.title ) )
            positionFound=j;
          }
        }

        if(positionFound!=-1) result.splice(positionFound,0, i);
        else result.push(i);
      }

    }
  }
  return result;
}


function name1isBeforeName2( name1, name2 ){
  let longerName=name2;
  let shorterName=name1;
  let name1isLonger = name1.length>name2.length;
  if(name1isLonger){
    longerName=name1;
    shorterName=name2;
  }
  shorterName = shorterName.toLowerCase();
  longerName = longerName.toLowerCase();

  let firstName =0;
  for(let i=0; i<shorterName.length; i++){
    if(firstName==0){
      if(shorterName.charCodeAt(i)<longerName.charCodeAt(i)) firstName=1;
      else if(shorterName.charCodeAt(i)>longerName.charCodeAt(i)) firstName=2;
    }
  }

  switch(firstName){
    case 0: // names are identital.. shouldn't happen xD
    console.log("no name comes first.. eh");
     return;
    break;

    case 1: // shorter name comes first

    if(name1isLonger) return false;
    else return true;

    break;

    case 2:

    if(!name1isLonger) return false;
    else return true;

    break;
  }
}



function date1isBeforeDate2(date1, date2){
  let result=false;
  if( date1[2] < date2[2] ) result=true;
  else if ( date2[2] < date1[2] ) result=false;
  else if( date1[1] < date2[1] ) result=true;
  else if (date2[1] < date1[1] ) result=false;
  else if ( date1[0] < date2[0] ) result=true;
  else result=false;
console.log(date1,date2,result);
  return result;
}

function date1isAfterDate2(date2,date1){
  let result=false;
  if( date1[2] < date2[2] ) result=true;
  else if ( date2[2] < date1[2] ) result=false;
  else if( date1[1] < date2[1] ) result=true;
  else if (date2[1] < date1[1] ) result=false;
  else if ( date1[0] < date2[0] ) result=true;
  else result=false;
console.log(date1,date2,result);
  return result;
}
