const load= () =>{
    const searchArea =document.getElementById('search-area');
    const mine = searchArea.value;
    searchArea.value = '';
   fetch(`https://openapi.programming-hero.com/api/phones?search=${mine}`)
   .then(res=>res.json())
   .then(data=>{
       if(data.length == 0  || data.data != searchArea.value){
        display(data.data);   
       }
       else{
           alert('No Phone Found');
       }
   });

}
 const display= phones=>{
    
    const main = document.getElementById('main');
    main.innerText = '';
     for(const phone of phones){
         
         const myDiv = document.createElement('div');
        myDiv.classList.add('col');
        myDiv.innerHTML=`
        <div class="card-body">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <h3 class="text-center">${phone.phone_name}</h3>
        <h4 class="text-center">${phone.brand}</h4>
        <button class="btn" onclick="details('${phone.slug}')">Details</button>
       </div>
        `
      main.appendChild(myDiv);
      
     };
  
 }

 const details = info =>{
  const url = `https://openapi.programming-hero.com/api/phone/${info}`
  fetch(url)
  .then(res=>res.json())
  .then(data=>displayDetails(data.data));
 }

const displayDetails = id =>{
    // console.log(id);
    const div = document.getElementById('details');
    div.innerHTML = '';
    const myDiv = document.createElement('div');
    if(id.releaseDate != ''){
        myDiv.innerHTML =`
        <img src="${id.image}">
        <h3>Name : ${id.name}</h3>
        <p>Release Date : ${id.releaseDate}</p>
        <P> Chip set : ${id.mainFeatures.chipSet}</p>
        <p> Display Size : ${id.mainFeatures.displaySize}</p>
        <p> Memory : ${id.mainFeatures.memory}</p>
        <p> Storage : ${id.mainFeatures.storage}</p>
       `;
       div.appendChild(myDiv);
    }
    else{
        alert('No Release Date Found');
        myDiv.innerHTML =`
        <img src="${id.image}"></img>
        <h3>Name : ${id.name}</h3>
        <P> Chip set : ${id.mainFeatures.chipSet}</p>
        <p> Display Size : ${id.mainFeatures.displaySize}</p>
        <p> Memory : ${id.mainFeatures.memory}</p>
        <p> Storage : ${id.mainFeatures.storage}</p>
       
       `;
       div.appendChild(myDiv);
    }
 
}
const displaySensor = id =>{
  console.log(id.mainFeatures.sensors);

}