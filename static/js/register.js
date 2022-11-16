document.getElementById('register-btn').addEventListener('click', register);
document.getElementById('id-check-btn').addEventListener('click', id_duple_check);
document.getElementById('nick-check-btn').addEventListener('click', nick_duple_check);

// input 요소들
const id_elem = document.getElementById('id');
const nick_elem = document.getElementById('nick');
const pw_elem = document.getElementById('pw');
const pw_check_elem = document.getElementById('pw-check');

// input-msg 요소들
const id_msg_elem = document.getElementById('id-msg');
const nick_msg_elem = document.getElementById('nick-msg');
const pw_msg_elem = document.getElementById('pw-msg');
const pw_check_msg_elem = document.getElementById('pw-check-msg');

// 중복 확인 flag
let id_duple_flag = false;
let nick_duple_flag = false;


// 회원 데이터를 서버로 보내기
function register_to_server() {
    $.ajax({
        type: "POST",
        url: "/api/register",
        data: {
            id_give: id_elem.value,
            pw_give: pw_elem.value,
            nick_give: nick_elem.value
        },
        success: function (response) {
            if (response['result'] === 'success') {
                alert('회원가입이 완료되었습니다.');
                window.location.href = '/login';
            } else {
                alert('문제가 발생했습니다. 관리자에게 문의해주세요.');
            }
        }
    })
}

// 아이디 중복 검사
function id_duple_check() {
    if (id_elem.value === '') {
        font_color_change(id_msg_elem, "danger");
        id_msg_elem.innerText = '아이디를 입력해주세요.';
        id_duple_flag = false;
    } else {
        $.ajax({
        type: "POST",
        url: "/api/idCheck",
        data: {
            id_give: id_elem.value
        },
        success: function (response) {
            if (response['result'] == 'available') {
                font_color_change(id_msg_elem, "success");
                id_msg_elem.innerText = '사용 가능한 아이디입니다.';
                alert('사용 가능한 아이디입니다.');
                id_duple_flag = true;
            } else {
                font_color_change(id_msg_elem, "danger");
                id_elem.value = '';
                id_msg_elem.innerText = '이미 사용중인 아이디입니다.';
                alert('이미 사용중인 아이디입니다.');
                id_duple_flag = false;
            }
        }
        })
    }
}

// 닉네임 중복 검사
function nick_duple_check() {
    const nick_msg_elem = document.getElementById('nick-msg');
    if (nick_elem.value === '') {
        font_color_change(nick_msg_elem, "danger");
        nick_msg_elem.innerText = '닉네임을 입력해주세요.';
        nick_duple_flag = false;
    } else {
        $.ajax({
        type: "POST",
        url: "/api/nickCheck",
        data: {
            nick_give: nick_elem.value
        },
        success: function (response) {
            if (response['result'] == 'available') {
                font_color_change(nick_msg_elem, "success");
                nick_msg_elem.innerText = '사용 가능한 닉네임입니다.';
                alert('사용 가능한 아이디입니다.');
                nick_duple_flag = true;
            } else {
                font_color_change(nick_msg_elem, "danger");
                nick_elem.value = '';
                nick_msg_elem.innerText = '이미 사용중인 닉네임입니다.';
                alert('이미 사용중인 닉네임입니다.');
                nick_duple_flag = false;
            }
        }
    })
    }
}

// 정규식을 통한 유효성 검사
id_elem.addEventListener('focusout', id_validate);
nick_elem.addEventListener('focusout', nick_validate);
pw_elem.addEventListener('focusout', pw_validate);
pw_check_elem.addEventListener('focusout', pw_check_validate);

function id_validate() {
    id_duple_flag = false;

    // 아이디는 영문 소문자, 숫자 조합으로 5~13자
    const id_reg = /^[a-z0-9]{5,13}$/;
    if (id_elem.value === '') {
        font_color_change(id_msg_elem, "danger");
        id_msg_elem.innerText = '아이디를 입력해주세요.';
        id_elem.focus();
    } else if (!id_reg.test(id_elem.value)) {
        id_elem.value = '';
        font_color_change(id_msg_elem, "danger");
        id_msg_elem.innerText = '아이디는 영문 소문자, 숫자 조합으로 5~13자만 가능합니다.';
        id_elem.focus();
    } else {
        font_color_change(id_msg_elem, "success");
        id_msg_elem.innerText = '사용 가능한 아이디입니다.';
    }
}
function nick_validate() {
    nick_duple_flag = false;

    // 닉네임은 영문, 한글, 숫자 조합으로 2~8자
    const nick_reg = /^[가-힣a-zA-Z0-9]{2,8}$/;
    if (nick_elem.value === '') {
        font_color_change(nick_msg_elem, "danger");
        nick_msg_elem.innerText = '닉네임을 입력해주세요.';
        nick_elem.focus();
    } else if (!nick_reg.test(nick_elem.value)) {
        nick_elem.value = '';
        font_color_change(nick_msg_elem, "danger");
        nick_msg_elem.innerText = '닉네임은 2~8자만 가능합니다.';
        nick_elem.focus();
    } else {
        font_color_change(nick_msg_elem, "success");
        nick_msg_elem.innerText = '사용 가능한 닉네임입니다.';
    }
}
function pw_validate() {
    // 비밀번호는 영문, 숫자 조합으로 2~8자
    const nick_reg = /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
    if (pw_elem.value === '') {
        font_color_change(pw_msg_elem, "danger");
        pw_msg_elem.innerText = '비밀번호를 입력해주세요.';
        pw_elem.focus();
    } else if (!nick_reg.test(pw_elem.value)) {
        pw_elem.value = '';
        pw_check_elem.value = '';
        font_color_change(pw_msg_elem, "danger");
        pw_msg_elem.innerText = '비밀번호는 영문, 숫자, 특수문자의 조합으로 8~20자만 가능합니다.';
        pw_elem.focus();
    } else {
        font_color_change(pw_msg_elem, "success");
        pw_msg_elem.innerText = '사용 가능한 비밀번호입니다.';
    }
}
function pw_check_validate() {
    if (pw_check_elem.value === '') {
        font_color_change(pw_check_msg_elem, "danger");
        pw_check_msg_elem.innerText = '비밀번호를 다시 입력해주세요.';
        pw_elem.focus();
    } else if (pw_check_elem.value != pw_elem.value) {
        pw_elem.value = '';
        pw_check_elem.value = '';
        font_color_change(pw_check_msg_elem, "danger");
        pw_check_msg_elem.innerText = '비밀번호가 일치하지 않습니다.';
        pw_elem.focus();
    } else {
        font_color_change(pw_check_msg_elem, "success");
        pw_check_msg_elem.innerText = '비밀번호가 일치합니다.';
    }
}

// 유효성 검사와 중복 확인을 모두 통과한 사람만 회원가입
function register() {
    if (id_elem.value === '') {
        font_color_change(id_msg_elem, "danger");
        id_msg_elem.innerText = '아이디를 입력해주세요.';
        return false;
    }
    if (!id_duple_flag) {
        font_color_change(id_msg_elem, "danger");
        id_msg_elem.innerText = '아이디 중복 검사가 필요합니다.';
        return false;
    }
    if (nick_elem.value === '') {
        font_color_change(nick_msg_elem, "danger");
        nick_msg_elem.innerText = '닉네임을 입력해주세요.';
        return false;
    }
    if (!nick_duple_flag) {
        font_color_change(nick_msg_elem, "danger");
        nick_msg_elem.innerText = '닉네임 중복 검사가 필요합니다.';
        return false;
    }
    if (pw_elem.value === '') {
        font_color_change(pw_msg_elem, "danger");
        pw_msg_elem.innerText = '비밀번호를 입력해주세요.';
        return false;
    }
    if (pw_check_elem.value === '') {
        font_color_change(pw_check_msg_elem, "danger");
        pw_check_msg_elem.innerText = '비밀번호를 다시 입력해주세요.';
        return false;
    }


    register_to_server();
}

// 글씨 색상 전환
function font_color_change(msg_elem, danger_or_success) {
    if (danger_or_success === 'danger') {
        msg_elem.classList.remove('text-success');
        msg_elem.classList.add('text-danger');
    } else if (danger_or_success === 'success') {
        msg_elem.classList.remove('text-danger');
        msg_elem.classList.add('text-success');
    }
}