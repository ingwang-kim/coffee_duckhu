document.getElementById('navbarsExample09').addEventListener('click', (e)=>{
    if (e.target.id === 'logout-btn') {
        e.preventDefault();
        $.removeCookie('mytoken');
        window.location.href = '/';
    }
})