import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import jQuery from 'jquery';
import firebase from 'firebase'


import '@fortawesome/fontawesome-free/js/all'

import 'material-design-icons-iconfont/dist/material-design-icons.css'
window.$ = window.jQuery = jQuery;


var firebaseConfig = {
    apiKey: "AIzaSyAPu6HLqkMsG4WRslPrTWZ2nqb1knrKvJ0",
    authDomain: "admin-kediri-lagi.firebaseapp.com",
    databaseURL: "https://admin-kediri-lagi.firebaseio.com",
    projectId: "admin-kediri-lagi",
    storageBucket: "admin-kediri-lagi.appspot.com",
    messagingSenderId: "188124876883",
    appId: "1:188124876883:web:4e0dac4a243e22608276a6",
    measurementId: "G-VSMDB0T8XR"
};
// Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

const db = firebase.database().ref();

export {fb,db}

createApp(App).use(router).mount("#app");

