function addUser() {
    player1_Name = document.getElementById("player1_Name_Input").value;
    player2_Name = document.getElementById("player2_Name_Input").value;

    localStorage.setItem("player1_Name", player1_Name);
    localStorage.setItem("player2_Name", player2_Name);

    window.location = "game_page.html";
}