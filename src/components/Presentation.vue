<template>
  <div class="container box" contenteditable="true">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.container {
  width: 65%;
  padding: var(--box-padding);
  /* Hides the vertical scrollbar */
  overflow-y: hidden;
}

.content {
  font-size: .9rem;
  font-family: monospace;
  color: var(--accent-color);
  line-height: 1.4rem;
}
</style>
