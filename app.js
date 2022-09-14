navigator.geolocation.getCurrentPosition(function position(csd){
  var op = csd.coords.latitude;
  var zp = csd.coords.longitude
  console.log(op)
  console.log(zp)
  console.log(csd)




  
async function ret(){
  return   new Promise(function(resolve,reject){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${op}&lon=${zp}&appid=7777de22963359d0d7ee097114ad3a5e&units=metric`)
    .then((res)=>res.json())
    .then((res)=>{
      resolve(  res)
    })
    .catch((err)=>{
      reject(err)
    })
  })}
  async function abc(res){
    try{
      var data = await ret()
      console.log(data.main.temp)
      console.log(data.weather[0].main)
      if(data){
        hed1.innerHTML = data.main.temp
      hed2.innerHTML = data.weather[0].main
      hed3.innerHTML = dte
      if( data.weather[0].main == "Clouds"){
        imag.innerHTML = `<img src="/cloud(sada).png" id="fix_img" class="imagesssss">` 
      }
      else if( data.weather[0].main == "Smoke"){
        
        imag.innerHTML = `<img src="/smoke_weather.png" id="fix_img" class="imagesssss">` 
      }
      else if( data.weather[0].main == "Clear"){
        imag.innerHTML = `<img src="/clear.png" id="fix_img" class="imagesssss">` 
  
      }
      else if( data.weather[0].main == "Haze"){
        imag.innerHTML = `<img src="/smoke_weather.png" id="fix_img" class="imagesssss">` 
  
      }
      else if( data.weather[0].main == "Rain"){
        imag.innerHTML = `<img src="/cloudrain.png"id="fix_img" class="imagesssss">` 
  
      }
      else if( data.weather[0].main == "Sunny"){
        imag.innerHTML = `<img src="/sun.png" id="fix_img" class="imagesssss">` 
  
      }
      else if( data.weather[0].main == "Storm"){
        imag.innerHTML = `<img src="/thundercloud-.webp" id="fix_img" class="imagesssss">` 
  
      }
  
      }
      
      }
      
    
    catch(err){
      console.log(err)
    }
  }
  
abc()
})
// https://api.openweathermap.org/data/2.5/weather?lat=24.8586567&lon=67.032731&appid=7777de22963359d0d7ee097114ad3a5e&units=metric




var dte = new Date().toLocaleString()
var locatin_inp = document.getElementById("locatin_inp")
var imag = document.getElementById("fix_img_size1")
var hed1 = document.getElementById("he_1") 
var hed2 = document.getElementById("he_2") 
var hed3 = document.getElementById("he_3") 









async function ret(){
return   new Promise(function(resolve,reject){
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${locatin_inp.value}&appid=fd46bbbc3dc3bc54c806bc8072ffc22b&units=metric`)
  .then((res)=>res.json())
  .then((res)=>{
    resolve(  res)
  })
  .catch((err)=>{
    reject(err)
  })
})}
async function abc(res){
  try{
    var data = await ret()
    console.log(data.main.temp)
    console.log(data.weather[0].main)
    if(data){
      hed1.innerHTML = data.main.temp
    hed2.innerHTML = data.weather[0].main
    hed3.innerHTML = dte

    if( data.weather[0].main == "Clouds"){
      imag.innerHTML = `<img src="/cloud(sada).png" id="fix_img" class="imagesssss">` 
    }
    else if( data.weather[0].main == "Smoke"){
      
      imag.innerHTML = `<img src="/smoke_weather.png" id="fix_img" class="imagesssss">` 
    }
    else if( data.weather[0].main == "Clear"){
      imag.innerHTML = `<img src="/clear.png" id="fix_img" class="imagesssss">` 

    }
    else if( data.weather[0].main == "Haze"){
      imag.innerHTML = `<img src="/smoke_weather.png" id="fix_img" class="imagesssss">` 

    }
    else if( data.weather[0].main == "Rain"){
      imag.innerHTML = `<img src="/cloudrain.png"id="fix_img" class="imagesssss">` 

    }
    else if( data.weather[0].main == "Sunny"){
      imag.innerHTML = `<img src="/sun.png" id="fix_img" class="imagesssss">` 

    }
    else if( data.weather[0].main == "Storm"){
      imag.innerHTML = `<img src="/thundercloud-.webp" id="fix_img" class="imagesssss">` 

    }

    }
    
  }
  catch(err){
   
    console.log(err)
    swal("City not found" )
  }
}






