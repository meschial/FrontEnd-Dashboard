<template>
  <div class="menu">
    <ul>
      <li><router-link :to="{name: 'home'}"><i class="fa fa-home"></i> Inicio</router-link></li>
      <li><router-link :to="{name: 'funnel'}"><i class="fa fa-filter"></i> Funil</router-link></li>
      <li><router-link :to="{name: 'integrations'}"><i class="fa fa-box"></i> Integrações</router-link></li>
      <li><router-link :to="{name: 'settings'}"><i class="fa fa-cog"></i> Configurações</router-link></li>
      <li><router-link :to="{name: 'settings'}"><i class="fa fa-chart-bar"></i> Relatórios</router-link></li>
      
    </ul>
  </div>
</template>

<script>
export default {
    name: 'MenuComponent',
};
</script>

<style lang="scss">
  .menu{
    margin-top: 20px;
    width: 250px;

    ul {
      padding: 0;

      li {
        padding: 20px 10px 10px 20px;
        font-size: 18px;
        list-style: none;

        a{
          color: $font-blue;
          text-decoration: none;
        }
      }
      li:hover{
          background-color: $blue-dark;
        }
    }
  
  }
</style>