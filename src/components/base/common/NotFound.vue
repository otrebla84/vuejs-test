<template>
    <div class="http-error-alert">
        <div class="error">
            <h2 class="http-error">
                404<span class="http-error-desc">NotFound</span>
            </h2>
        </div>
        <p class="back">No se ha encontrado la página solicitada</p>
        <p class="back"><span class="btn-link" @click="$router.go(-1)"><span class="link">Volver a la página anterior</span></span></p>
    </div>
</template>

<style scoped>
    .http-error-alert {
        border-top: 0 solid #eee;
        border-bottom: 0 solid #eee;
        border-top: 0 solid #eee;
        border-bottom: 0 solid #eee;
        position: fixed;
        top: calc(50vh - 200px);
        left: calc(50% - 450px);
        height: 220px;
        width: 800px;
    }
    .http-error-alert .error{
        margin-bottom: 50px;
    }
    .http-error {
        font-size:5rem;
        color:red;
        margin: 0;
        line-height: .75em;
        font-weight: 800;
        text-align: center;
    }
    .http-error-desc {
        font-weight: 800;
        color:black;
        letter-spacing: -5px;
    }
    p.back {
        margin-bottom: .5rem;
        margin-top: .5rem;
        text-align: center;
    }
</style>