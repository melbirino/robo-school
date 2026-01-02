let info_icon = document.querySelector('.info-icon');
let info_window = document.querySelector('.info-window')

info_icon.addEventListener('mouseover' ,()=>{
   info_window.style.display = 'flex'
});

info_window.addEventListener('mouseover' ,()=>{
   info_window.style.display = 'none'
});