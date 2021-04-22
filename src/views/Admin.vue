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
      <p>
        <span>
          <i>Quote is:</i>
        </span>
      </p>
      <p style="white-space: pre-line;">
        <b>{{ quote }}</b>
      </p>
      <button class="addquote" @click="addQuote">Add Quote</button>
    </section>
    <hr />
    <section class="output">
      <ul id="quotes">
        <li v-for="thing in things" :key="thing.quote">
          <b>{{ thing.time.seconds | dater }}</b>
          <p>{{ thing.quote }}</p>
          <i>by {{ thing.person }}</i>
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
hr {
  margin: 50px;
}
/* output section */
@import url("https://fonts.googleapis.com/css?family=Lancelot");
ul {
  font-family: Lancelot;
  font-size: 20px;
  list-style-type: none;
  background: #3399ff;
  padding: 20px;
}
ul li {
  background: #cce5ff;
  margin: 5px;
  padding: 10px;
  text-align: start;
}
</style>
