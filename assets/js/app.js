//alert("ToDo List !");
var bouton = document.getElementById("add");
var box = document.getElementById("task");
var n = 1;

bouton.addEventListener("click", function(){
        console.log("hello!")
    var content = document.getElementById("textarea1").value;
        console.log(content);
    
    var li = document.createElement("li");
        console.log(li);
    
    var check = document.createElement("input");
        check.setAttribute("type", "checkbox");
        check.setAttribute("id", "test"+n);

    li.append(check);

    var label = document.createElement("label");
        label.setAttribute("for", "test"+n);
        label.append(content);
            n++;

    li.appendChild(label);

    box.appendChild(li); 

        console.log(n);

    document.getElementById('textarea1').value = " ";

});



