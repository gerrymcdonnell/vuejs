<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
    </div>
</template>

<script>
export default{
  //property that can be set outside
  props:['name']
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
