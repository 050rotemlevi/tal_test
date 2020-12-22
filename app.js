function getByName(country){
    
    // Reset the 'p1' paragraph for reusing
    document.getElementById("p1").innerHTML = ""
    
    // Create a method to run function
    const renderTodos = function(){
        
        db.collection('todos').get().then(data => {
            
            var cnt = 1;
            data.docs.forEach(element => {
                          
                if(element.data().name != null && element.data().country == country){
                    document.getElementById("p1").innerHTML += " Counter: " + cnt + "<br>" + element.data().name
                    document.getElementById("p1").innerHTML += "<br>" + element.data().country + "<br><br>"
                    cnt++
                }           
            });
                
        });
    }
    renderTodos();
}