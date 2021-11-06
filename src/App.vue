<template>
  <div class="container text-center">
    <div class="row">
      <div class="col-4 offset-4">
        <h1 class="title p-5">Search for book by title:</h1>
        <input
          class="input p-4"
          type="text"
          placeholder="Search..."
          v-model="searchTerm"
          @keypress.enter="search"
        />
      </div>
    </div>
    <div class="row">
      <div class="col-6 mt-4" v-for="(item, index) in searchResults.items" :key="index">
        <div class="card d-flex flex-row">
          <img :src="'http://books.google.com/books/content?id=' + item.id + '&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api'" alt="" class="card__img w-10" />
          <div class="card-right p-3">
            <h2 class="card__title">{{ item.volumeInfo.title }}</h2>
            <p class="card__text">Published {{ item.volumeInfo.publishedDate }} by {{ item.volumeInfo.publisher }}</p>
          </div>
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
        items: [
          {
            volumeInfo: {
              title: 'sherlock'
            }
          }
        ]
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
body {
  background: url("./assets/oldbooks.jpg") no-repeat;
  background-size: cover;
  height: 100vh;
}
.title {
  color: white;
}
.input {
  border-radius: 16px 0 16px 0;
  outline: none;
  border: none;
  background: rgba($color: #fff, $alpha: 0.75);
  width: 100%;
  transition: 0.4s;
  &:focus {
    border-radius: 0 16px 0 16px;
  }
}
.card {
  text-align: left;
  &__title {
    color: red;
  }
  &__img{
    width: 150px;
    height: 200px;
  }
}
</style>
