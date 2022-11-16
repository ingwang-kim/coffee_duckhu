document.getElementById('navbarsExample09').addEventListener('click', (e)=>{
    e.preventDefault();
    $.removeCookie('mytoken');
    window.location.href = '/';
})