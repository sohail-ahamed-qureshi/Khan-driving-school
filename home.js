
function beginCourse(){
    var name = 'Selected';
     document.getElementById('begin-btn').innerHTML = name;
     document.getElementById('adv-btn').innerHTML = "Select";
     document.getElementById('inter-btn').innerHTML = "Select";
   
    //  document.getElementById('sidePanel-adv').style.width = "350px";
     document.getElementById('sidePanel-adv').style.display = "block";
     document.getElementById('detail-adv').innerHTML = "Beginner's Course";
     document.getElementById('option').style.display = "none";
     document.getElementById('Documents').innerHTML = "*Documents Required";
     document.getElementById('photo').innerHTML = "4 Passport size photos";
     document.getElementById('sslc').innerHTML = "SSLC marks card";  
     document.getElementById('aadhar').innerHTML = "Aadhar card";
     document.getElementById('Register').innerHTML = "Contact Details";
     document.getElementById('contact-form').style.display = "block";
    
     

}

function advCourse(){
    var name = 'Selected';
     document.getElementById('begin-btn').innerHTML = "Select";
     document.getElementById('adv-btn').innerHTML = name;
     document.getElementById('inter-btn').innerHTML = "Select";
    
    //  document.getElementById('sidePanel-adv').style.width = "350px";
     document.getElementById('sidePanel-adv').style.display = "block";
     document.getElementById('detail-adv').innerHTML = " Advance Course";
     document.getElementById('option').style.display = "block";
     document.getElementById('option').innerHTML = "(Most Recommended)";
     document.getElementById('Documents').innerHTML = "*Documents Required";
     document.getElementById('photo').innerHTML = "4 Passport size photos";
     document.getElementById('sslc').innerHTML = "SSLC marks card";  
     document.getElementById('aadhar').innerHTML = "Aadhar card";
     document.getElementById('Register').innerHTML = "Contact Details";
     document.getElementById('contact-form').style.display = "block";
}

function interCourse(){
    var name = 'Selected';
     document.getElementById('begin-btn').innerHTML = "Select";
     document.getElementById('adv-btn').innerHTML = "Select";
     document.getElementById('inter-btn').innerHTML = name;

    //  document.getElementById('sidePanel-adv').style.width = "350px";
     document.getElementById('sidePanel-adv').style.display = "block";
     document.getElementById('detail-adv').innerHTML = "Intermidiate Course";
     document.getElementById('option').style.display = "none";
     
     document.getElementById('Documents').innerHTML = "*Documents Required";
     document.getElementById('photo').innerHTML = "4 Passport size photos";
     document.getElementById('sslc').innerHTML = "SSLC marks card";  
     document.getElementById('aadhar').innerHTML = "Aadhar card";
     document.getElementById('Register').innerHTML = "Contact Details";
     document.getElementById('contact-form').style.display = "block";
     
}

function closeSidePanelAdv(){

    document.getElementById('sidePanel-adv').style.display = "none";
    document.getElementById('sidePanel-adv').style.transition = "all .3s ease-in-out";
  
    
}
