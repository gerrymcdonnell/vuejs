<template>

  <div>
      <p>the status is {{status}}</p>
      <button @click="changeStatus" type="button" name="button">change status</button>
    <hr>
    
  </div>

</template>

<script>
  export default {
    data:function(){
      return{
        status:'my status'
      }
    },
    methods:{
      changeStatus(){
        this.status='normal';
      }
    }
  }
</script>
