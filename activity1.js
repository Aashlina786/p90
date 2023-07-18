function updateScore()
{
score = score + 1
document.getElementById("score").innerHTML = "Score :" + score ;
}

function saveScore()
{
localStorage.setItem("score" , score) ;
}

function nextPage() {
window.location = "activity_2.html";
}

function addUser() {

player_1_name = document.getElementById("player_1_name_input").value;
player_2_name = document.getElementById("player_2_name_input").value;

localStorage.setItem("player_1_name" , player_1_name);
localStorage.setItem("player_1_name" , player_1_name);

window.location = "game_page.html";
}