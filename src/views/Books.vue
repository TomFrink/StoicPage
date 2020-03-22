<template>
  <div>
    <h1>Books</h1>
    <article>
      <a href="https://tim.blog/2017/07/06/tao-of-seneca/">
        <h2>Tao of Seneca</h2>
        <img
          src="https://i1.wp.com/tim.blog/wp-content/uploads/2017/07/look-upinto-the-stars.jpg?w=560&ssl=1"
        />
      </a>
    </article>
    <article>
      <a href="http://classics.mit.edu/Antoninus/meditations.html">
        <h2>Meditations by Marcus Aurelius</h2>
        <img
          src="https://images-na.ssl-images-amazon.com/images/I/610ix12sfNL.jpg"
          alt="Picture of Cover"
        />
      </a>
    </article>
  </div>
</template>

<script>
export default {
  name: "Books"
};
</script>

<style lang="scss" scoped>
a:link {
  text-decoration: none;
  color: #2c3e50;
}

a:visited {
  text-decoration: none;
  color: #2c3e50;
}

a:hover {
  text-decoration: underline;
  color: #42b983;
}

a:active {
  text-decoration: underline;
  color: #42b983;
}
</style>