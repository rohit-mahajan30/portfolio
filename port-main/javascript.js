function validation(){
    var name = document.form.f_name.value;
    var email = document.form.email.value;
    var mob = document.form.mob.value;
   
    if(name==0 || name==""){
        alert("Name Can not Be Empty");
        return false;
    }
    else if(email==0 || email==""){
        alert("Email Can not Be Empty");
        return false;
    }
    else if(mob==0 || mob==""){
   alert("Name Can not Be Empty");
    return false;
    }

}