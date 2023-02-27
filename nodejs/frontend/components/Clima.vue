<template>
<div class="bg-white p-7 rounded-xl border border-grey-400 border-solid" v-if="metereologia.current">
    <h4 class="text-grey-600">São Tomé, São Tomé e Príncipe</h4>
    <p class="my-5">{{dias[metereologia.current.dt.getDay()]}}<br>{{ metereologia.current.weather[0].description }}</p>
    <div class="flex content-center">
    <img class="float-left" :src="getIcon(metereologia.current.weather[0])" />
    <span class="text-3xl pt-4">{{parseInt(metereologia.current.temp)}}º</span>
    </div> 
    <div class="grid grid-cols-4 md:grid-cols-6 mt-10">
    <div v-for="(previsao,indexPrevisao) in metereologia.daily" :key="previsao.temp.max+indexPrevisao">
        <span class="uppercase text-center block text-grey-600 font-bold">{{ dias[previsao.dt.getDay()].substr(0,3) }}</span>
        <img class="mx-auto" :src="getIcon(metereologia.current.weather[0])" />
        <div class="text-center"><span class="font-bold">{{parseInt(previsao.temp.max)}}º </span><span class="text-grey-600">| {{parseInt(previsao.temp.min)}}º</span></div>
        <!--p class="capitalize">{{previsao.weather[0].description}}</p-->
    </div>
    </div>
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import axios from 'axios'

@Component({
  name: 'Clima'
})
export default class Clima extends Vue {

    private readonly dias = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado']
    private informacoes: any = []
    private metereologia: any = []
    
//   data() {
//     return {
//       dias: ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'],
//       informacoes: [],
//       metereologia: []
//     }
//   }
  getIcon(data:any){
      switch (data.icon) {
        case '01d':
          return '/01d.svg'
          break;
        case '01n':
          return '/01n.svg'
          break;
        case '02d':
          return '/02d.svg'
          break;
        case '02n':
          return '/02n.svg'
          break;
        case '03d':
          return '/03d.svg'
          break;
        case '03n':
          return '/03n.svg'
          break;
        case '04d':
          return '/04d.svg'
          break;
        case '04n':
          return '/04n.svg'
          break;
        case '05d':
          return '/05d.svg'
          break;
        case '05n':
          return '/05n.svg'
          break;
        case '06d':
          return '/06d.svg'
          break;
        case '06n':
          return '/06n.svg'
          break;
        case '07d':
          return '/07d.svg'
          break;
        case '07n':
          return '/07n.svg'
          break;
        case '08d':
          return '/08d.svg'
          break;
        case '08n':
          return '/08n.svg'
          break;
        case '09d':
          return '/09d.svg'
          break;
        case '09n':
          return '/09n.svg'
          break;
        case '10d':
          return '/10d.svg'
          break;
        case '10n':
          return '/10n.svg'
          break;
        case '11d':
          return '/11d.svg'
          break;
        case '13n':
        case '13d':
          return '/13d.svg'
          break;
        case '50d':
        case '50n':
          return '/50d.svg'
          break;
        default:
          return 'http://openweathermap.org/img/wn/' + data.icon + '@2x.png'
          break;
      }
    }
  created(){
    axios({
    method: "get",
    url: "https://api.openweathermap.org/data/2.5/onecall?lat=0.255436&lon=6.602781&exclude=minutely,hourly,alerts&units=metric&appid=cea65b845d30cbd6952fab971ff33b0d"
    }).then(data => {
    var date = new Date(data.data.current.dt * 1000);
    data.data.current.dt = date;
    data.data.daily.forEach((element:any)=> {
        var date = new Date(element.dt * 1000);
        element.dt=date
    });
    if(this.$device.isDesktop){
        data.data.daily = data.data.daily.slice(0, 6);
    }else{
        data.data.daily = data.data.daily.slice(0, 4);
    }
    
    this.metereologia = data.data
    });
  }
}
</script>