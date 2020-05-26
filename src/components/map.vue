<template>
  <!-- partial:index.partial.html -->
  <div class="map">
    <div class="map__container">
      <div class="map__row">
        <h2 class="map__main-title">{{ mapTitle }}</h2>
        <ul class="tab">
          <li
            class="tab__single-item active"
            data-id="content1"
            data-lat="50.457389"
            data-lng="30.450584"
          >Kyiv</li>
          <li
            class="tab__single-item"
            data-id="content2"
            data-lat="40.699814"
            data-lng="-73.942136"
          >New York</li>
          <li
            class="tab__single-item"
            data-id="content3"
            data-lat="23.151533"
            data-lng="113.288533"
          >Guangzhou</li>
          <li
            class="tab__single-item"
            data-id="content4"
            data-lat="41.388447"
            data-lng="2.171882"
          >Barcelona</li>
        </ul>
        <div class="tab__content">
          <div class="tab__content-item active" id="content1">
            <div class="inner-content">
              <h3 class="inner-content__title">Global Message Services Ukraine LLC</h3>
              <ul class="inner-content__list">
                <li class="inner-content__item">Kuiv, Stepan Bandera, 33</li>
                <li class="inner-content__item">02066</li>
                <li class="inner-content__item">Ukraine</li>
              </ul>
            </div>
          </div>
          <div class="tab__content-item" id="content2">
            <div class="inner-content">
              <h3 class="inner-content__title">Global Message Services New York LLC</h3>
              <ul class="inner-content__list">
                <li class="inner-content__item">New York, Down Town, 12</li>
                <li class="inner-content__item">02066</li>
                <li class="inner-content__item">USA</li>
              </ul>
            </div>
          </div>
          <div class="tab__content-item" id="content3">
            <div class="inner-content">
              <h3 class="inner-content__title">Global Message Services Guangzhou LLC</h3>
              <ul class="inner-content__list">
                <li class="inner-content__item">Guangzhou, Main street, 26</li>
                <li class="inner-content__item">02066</li>
                <li class="inner-content__item">Guangzhou</li>
              </ul>
            </div>
          </div>
          <div class="tab__content-item" id="content4">
            <div class="inner-content">
              <h3 class="inner-content__title">Global Message Services Barcelona LLC</h3>
              <ul class="inner-content__list">
                <li class="inner-content__item">Barcelona, Cale de Passeo, 8</li>
                <li class="inner-content__item">02066</li>
                <li class="inner-content__item">Spain</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div id="google-map"></div>
    </div>
  </div>
</template>


<style lang="scss">
// tabs
</style>

<script>
export default {
  data() {
    return {
      mapTitle: "Our Offices"
    };
  }
};
</script>




