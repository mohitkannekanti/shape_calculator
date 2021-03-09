
var checkedValue;
function checkShapeValue() {
    event.preventDefault();
    checkedValue = $('input[class="form-radio"]:checked').val()

    if (checkedValue) {



        switch (checkedValue) {
            case "Rectangle":
                return areaOfRect();
                break;
            case "Circle":
                return areaOfCircle();
                break;
            case "Square":
                return areaOfSquare();
                break;
            case "Ellipse":
                return areaOfEllips();
                break;
            default:
                undefined
        }
    }
    else {
        alert("Please select one shape")
    }
}

const areaOfRect = () => {
    console.log("here")
    $('#main-content').empty();

    $("#main-content").append(`
    <div id="rectDiv">
                <label>
                    Please Enter Length of a Rectangle :
                    <input type="number" name="" id="leng" placeholder="Enter Length" value="">
                </label><br>
                <label>
                    Please Enter width of a Rectangle :
                    <input type="number" name="" id="wid" placeholder="Enter Width" value="">
                </label>
                <button id="btn2" onclick="handleCheckArea()">Check Area</button>
            </div>`)
}

const areaOfCircle = () => {
    console.log("here")
    $('#main-content').empty();

    $("#main-content").append(`
    <div id="circleDiv" >
                <label>
                    Please Enter Diameter of a Circle :
                    <input type="number" name="" id="diameter" placeholder="Enter Diameter">
                </label>
                <button id="btn1" onclick="handleCheckArea()">Check Area</button>
            </div>`)
}

const areaOfSquare = () => {
    console.log("here")
    $('#main-content').empty();

    $("#main-content").append(`
    <div id="squareDiv" >
                <label>
                    Please Enter Side value of a Square :
                    <input type="number" name="" id="side" placeholder="Enter Side">
                </label>
                <button id="btn3" onclick="handleCheckArea()">Check Area</button>
            </div>`)
}

const areaOfEllips = () => {
    console.log("here")
    $('#main-content').empty();

    $("#main-content").append(`
    <div id="ellipseDiv" >
                <label>
                    Please Enter "a" value of a ellipse :
                    <input type="number" name="" id="a" placeholder="Enter 'a' value">
                </label><br>
                <label>
                    Please Enter "b" value of a ellipse :
                    <input type="number" name="" id="b" placeholder="Enter 'b' value">
                </label>
                <button id="btn4" onclick="handleCheckArea()">Check Area</button>
            </div>`)
}

const handleCheckArea = () => {
    let length = $('#leng').val()
    let width = $('#wid').val()
    let diameter = $('#diameter').val()
    let side = $('#side').val()
    let ecclipA = $('#a').val()
    let ecclipB = $('#b').val()

    let result
    console.log(checkedValue)
    switch (checkedValue) {
        case "Rectangle":
            result = length * width;
            break;
        case "Circle":
            result = parseFloat(Math.PI * (diameter / 2) * (diameter / 2));
            break;
        case "Square":
            result = side * side;
            break;
        case "Ellipse":
            result = parseFloat(Math.PI * ecclipA * ecclipB);
            break;
        default:
            undefined
    }
    $('#main-content').empty();

    $("#main-content").append(`
    <div id="step3">
            <p id="result">${result}</p>
        </div>`)
    console.log("area = ", length * width)
}

// function areaOfCircle() {
//     document.getElementById('rectDiv').style.display = 'none';
//     document.getElementById('squareDiv').style.display = 'none';
//     document.getElementById('ellipseDiv').style.display = 'none';
//     document.getElementById('circleDiv').style.display = 'block';
//     document.getElementById('btn1').onclick = function () {
//         var diameter = parseFloat(document.getElementById('diameter').value);
//         var radius = parseFloat(diameter / 2);
//         var area = parseFloat(Math.PI * radius * radius);
//         document.getElementById('step3').style.display = "block";
//         document.getElementById('result').innerHTML = "Area of Circle " + area;
//     }


// }
// function areaOfRect() {
//     document.getElementById('circleDiv').style.display = 'none';
//     document.getElementById('squareDiv').style.display = 'none';
//     document.getElementById('ellipseDiv').style.display = 'none';
//     document.getElementById('rectDiv').style.display = "block";

//     document.getElementById('btn2').onclick = function () {
//         var len = document.getElementById('leng').value;
//         var wid = document.getElementById('wid').value;
//         var area = len * wid;
//         document.getElementById('step3').style.display = "block";
//         document.getElementById('result').innerHTML = "Area of Rectangle " + area;

//     }
// }
// function areaOfSquare() {
//     document.getElementById('circleDiv').style.display = 'none';
//     document.getElementById('ellipseDiv').style.display = 'none';
//     document.getElementById('rectDiv').style.display = "none";
//     document.getElementById('squareDiv').style.display = 'block';
//     document.getElementById('btn3').onclick = function () {
//         var side = document.getElementById('side').value;
//         var area = parseFloat(side * side);
//         document.getElementById('step3').style.display = "block";
//         document.getElementById('result').innerHTML = "Area of Square " + area;
//     }

// }
// function areaOfEllips() {
//     document.getElementById('circleDiv').style.display = 'none';
//     document.getElementById('squareDiv').style.display = 'none';
//     document.getElementById('rectDiv').style.display = "none";
//     document.getElementById('ellipseDiv').style.display = 'block';
//     document.getElementById('btn4').onclick = function () {
//         var a = document.getElementById('a').value;
//         var b = document.getElementById('b').value;
//         var area = parseFloat(Math.PI * a * b);
//         document.getElementById('step3').style.display = "block";
//         document.getElementById('result').innerHTML = "Area of Ellipse " + area;
//     }

// }