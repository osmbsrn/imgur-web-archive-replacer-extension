(function () {
    var imageTags = document.getElementsByTagName("img");
    for (var i = 0; i < imageTags.length; i++) {
        var image = imageTags[i];
        var src = image.getAttribute('src');
        if (src.startsWith("https://i.stack.imgur")) {
            var wrappedSrc = 'http://web.archive.org/web/' + src;
            image.setAttribute('src', wrappedSrc);
        }
    }
})();