function doGreet(){
    let name = document.getElementsByName('name')[0].value;
    document.getElementById('result').innerHTML = '<b> Greeting ' + name + ' </b>';
}