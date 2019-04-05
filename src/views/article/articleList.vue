<template>
<div>
<imageChange/> 
<articles/>
<div class="article_more">
   <button class="more" value="查看更多">查看更多</button>
</div>

</div>
</template>

<script>
import imageChange from '../../components/articleList/imageChange.vue'
import articles from '../../components/articleList/articles.vue'

export default {
   components:{imageChange,articles}
}
</script>

<style  scoped>
.article_more{display: flex;justify-content:center}
.more{width: 400px;height: 50px;border-radius: 25px;margin-top: 15px;opacity: 0.8;background: #9b9b9b;color: #ffffff;border: none; transition-duration: 0.4s;font-family:'微软雅黑'}
.more:hover{ background: #4CAF50;box-shadow: 0 10px 14px 0 rgba(0,0,0,0.24)} 
</style>


