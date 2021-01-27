<template>
  <div class="order">
    <b-navbar :mobile-burger="false" fixed-top style="background-color: #8b4513;" :v-if="isMobile()">
      <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                    alt="Lightweight UI components for Vue.js based on Bulma"
                >
            </b-navbar-item>
        </template>

    </b-navbar>
<div class="columns is-mobile" style="text-align:center;margin-top:50px;">
  <div class="column is-one-third-mobile"><b-button @click="backHome()" type="is-success">Home</b-button></div>
  <div class="column is-one-third-mobile"><b-button style="padding-right:40px;padding-left:40px;" expanded type="is-success">View Order</b-button></div>
  <div class="column is-one-third-mobile"><b-button @click="about()" type="is-success">About</b-button></div>
</div>
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
                    Total Items Ordered: {{ menu.length }}
                    <br>
                    Total Items Cost: {{getTotal}}
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
        menu:null,
        total:[]
      }
    },
    created(){

      this.menu = JSON.parse(localStorage.getItem("or"))

      console.log(this.menu)

    },
    mounted(){

      if(this.getTotal === 0) {

        this.menu = JSON.parse(localStorage.getItem("or"))

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
            },
            backHome(){

              this.$router.push({name:'Home'})
            },
            isMobile(){
            if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
              return true
            } else {
              return false
            }
          }
        },
        computed:{
          getTotal(){

            this.menu.forEach(element => {
              
              this.total.push(parseInt(element.price))
              

            });

            var result = Object.values(this.total);
            console.log(result)

            var sum = result.reduce(function(a, b){
                return a + b;
            }, 0);
            
            return sum
        }
        }
}
</script>
