const xhr = new XMLHttpRequest();

xhr.addEventListener('load', ()=>{
  console.log(xhr.response);
  console.log(xhr.responseURL);
});

xhr.open('GET', 'https://supersimplebackend.dev/documentation');
xhr.send();