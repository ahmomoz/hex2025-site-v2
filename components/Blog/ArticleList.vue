<script lang="ts" setup>
const { $swal } = useNuxtApp();

import ArticleCard from "../Common/ArticleCard.vue";
import Pagination from "../Common/Pagination.vue";
import SearchBar from "../Common/SearchBar.vue";
import articles from "~/data/articles";
</script>

<template>
  <main class="blog-articleList-section wrap border-top-bottom">
    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <SearchBar />
        </div>
      </div>
      <!-- 文章列表 -->
      <div class="row mt-10 mt-lg-0">
        <ul
          v-for="article in articles.slice(1,12)"
          class="col-lg-6 col-xxl-4 py-4 py-lg-10"
          :key="article._id"
        >
          <ArticleCard :article="article" />
        </ul>
      </div>
      <div class="f-justify-center">
        <ClientOnly>
          <Pagination
            :total-pages="5"
            :current-page="1"
          />
        </ClientOnly>
      </div>
    </div>
  </main>
</template>