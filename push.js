const vapidKeys ={
    "publicKey":"BEHjmtMDWi8ECV03YcdFKiMWeTHeEhg-U8fGS8T0MpomQJPieZzBJCJCjpNX4mJf55Z9QF0wGeh_VnZ8crv1vBM",
    "privateKey":"O4HmbZPdpwk-SyznMYIbkRFMEoTcUWi-_dYbL1Y2vjE",
}

webPush.setVapidDetails(
    'mailto:febry@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
)

var pushSubscription = {
    "endpoint":"  https://fcm.googleapis.com/fcm/send/cBSHwJ_rPK0:APA91bFdVwQ5rs6XFWCZoMKBtFM0iF-wr_HVsm28jfhjUJIcibAl_PhqQkQn79Y9Q6GLWP0tUJ3Pu9FxJRFvYDHCSK436_I-VVnz4DjPBeSoaupndCk3i_6MZp6GS5RQhwXFcNniq0sL",
    "keys":{
        "p256dh":"BNmwLVRSuFvE+n6yZVd6T73zOciRvk8vh5U4FPUJISyCDrJkllgexN4aDP829Kl3YKrN5IWSVvwDyuNdAqEfopw=",
        "auth":"GnPjpwPhBgNusCGxx3Scrg=="
    }
}
var payload = 'Hi !! you got new notfication'

var options = {
    gcmAPIKey:"182569615150",
    TTL :60
}
webPush.sendNotification(
    pushSubscription,
    payload,
    options
)