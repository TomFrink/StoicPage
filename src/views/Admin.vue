<template>
  <div>
    <h1>Admin Section</h1>
    <section class="input">
      <input v-model="person" placeholder="Person" type="text" />
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
      <button class="addquote" @click="addQuote">Add Quote</button>
    </section>
    <section class="output">
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

<style scoped>
/* input section */
section.input {
  text-align: center;
}
/* person input */
input[type="text"] {
  width: 100%;
  height: 50px;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
  font-size: 24px;
  text-align: center;
}
input[type="text"]:focus {
  border: 3px solid #555;
}
/* quote input */
textarea {
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  resize: none;
  font-size: 24px;
  text-align: center;
}
/* Add Quote Button */
button.addquote {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 24px;
  margin: 4px 2px;
  cursor: pointer;
  width: 100%;
}
</style>
