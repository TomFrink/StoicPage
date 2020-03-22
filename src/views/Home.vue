<template>
  <div class="home">
    <article v-for="(quote, idx) in quotes" :key="idx">
      <hr />
      <h1>'{{ quote.quote }}'</h1>
      <hr />
      <h3>- {{ quote.person }}</h3>
      <button>
        <a
          :href="
            'https://twitter.com/intent/tweet?text=' +
              quote.quote +
              '%20-' +
              quote.person +
              '&hashtags=stoicpage'
          "
          target="_blank"
        >Tweet</a>
      </button>
      <br />
    </article>
  </div>
</template>

<script>
import { db } from "@/db";

export default {
  name: "home",
  data() {
    return {
      quotes: []
    };
  },
  firestore: {
    quotes: db.collection("quotes")
  }
};
</script>

<style scoped>
article {
  padding: 50px;
  border-style: outset;
  margin: 25px;
}
button {
  background-color: #1b95e0;
  color: #fff;
  padding: 5px 10px;
  border-radius: 7.5px;
}
button a:link,
a:visited,
a:active {
  text-decoration: none;
  color: #fff;
}
button a:hover {
  text-decoration: none;
  color: #fff;
  font-weight: bold;
}
hr {
  border: 0;
  height: 1px;
  background: #333;
  background-image: linear-gradient(to right, #ccc, #333, #ccc);
}
</style>
