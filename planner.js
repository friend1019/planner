// 화면 전환 기능
function showLogin() {
    document.getElementById('mainSection').classList.add('hidden');
    document.getElementById('login').classList.remove('hidden');
    document.getElementById('NewPlanner').classList.add('hidden'); // 플래너 화면 숨기기
}

function showMain() {
    document.getElementById('login').classList.add('hidden');
    document.getElementById('mainSection').classList.remove('hidden');
    document.getElementById('NewPlanner').classList.add('hidden'); // 플래너 화면 숨기기
}

function showNewPlanner() {
    document.getElementById('mainSection').classList.add('hidden'); // 초기화면 숨기기
    document.getElementById('NewPlanner').classList.remove('hidden'); // 플래너 화면 보이기
    document.getElementById('login').classList.add('hidden'); // 로그인 화면 숨기기
}