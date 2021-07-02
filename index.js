let data = [];

const fetchData = () => {
    //verinin çekildiği yer
    fetch("data.json")
    .then(response => {
        return response.json();
    })
    .then(responseData => {
        //json'dan okunan verinin data array'ine atanması
        data = responseData;

        //veri geldikten sonra filtreleme butonu , checkboxları görünür olsun
        let filterButton = document.querySelector("#filterButton");
        filterButton.setAttribute("style", "");

        let labelAdult = document.querySelector("#labelAdult");
        labelAdult.setAttribute("style", "");

        let labelActive = document.querySelector("#labelActive");
        labelActive.setAttribute("style", "");

        let labelCharacter = document.querySelector("#labelCharacter");
        labelCharacter.setAttribute("style", "");
        
        let myActive = document.querySelector("#myCheck");
        myActive.setAttribute("style", "");

        let myAdult = document.querySelector("#myCheck2");
        myAdult.setAttribute("style", "");

        let myCharacter = document.querySelector("#myCharacter");
        myCharacter.setAttribute("style", ""); 
        
        


        //verinin html içerisinde listelendiği fonksiyon
        listData(responseData);
    })
    .catch(err => {
        //hata yönetimi
        alert("Bir hata oluştu");
        console.log(err)
    })
}



//verinin ul tag'i içerisinde listelenmesini sağlayan fonksiyon
const listData = (data) => {
    let list = document.querySelector(".list");
    list.innerHTML = data.map(element => {
        return `
        <li id=${element.id}>
            <span class='bold'>name:</span> ${element.name}
            <span class='bold'>email:</span> ${element.email}
        </li>
        `;
    }).join(' ')
}


//verinin filtrelenmesini sağlayan fonksiyon
//TODO
const filterData = () => {
    let isActiveValue = document.getElementById("labelActive").checked;
    let isAdultValue = document.getElementById("labelAdult").checked; 
    let text = document.getElementById("myText").value; 

    if(isActiveValue ){
        let filteredData = data.filter(element => element.isActive === true);
        listData(filteredData);
    }
    if(isAdultValue){
        let filteredData = data.filter(element => element.age > 17);
        listData(filteredData);
    }
    if(text != ""){
        let newtext = text.toUpperCase();
        // console.log(text);
         let character = newtext.charAt(0);
        // console.log(character); 
        let filteredData = data.filter(element => element.name.charAt(0) == character )
        // console.log(filteredData);
        listData(filteredData);
    }
}


/*switch (filter) {
    case "isActive":
        let filteredData = data.filter(element => element.isActive === true);
        listData(filteredData);
        break;
    case "age":
        let age18 = data.filter(element => element.age > 17);
        listData(age18);
        break;     
    case "name":
      let text = document.getElementById("myText").value; 
        let newtext = text.toUpperCase();
        // console.log(text);
         let character = newtext.charAt(0);
        // console.log(character); 
        let initialData = data.filter(element => element.name.charAt(0) == character )
        // console.log(initialData);
        listData(initialData);
       break;
    default:
        break;
}*/