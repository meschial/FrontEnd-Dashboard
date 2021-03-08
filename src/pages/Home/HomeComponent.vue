<template>
      <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-9">
          <div class="title_pages">
            <p>Olá, Rafael Marques...<br>Bora faturar!</p>
          </div>

            <div class="col-md-12">
              <GraphicComponent />
            </div>

          <div class="mt-5">
            <div class="col-md-12">
              <BannerComponent />
            </div>
          </div>

          <div class="row mt-5">
            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <TrainingComponent />
            </div>

            <div class="col-sm-12 col-md-12 col-lg-6 col-xl-6">
              <TrainingComponent />
            </div>
          </div>
        </div>
        <div class="col-sm-12 col-md-12 col-lg-12 col-xl-3">
          <MenuRightComponent />
        </div>
      </div>
</template>

<script>
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