document.getElementById("button-submit").addEventListener("click",function(){
   // console.log('button clicked')
   const emailbox= document.getElementById('email-box');
    const email =emailbox.value;
    
   const passwordBox= document.getElementById('password-box');
    const password =passwordBox.value;
    console.log(email, password);

    if (email === "akash@bd.com" && password === 'bangla')
    {
      // console.log("valid User");
       window.location.href='main.html';
    }
    else{
      console.log("Invalid User")
    }
    
})