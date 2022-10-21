<template>
  <div>
    <p>本の詳細</p>
    <p>タイトル： {{ title }}</p>
    <p>本の内容：{{ content }} </p>
    {{ books[bookIndex].title }}
  </div>
</template>

<script>
export default {
  name:'BookDetail',
  props:{
    id: Number,
    title: String,
    content: String
  },
  data(){
    return{
      bookIndex: this.$route.params.id -1,
       books:[
       {
          id: 1,
          title: "鬼滅の刃12巻",
          content: "上限の鬼パワハラ会議～刀鍛冶の里上限襲来まで",
        },
        {
          id: 2,
          title: "鬼滅の刃13巻",
          content: "上弦の伍・玉壺、上弦の肆・半天狗との激闘",
        },
        {
          id: 3,
          title: "鬼滅の刃14巻",
          content: "時透無一郎の覚醒と恋柱「甘露寺蜜璃」の参戦！！",
        },
      ]
    }
  },
  created(){
    if(this.$route.params.id > this.books.length){
      this.$router.push('/book')
    }
  }
}
</script>

<style>

</style>