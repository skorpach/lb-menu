<script setup>
const props = defineProps(['title']);
</script>

<template>
<div class="sm-subheader">
  <span class="sm-spline"></span>
  <h3>
    {{props.title}}
  </h3>
  <span class="sm-spline"></span>
</div>
</template>

<style>
.sm-subheader {
    display: flex;
    gap: 4px;
    justify-content: center;
    background: var(--accent-dark-beige);
    color: white;
}

.sm-subheader h3 {
    font-size: 26px;
    font-weight: bold;
    text-transform: uppercase;
}

.sm-subheader > .sm-spline {
    flex-grow: 1;
    align-self: center;
    margin-inline: 10px;
    text-decoration: line-through;
    height: 0;
    border-bottom: solid 1px white;
}
</style>
