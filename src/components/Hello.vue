<template>
<div class="fluid-container">
  <div class="login">
    <img src="../assets/electricity.png" hieght="200" width="200" style="margin-top:40px; margin-bottom:20px">
    <md-theme md-name="header-login">
      <div class="md-display-3" id="hhh"  style="margin-bottom:20px">Thunder Bolt</div>
      <div class="md-display-1" style="margin-bottom:20px">รู้ทัน รู้เร็ว รู้จริง รู้ทุกเรื่องเกี่ยวกับสภาพอากาศ</div>
    </md-theme>    
    <md-layout md-align="center">
      <md-card  style="padding:20px">
        <md-card-header>
          <div class="md-display-1">Register & Sign In</div>
        </md-card-header>
        <md-card-content>          
          <md-layout md-column md-gutter>
            <md-theme md-name="button-login-facebook">
              <md-button class="md-raised md-primary" v-on:click="onSignInFacebookButtonClick()"><div class="md-subheading" style="margin:10px">Facebook</div></md-button>
            </md-theme>
            <md-theme md-name="button-login-google">
              <md-button class="md-raised md-primary" v-on:click="onSignInGoogleButtonClick()"><div class="md-subheading" style="margin:10px">Google</div></md-button>
            </md-theme>
          </md-layout>
        </md-card-content>
      </md-card>
    </md-layout>   
  </div>
</div>  
</template>

<script>

import Firebase from 'firebase'

var config = {
  apiKey: 'AIzaSyCXYQnNT1nLdeLTFJSdodY7NLn6tvOsJ6o',
  authDomain: 'thunder-assassins-pwa-hackaton.firebaseapp.com',
  databaseURL: 'https://thunder-assassins-pwa-hackaton.firebaseio.com',
  projectId: 'thunder-assassins-pwa-hackaton',
  storageBucket: 'thunder-assassins-pwa-hackaton.appspot.com',
  messagingSenderId: '334872395056'
}

Firebase.initializeApp(config)

var googleProvider = new Firebase.auth.GoogleAuthProvider()
var facebookProvider = new Firebase.auth.FacebookAuthProvider()

export default {
  name: 'main_login',
  data: function () {
    return {
      contacts: []
    }
  },
  methods: {
    onSignInFacebookButtonClick: function () {
      Firebase.auth().signInWithPopup(facebookProvider).then(function (result) {
        console.log(result)
      })
      .catch(function (error) {
        console.log(error)
      })
    },
    onSignInGoogleButtonClick: function () {
      Firebase.auth().signInWithPopup(googleProvider).then(function (result) {
        console.log(result)
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>

<style>
.login {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-image: url(../assets/background-login.png);
  background-position: center center;
  background-repeat:  no-repeat;
  background-attachment: fixed;
  background-size:  cover;
  background-color: #999;

  height: 100vh;
  width: 100%;
  
	
}

.fluid-container {
    margin-right: auto;
    margin-left: auto;
}

.header-login {
    text-color: #324a5e;
}

</style>
