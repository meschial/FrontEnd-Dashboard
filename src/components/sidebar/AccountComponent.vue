<template>
  <div class="account">
    <div class="top-account">
      <div class="avatar">
        <span><i class="fa fa-user"></i></span>
      </div>
      <div class="info">
        <p class="name">Conta</p>
      </div>
    </div>
    <div class="status">
      <p>Teste</p>
      <div class="progress-bar">
        <div
          class="progress-bar bg-orange"
          style="width: 25%"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
    <div class="status">
      <p>Teste</p>
      <div class="progress-bar">
        <div
          class="progress-bar bg-orange"
          style="width: 50%"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
    <div class="status">
      <p>Teste</p>
      <div class="progress-bar">
        <div
          class="progress-bar bg-orange"
          style="width: 80%"
          aria-valuenow="25"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'AccountComponent',
};
</script>

<style lang="scss">

.account{
  background-color: $blue-dark;
  padding: 50px 0;
  width: 250px;

    .top-account{
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-bottom: 15px;

      .avatar{
        margin-right: 15px;

        span{
          display: block;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background-color:$font-blue;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 25px;
        }
      }

      .info{

        p{
          margin: 0;
          color: $font-blue;
        }

        .name{
          font-size: 15px;
        }
      }
    }

    .status{
      padding: 10px 20px;

      p{
        margin: 0;
        color: $font-blue;
        font-size: 15px;
      }

      .progress-bar{
        display: flex;
        height: 10px;
        overflow: hidden;
        line-height: 0;
        font-size: .75rem;
        background-color: #e9ecef;
        border-radius: .25rem;

        .bg-orange{
          background-color: $orange !important;
        }
      }
    }
}

</style>