(function() {
    function handleMousewheel (event) {
        if (event.shiftKey) {
            // Chrome flips x and y when shift is held, so we have to manually reverse
            window.scrollBy(event.wheelDeltaY * -10, event.wheelDeltaX * -10);
        } else if (event.altKey || event.metaKey) {
            window.scrollBy(event.wheelDeltaX * -10, event.wheelDeltaY * -10);
        } else if (event.ctrlKey) {
            // alas, Chrome intercepts Ctrl-mousewheel before we ever see it
            window.scrollBy(event.wheelDeltaX * -10, event.wheelDeltaY * -10);
        }
    }
    document.addEventListener("mousewheel", handleMousewheel, false);
})();
