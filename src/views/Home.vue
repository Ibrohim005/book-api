<template>
  <div class="lg:container mx-auto px-4 text-center">
    <img src="../assets/oldbooks.jpg" alt="" class="fixed top-0 left-0 h-screen w-full" style="z-index: -1;">
    <h1 class="text-4xl p-5 text-white text-center">Search for book by title:</h1>
    <input
      class="input p-4 mb-4"
      type="text"
      placeholder="Search..."
      v-model="searchTerm"
      @keypress.enter="search"
    />
    <div class="grid grid-cols md:grid-cols-2 lg:grid-cols-3 gap-3">
      <div class="card bg-white flex flex-row rounded-xl text-left" v-for="(item, index) in searchResults.items" :key="index">
        <img :src="'http://books.google.com/books/content?id=' + item.id + '&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'" alt="" class="rounded-xl card__img w-30" />
        <div class="card-right p-3">
          <h4 class="card__title text-red-500">{{ item.volumeInfo.title }}</h4>
          <p class="card__text my-4">Published {{ item.volumeInfo.publishedDate }} by {{ item.volumeInfo.publisher }}</p>
          <a :href="item.volumeInfo.infoLink" target="_blank" class="card__link text-blue-400">More information...</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      searchTerm: "",
      searchResults: {
      },
    };
  },
  methods: {
    search() {
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=` + this.searchTerm)
      .then(response => {
        this.searchResults = response.data
        console.log(this.searchResults);
      })
      .catch(e => {
        console.log(e)
      })
    },

    
    
  }
};
</script>

<style lang="scss">
.title {
  color: white;
}
.input {
  border-radius: 16px 0 16px 0;
  outline: none;
  border: none;
  background: rgba($color: #fff, $alpha: 0.75);
  transition: 0.4s;
  &:focus {
    border-radius: 0 16px 0 16px;
  }
}
.card {
  &__img{
    width: 150px;
    height: 200px;
  }
}
</style>
