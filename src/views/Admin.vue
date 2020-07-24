<template>
  <div>
    <h1>Admin Section</h1>
    <section>
      <input v-model="person" placeholder="Person" />
      <br />
      <textarea v-model="quote" placeholder="Quote"></textarea>
      <p>
        <i>Person is:</i>
        <b>{{ person }}</b>
      </p>
      <span>
        <i>Quote is:</i>
      </span>
      <p style="white-space: pre-line;">
        <b>{{ quote }}</b>
      </p>
      <button @click="addQuote">Add Quote</button>
    </section>
    <section>
      <ul id="quotes">
        <li v-for="thing in things" :key="thing.quote">
          {{ thing.time.seconds | dater }} - {{ thing.quote }} by
          {{ thing.person }}
        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import { db } from "@/db";

export default {
  name: "Admin",
  filters: {
    dater: function(value) {
      if (!value) return "";
      value = new Date(value * 1000).toDateString();
      return value;
    }
  },
  data() {
    return {
      things: [],
      person: "",
      quote: ""
    };
  },
  firestore() {
    return {
      things: db.collection("quotes").orderBy("time", "desc")
    };
  },
  methods: {
    addQuote: function() {
      const time = new Date();
      const person = this.person;
      const quote = this.quote;
      db.collection("quotes").add({ person, quote, time });
    }
  }
};
</script>

<style scoped></style>
