<template>
  <div class="home">
    <b-navbar :mobile-burger="false" fixed-top style="background-color: #8b4513;" v-if="isMobile()">
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
  <div class="column is-one-third-mobile"><b-button type="is-success">Home</b-button></div>
  <div class="column is-one-third-mobile"><b-button style="padding-right:40px;padding-left:40px;" expanded @click="checkOrder()" type="is-success">View Order</b-button></div>
  <div class="column is-one-third-mobile"><b-button type="is-success">About</b-button></div>
</div>
  <p v-if="order.length > 0" style="color:white;text-align:center;font-weight:bolder;font-size:20px;">{{ order.length }} Items Added to Order</p>

      <!-- <b-tabs style="background-color: yellow;" type="is-toggle" expanded position="is-centered" v-if="isMobile()">
        <b-tab-item label="Home" ><p v-if="order.length > 0" style="color:black;font-weight:bolder;">{{ order.length }} Items Added to Order</p></b-tab-item>
        <b-tab-item label="Check Order" @click="checkOrder()"></b-tab-item>
        <b-tab-item label="About"></b-tab-item>
    </b-tabs> -->

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
        <div class="column is-4" v-for="item in menu" :key="item.name">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img :src="item.img" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content" style="height:170px;">
              <div class="media">
                <div class="media-content">
                  <p class="title is-5">{{item.title}} <br/>KSH {{item.price}}</p>
                </div>
              </div>

              <div class="content" style="font-weight:bold">
                {{item.description}}
              </div>
            </div>
            <footer class="card-footer" style="background-color: #feca1d;">
              <a class="card-footer-item" @click='add_to_order(item)' style="color:white;font-weight:bolder;">ADD TO ORDER</a>
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
import { mapGetters, mapActions } from "vuex";

export default {
  name: 'Home',
  mounted(){
    
    this.get_menu()
  },
  data(){
      return{
        menu:null,
        order:[]
      }
    },
    methods: {
    ...mapActions(["get_menu"]),

            add_to_order(item){
            

              
              console.log(this.isMobile())

              if( this.isMobile() === true){

                this.order.push(item)
                console.log(this.order.length)
                localStorage.setItem("or", JSON.stringify(this.order))

                let ord = JSON.parse(localStorage.getItem("or"))

                
                console.log(ord)

                window.scrollTo(0,0);

              } else {

                this.$buefy.notification.open({
                    message: 'ITEM ADDED TO CART!',
                    type: 'is-success',
                    duration:4000,
                    position:'is-top'
                })
              }

            },
            checkOrder(){


              this.$router.push({ name: 'Order' })
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
        ...mapGetters(["got_menu"])
      },
      watch:{
        got_menu(val){

          if(val != null){

            this.menu = val
          }
        }
      }
}
</script>
