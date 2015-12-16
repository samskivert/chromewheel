(function() {
    function handleMousewheel (event) {
        if (event.shiftKey) {
            // Chrome flips x and y when shift is held, so we have to manually reverse
            window.scrollBy(event.wheelDeltaY * -10, event.wheelDeltaX * -10);
        } else if (event.altKey || event.metaKey) {
            window.scrollBy(event.wheelDeltaX * -10, event.wheelDeltaY * -10);
        } else if (event.ctrlKey) {
            window.scrollBy(event.wheelDeltaX * -10, event.wheelDeltaY * -10);
            event.preventDefault();
        }
    }
    document.addEventListener("mousewheel", handleMousewheel, false);
})();
