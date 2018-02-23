<template>
  <div class="container">
<!-- note here we pass in variables to the properities of the header component -->
    <app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"> </app-header>

    <app-new-quote @quoteAdded="newQuote($event)"> </app-new-quote>

    <!--
    listen for deleteQuote event
    -->
    <app-quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"> </app-quote-grid>

    <div class="row">
      <div class="col-sm-12 text-center">
        <div class="alert alert-info">
          click to delete
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import QuoteGrid from './components/QuoteGrid.vue'
import NewQuote from './components/NewQuote.vue'
import Header from './components/Header.vue'

export default {
  data:function(){
    return{
      quotes:[
        'just a quote'
      ],
      maxQuotes:5
    }
  },
  components:{
    /*local components*/
    appQuoteGrid:QuoteGrid,
    appNewQuote:NewQuote,
    appHeader:Header
  },
  methods:{
    newQuote(quote){
      if(this.quotes.length>=this.maxQuotes){
        return alert('please delete quotes first');
      }
      this.quotes.push(quote);
    },
    deleteQuote(index){
      this.quotes.splice(index,1);
    }
  }
}
</script>

<style>

</style>
