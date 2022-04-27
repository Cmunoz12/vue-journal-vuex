<template>
    
  <div  v-if="entry"
        class="entry-title d-flex justify-content-betwen p-2">
        <div >
            <span class="text-success fs-3 fw-bold">{{day}}</span>
            <span class="mx-1 fs-3">{{month}}</span>
            <span class="mx-2 fs-4 fw-light">{{yearDay}}</span>
        </div>
        <div>
            <button class="btn btn-danger mx-2">
                borrar
                <i class="fa fa-trash-alt"></i>
            </button>
            <button class="btn btn-primary">
                subir foto
                <i class="fa fa-upload"></i>
            </button>
        </div>
    </div>

    <hr>
    <div 
        v-if="entry"
        class="d-flex flex-colum px-3 h-75">
        <textarea
            v-model="entry.text"
            placeholder="¿Que sucedio hoy?"></textarea>

    </div> 

    <FabVue 
        icon="fa-save"
    />
    
    <img src="https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/04/One-Piece-libera-un-historico-y-viral-episodio-1015.jpg?fit=1280%2C720&quality=80&ssl=1" 
         alt="entry one piece picture"
         class="img-thumbnail">
</template>

<script>
import { defineAsyncComponent } from "vue";
import { mapGetters } from "vuex";

import getDayMonthYear from "../helpers/getDayMonthYear";

export default {
    props: {
        id: {
            type: String,
            required: true,
        }
    },
    components: {
        FabVue: defineAsyncComponent(() => import('../components/FabVue.vue'))
    },

    data() {
        return {
            entry: null
        }
    },

    methods: {
        loadEntry() {
            const entry = this.getEntriesById(this.id)
            if(!entry) return this.$router.push({name: 'no-entry'})

            this.entry = entry
        }
    },

    computed: {
        ...mapGetters('journal', ['getEntriesById']),
        day(){
            const {day} = getDayMonthYear(this.entry.date)
            return day
        },
        month(){
            const {month} = getDayMonthYear(this.entry.date)
            return month
        },
        yearDay(){
            const {year} = getDayMonthYear(this.entry.date)
            return year
        }
    },

    created() {
        this.loadEntry()
    },

    watch: {
        id() {
            this.loadEntry()
        }
    }
}
</script>

<style lang="scss" scoped>
textarea{
    font-size: 20px;
    border: none;
    height: 100%;
    width: 100%;

    &:focus {
        outline: none;
    }
}

img{
    width: 200px;
    position: fixed;
    bottom: 150px;
    right: 20px;
    box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>