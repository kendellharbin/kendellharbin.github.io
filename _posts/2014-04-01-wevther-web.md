---
layout: post
title: Wevther for Web by Michael Dijkstra
heading: Wevther for Web
tagline: Good products for today's weather, in your browser
---

Soon after [Jacob](http://jacobheftmann.com), [Jack](http://jack.ly) and I wrapped up [Wevther for iOS](/posts/wevther-ios) we started receiving emails from users asking about the web version. When we launched the [iOS app](https://itunes.apple.com/us/app/wevther/id723686546?mt=8), Jacob created a new site for wevther.com which promoted the app with the [video he made](https://vimeo.com/76003931). While this was great for people with an iPhone, Android and desktop users could no longer get good products for today's weather, so a few months later we started work on Wevther for Web v2.

***

![Wevther Web Illustrator](/assets/img/wevther/web-illustrator.jpg)

Given how well we worked together building out the iOS app, we followed the same process for the design and development of the web app.
Jacob shared a Dropbox folder as soon as he was comfortable with the direction of the design and I would develop the app
using the latest version. We trusted each other and knew it would be an iterative process for both of us so we didn't judge the design until it was interactive in the browser, and from there it would be refined.

***

![Wevther Web Android](/assets/img/wevther/web-android.jpg)

The layout of the web app was more complicated than the iOS app given then responsive nature of the web. It was built to respond to all browser sizes and has been optimised for mobile, tablet,
laptop and desktop.

***

![Wevther Web Laptop and Phone](/assets/img/wevther/wevther-web-phone-laptop.jpg)

Seeing as we already had the API in place, this was the perfect use case for
[Ember.js](http://emberjs.com). Ember was a joy to work with and made it very easy to refresh the forecast
and products on the page.

Functionality is the same for all devices, the only difference is the mobile version has a separate settings menu to due
to the constraints of the smaller screen size. Also, on iPhone we trigger a special layout to prompt users to download the iPhone app.

Overall this was another successful build and we're really happy with the
result of the new [wevther.com](http://wevther.com).

***

![Wevther Bookmarklet](/assets/img/wevther/wevther-bookmarklet.jpg)

Although Jack was caught up in client work while we built this app, he still found time to create a bookmarkelt so people can submit their own
products to Wevther. Try it out at
[bookmarklet.wevther.com](http://bookmarklet.wevther.com/)
