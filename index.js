var gua;

function getGuacamole(){
    var ajaxURL = "http://10.128.0.211:8080/guacamole/api/tokens";
	var userparams = {
		"username":"guacadmin",
		"password":"guacadmin"
	};
	
    $.ajax({
        type:"POST",
        url:ajaxURL,
        headers:{
			"Access-Control-Allow-Headers":"X-Requested-With",
			"Access-Control-Allow-Methods":"POST",
			"Access-Control-Allow-Origin":"*",
			"ACCEPT":"application/json, text/plain, */*",
            "Content-Type":"application/x-www-form-urlencoded"
        },
        data:JSON.stringify(userparams),
        dataType:"json",
        success: function(data){
            console.log(data);
           
        },
        error: function(data){
            
        }
    })

}
