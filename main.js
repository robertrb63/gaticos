const url = 'https://api.giphy.com/v1/gifs/search';
let busqueda = "?q=";
const key= '&api_key=GATVtxzzBClGtRUwajjwbcAWWzyUpV6m';
const limite = "&limit=20";
let q= "";
let urlCompleta= "";

urlCompleta= "";

const btn= document.getElementById('btn');

btn.onclick = ()=>{

    document.getElementById("portafolio").innerHTML ="";

    q=document.getElementById('busqueda').value;
    urlCompleta = url + busqueda + q + key + limite;
    getData();
}

const getData = async () =>{
    await fetch(urlCompleta).then((response) => {
        return response.json();
    }).then((giphy)=>{
        console.log(giphy)

        for (let i=0; i<giphy.data.length; i++){
            const gif = document.createElement('img');
            gif.src = giphy.data[i].images["original"].url;
            gif.className = "mb-3";
            document.getElementById("portafolio").appendChild(gif);
        }
    })
}
