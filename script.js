const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const clos = document.getElementById('close');
bar.addEventListener('click', function(){
  nav.classList.add('active');
});

clos.addEventListener('click', function(){
  nav.classList.remove('active');
});
