<template>
    <section class="article">
        <div class="article_main">
      <div class="article_left">
          <a href="##" class="title">香蕉居然和健身很配!</a>
          <p>香蕉不只是好吃和润肠，对健身的人也有诸多好处 在一个长期健身者的包里大多能搜刮出两类食物，一个是补剂，另外一个也许就是香蕉了。</p>
          <div class="left_bottom">
           <span><img src="../../../static/images/diamond.png" alt="" width="20px" height="20px"></span>
           <a href="##">波普董健身</a>
           <a href="##"><img src="../../../static/images/command.png" alt="" width="20px" height="20px"><span>5</span></a>
           <span><img src="../../../static/images/love.png" alt="" width="20px" height="20px"><span>40</span></span>
          </div>
      </div>

      <div class="article_middle">
    <img src="../../../static/images/shutter_1.jpg" alt="" width="100px" height="100px">
      </div>
      
       <div class="article_right">
         <div class="header">
           <span>推荐作者</span>
           <a href="##"><img src="../../../static/images/update.png" alt="" width="20px" height="20px"><span>换一批</span></a>
         </div>
         <div class="author_info">
             <span><img src="../../../static/images/head.png" alt="" width="40px" height="40px"></span>
             <div>
              <a href="##">徐林Grace</a>
              <p>写了720.7k字  5.9k喜欢</p>
             </div>
            <p class="focus">+关注</p>
         </div>
      </div>
     </div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style  scoped>
.article{padding:0  338px;margin-top: 15px;}
.article_main{border-top: 1px solid #cccccc;display: flex ;padding: 15px 0 0 0}
.article_left{flex: 4}
.title{font-weight: bold;display: inline-block;}
.article_left p{font-size: 12px;color: #999999}
.left_bottom{display: flex;align-items: center;justify-content: space-around;margin-right: 90px}
.left_bottom a,span{font-size: 12px;font-weight: normal;}
.article_middle{flex: 2}
.article_right{flex: 3}
.header{display: flex;justify-content:space-between;align-items: center}
.author_info{margin-top: 10px;display: flex;justify-content: flex-start;position: relative;}
.author_info a{font-size: 13px}
.author_info p{font-size: 12px}
.focus{font-size: 8px;position: absolute;right: 0;top: -12px;}
</style>


