<template>
  <div class="logout">
        <ul>
          <router-link :to="{name: 'home'}"><li>Suporte</li></router-link>
          <router-link :to="{name: 'home'}"><li>Sair</li></router-link>
        </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

  .logout{
    width: 100%;
    margin: 50px 0;

    ul {
      padding: 0;

      a{
          font-size: 18px;
          color: $font-blue;
          text-decoration: none;
          li {
            text-align: center;
            margin: 10px 30px 10px 30px;
            padding: 10px 20px;
            list-style: none;
            background-color: $blue-white;
          
          }
          li:hover{
            background-color: $blue-dark;
            transition-duration: 0.3s;
          }
      }
    }
  }

</style>