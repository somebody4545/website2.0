(function () {
    let body = document.getElementById("page"), scrollPercent;
    body.onscroll = () => {
        scrollPercent = (body.scrollTop / body.scrollHeight) * 100;
        console.log(scrollPercent)
        console.log(body.scrollTop)
        console.log(body.scrollHeight)
        body.style.backgroundPosition = "0px " + scrollPercent + "%";
    };
})();