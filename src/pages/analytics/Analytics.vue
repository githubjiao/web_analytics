<style lang="less">
    @import '../../assets/css/mixin';

    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;

        a {
            color: #333;
            width: rem(16);
        }
    }
</style>

<template>
    <div id="app">
        <i class="icon iconfont">&#xe600;</i>
        <img src="./img/section1-title.jpg"/>
        <ul>
            <li>
                <a href="#/page1" title="">page1</a>
            </li>
            <li>
                <a href="#/page2" title="">page2</a>
            </li>
            <li>
                <a href="#/page3" title="">page3</a>
            </li>
            <li>
                <a href="#/page4" title="">page4</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'analytics',
    data() {
        return {
            title: 'analytics'
        };
    },
    created() {
        if (window._hmt) {
            window._hmt.push(['_trackEvent', 'pageview', 'analytics']);
        }
        this.$http.get('/mock/test').then((response) => {
            // success callback
            console.log(response);
        }, (response) => {
            // error callback
            console.log(response);
        });
    }
};
</script>
