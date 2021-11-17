<template>
    <div class="app-main">
        <div class="http-error-alert">
            <div style="width: 100%;">
                <div class="error">
                    <h2 class="http-error">
                        404<span class="http-error-desc">NotFound</span>
                    </h2>
                </div>
                <p class="back">{{ $t('404.message') }}</p>
                <p class="back"><span class="btn-link" @click="$router.go(-1)"><span class="link">{{ $t('404.back') }}</span></span></p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .http-error-alert {
        border-top: 0 solid var(--layout-border-color);
        border-bottom: 0 solid var(--layout-border-color);
        position: relative;
        width: calc(100%);
        height: calc(100vh - 140px);
        display: flex;
        align-items: center;
    }
    .http-error-alert .error{
        margin-bottom: 50px;
    }
    .http-error {
        font-size: 4rem;
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