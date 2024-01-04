/*const colors = ['orange','green','yellow','purole','blue'];

//Gets random number between 0 and 4 and stores in avariable
const randomIndex = Math.floor(Math.random()* colors.length);

/*Remember to get a value from an array,we use bracket noytation
for example ,to get 'green',we use 'colors[1]'

Since random index will be a random number between 0-4,
we can pass this in as our index to retrieve a random color from the array

const randomColor = colors[randomIndex];*/

/*//if Conditionals
if(randomColor === 'orange'){
    console.log('the color is orange');

}else if(randomColor === 'green'){
    console.log('the color is green');

}else if(randomColor === 'yellow'){
    console.log('the color is yellow');

}else if(randomColor === 'purple'){
    console.log('the color is purple')

    }else if(randomColor === 'blue'){
        console.log('the color is blue');

    }else{
        console.log('None of the above');
    }*/

    //PURE SWITCH STATEMENT

    const colors = ['orange','green','yellow','purple','blue'];

    //Gets random number between 0 and 4 and stores in avariable
    const randomIndex = Math.floor(Math.random()* colors.length);
    
    /*Remember to get a value from an array,we use bracket noytation
    for example ,to get 'green',we use 'colors[1]'
    
    Since random index will be a random number between 0-4,
    we can pass this in as our index to retrieve a random color from the array*/
    
    const randomColor = colors[randomIndex];

    //Switch/case statement

    switch(randomColor){
        case 'orange':
            console.log('the color is orange');
            break;

            case 'green':
                console.log('the color is green');
                break;

                case 'yellow':
                    console.log('the color is yellow');
                    break;

                    case 'purple':
                        console.log('the color is purple');
                        break;

                        case 'blue':
                            console.log('the color is blue');
                            break;

                            default:
                                console.log('None of the above found!');
                                break;
    }
 