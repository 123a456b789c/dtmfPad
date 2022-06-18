const site = "dtmf-v1"
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/js/tones.js",
  "/tones/Dtmf0.ogg",
  "/tones/Dtmf1.ogg",
  "/tones/Dtmf2.ogg",
  "/tones/Dtmf3.ogg",
  "/tones/Dtmf4.ogg",
  "/tones/Dtmf5.ogg",
  "/tones/Dtmf6.ogg",
  "/tones/Dtmf7.ogg",
  "/tones/Dtmf8.ogg",
  "/tones/Dtmf9.ogg",
  "/tones/DtmfA.ogg",
  "/tones/DtmfB.ogg",
  "/tones/DtmfC.ogg",
  "/tones/DtmfD.ogg",
  "/tones/Dtmf0.ogg",
  "/tones/DtmfPound.ogg",
  "/tones/DtmfStar.ogg",
  "/tones/DtmfStatus.ogg",
  "/tones/DtmfPoundPound.ogg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(site).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })