<template>
<section class="bg-white">
    <div class="container">
        <div v-if="$device.isDesktop" class="w-full float-left">
            <div class="w-1/4 float-left">
                <div class="px-2 pt-2 pb-11 transform -rotate-12 bg-white shadow-lg">
                    <img src="/selo.jpg" alt="Newsletter">
                </div>
            </div>
            <div class="w-3/4 float-right pl-20">
                <h5>Newsletter</h5>
                <h2>{{$t('form.newsletter.titulo')}}</h2>
                <FormNewsletter />
                <p class="text-grey-600 w-full float-left text-xs">{{$t('form.newsletter.disclaimer')}}</p>
            </div>
        </div>
        <div v-else class="w-full float-left">
            <div class="w-1/2 float-left">
                <h5>Newsletter</h5>
                <h2>{{$t('form.newsletter.titulo')}}</h2>
            </div>
            <div class="w-1/2 float-right">
                <div class="px-2 pt-2 pb-5 transform rotate-12 bg-white shadow-lg">
                    <img src="/selo.jpg" alt="Newsletter">
                </div>
            </div>
            <div class="w-full float-left">
                <FormNewsletter />
                <p class="text-grey-600 w-full float-left text-xs">{{$t('form.newsletter.disclaimer')}}</p>
            </div>
        </div>
    </div> 
</section> 
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'nuxt-property-decorator'

@Component({
  name: 'Newsletter'
})
export default class Newsletter extends Vue {
}
</script>
