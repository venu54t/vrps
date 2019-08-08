
function phone_number()
{  
  var num=document.getElementById("num").value;
  var pattern=/[0-9{10}]*$/;
  if(!pattern.test(num) || num.length!=10)
	  {
	   alert("phone number must be 10 digits");
	   document.myform.num.focus();
	   return false;
	  }
}

function percentage()
{
  var per=document.getElementById("per").value;
  var z=/^[0-9]*.?[0-9{2}]*$/;
  
 
  if((per<0 || per>100 ) || !z.test(per))
	  {
	  alert("Please enter valid percentage.");
	  document.myform.per.focus();
	  return false;
	  }
 
}

function checkyear()
{
	
	var year=document.getElementById("year").value;
	var pattern=/[0-9]*$/;
	

    if(!pattern.test(year) || year.length!=4)
    	{
    	 alert("Please enter valid year.");
   	    document.myform.year.focus();
   	    return false;
    	}

}

function checkdate()
{
  var start=new Date(document.getElementById("startyear").value);	
  var end=new Date(document.getElementById("endyear").value);	
  var today=new Date();
  
  if(start>end)
	  {
	  alert("start date must be before less than end date");
	  document.myform.startdate.focus();
	  return false;
	  }
  if(start>today || end>today)
	  {
	  alert("should not exceed today");
	  document.myform.startdate.focus();
	  return false;
	  }
  
  
}
