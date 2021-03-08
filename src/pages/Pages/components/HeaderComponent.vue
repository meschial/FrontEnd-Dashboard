<template>
<div class="row header">
  <div class="col-md-2 d-flex">
    <h5 class="page">Páginas</h5>
    <div class="dropdown">
      <i class="fas fa-sort" type="button" id="dropdownMenuButton" data-toggle="dropdown"></i>
      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a class="dropdown-item" href="#">Action</a>
      </div>
    </div>
  </div>

  <div class="col-md-10 r-flex">
    <div class="funnel">
      <div class="form-group">
        <select class="form-control" id="exampleFormControlSelect1">
          <option>Todos os Funis</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
      </div>
    </div>
    <div class="search">
      <div class="input-group mb-3 form">
        <input type="text" class="form-control" placeholder="Buscar">
        <button class="input-group-text" id="basic-addon1"><i class="fa fa-search"></i></button>
      </div>
    </div>
    <div class="new-page">
      <button type="button" class="btn btn-info">Nova Página</button>
    </div>
    
  </div>

</div>
</template>

<script>
export default {
  name:'HeaderComponent'
}
</script>

<style lang="scss" scoped>
.header{
  margin-bottom: 20px;
}
.d-flex{
  display: flex;

  .page{
    margin-right: 10px;
  }
}
.r-flex{
  display: flex;
  justify-content: flex-end;

  .funnel{
    width: 250px;
  }
  .search{
    margin: 0 10px;
    .input-group-text {
        background-color: #fff;
      }
  }
  
  .new-page{
    text-align: right;
  }
}
</style>