module.exports={
	dataTypes: function (data){
  if(typeof(data)==='function'){
    return data(true);
  }
  
  if (typeof(data)=="string"){
    return data.length;
  }
  
  if (data===undefined || data===null){
    return "no value";
  }
  
  if (typeof(data)=="boolean"){
    return data;
  }
  
  if (typeof(data)=="number"){
    if(data<100){
      return "less than 100";
    }
    if(data>100){
      return "more than 100";
    }
    if(data==100){
      return "equal to 100";
    }
  }
  
  if(data instanceof Array){
      return data[2];
    }
  else{
    return undefined;
  }
  
  
}

}