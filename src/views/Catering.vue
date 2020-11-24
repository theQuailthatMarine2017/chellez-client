<template>
  <div class="order">

    <section class="hero is-fullheight">

        <div class="container" style="margin-top:30px; text-align:center;">
            <div class="card-image">
              
                <img  src="https://i.ibb.co/McrLBg6/FAVPNG-clip-art-tent-circle-logo-performance-FQz-Px-Sx-F.png" height="380px;" width="380px;" alt="Placeholder image">
              
            </div>
            
          <h1 class="title is-2" style="color: white;text-decoration: underline;padding-left:20px;text-align:center;margin-bottom:10px;">
            Events Catering
          </h1>
          <h2 class="title is-3" style="color: white;padding-left:20px;text-align:center;margin-bottom:10px;">For Event Catering Please Call/ Text on +254718700120.</h2>
      </div>

    </section>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data(){
      return{
        menu:[{
          title:'Pizza Italian',
          img:'https://i.pinimg.com/originals/31/ac/7d/31ac7d17b45a6b900090f8a237baa7e4.jpg',
          description:'Tasty Homemade Italian Pizza!',
          price:300
        },
        {
          title:'Pasta Italian',
          img:'https://i.pinimg.com/originals/29/73/7b/29737b8c90b655105668c79f5e23c743.jpg',
          description:'Tasty Homemade Italian Pasta!',
          price:300
        },
        {
          title:'Chicken Wraps',
          img:'https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/9/25/0/ZB0307H_grilled-chicken-caesar-wrap_s4x3.jpg.rend.hgtvcom.826.620.suffix/1371611416726.jpeg',
          description:'Tasty Homemade French Pizza!',
          price:300
        },
        {
          title:'Roast Sausages',
          img:'https://a-static.besthdwallpaper.com/sausage-wallpaper-3554x1999-3217_53.jpg',
          description:'Tasty Homemade French Pizza!',
          price:300
        }]
      }
    },
    methods: {
            add_order(){
                this.$buefy.notification.open({
                    message: 'ITEM ADDED TO CART!',
                    type: 'is-success',
                    duration:4000,
                    position:'is-top'
                })
            }
        }
}
</script>