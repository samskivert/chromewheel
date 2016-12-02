(function() {
    function handleMousewheel (event) {
        if (event.altKey || event.metaKey || event.ctrlKey) {
            window.scrollBy(event.wheelDeltaX * -10, event.wheelDeltaY * -10);
            event.preventDefault();
        }
    }
    document.addEventListener("mousewheel", handleMousewheel, false);
})();
