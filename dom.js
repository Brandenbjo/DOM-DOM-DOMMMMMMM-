let head = document.createElement('div');
let button = document.createElement('button');
let button_text = document.createTextNode(`Add Square`);
button.className = "btn";
button.appendChild(button_text)
document.body.appendChild(button);
button.addEventListener('click', createbtn)

let num = 1;
let array = []


function createbtn() {
    let div = document.createElement('div');
    div.className = 'blackdiv'
    div.style.backgroundColor = "black";
    div.style.width = '100px'
    div.style.height = '100px'
    div.style.display = 'inline-block'
    div.style.textAlign = 'center'
    div.style.cursor = ('pointer');

    div.id = num++;
    let divid = div.id
    array.push(divid)
    let divnum = document.createTextNode(divid);
    div.appendChild(divnum)

    document.body.appendChild(div);


    // reveals id number
    div.addEventListener('mouseover', function handleMouseOver() {
        div.style.color = 'white';
    });
    // disappears id number
    div.addEventListener('mouseout', function handleMouseOut() {
        div.style.color = 'transparent';
    });

    // random div background color      
    let colors = ["red", "blue", "green", "yellow", "brown", "purple", "orange", "grey"];

    div.addEventListener("click", (e) => {
        let random = colors[Math.floor(Math.random() * colors.length)];

        e.target.style.backgroundColor = random;
    })
    div.addEventListener('dblclick', (e) => {
        let id = e.target.id
        let element = document.getElementById(id);

        if (id % 2 == 0) {
            // alert is nothing to the right
            if (id == array[array.length - 1]) {
                alert('NO')
            }
            // remove square to the right if even

            for (let i = 0; i < array.length; i++) {
                if (array[i] == id) {

                    let elementToDelete = array[i + 1];

                    let getElement = document.getElementById(elementToDelete)

                    getElement.remove()

                    array.splice(i + 1, 1);
                }
            }
        } else {
            // alert is nothing to the left
            if (id == array[0]) {
                alert('NO')
            }
            // remove square to the left if odd
            for (let i = 0; i < array.length; i++) {
                if (array[i] == id) {

                    let elementToDelete = array[i - 1];

                    let getElement = document.getElementById(elementToDelete)

                    getElement.remove()

                    array.splice(i - 1, 1);
                }
            }
        }




    })
}

