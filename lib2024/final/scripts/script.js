var loading; 
function loadinganimation() {
        loading = setTimeout(showInput,3000);
        document.getElementById("user-names").style.display = "none";
        document.getElementById("user-email").style.display = "none";
        document.getElementById("user-add").style.display = "none";
        document.getElementById("user-prov").style.display = "none";
        document.getElementById("mailto").style.display = "none";
        document.getElementById("user-circle").style.display = "none";
        document.getElementById("loader").style.display = "block";
}
function showInput() {
        document.getElementById("user-circle").style.display = "block";
        document.getElementById("user-names").style.display = "block";
        document.getElementById("user-email").style.display = "block";
        document.getElementById("user-add").style.display = "block";
        document.getElementById("user-prov").style.display = "block";
        document.getElementById("mailto").style.display = "block";
        document.getElementById('user-names').innerHTML = 
                    document.getElementById("Name").value;
        document.getElementById('user-email').innerHTML = 
                    document.getElementById("email").value;       
        document.getElementById('user-add').innerHTML = 
                    (document.getElementById("Address").value)+", "+(document.getElementById("city").value);
        document.getElementById('user-prov').innerHTML = 
                    (document.getElementById("Province").value)+", "+(document.getElementById("postal-code").value);    
        document.getElementById('mailto').href = 
                    "mailto:"+(document.getElementById("email").value);
        document.getElementById("loader").style.display = "none";
                }           
