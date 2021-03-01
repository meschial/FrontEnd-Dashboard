<template>
    <div class="training">
        <h2>Treinamentos</h2>
    </div>
    
</template>

<script>
export default {
    name: 'TrainingComponent',
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/_main';

.training{
    background-color: #fff;
    border-radius: 10px;
    padding: 50px;

    h2{
      display: flex;
      justify-content: center;
      align-items: center;
      color: $blue-dark;
      font-weight: bold;
    }
}

@media screen and (max-width: 768px) and (min-width: 300px){
    .training{
       margin-bottom: 50px; 
    }
}

</style>