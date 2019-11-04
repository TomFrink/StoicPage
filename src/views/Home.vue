<template>
  <div class="home">
    <article v-for="(quote, idx) in quotes" :key="idx">
      <hr />
      <h1>'{{ quote.quote }}'</h1>
      <hr />
      <p>- {{ quote.person }}</p>
      <!-- This button code is ugly. There is a better way -->
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
        >
          Tweet
        </a>
      </button>
      <br />
    </article>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import { db } from "@/db";

export default {
  name: "home",
  components: {
    // HelloWorld
  },
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
  padding: 10px;
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
</style>
