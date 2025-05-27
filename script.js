// 初始動畫顯示介紹
window.onload = function() {
  const intro = document.getElementById('intro');
  intro.style.opacity = 1;
  setTimeout(() => {
    document.getElementById('chat-box').style.display = 'block';
  }, 2000);
};

function answerQuestion() {
  const input = document.getElementById('user-question').value.trim();
  const response = document.getElementById('response');

  if (input === "") {
    response.innerText = "請輸入您的問題哦！";
  } else {
    response.innerText = `您問的是：「${input}」\n模擬回答：這是一個很棒的問題，我會努力回答您！`;
  }

  response.style.display = 'block';
}
