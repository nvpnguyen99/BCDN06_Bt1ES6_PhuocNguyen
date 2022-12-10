const jumpText = () => {
    let text = document.querySelector(".heading").innerHTML;
    let textChars = [...text];
    let content = "";
    textChars.map((char) => { 
        content += `<span>${char}</span>`
     });
     document.querySelector(".heading").innerHTML = content;
}

jumpText();