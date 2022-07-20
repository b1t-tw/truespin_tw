
/*
* Light YouTube Embeds by @labnol
* Credit: https://www.labnol.org/
*/

function labnolIframe(div) {
    var iframe = document.createElement('iframe');
    iframe.setAttribute('src', 'https://www.youtube.com/embed/' + div.dataset.id + '?autoplay=1&rel=0&modestbranding=1&playsinline=1&enablejsapi=1');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('allowfullscreen', '1');
    iframe.setAttribute('allow', 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture');
    div.parentNode.replaceChild(iframe, div);
}

function handleImg(e) {
    if(this.naturalWidth < 720) {
        this.src = this.src.replace('maxresdefault','hqdefault');
    }
}

function initYouTubeVideos() {
    var playerElements = document.getElementsByClassName('youtube-player');
    for (var n = 0; n < playerElements.length; n++) {
        var videoId = playerElements[n].dataset.id;
        var div = document.createElement('div');
        div.setAttribute('data-id', videoId);
        var thumbNode = document.createElement('img');
        thumbNode.addEventListener('load', handleImg);
        thumbNode.src = '//img.youtube.com/vi/ID/maxresdefault.jpg'.replace('ID', videoId);
        div.appendChild(thumbNode);
        var playButton = document.createElement('div');
        playButton.setAttribute('class', 'play');
        div.appendChild(playButton);
        div.onclick = function () {
            labnolIframe(this);
        };
        playerElements[n].appendChild(div);
    }
}

document.addEventListener('DOMContentLoaded', initYouTubeVideos);