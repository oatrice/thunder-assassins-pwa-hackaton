<template>
<div class="fluid-container">
  <div class="login">
    <img src="../assets/electricity.png" hieght="200" width="200" style="margin-top:40px; margin-bottom:20px">
    <div class="md-display-3"  style="margin-bottom:20px">Thunder Bolt</div>
    <div class="md-display-1"  style="margin-bottom:20px">รู้ทัน รู้เร็ว รู้จริง รู้ทุกเรื่องเกี่ยวกับสภาพอากาศ</div>
    <md-layout md-align="center">
      <md-card  style="padding:20px">
        <md-card-header>
          <div class="md-display-1">Register & Sign In</div>
        </md-card-header>
        <md-card-content>          
          <md-layout md-column md-gutter>
            <md-theme md-name="button-login-facebook">
              <md-button class="md-raised md-primary" v-on:click="fillTable()"><div class="md-subheading" style="margin:10px">Facebook</div></md-button>
            </md-theme>
            <md-theme md-name="button-login-google">
              <md-button class="md-raised md-primary" v-on:click="clearTable()"><div class="md-subheading" style="margin:10px">Google</div></md-button>
            </md-theme>
          </md-layout>
        </md-card-content>
      </md-card>
    </md-layout>   
  </div>
</div>  
</template>

<script>
export default {
  name: 'main_login',
  data: function () {
    return {
      contacts: []
    }
  },
  methods: {
    fillTable: function () {},
    clearTable: function () {}
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

  /*height: 100%; 
  width: 100%; */


  height: 100vh;
  width: 100%;
  
	
}

.fluid-container {
    margin-right: auto;
    margin-left: auto;
}

</style>
