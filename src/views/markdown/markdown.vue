<template>
<div>
    
    <div>
        <el-tag class="tag-title">MarkDown：</el-tag>
      <markdown-editor ref="markdownEditor" v-model="content" :options="{}" height="300px"/>
    </div>

    <el-button style="margin-top:40px;" type="primary" icon="el-icon-document" @click="getHtml">Get HTML</el-button>
    <div v-html="html" />

</div> 
</template>

<script>

import MarkdownEditor from  '@/components/MarkdownEditor'

export default {
      name: 'MarkdownDemo',
      components: { MarkdownEditor },
      methods:{
           getHtml() {
      this.html = this.$refs.markdownEditor.getHtml()
      console.log(this.html)
    }
      },
      data(){
          return {
              html:''
          }
      }
}
</script>

<style>
.tag-title{
  margin-bottom: 10px;
}
</style>

