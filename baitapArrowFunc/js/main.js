const colorList = ["pallet", "viridian", "pewter", "cerulean", "vermillion", "lavender","celadon","saffron","fuschia","cinnabar"];

const loadColor = () => {
    let content = "";
    for(const value of colorList){
        content += `
        <button class="color-button ${value}" onclick = "changeColor(event, '${value}')"></button>
        `   
    }
    document.getElementById("colorContainer").innerHTML = content;
    document.querySelector(`#colorContainer .pallet`).classList.add("active");
}

loadColor();

const changeColor = (e,color) => {
    console.log(e);
    document.getElementById("house").className = `house ${color}`;
    if(document.querySelector("#colorContainer .active") != null){
        document.querySelector("#colorContainer .active").classList.remove("active");
    }
   
    e.target.classList.add("active");
}