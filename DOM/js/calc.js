

// Calator Web APP


function calculation(choice){

    let num1 = parseFloat(document.getElementsByName('firstnum')[0].value);
    let num2 = parseFloat(document.getElementsByName('secondnum')[0].value);

    switch(choice){
        case '+':
            document.getElementById('add').innerHTML=num1 + num2;
            break;
        case '-':
                document.getElementById('sub').innerHTML=num1 - num2;
                break;
        case '*':
                document.getElementById('mul').innerHTML=num1 * num2;
                break;

        case '/':
                document.getElementById('div').innerHTML=num1 / num2;
                break;
        default:
            alert('case Invalid');

    }
}