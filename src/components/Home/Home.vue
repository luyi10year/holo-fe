<template>
  <div>
    <div class="swiper-box-wrap">
      <v-swiper  />
    </div>
    <div class="content-box two-list-layout list-box">
      <ul>
        <li v-for="(item,index) in indexList" :key="index">
          <template v-if="item.isHref">
            <a :href="isPc ? item.router[0] : isWX ? item.router[1] : item.router[2]" target="_blank">
              <div class="list-item">
                <div class="list-item-banner">
                  <img v-lazy="item.bannerSrc" alt="">
                </div>
                <div class="list-item-msg">
                  <p>
                    <span class="title">{{item.title}}</span>
                    <span class="e-title">{{item.enName}}</span>
                  </p>
                  <div class="content-msg">
                    <p v-for="msg in item.msg">
                      {{msg}}
                    </p>

                  </div>
                </div>
              </div>
            </a>
          </template>
          <router-link v-else :to="item.router[0]">
            <div class="list-item">
              <div class="list-item-banner">
                <img v-lazy="item.bannerSrc" alt="">
              </div>
              <div class="list-item-msg">
                <p>
                  <span class="title">{{item.title}}</span>
                  <span class="e-title">{{item.enName}}</span>
                </p>
                <div class="content-msg">
                  <p v-for="msg in item.msg">
                    {{msg}}
                  </p>

                </div>
              </div>
            </div>
          </router-link>

        </li>
      </ul>
    </div>
  </div>

</template>
<script>
  import vSwiper from '@/components/Swiper/Swiper'
  export default{
    created(){
      this.isPc = IsPC()
      this.isWX = IsWX()
    },
    data:()=>({
      isPc:false,
      isWX:false,
      indexList: [
          {
              chanel:'artCourse',
              title:'HOLO 艺术课程',
              enName:'Online Art Course',
              bannerSrc:'/static/image/index/art-course.jpg',
              msg:[
                  '季度创意水彩课 | 适合零基础绘画小白，画出原创作品',
                  '季度亲子绘画课 | 科学地教授给家长如何辅导孩子画画',
              ],
              isHref:true,
              router:['https://shop260557515.taobao.com/shop/view_shop.htm?shop_id=260557515',
                'https://weidian.com/?userid=1154739560&p=iphone&wfr=BuyercopyURL',
                'https://shop260557515.m.taobao.com/']
          },
        {
          chanel:'painting',
          title:'HOLO 原创画材',
          enName:'Painting Supplies',
          bannerSrc:'/static/image/index/painting-supplies.jpg',
          msg:[
            '让画画陪伴生活，走哪儿画哪儿。',
            '在 HOLO 的旅行水彩本上，开始你的第一笔吧！'
          ],
          router:['/painting']
        },
          {
              chanel:'artWork',
              title:'HOLO 学员作品',
              enName:'Artwork',
              bannerSrc:'/static/image/index/art-work.jpg',
              msg:[
                  '人生在勤，不索何获，一幅画记录一个人的故事。',
                  '它们见证了学员在 HOLO 的每一次成长。'
              ],
              router:['/part/artWork']
          },
        {
          title:'免费绘画教程',
          enName:'Goods',
          bannerSrc:'/static/image/index/goods.jpg',
          msg:['超多丰富有趣的绘画小教程，唤醒你蠢蠢欲动的绘画潜能！拿起画笔赶快试试吧！'],
          router:['/part/goods']
        },
          {
              title:'画材测评',
              enName:'Supplies Testing',
              bannerSrc:'/static/image/index/supplies-test.jpg',
              msg:['搞破头皮不敢下手？ HOLO 亲身示范体验，为你带来最感人实用的画材购买指南。'],
              router:['/part/supplies']
          },

          {
              title:'活动',
              enName:'Event',
              bannerSrc:'/static/image/index/event-new.jpg',
              msg:['为普通人举办一场画展是我们努力想要送给大家的礼物，未来更多精彩艺术活动，期待有你的身影！'],
              router:['/part/event']
          }
      ]
    }),
    components:{
      vSwiper
    }
  }
</script>
<style lang="scss" rel="stylesheet/scss" scoped>

</style>
