<template>
  <div class="contacts">
    <h1 class="contacts__main-title">{{ mainTitle }}</h1>

    <div class="contacts__left-block">
      <h2 class="contacts__block-title">
        <span class="contacts__name-title">{{nameTitle}}</span>
        {{title}}
      </h2>
      <div class="contacts__address-block">
        <div class="contacts__paragraph">
          <li
            v-for="(address,index) in address"
            :key="index"
            :class="listItemCssClass(index)"
            class="list__item"
          >{{address.link}}</li>
          <!-- {{content}} -->
          <a class="contacts__link" v-bind:href="'tel:' + phoneNumber">{{phoneNumber}}</a>
        </div>

        <ul class="contacts__address-list">
          <li class="contacts__list-item">Email</li>
          <li class="contacts__list-item">
            <a href="mailto:info-worldwide.com" target="blank">info-worldwide.com</a>
          </li>
          <li class="contacts__list-item">Send message</li>
          <li class="contacts__list-item">
            <a
              v-bind:href="'https://chatapi.viber.com/pa/send_message?reciever=' + phoneNumber"
              target="_blank"
            >viber us</a>
          </li>
          <li class="contacts__list-item">Send form</li>
          <li class="contacts__list-item">
            <a href="#contact-form">contact us</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="contacts__technical-support">
      <h2 class="contacts__block-title">
        {{contactstitleSecondary}}
        <span class="contacts__name-title">{{nameTitleSecondary}}</span>
      </h2>
      <div class="contacts__paragraph">{{contactsParagraph}}</div>
      <a class="contacts__link" v-bind:href="'tel:' + phoneNumberSupport">{{phoneNumberSupport}}</a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mainTitle: "Contacts",
      nameTitle: `GSM`,
      title: ` Headquarters`,
      address: [
        { link: "Global Message Services Ukraine LLC" },
        { link: "Bundesstrasse 5 | 3rd Floor" },
        { link: "6300 Zug" }
      ],
      phoneNumber: `+41 41 544 62 00`,
      contactstitleSecondary: `Technical support`,
      nameTitleSecondary: `24/7`,
      contactsParagraph:
        "GMS understands that it can be hard to follow all new technologies. We regularly provide for all our clients educational trainings to make your operator`s business earn more and better though our best practices.",
      phoneNumberSupport: `+41 41 544 62 06`
    };
  },
  methods: {
    listItemCssClass(index) {
      return index % 2 === 0 ? "list__item_title" : "list__item_link";
    }
  }
};
</script>
