<template>
  <div class="order">

      <div class="container">
          <h1 class="title is-2" style="color: white;text-decoration: underline;padding-left:20px;text-align:center;margin-bottom:10px;">
            Your Order
          </h1>
      </div>

    <section class="hero is-fullheight">
    <div style="margin:15px;">

            <div class="card" style="margin-bottom:20px;">
                <div class="card-content">
                    <div class="content" style="font-weight:bolder;">
                    Total Items Ordered: 
                    <br>
                    Total Items Cost: 
                    <br>
                    <button class="button">Delete Order</button>
                    </div>
                </div>
            </div>
        

          <div class="card">
                <div class="card-content" v-for="item in menu" :key="item.title" style="font-weight:bolder;">
                    
                    Item Ordered: {{item.title}}
                    <br>
                    Item Cost: {{item.price}}
                    <br>
                    Item Quantity: 1
                    <br>
                    <button class="button">Add Quantity</button>
                    <button class="button">Remove</button>
                    
                </div>
            </div>
        


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
