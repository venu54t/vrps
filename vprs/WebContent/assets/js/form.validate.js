
function phone_number()
{  
  var num=document.getElementById("phone").value;
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
	function addmore()
 {
	 var v=document.getElementById("div");
	 v.insertAdjacentHTML("beforeend",'<div class="form-group"><label>Acheivements </label><input name="Acheivements[]" type="textarea" class="form-control" placeholder="add your Acheivement"></div>');
 }
  
 function remove()
 {
	 var i=1;
		var some=document.getElementById("div");
		 while(i>0){
			  	some.removeChild(some.lastChild);
			  	i--;
			 }
		 
	 
 }
 
 
function addProject(){
	
	
	
	
	 var d=document.getElementById("project");		
	
	d.insertAdjacentHTML("beforeend",'<div class="col-sm-5 col-sm-offset-1"><label>ProjectTitle</label><div class="form-group"><input type="text" name="title[]" class="form-control" placeholder="project title">  </div><label>Project startdate </label><div class="form-group"><input type="date" name="startdate[]" class="form-control" placeholder=""> </div><label>Project Enddate </label> <div class="form-group"><input type="date" name="enddate[]" class="form-control" placeholder=""> </div></div><div class="col-sm-10 col-sm-offset-1" ><div class="form-group"><label>ProjectDescription </label><input name="projects[]" type="textarea" class="form-control" rows="" placeholder="project description"></div></div>	');
	
}

function remove1()
{
  	var some=document.getElementById("project");
  	
  	var i=4;
  	while(i>0){
  	some.removeChild(some.lastChild);
  	i--;
  	}
}