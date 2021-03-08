function checkShapeValue() {
    document.getElementById('step3').style.display = "none"
    event.preventDefault();
    var ele = document.getElementsByName('shape');
    var ischecked_method = false;
    console.log(ele, "ele")
    for (i = 0; i < ele.length; i++) {
        if (ele[i].checked) {
            ischecked_method = true;
            var shapeValue = ele[i].value;
            console.log(shapeValue, "shape")
            switch (shapeValue) {
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
    }
    if (!ischecked_method) {
        alert("Please select any one");
    }
}


function areaOfCircle() {
    document.getElementById('rectDiv').style.display = 'none';
    document.getElementById('squareDiv').style.display = 'none';
    document.getElementById('ellipseDiv').style.display = 'none';
    document.getElementById('circleDiv').style.display = 'block';
    document.getElementById('btn1').onclick = function () {
        var diameter = parseFloat(document.getElementById('diameter').value);
        var radius = parseFloat(diameter / 2);
        var area = parseFloat(Math.PI * radius * radius);
        document.getElementById('step3').style.display = "block";
        document.getElementById('result').innerHTML = "Area of Circle " + area;
    }


}
function areaOfRect() {
    document.getElementById('circleDiv').style.display = 'none';
    document.getElementById('squareDiv').style.display = 'none';
    document.getElementById('ellipseDiv').style.display = 'none';
    document.getElementById('rectDiv').style.display = "block";

    document.getElementById('btn2').onclick = function () {
        var len = document.getElementById('leng').value;
        var wid = document.getElementById('wid').value;
        var area = len * wid;
        document.getElementById('step3').style.display = "block";
        document.getElementById('result').innerHTML = "Area of Rectangle " + area;

    }
}
function areaOfSquare() {
    document.getElementById('circleDiv').style.display = 'none';
    document.getElementById('ellipseDiv').style.display = 'none';
    document.getElementById('rectDiv').style.display = "none";
    document.getElementById('squareDiv').style.display = 'block';
    document.getElementById('btn3').onclick = function () {
        var side = document.getElementById('side').value;
        var area = parseFloat(side * side);
        document.getElementById('step3').style.display = "block";
        document.getElementById('result').innerHTML = "Area of Square " + area;
    }

}
function areaOfEllips() {
    document.getElementById('circleDiv').style.display = 'none';
    document.getElementById('squareDiv').style.display = 'none';
    document.getElementById('rectDiv').style.display = "none";
    document.getElementById('ellipseDiv').style.display = 'block';
    document.getElementById('btn4').onclick = function () {
        var a = document.getElementById('a').value;
        var b = document.getElementById('b').value;
        var area = parseFloat(Math.PI * a * b);
        document.getElementById('step3').style.display = "block";
        document.getElementById('result').innerHTML = "Area of Ellipse " + area;
    }

}