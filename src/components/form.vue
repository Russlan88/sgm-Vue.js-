<template>
  <div class="form" id="contact-form">
    <!-- Form title -->
    <h4 class="form__title">Contacts Us</h4>

    <!-- Form  -->
    <div class="form__container">
      <div class="form__wrapper">
        <form class="form__contact" @submit.prevent="submitHandler">
          <!-- Name validation -->

          <div class="form__group">
            <input
              class="form__input"
              v-model="name"
              id="name"
              type="text"
              v-model.trim="name"
              :class="{invalid: ($v.name.$dirty && !$v.name.required) || ($v.name.$dirty && !$v.name.maxLength)}"
            />
            <label for="name" class="label">Name</label>

            <small
              class="helper-text invalid"
              v-if="$v.name.$dirty && !$v.name.required"
            >Введите Ваше имя</small>
            <small
              class="helper-text invalid"
              v-else-if="$v.name.$dirty && !$v.name.maxLength"
            >Имя может быть {{$v.name.$params.maxLength.max}} символов. Сейчас оно {{name.length}}</small>
          </div>

          <!-- Email validation -->

          <div class="form__group">
            <input
              class="form__input"
              v-model="email"
              id="email"
              type="text"
              v-model.trim="email"
              :class="{invalid: ($v.email.$dirty && !$v.email.required) || ($v.email.$dirty && !$v.email.email)}"
            />
            <label for="email" class="label">Email</label>

            <small
              class="helper-text invalid"
              v-if="$v.email.$dirty && !$v.email.required"
            >Поле Email не должно быть пустым</small>
            <small
              class="helper-text invalid"
              v-else-if="$v.email.$dirty && !$v.email.email"
            >Введите корретный Email</small>
          </div>

          <div class="form__group">
            <label for="terms" class="form__checkbox">
              <input id="terms" type="checkbox" v-model="terms" /> I agree the processing of personal data
              <span class="checkmark"></span>
            </label>
          </div>

          <!-- Submit -->

          <button :disabled="isDisabled" class="form__submit" type="submit">Get in touch</button>
        </form>

        <!-- Success messge -->
        <div class="succes__message">
          <svg
            id="successAnimation"
            class="animated"
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            viewBox="0 0 70 70"
          >
            <path
              id="successAnimationResult"
              fill="#D8D8D8"
              d="M35,60 C21.1928813,60 10,48.8071187 10,35 C10,21.1928813 21.1928813,10 35,10 C48.8071187,10 60,21.1928813 60,35 C60,48.8071187 48.8071187,60 35,60 Z M23.6332378,33.2260427 L22.3667622,34.7739573 L34.1433655,44.40936 L47.776114,27.6305926 L46.223886,26.3694074 L33.8566345,41.59064 L23.6332378,33.2260427 Z"
            />
            <circle
              id="successAnimationCircle"
              cx="35"
              cy="35"
              r="24"
              stroke="#979797"
              stroke-width="2"
              stroke-linecap="round"
              fill="transparent"
            />
            <polyline
              id="successAnimationCheck"
              stroke="#979797"
              stroke-width="2"
              points="23 34 34 43 47 27"
              fill="transparent"
            />
          </svg>
          Thank you for your greet comment! We will contact you :)
        </div>
      </div>
      <div
        class="form__paragraph"
      >Please tell us more about your request and give us info about your company and country</div>
    </div>
  </div>
</template>

<script>
import { email, required, maxLength } from "vuelidate/lib/validators";

export default {
  data: () => ({
    name: "",
    email: "",
    terms: ""
  }),
  computed: {
    isDisabled: function() {
      return !this.name || !this.email || !this.terms;
    }
  },
  validations: {
    name: { required, maxLength: maxLength(30) },
    email: { email, required }
  },
  methods: {
    submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      const formData = {
        name: this.name,
        email: this.email
      };

      document.querySelector(".succes__message").style.display = "block";
      document.querySelector(".form__contact").style.display = "none";
      console.log(formData);
    }
  }
};
</script>
