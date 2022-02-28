const load= () =>{
    const searchArea =document.getElementById('search-area');
    const mine = searchArea.value;
   fetch(`https://openapi.programming-hero.com/api/phones?search=${mine}`)
   .then(res=>res.json())
   .then(data=>display(data.data));

}
 const display=(phones)=>{
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
        <button class="btn" onclick="details(detail)">Details</button>
       </div>
        `
      main.appendChild(myDiv);
     };
  
 }

 const details = detail =>{
     console.log(detail);
 }