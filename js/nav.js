const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <a href="./index.html"><img src="img/logo.png" class="brand-logo" alt="" title="Clothodile"></a>
            <div class="nav-items">
                <a href="./productfilter.html"><div class="search">
                <i id="searchsymbol" class="fa-solid fa-lg fa-magnifying-glass" style="color: #555151;"></i>
                <button class="search-btn">search</button>
                </div></a>
                <a href="./login.html"><div class="icon"><i class="fa-solid fa-lg fa-user" style="color: #3838338;" id="user" title="login"></i></div></a>
                <a href="#"><div class="icon"><i class="fa-solid fa-lg fa-cart-shopping" id="cart" title="Cart" style="color: #3838338;"></i></div></a>
                <a href="./signup.html"><div class="icon"><i class="fa-solid fa-lg fa-right-to-bracket" title="Sign Up" style="color: #3838338;"></i></div></a>
            </div>
        </div>
        <ul class="links-container">

            <li class="link-item"><a href="./index.html" class="link">home</a></li>
            <li class="link-item"><a href="#" class="link">women</a></li>
            <li class="link-item"><a href="#" class="link">men</a></li>
            <li class="link-item"><a href="#" class="link">kids</a></li>
            <li class="link-item"><a href="#" class="link">accessories</a></li>
        </ul>
    `;
}

createNav();


