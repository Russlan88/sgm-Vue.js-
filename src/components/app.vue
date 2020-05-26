<template>
  <main>
    <contacts></contacts>
    <mapComponent></mapComponent>
    <formComponent></formComponent>
  </main>
</template>
    
<!-- end #app root -->

<script>
import Contacts from "./contacts.vue";
import MapComponent from "./map.vue";
import FormComponent from "./form.vue";

export default {
  data() {
    return {};
  },
  components: {
    contacts: Contacts,
    mapComponent: MapComponent,
    formComponent: FormComponent
  }
};
</script>



