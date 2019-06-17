<template>
    <div class="all">
        <div class="numOne">
            <i><font class="fa fa-search"></font></i>
            <li><div>精选</div><div>发现</div></li>
            <span>登录</span>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.numOne{
    display: flex;
    justify-content: space-between;
    align-items: center;
    i{
        color: #909090;
        width: 0.8rem;
        height: 0.8rem;
        font-size: 0.4rem;
        line-height: 0.8rem;
        text-align: center;
    }
    span{
        color: #aaa;
        padding-right: 0.2rem;
    }
    li{
        display: flex;
        justify-content: space-between;
        width: 1.6rem;
        font-size: 0.3rem;
        line-height: 0.6rem;
        color: #909090;
    }
}
.numTwo{
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    background: #f2f2f2;
}
</style>
