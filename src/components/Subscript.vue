<template>
  <div class="fluid-container">
    <md-theme md-name="button-subscript">
      <md-button class="md-raised md-primary" v-on:click="doSubscript()">
        Subscript
      </md-button>
    </md-theme>
  </div>
</template>

<script>
export default {
  name: 'subscript',
  methods: {
    doSubscript: function () {
      navigator.serviceWorker.ready.then(function (registration) {
        if (!registration.pushManager) {
          alert('Your browser doesn\'t support push notification.')
          return false
        }

        // To subscribe `push notification` from push manager
        registration.pushManager.subscribe({
          userVisibleOnly: true // Always show notification when received
        })
          .then(function (subscription) {
            console.info('Push notification subscribed.')
            console.log(subscription)
            // saveSubscriptionID(subscription);
          })
          .catch(function (error) {
            console.error('Push notification subscription error: ', error)
          })
      })
    }
  }
}
</script>
