import { defineThemeConfig } from "vuepress-theme-plume";
import sidebar from "./sidebar";
import navbar from "./navbar";


export default defineThemeConfig({


  /**
   * 文章版权信息
   * @see https://theme-plume.vuejs.press/guide/features/copyright/
   */
  // copyright: true,

  prevPage: true, // 是否启用上一页链接
  nextPage: true, // 是否启用下一页链接
  createTime: true, // 是否显示文章创建时间

  /* 站点页脚 */
  footer: {
    message: 'Power by <a href="https://github.com/puniyu/puniyu">puniyu</a>',
    copyright: "",
  },

  /**
   * @see https://theme-plume.vuejs.press/config/basic/#profile
   */
  profile: {
    avatar: "https://github.com/puniyu/puniyu",
    name: "puniyu",
    description: "puniyu机器人框架使用文档",
    // circle: true,
    // location: '',
    // organization: '',
  },

  collections: sidebar,
  // 导航栏
  navbar,

  /**
   * 公告板
   * @see https://theme-plume.vuejs.press/guide/features/bulletin/
   */
  // bulletin: {
  //   layout: 'top-right',
  //   contentType: 'markdown',
  //   title: '公告板标题',
  //   content: '公告板内容',
  // },

  /* 过渡动画 @see https://theme-plume.vuejs.press/config/basic/#transition */
  transition: {
    page: true, // 启用 页面间跳转过渡动画
    postList: true, // 启用 博客文章列表过渡动画
    appearance: "fade", // 启用 深色模式切换过渡动画, 或配置过渡动画类型
  },
});
