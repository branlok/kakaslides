# KakaSlides

Hello [Monogatari](https://en.wikipedia.org/wiki/Monogatari_(series)) fans! I built this web application that lets you easily create shaft/monogatari-style slides, that are both interactive on browser and exportable in PNG.

- Customizable, text, color, style.
- Comes with a small set of texture backgrounds or use external image link for backgrounds.
- Exportable in PNG (Static Only), images are rendered with 2x scale of browser dimensions.

# How its made

- Kakaslides is a web application built with React. 
- Image downloads of slides is powered with [html-to-image](https://github.com/bubkoo/html-to-image)
- ~~As a way to bypass CORS for custom external image url. A remote proxy server was set up and it delegates resources from destination image hosts to this client.~~ Reverse Proxy currently removed, until further notice.

# Known Issues

- Safari users may experience first click on downloads would yield no background attachments, a temporary workaround is reclick download.
- Visually, Firefox does not support backdrop-filter by default yet, it is normal to see settings modal background replaced with a semi-transparent black background.
