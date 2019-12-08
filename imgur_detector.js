(function () {
    var imageTags = document.getElementsByTagName("img");
    var imgUrImageCount = 0;
    for (var i = 0; i < imageTags.length; i++) {
        var image = imageTags[i];
        var src = image.getAttribute('src');
        if (src.startsWith("https://i.stack.imgur")) {
            imgUrImageCount++;
        }
    }

    return imgUrImageCount;
})();