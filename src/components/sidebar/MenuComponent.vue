<template>
  <div class="menu">
    <ul>
      <router-link :to="{name: 'home'}"><li><i class="fa fa-home"></i> Inicio</li></router-link>
      <router-link :to="{name: 'funnel'}"><li><i class="fa fa-filter"></i> Funil</li></router-link>
      <router-link :to="{name: 'integrations'}"><li><i class="fa fa-box"></i> Integrações</li></router-link>
      <router-link :to="{name: 'settings'}"><li><i class="fa fa-cog"></i> Configurações</li></router-link>
      <router-link :to="{name: 'settings'}"><li><i class="fa fa-chart-bar"></i> Relatórios</li></router-link>
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
    width: 100%;

    ul {
      padding: 0;
      a{
          color: $font-blue;
          text-decoration: none;
        }

        li {
          padding: 20px 10px 10px 20px;
          font-size: 18px;
          list-style: none;

        }
        li:hover{
            background-color: $blue-dark;
          }
    }
  
  }
</style>