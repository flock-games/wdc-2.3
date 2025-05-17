<script setup lang="ts">
import "media-chrome";
import "@mux/mux-video";
</script>

<template>
  <media-controller>
    <mux-video
      playback-id="A3VXy02VoUinw01pwyomEO3bHnG4P32xzV7u1j1FSzjNg"
      slot="media"
      crossorigin
      muted
    ></mux-video>
    <media-loading-indicator
      slot="centered-chrome"
      noautohide
    ></media-loading-indicator>
    <media-control-bar>
      <media-play-button></media-play-button>
      <media-seek-backward-button></media-seek-backward-button>
      <media-seek-forward-button></media-seek-forward-button>
      <media-mute-button></media-mute-button>
      <media-volume-range></media-volume-range>
      <media-time-range></media-time-range>
      <media-time-display showduration remaining></media-time-display>
      <media-playback-rate-button></media-playback-rate-button>
      <media-fullscreen-button></media-fullscreen-button>
    </media-control-bar>
  </media-controller>
</template>
