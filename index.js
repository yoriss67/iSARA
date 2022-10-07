//TEST
// $(alert('bsdcdskccsd'));



// scrollするとtopへ
const scroll_to_top = document.querySelector('#scroll-to-button');

scroll_to_top.addEventListener('click', go_to_top);

$(function go_to_top() {
    window.scroll({
        top: 100,
    behavior: "smooth"})
});

$(function () {
    const scroll_to_top = document.querySelector('#scroll-to-button');
})