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
      alert('5')
    }
  }
}
</script>
