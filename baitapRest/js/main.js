const calAvgMark = (...marks) => {
    let avgMark = 0;
    marks.map((mark) => { 
        avgMark += mark;
     })
     avgMark = avgMark / marks.length;
     return avgMark;
}

const calcClass1 = () => {
    let toan = Number(document.querySelector("#inpToan").value);
    let ly = Number(document.querySelector("#inpLy").value);
    let hoa = Number(document.querySelector("#inpHoa").value);

    document.querySelector("#tbKhoi1").innerHTML = calAvgMark(toan, ly, hoa);
}

document.querySelector("#btnKhoi1").onclick = calcClass1;

const calcClass2 = () => {
    let van = Number(document.querySelector("#inpVan").value);
    let su = Number(document.querySelector("#inpSu").value);
    let dia = Number(document.querySelector("#inpDia").value); 
    let tiengAnh = Number(document.querySelector("#inpEnglish").value); 

    document.querySelector("#tbKhoi2").innerHTML = calAvgMark(van, su, dia, tiengAnh);
}

document.querySelector("#btnKhoi2").onclick = calcClass2;