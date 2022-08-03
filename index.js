function calculate() {

    let a = document.getElementById('yname').value;
    let b = document.getElementById('lname').value;

    if (a == "") {
        alert('Enter your name')
    } else if (!isNaN(a)) {
        alert('Numbers are not Allowed')
    } else if (a.length < 3) {
        alert('Minimum 3 letters are allowed')
    } else if (b == "") {
        alert(`Enter your Partner's name`)
    } else if (!isNaN(b)) {
        alert('Numbers are not Allowed')
    } else if (b.length < 3) {
        alert('Minimum 3 letters are allowed')
    } else {

        let lovedata = Math.random() * 100;
        lovedata = Math.floor(lovedata)
        document.getElementById('box3').value = lovedata + "%";
    }





}