<style lang="less">
    @import '../../assets/css/mixin';

    #app {
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        text-align: center;

        a {
            color: #333;
            width: rem(16);
        }

        ul {
            margin-top: 20px;

            li {
                line-height: 44px;
                border-bottom: 1px solid #e8e8e8;
            }
        }

        .btn {
            border: solid 1px #eee;
            padding: 4px 10px;
        }
    }
</style>
<template>
    <div id="app">
        <h2>444444444444444444
        444444444444444444
        444444444444444444444444444
        444444444444444444</h2>
        <input class="btn" type="button" @click="btnTest" value="test"/>
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
            <li>
                <a href="#/" title="">back home</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'page4',
    data() {
        return {
            title: 'page4'
        };
    },
    created() {
        if (window._hmt) {
            window._hmt.push(['_trackEvent', 'pageview', 'page4']);
        }
        this.$http.get('/mock/test').then((response) => {
            // success callback
            console.log(response);
        }, (response) => {
            // error callback
            console.log(response);
        });
    },
    methods: {
        btnTest() {
            this.$ua.trackEvent('Banner', 'Click', 'I click testbtn!');
        }
    }
};
</script>
