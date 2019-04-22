window.onload = init;

function RachaelFunction() {
	alert("HERRRROOOO?????");
	alert("HEEEERROOOOOOOO????");
	alert("HARRROOOOOOOOOOOOOOO??????");
	alert("merrrrrp");
}
function showInput() {
        document.getElementById('user-names').innerHTML = 
                    document.getElementById("Name").value;
        document.getElementById('user-email').innerHTML = 
                    document.getElementById("email").value;       
        document.getElementById('user-add').innerHTML = 
                    document.getElementById("Address").value;
        document.getElementById('user-city').innerHTML = 
                     document.getElementById("city").value;
        document.getElementById('user-prov').innerHTML = 
                    document.getElementById("Province").value;    
        document.getElementById('user-postal').innerHTML = 
                    document.getElementById("postal-code").value; 
        document.getElementById('mailto').href = 
                    "mailto:"+(document.getElementById("email").value);
                }           

