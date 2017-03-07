
// 初始化SEO
const initSEO = {
    title: '海威时代wap',
    keywords: '海威时代',
    des: '海威时代官网'
};
// 分别获取Index页面 title keywords description

const appTitle = document.querySelector('title');
const appKey = document.querySelector("meta[name='keywords']");
const appDes = document.querySelector("meta[name='description']");

/*
 * 初始化页面seo信息
 * @author zhangxiaoyang
 * @param info {Object} 参数描述 对象里共有三个键值对，title keywords des,分别为页面Titel,keywords以及description 都为非必填
 * @example  setSEO({title:'xxx'})
 * */

const setSEO = function (info = initSEO) {
    info.title = info.title || initSEO.title;
    info.keywords = info.keywords || initSEO.keywords;
    info.des = info.des || initSEO.des;

    appTitle.textContent = info.title;
    appKey.setAttribute('content', info.keywords);
    appDes.setAttribute('content', info.des);
};


module.exports = setSEO;
