<template>
  <div class="home">


<section class="hero is-primary" style="background-repeat: no-repeat; background-size: cover; min-height:300px; background-image: url('https://i.ibb.co/tx1p3q6/2.jpg')">
  <div class="hero-body">
    <div class="container" style="margin-top:135px;">
      <h1 class="title" style="font-size:50px;">
        Amazing Homemade Food Delivery!
      </h1>
    </div>
  </div>
</section>

<section class="section">
    <div class="container">
      <h1 class="title" style="color: white;">Our Menu</h1>
      <h2 class="subtitle" style="color: white;">
        Place Your Order From Our <strong style="color: white;">Menu</strong> Below!
      </h2>

    </div>

    <div class="container" style="margin-top:50px;">


      <div class="columns is-desktop is-multiline">
        <div class="column is-4" v-for="item in menu" :key="item.title">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img :src="item.img" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <div class="media">
                <div class="media-content">
                  <p class="title is-5">{{item.title}} <br/>{{item.price}}</p>
                </div>
              </div>

              <div class="content">
                Tasty Homemade {{item.title}}!
              </div>
            </div>
            <footer class="card-footer" style="background-color: #feca1d;">
              <a class="card-footer-item" @click='add_order' style="color:white;font-weight:bolder;">ADD TO ORDER</a>
            </footer>
          </div>

        </div>
        
      </div>


      <!-- Columns Menu Ends Here BOI -->
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
