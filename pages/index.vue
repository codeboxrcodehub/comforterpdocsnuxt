<template>
  <div
    class="px-4 py-6 md:px-8"
    :class="[config.main.padded && 'container']"
  >
    <ContentRenderer
      :key="page._id"
      :value="page"
      :data="(appConfig.comfortErpDocs as any)?.data"
    />
  </div>
</template>

<script setup lang="ts">
const { page } = useContent();
const config = useConfig();
const appConfig = useAppConfig();

useSeoMeta({
  title: page.value?.title,
  ogTitle: page.value?.ogTitle,
  description: page.value?.description,
  ogDescription: page.value?.ogDescription,
  ogImage: page.value?.ogImage,
  ogUrl: page.value?.ogUrl,
  twitterCard: page.value?.twitterCard,
  twitterTitle: page.value?.twitterTitle,
  twitterDescription: page.value?.twitterDescription,
  twitterImage: page.value?.twitterImage,
  twitterSite: page.value?.twitterSite,
});
</script>
