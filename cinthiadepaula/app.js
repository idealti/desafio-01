form.addEventListener('submit', function (e) {
    e.preventDefault()
  
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let msg = document.getElementById("msg").value;

    const config ={
        method: 'POST',
        url:'http://mockbin.com/request?title=name&foo=baz',
        data:{
            name:name,
            email:email,
            msg:msg
        }
    };
    
    function ready(){
        axios(config)
        .then(function(response){
            
            const data = response.data
            console.log(data.postData)
        })
        .catch(function(err){
            console.log(err)
        })
    }
    ready()
})    


