<script setup>
import { reactive } from "vue";

const props = defineProps({
  value: {
    type: String,
    required: true,
  },
});

const state = reactive({
  isBuilder: false,
});
</script>

<template>
  <Dialog
    v-model:visible="state.isBuilder"
    maximizable
    modal
    header="Hdeader"
    :style="{ width: '35rem' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
  >
    <template #header>
      <div class="inline-flex align-items-center justify-content-center gap-2">
        <Avatar
          image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
          shape="circle"
        />
        <span class="font-bold">Advanced Filter</span>
      </div>
    </template>

    <div>dfasdf</div>
    <template #footer>
      <Button label="Cancel" text @click="state.isBuilder = false" autofocus />
      <Button
        label="Apply"
        outlined
        @click="state.isBuilder = false"
        autofocus
      />
      <Button
        label="Save And Apply"
        outlined
        @click="state.isBuilder = false"
        autofocus
      />
    </template>
  </Dialog>
</template>
