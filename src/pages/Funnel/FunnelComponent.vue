<template>
 <div class="row">
    <div class="title_pages">
      <p>Funil</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FunnelComponent',

}
</script>

<style lang="scss" scoped>
.title_pages{
    font-size: 25px;
    color: $blue;
    font-weight: bold;
    margin-bottom: 30px;
}

@media screen and (max-width: 768px) and (min-width: 300px){
  .title_pages{
    margin-left: 20px;
  }
}
</style>