var userInfo={
    name:'',
    password:'',
    getDetails: function(){
        alert(this.name+'   '+this.password)
    }
};

uname=document.getElementById('uname')
pass=document.getElementById('pass')


function Show(){
    alert('User Name='+uname.value+'\nPassWord='+pass.value)
}
//window.onload=init;