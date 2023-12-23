[...document.getElementsByClassName("pageFooter")].forEach(elem => {
    elem.innerHTML = `
    <div class="navbar" style="display: block; position: fixed; bottom: 0; padding-top: 12px;">
        <div class="links" style="display: flex; gap: 15px; justify-content: center;">
            <a href="https://www.linkedin.com/in/nannan-/" target="_blank"><img src="static/img/linkedin.png" width="30"></a>
            <a href="https://github.com/nanna7077" target="_blank"><img src="static/img/github.png" width="30"></a>
            <a href="mailto:nanna7077@gmail.com" target="_blank"><img src="static/img/mail.png" width="30"></a>
        </div>
    </div>
    `;
})

document.getElementById("nav").innerHTML = `
<nav class="navbar" role="navigation" aria-label="main navigation" style="display: flex;">
    <span aria-hidden="true"><a class="navbar-item ${window.location.pathname === "/" ? "coloredfont" : ""}" href="/">Home</a></span>
    <span aria-hidden="true"><a class="navbar-item ${window.location.pathname === "/projects.html" ? "coloredfont" : ""}" href="/projects.html">Projects</a></span>
    <span aria-hidden="true"><a class="navbar-item ${window.location.pathname === "/contactMe.html" ? "coloredfont" : ""}" href="/contactMe.html">Contact Me</a></span>
</nav>
`;