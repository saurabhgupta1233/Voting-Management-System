
function verify(form)
{var i;
    for(i=0;i<=18;i++)
    {
        if(i==1||i==3||i==10||i==17)
        {
            return(true);
        }
        else
        {
            if(i==0||i==2||i==4||i==9||i==11||i==12||i==13||i==16)
            {
                if(document.forms["user"].elements[i].value=="")
                {
                    alert("Please fill in the"+document.forms["user"].elements[i].name +"field");
                    document.forms[0].elements[i].focus();
                    return (false);
                }
                if(i==4)
                {
                    if(document.forms["user"].elements[4].value!="")
                    {
                        pass=document.forms["user"].elements[4].value.indexOf('@',0);
                        pass1=document.forms["user"].elements[4].value.indexOf('.',0);
                        if((pass==-1)||(pass1==-1))
                        {
                            alert("Not a valid email");
                            document.forms[0].elements[2].focus();
                            return(false);
                        }
                    }
                }
            }
        }
    }

    for(i=0;i<=18;i++)
    {
        if(i==5||i==6||i==7||i==8||i==14||i==15||i==18)
	{
            if(document.forms["user"].elements[i].selectedIndex==0)
            {
                alert("Please select your choice in"+document.forms["user"].elements[i].name);
                return(false);
            }
	
 	}
 	
        if(i==13)
	{
            var pin=document.getElementById("pin").value;
            if(isNaN(pin))
            {
                alert("Plz enter pin code");
                return (false);
            }
        
        }
	if(i==0||i==2||i==9||i==11)
	{
            var res=isAlphabet(document.forms["user"].elements[i].value);
            if(res==false)
            {alert("Please enter again in"+document.forms["user"].elements[i].name+"field");
            }
	}

    }

  



} 
function isAlphabet(elem){
    var alphaExp = /^[a-zA-Z]+$/;
    if(elem.value.match(alphaExp)){
        return true;
    }else{
		
        elem.focus();
        return false;
    }
}


function clear1()
{
    alert("The form have been cleared");
}

function set(form)
{
    document.forms["user"].elements[0].focus();
}