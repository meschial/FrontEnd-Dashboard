<template>
      <div class="row">
        <div class="col-md-9">
          <header class="title_pages">
            <p>Olá, Rafael Marques...<br>Bora faturar!</p>
          </header>

          <div class="row">
            <div class="col-12 col-md-12">
              <GraphicComponent />
            </div>
          </div>

          <div class="row mt-5">
            <div class="col-12 col-md-12">
              <BannerComponent />
            </div>
          </div>

          <div class="row mt-5">
            <div class="col-12 col-md-6">
              <TrainingComponent />
            </div>

            <div class="col-12 col-md-6">
              <TrainingComponent />
            </div>
          </div>
        </div>
        <div class="col-md-3">
          <MenuRightComponent />
        </div>
      </div>
</template>

<script>
/* eslint-disable */
import DashboardComponent from '../Dashboard/DashboardComponent'
import GraphicComponent from './components/GraphicComponent'
import BannerComponent from './components/BannerComponent'
import TrainingComponent from './components/TrainingComponent'
import MenuRightComponent from './components/MenuRightComponent'
export default {
  name: 'HomeComponent',

  components:{
    DashboardComponent,
    GraphicComponent,
    BannerComponent,
    TrainingComponent,
    MenuRightComponent,
  }
}
</script>

<style lang="scss" scoped>
.title_pages{
    margin: 60px 0 30px 0;
    font-size: 25px;
    color: $blue;
    font-weight: bold;
}
</style>