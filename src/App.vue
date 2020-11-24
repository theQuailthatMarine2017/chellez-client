<template>
  <div id="app">

    <b-navbar fixed-top style="background-color: #8b4513;">
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item href="#">
                <router-link style="color:#feca1d;font-weight:bolder;" to="/">Home</router-link>
            </b-navbar-item>
                <b-navbar-item>
                  <router-link style="color:#feca1d;font-weight:bolder;" to="/about">About</router-link>
                </b-navbar-item>
                <b-navbar-item>
                  <router-link style="color:#feca1d;font-weight:bolder;" to="/order">View Your Order</router-link>
                </b-navbar-item>
                <b-navbar-item>
                  <router-link style="color:#feca1d;font-weight:bolder;" to="/catering">Events Catering</router-link>
                </b-navbar-item>
        </template>

    </b-navbar>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">Your Order</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: white;
  background-color: #8b4513;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: black;
}

#nav a.router-link-exact-active {
  color: black;
}
</style>
