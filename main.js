// display content in calculator screen
function displayContent(content){
result.value+=content
}
function calclearscreen(){
    result.value = ""
}
function calcOutput(){
    result.value=eval(result.value)
}
function removeLastDigit(){
    result.value=result.value.slice(0,-1)
}