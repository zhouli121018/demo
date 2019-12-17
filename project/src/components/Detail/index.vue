<template>
    <div class="container">
        <title-bar :title_name="title_name" />
        <div>
            <h3 style="font-size:.4rem;text-align:center;padding:16px 0">{{title}}</h3>
            <div style="text-indent:2em;line-height:1.6;padding:0 10px;font-size:.35rem;" v-html="content">
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'detail',
    props: {
      title_name: {
        type: String,
        default: '详情'
      },
      title:{
        type: String,
        default: ''
      },
      content:{
        type: String,
        default: ''
      }
    },
}
</script>

<style>

</style>
