let birthdayinput = document.getElementById("agevalue");
let result = document.querySelector(".result");
birthdayinput.max = new Date().toISOString().split("T")[0];

function Calculate(){

    let birthday = new Date(birthdayinput.value);

    let d1 = birthday.getDate();
    let m1 = birthday.getMonth() + 1;
    let y1 = birthday.getFullYear();

    let now = new Date();

    let d2 = now.getDate();
    let m2 = now.getMonth() + 1;
    let y2 = now.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;

    if(m2 > m1){
        m3 = m2 - m1;
    }
    else{
        y3 --;
        m3 = m2 + 12 - m1;
    }

    if(d2 > d1){
        d3 = d2 - d1;
    }
    else{
        m3 --;
        d3 = GetDate(y2, m2) + d2 - d1;
    }

    if(m3 < 0){
        m3 = 11;
        y3 --;
    }
    
    result.innerHTML = `You are ${y3} years, ${m3} months and ${d3} days old`;
}

function GetDate(year, month){
    return new Date(year, month, 0).getDate();
}