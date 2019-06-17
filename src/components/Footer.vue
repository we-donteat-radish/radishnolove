<template>
    <div>
        <li><router-link to="/"><font class="fa fa-file-pdf-o"></font>文字</router-link></li>
        <li><router-link to="/1"><font class="fa fa-superpowers"></font>萝卜坑</router-link></li>
        <li><font class="fa fa-bell"></font></li>
        <li><router-link to="/2"><font class="fa fa-bell"></font>消息</router-link></li>
        <li><router-link to="/3"><font class="fa fa-user-o"></font>我的</router-link></li>
    </div>
</template>

<script>
export default {
    created() {
        
    },
}
</script>

<style lang="scss" scoped>
    div{
        display: flex;
        justify-content: space-around;
        align-items: center;
        a{
            font-size: 12px;
            color: #909090;
            text-align: center;
            display: flex;
            justify-content: space-around;
            flex-direction: column;
            font-weight: bold;
            font{
                font-size: 18px;
            }
        }
        .router-link-exact-active{
            color: #904c4a;
        }
    }
</style>
