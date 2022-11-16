document.getElementById('logout-btn').addEventListener('click', (e)=>{
    e.preventDefault();
    $.removeCookie('mytoken');
    window.location.href = '/';
})