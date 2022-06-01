const socket = io()
// 접속 되었을 때 실행
/** 1. localhost:3000에 접속 후 socket을 이용한 연결 확인 */
socket.on('connect', function() {
    const input = document.querySelector('#text');
    input.value = '접속됨';
});

/** 3. send() 함수를 통해서 socket의 send 이벤트 + 데이터 보냄 */
// 전송함수(button onclick의 연결된 함수)
function send() {
    // 입력되어있는 데이터 가져오기
    // index.html 파일의 input 태그의 id를 통해 value값을 들고온다
    const message = document.querySelector('#text').value;
    // input의 value값을 빈값으로 넣어준다
    document.querySelector('#text').value = '';
    // 소켓을 통해서 서버로 send 이벤트를 만들어 데이터를 보내준다
    // on은 수신, emit은 전송
    socket.emit('send', { msg:message });
}

// 소켓을 통해 값 전달받기
/** 6. io에서 보낸 send 이벤트 + 데이터를 받아 함수 실행 */
socket.on('send', function(data) {
    //querySelector로 ul 태그 가져옴
    const chatting = document.querySelector('#chatting');
    // ul 태그에 추가할 item li 태그 추가
    const item = document.createElement('li');
    // li 태그에 값 추가
    item.textContent = data.msg;
    // ul채그에 li 태그 추가
    chatting.appendChild(item);
})