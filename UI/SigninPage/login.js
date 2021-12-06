function uploadSignIn() {
    let element =  `
                    <form for="submit">
                        <label for="emailInput">Enter Email: </label>  
                        <input type="email" name="emailInput" />
                        <label for="passwordInput">Enter Password: </label>  
                        <input type="password" name="passwordInput" />
                        <input class="signinButton" onclick="gotoDashBoard()" type="button" value="Log in" />
                    </form>
                        `;
            
    document.getElementById("other4Content").innerHTML = "";
    document.getElementById("other4Content").innerHTML = element;
}

function uploadSignUp() {
    let element =  `
    <form for="submit">
        <label for="emailInput">Enter Email: </label>  
        <input type="email" name="emailInput" />
        <label for="passwordInput">Enter Password: </label>  
        <input type="password" name="passwordInput" />
        <label for="passwordInputConfirm">Enter Password Again: </label>  
        <input type="password" name="passwordInputConfirm" />
        <input class="signinButton" onclick="gotoDashBoard()" type="button" value="Register" />
    </form>
        `;
        document.getElementById("other4Content").innerHTML = "";
        document.getElementById("other4Content").innerHTML = element;
}

function gotoDashBoard() {
    document.getElementById("loggedIn").innerHTML = "";
    let element = `<a class="dashboardLinks" href="../AdminPages/articlesPage.html">Go to articles Dashboard</a>
    <a class="dashboardLinks" href="../AdminPages/profilePage.html">Go to profile Dashboard</a>
    `
    document.getElementById("loggedIn").innerHTML = element;
    
}

window.addEventListener("DOMContentLoaded",() => {
    uploadSignIn();
});