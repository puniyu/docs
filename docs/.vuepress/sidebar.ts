import { defineCollections, defineCollection } from 'vuepress-theme-plume'

const guide = defineCollection({
  type: 'doc',
  dir: 'guide',
  title: '指南',
  sidebar: [
    { text: '介绍', link: '/guide/' },
  ],
})


export default defineCollections([guide])
