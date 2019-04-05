<template>
  <div class="main">
    <div class="top">
      <sticky>
        <div class="button-group">
          <el-button type="primary" plain @click="saveToDrafts">保存草稿</el-button>
          <el-button type="primary" plain @click="publishArticle">发布文章</el-button>
        </div>
      </sticky>
    </div>
    <div class="tail">
      <div class="title-input">
        <MdInput v-model="articleInfo.title" :maxlength="100">标题</MdInput>
      </div>
      <div class="rich-text">
        <tinymce/>
      </div>
    </div>

  </div>
</template>

<script>
import tinymce from '@/components/Tinymce'
import sticky from '@/components/Sticky'
import MdInput from '@/components/MDInput'

export default {
  components: {
    tinymce,
    sticky,
    MdInput
  },
  data() {
    return {
      articleInfo: {
        title: '', // 标题
        content: '', // 文章内容(html)
        status: 'draft' // 文章状态，默认draft
      }
    }
  },
  methods: {
    /**
     * 保存文章到草稿
     */
    saveToDrafts: function() {
      // TODO
    },
    publishArticle: function() {
      // TODO
    }
  }

}
</script>

<style lang="scss" scoped>
.main {
  padding: 10px 40px 40px 40px;
  .top {
    .button-group {
      float: right;
    }
  }
  .tail {
    margin-top: 100px;
    .rich-text {
      margin-top: 30px;
    }
  }
}
</style>
