var ul = document.getElementById('getTodo');
 
function getTodo(){
    var input = document.getElementById('write-todo');
    var li = document.createElement('li');
    var text = document.createTextNode(input.value);
    li.appendChild(text);

// Create Delete Button
    var delBtn = document.createElement('button');
    var delText = document.createTextNode('Delete');
    delBtn.appendChild(delText);
    delBtn.setAttribute('onclick', 'delOne(this)');
    li.appendChild(delBtn);
    // Create Edit Button
    var editBtn = document.createElement('button');
    var editText = document.createTextNode('Edit');
    editBtn.appendChild(editText);
    editBtn.setAttribute('onclick', 'edit(this)');
    li.appendChild(editBtn)
    ul.appendChild(li);
    input.value = '';
    


 }
 function delAll(){
    ul.innerHTML = '';
 }
 function delOne(d){
    d.parentNode.remove()
 }
 function edit(e){
    var val = e.parentNode.firstChild.nodeValue;
    var edit = prompt('Enter the Value', val);
    e.parentNode.firstChild.nodeValue = edit;
    console.log(e)
 }