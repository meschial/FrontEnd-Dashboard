<template>
  <div class="logout">
        <ul>
          <li><router-link :to="{name: 'home'}">Suporte</router-link></li>
          <li><router-link :to="{name: 'home'}">Sair</router-link></li>
        </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">

  .logout{
    width: 250px;
    margin: 50px 0;

    ul {
      padding: 0;

      li {
        text-align: center;
        margin: 10px 30px 10px 30px;
        padding: 10px 20px;
        list-style: none;
        background-color: $blue-white;

        a{
          font-size: 18px;
          color: $font-blue;
          text-decoration: none;
        }
      }
      li:hover{
        background-color: $blue-dark;
        transition-duration: 0.3s;
      }
    }
  }

</style>