const load= () =>{
    const searchArea =document.getElementById('search-area');
    const mine = searchArea.value;
    searchArea.value = '';
   fetch(`https://openapi.programming-hero.com/api/phones?search=${mine}`)
   .then(res=>res.json())
   .then(data=>{
       console.log(data.data);
       if((data.length == 0  || data.data != searchArea.value)){
        display(data.data);   
       }
       else{
           alert('No Phone Found');
       }
   });

}
 const display= phones=>{
    const sliceNum = phones.slice(0,20);
    const main = document.getElementById('main');
    main.innerText = '';
   
     for(const phone of sliceNum){
         const myDiv = document.createElement('div');
        myDiv.classList.add('col');
        myDiv.innerHTML=`
        <div class="card-body shadow height">
        <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="name-height">
        <h3 class="text-center">${phone.phone_name}</h3>
        </div>
        <h5 class="text-center">${phone.brand}</h5>
       
        <button class="btn btn-outline-secondary mx-auto rounded" onclick="details('${phone.slug}')">Details</button>
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
    console.log(id);
    const div = document.getElementById('details');
    div.innerHTML = '';
    const myDiv = document.createElement('div');
    if(id.releaseDate != ''){
        myDiv.innerHTML =`
        <img class="details-img" src="${id.image}">
        <div class="details-div p-4">
        <h3><span>Name : </span> ${id.name}</h3>
        <p><span>Release Date : </span>${id.releaseDate}</p>
        <P><span> Chip set :</span> ${id.mainFeatures.chipSet}</p>
        <p><span> Display Size : </span>${id.mainFeatures.displaySize}</p>
        <p><span> Memory : </span>${id.mainFeatures.memory}</p>
        <p> <span>Storage : </span>${id.mainFeatures.storage}</p>
        <p><span>Sensors : </span>${id.mainFeatures.sensors}</p>
      <button class="btn details">Others Information</button>
      <p><span>Bluetooth : </span>${id.others.Bluetooth}</p>
      <p><span>GPS : </span>${id.others.GPS}</p>
      <p><span>NFC : </span>${id.others.NFC}</p>
      <p><span>Radio :</span> ${id.others.Radio}</p>
      <p><span>USB : </span>${id.others.USB}</p>
      <p><span>WLAN :</span> ${id.others.WLAN}</p>
      </div>
       `;
       div.appendChild(myDiv);
    }
    else{
        alert('No Release Date Found');
        myDiv.innerHTML =`
        <img class="details-img" src="${id.image}"></img>
        <div class="details-div p-4">
        <h3><span>Name : </span>${id.name}</h3>
        <P><span> Chip set : </span>${id.mainFeatures.chipSet}</p>
        <p><span> Display Size :</span> ${id.mainFeatures.displaySize}</p>
        <p><span> Memory : </span>${id.mainFeatures.memory}</p>
        <p> <span>Storage :</span> ${id.mainFeatures.storage}</p>
        <p><span>Sensors :</span> ${id.mainFeatures.sensors}</p>
        <button class=" btn details">Others Information</button>
      <p><span>Bluetooth : </span>${id.others.Bluetooth}</p>
      <p><span>GPS : </span>${id.others.GPS}</p>
      <p><span>NFC :</span> ${id.others.NFC}</p>
      <p><span>Radio :</span> ${id.others.Radio}</p>
      <p><span>USB : </span>${id.others.USB}</p>
      <p><span>WLAN :</span> ${id.others.WLAN}</p>
      </div>
       `;
       div.appendChild(myDiv);
    }
 
}


