function myFunction() {

    const node = document.createElement("li");
  
    const textnode = document.getElementById("novoitem");
    
    const colornodes = Array.from(document.querySelectorAll('.radio'));
  
    const checked = colornodes.find(colornode => colornode.checked);
    
    let color;
    if (typeof checked === 'undefined') color = 'black';
    else color = checked.value;
    
    node.innerText = textnode.value;
  
    node.style.setProperty('color', color);
    
    document.getElementById("lista").appendChild(node);
  }