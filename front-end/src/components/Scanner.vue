<template>
  <div class="d-flex align-items-stretch">
    <video  id="video" class="camera" autoplay></video>
  </div>
</template>

<script>
export default {
  methods: {
    init() {
      if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true }).then(stream => {
          const videoPlayer = document.querySelector("video");
          videoPlayer.srcObject = stream;
        });
      }
    }
  },
  beforeMount() {
    this.init();
  }
};
</script>

<style scoped lang="scss">
.camera {
  display: block;
  position: fixed;
  top: 1;
  left: 0;
  right:0;
  min-width: 100%;
  min-height: 100%;
}
</style>