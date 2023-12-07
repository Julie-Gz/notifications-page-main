"use strict"
// Variables
const notificationPosts = document.querySelectorAll(".notification-post");
const markAllBtn = document.querySelector(".mark-as-all-read");
const unreadMark = document.querySelectorAll(".unread-mark");


markAllBtn.addEventListener("click", function () {
    notificationPosts.forEach(n => {
        n.classList.add("read");
        unreadMark.forEach(m => {
            if (Array.from(unreadMark).indexOf(m) === Array.from(notificationPosts).indexOf(n)) {
                m.style.display = "none";
            }
        })
    })
})

notificationPosts.forEach(notification => {
    notification.addEventListener("click", function () {
        Array.from(unreadMark).forEach(m => {
            if (Array.from(unreadMark).indexOf(m) === Array.from(notificationPosts).indexOf(notification)) {
                notification.classList.add("read");
                m.style.display = "none";
            }
        })
    })
})