<template>
  <div class="container">
    <app-new-quote @quoteAdded="newQuote($event)"> </app-new-quote>
    <app-quote-grid :quotes="quotes"> </app-quote-grid>
  </div>
</template>

<script>
import QuoteGrid from './components/QuoteGrid.vue'
import NewQuote from './components/NewQuote.vue'

export default {
  data:function(){
    return{
      quotes:[
        'just a quote'
      ],
      maxQuotes:10
    }
  },
  components:{
    /*local components*/
    appQuoteGrid:QuoteGrid,
    appNewQuote:NewQuote
  },
  methods:{
    newQuote(quote){
      this.quotes.push(quote);
    }
  }
}
</script>

<style>

</style>
