<template>
    <div id="app">
    <div class="navbar navbar-dark bg-primary">
        <a class="navbar-brand" href="#">Firebase Auth</a>
        <ul class="nav">
            <li class="nav-item">
                <router-link class="nav-link text-white" to="/login">Login</router-link>
            </li>
        </ul>
    </div>
    <div class="container py-4">
        <router-view />
    </div>
  </div>
</template>