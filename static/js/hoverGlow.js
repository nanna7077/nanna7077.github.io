[...document.getElementsByClassName('is-vertical')].forEach(elem => {
    elem.addEventListener("pointermove", (ev) => {
        console.log(ev)
        const rect = elem.getBoundingClientRect();

        elem.style.setProperty("--x", ev.clientX - rect.left);
        elem.style.setProperty("--y", ev.clientY - rect.top);
    })
})