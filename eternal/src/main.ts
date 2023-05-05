//theme
import "primevue/resources/themes/lara-light-indigo/theme.css";

//core
import "primevue/resources/primevue.min.css";
import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import ConfirmDialog from 'primevue/confirmdialog';
import DataTable from 'primevue/datatable';
import Dialog from 'primevue/dialog';
import Toast from 'primevue/toast';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Calendar from 'primevue/calendar';
import Checkbox from 'primevue/checkbox';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';
import ToastService  from 'primevue/toastservice';
import './assets/main.css'

const app = createApp(App)

    .component('Button', Button)
    .component('Checkbox', Checkbox)
    .component('ConfirmDialog', ConfirmDialog)
    .component('Calendar', Calendar)
    .component('Dialog', Dialog)
    .component('InputText',InputText )
    .component('Toast', Toast)

    .component('DataTable', DataTable)
    .component('Column', Column)
    .component('ColumnGroup', ColumnGroup)

app.use(ToastService)
app.use(router)
app.use(PrimeVue)
app.mount('#app')
