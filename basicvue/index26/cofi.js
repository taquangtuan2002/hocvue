let PlanComponent={
    template: '#plan-template',
    props: {
        name: {type: String, required: true},
        price: Number
    },
    data(){
        return{
            selected:false
        }
    },
    methods: {
        select(){
            this.selected=true
            this.$emit('hi-there',this.name)
        }
    }
}
let PlanPickerComponent={

        component:{plan:PlanComponent},
        template: '#plan-picker-template',
        data() {
            return {
                plans: ['The Single', 'The Curious', 'The Addict']
            }
        }

}
const app = Vue.createApp({
    components:{ 'plan-picker':PlanPickerComponent}
})


    .mount('#app')