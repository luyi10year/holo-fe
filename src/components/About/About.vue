<template>
  <div class="content-box about-box">
    <div class="about-banner">
      <img src="/static/image/Me/banner.jpg" alt="">
    </div>
    <template v-if="!isPc">
      <div class="split-title">
        关于 HOLO
      </div>
      <div class="split-en-title">
        About HOLO
      </div>
    </template>


    <div class="about-msg">
      <p>
        HOLO 艺术给养空间，是一家专注于女性艺术潜能开发的教育机构。
      </p>
      <p>
        HOLO 是一种自我探索的精神，是一种生活方式和审美趣味。
      </p>
      <p>“HOLO”源于拉丁语前缀，中文音译：合乐，意为：全部；整个；完整。意指由艺术潜能促成人格圆满。
      </p>
      <p>
        纯粹的知识和道德说教，培养了不少不被社会遗弃的规规矩矩的人，想让这规规矩矩的人重新活泼起来的，是艺术教育。<br/>
        而艺术的本质是表达。HOLO 围绕“表达”本身，提供了轻松愉悦的上课氛围，深入浅出的课程内容，因材施教的作业点评，真诚有效的激励系统，日常生活的分享交流，构成了 HOLO 艺术课程的完整体验。最终你的进步不止是体现在纸面上，而是在观察周围生活所增加的知识上。
      </p>
      <p>
        课程以及课后的一切，不止是手绘一个绘画技能，而是让你通过艺术找到自我，成为更圆满的人，帮助我们在当下活得更美更好。
      </p>
      <p>
        HOLO 团队里有中国原创插画师、中国色彩搭配师、美国伊利诺伊艺术史学士、中国美院中国画研究生、浙江理工大学美术系硕士、30 年幼儿教育经验的专家等，我们很荣幸成为向导，陪伴鼓励并协助着你，挖掘出连自己都没意识到的潜能。
      </p>
      <p>
        在这里，我们尊重每个人的独特性。<br/>
        在这里，你可以成为你自己。
      </p>
     </div>
    <div class="about-pic">
      <div class="about-pic-wrap">
        <img src="/static/image/icon/user.jpg" alt="">
      </div>
      <p class="about-pic-title">
        创始人 乐宇略
      </p>
      <div class="about-pic-msg">
        <p>浙江省第一位酒店试睡员</p>
        <p>微博 @乐宇略 月阅读量过千万</p>
        <p>《悦游》杂志特约插画师</p>
        <p>色彩搭配师二级（中国流行色协会认证）</p>
        <p>前 Apple Creative ( 苹果创意培训师)</p>

      </div>
    </div>
    <div class="about-title">
      <div class="split-title">
        媒体报道
      </div>
      <div class="split-en-title">
        News
      </div>
    </div>

    <div class="about-link-box">
      <template v-for="(item,index) in newsList">
        <div class="about-link-box-item">
          <p class="new-title" v-if="isPc && item.title">{{item.title}}</p>
          <p class="new-name" >
            <a :href="item.link" target="_blank">
              <span v-if="!isPc && item.title">{{item.title}} | </span>
              <span>{{item.name}}</span>
            </a>

          </p>
        </div>
      </template>
    </div>
    <div class="about-title">
      <div class="split-title">
        合作项目
      </div>
      <div class="split-en-title">
        Cooperation Projects
      </div>
    </div>
    <div class="about-link-box">
      <template v-for="(item,index) in projectsList">
        <div class="about-link-box-item">
          <p class="new-title" v-if="isPc && item.title">{{item.title}}</p>
          <p class="new-name" >
            <a :href="item.link" target="_blank">
              <span v-if="!isPc && item.title">{{item.title}} | </span>
              <span>{{item.name}}</span>
            </a>
          </p>
        </div>
      </template>
    </div>
    <div class="about-title">
      <div class="split-title">
        合作品牌
      </div>
      <div class="split-en-title">
        Brand Cooperation
      </div>
    </div>
    <div class="about-brand-box">
      <ul>
        <li v-for="(item,index) in brandList">
          <img v-lazy="item.link" alt="">
        </li>
      </ul>
    </div>

  </div>

</template>
<script>
  export default {
    created(){
      this.isPc = IsPC()
    },

    data:()=>({
      isPc:false,
      newsList:[
        {
          title:'青年时报',
          name:'旅行插画师的关爱自闭症公益之路',
          link:'http://www.qnsb.com/fzepaper/site1/qnsb/html/2018-01/29/content_633763.htm'
        },
        {
          title:'新蓝网',
          name:'做公益、办画展，坚持绘画这件事让她的人生闪闪发光',
          link:'http://i.cztv.com/view/12825057.html'
        },
        {
          title:'凤凰文化',
          name:'杭州大剧院展出100幅关于爱与希望的画作',
          link:'http://iculture.ifeng.com/55672454/news.shtml?srctag=pc2m&back'
        },
        {
          title:'新华网',
          name:'关爱自闭症公益画展在杭举行 开启一支画笔的旅行',
          link:'http://www.zj.xinhuanet.com/2017-07/31/c_1121409215.htm'
        },
        {
          title:'中国网',
          name:'杭州大剧院展出 100 幅关于爱与希望的画作',
          link:'http://life.china.com.cn/2018-02/05/content_52457.html'
        },
        {
          title:'腾讯大浙网',
          name:'厉害了！舟山妹子为实现人生目标从苹果公司辞职',
          link:'http://zj.qq.com/a/20160923/044569.htm'
        },
        {
          title:'搜狐首页',
          name:'万万没想到，爱搭的第一场公益活动竟是这样子的… ',
          link:'http://www.sohu.com/a/130712772_675333'
        },
        {
          title:'',
          name:'2017年度金锋奖获公益广告奖',
          link:'http://tj.sina.com.cn/news/m/2017-07-30/detail-ifyinvyk2400484.shtml'
        }
      ],
      projectsList:[
        {
          title:'',
          name:'浙江日报集团青年时报联合HOLO艺术给养空间共同开发美术课程，普惠全省小学生',
          link:'http://www.sohu.com/a/217124275_168875'
        },
        {
          title:'',
          name:'年糕妈妈 | 0基础亲子绘画课，用艺术激发孩子的潜能！',
          link:'https://m.ngmm365.com/knowledge/detail/10055?share=true&type=2&utm_content=%E4%B8%80%E6%8E%A8&utm_medium=%E9%99%AA%E7%8E%A9%E5%8F%B7&utm_source=%E8%AF%BE%E7%A8%8B%E6%8E%A8%E6%96%87&from=singlemessage&isappinstalled=0'
        },
      ],
      brandList:[
        {link:'/static/image/brand/IP_01.jpg'},
        {link:'/static/image/brand/IP_02.jpg'},
        {link:'/static/image/brand/IP_03.jpg'},
        {link:'/static/image/brand/IP_04.jpg'},
        {link:'/static/image/brand/IP_05.jpg'},
        {link:'/static/image/brand/IP_06.jpg'},
        {link:'/static/image/brand/IP_07.jpg'},
        {link:'/static/image/brand/IP_08.jpg'},
        {link:'/static/image/brand/IP_09.jpg'},
        {link:'/static/image/brand/IP_10.jpg'},
        {link:'/static/image/brand/IP_11.jpg'},
        {link:'/static/image/brand/IP_12.jpg'}
      ]
    }),
    methods:{

    }


  }
</script>
