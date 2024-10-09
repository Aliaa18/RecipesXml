 // ---- APi ----> AJAX ----> Async And Js And Xml(built in object);
    //       XMLHttpRequest
    var links = document.querySelectorAll('.home .nav-link')
    for (var i=0 ; i<links.length ; i++){
      links[i].addEventListener('click' , function(e){
         var currentText=e.target.text
             getApiData(currentText)
              
      })
    }
      getApiData('pizza')
      var data = []
 function getApiData(meal){
  
   var dataRow = document.getElementById('dataRow')
   var myHttps = new XMLHttpRequest();

   myHttps.open('GET' , `https://forkify-api.herokuapp.com/api/search?q=${meal}`)

   myHttps.send()
   myHttps.addEventListener('loadend' , function () { 
      console.log(myHttps.readyState);
      
              if (myHttps.status=200) {
               data=JSON.parse(myHttps.response).recipes
               displayData()
                  console.log(data);
                 
                  
              }
     } )

 }

function displayData(){
var clos = ``
for (var i =0 ; i<data.length ; i++){
   clos+=`
   <div class="col-md-4">
                   <div class="card">
                    
                          <div class="card-body text-center">
                                  <img class="card-img-top hambozo"  src="${data[i].image_url}" alt="Title">
                                 <h4 class="card-title">${data[i].title}</h4>
                                <a target="_blank" href="${data[i].source_url}" class="btn btn-outline-info"> Source</a>
                           
                          </div>
                     </div>
             </div>
   `
}
dataRow.innerHTML = clos
console.log("hello");

}