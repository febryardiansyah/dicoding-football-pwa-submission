importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

var urlToCache =[
    {url: '/',revision:'1'},
    {url:'/nav.html',revision:'1'},
    {url:'/index.html',revision:'1'},
    {url:'/pages/home.html',revision:'1'},
    {url:'/pages/teams.html',revision:'1'},
    {url:'/pages/savedteam.html',revision:'1'},
    {url:'/js/home.js',revision:'1'},
    {url:'/main.js',revision:'1'},
    {url:'/js/teams.js',revision:'1'},
    {url:'/js/savedteam.js',revision:'1'},
    {url:'/js/api.ts',revision:'1'},
    {url:'/js/idb.js',revision:'1'},
    {url:'/sw.js',revision:'1'},
    {url:'/css/style.css',revision:'1'},
    {url:'/css/materialize.min.css',revision:'1'},
    {url:'/js/materialize.min.js',revision:'1'},
    {url:'/js/materialize.js',revision:'1'},
    {url:'/js/script.js',revision:'1'},
    {url:'/icons/icon-96x96.png',revision:'1'},
    {url:'/icons/icon-72x72.png',revision:'1'},
    {url:'/icons/icon-128x128.png',revision:'1'},
    {url:'/icons/icon-144x144.png',revision:'1'},
    {url:'/icons/icon-152x152.png',revision:'1'},
    {url:'/icons/icon-192x192.png',revision:'1'},
    {url:'/icons/icon-384x384.png',revision:'1'},
    {url:'/icons/icon-512x512.png',revision:'1'},
    {url:'/manifest.json',revision:'1'}
]

if(workbox){
    console.log('Workbox berhasil dimuat');
    workbox.precaching.precacheAndRoute(urlToCache)

    workbox.routing.registerRoute(
        /.*(?:png|gif|jpg|jpeg|svg)$/,
        workbox.strategies.cacheFirst({
            cacheName:'images',
            plugins:[
                new workbox.cacheableResponse.Plugin({
                    statuses:[0,200]
                }),
                new workbox.expiration.Plugin({
                    maxentries:100,
                    maxAgeSeconds:30 * 24 * 60 * 60
                })
            ]
        })
    )
    workbox.routing.registerRoute(
        new RegExp('https://api.football-data.org/v2/'),
        workbox.strategies.staleWhileRevalidate()
    )
    workbox.routing.registerRoute(
        /.*(?:googleapis|gstatic)\.com/,
        workbox.strategies.staleWhileRevalidate({
            cacheName:'google-fonts'
        })
    )
}else{
    console.log('Workbox gagal dimuat')
}

self.addEventListener('push', function(event){
    var body
    if(event.data){
        body = event.data.text()
    }else{
        body = 'Push Message No Payload'
    }
    var options = {
        body: body,
        vibrate:[100,50,100],
        data:{
            dateArrival:Date.now(),
            primaryKey:1
        }
    }
    event.waitUntil(
        self.registration.showNotification('Push Notification',options)
    )
})