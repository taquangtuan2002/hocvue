<template>
    <div class="container">
    <div class="card">
        <div class="card-header">
            <h4>
               Category
                <router-link to="/student/create" class="btn btn-primary float-end">
                    Add Category
                </router-link>
            </h4>
        </div>
        <div class="card-body">
            <table class="table table-bordered">
                <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                </tr>
                </thead>
                <tbody v-if="this.categorys.length>0">
                <tr v-for="(category , index) in this.categorys" :key="index">
                    <td>{{ category.id }}</td>
                    <td>{{ category.name }}</td>
                    <td>
                    <RouterLink :to ="{path:'/student/'+category.id+'/edit'}" class="btn btn-success float-end">
                      Edit
                    </RouterLink>
                        <button class="btn btn-danger">  Delete</button>
                    </td>
                </tr>
                </tbody>
                <tbody v-else>
                <tr>
                    <td colspan="3">Loadding..</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>

    </div>
    <DataTable :value="categorys" tableStyle="min-width: 50rem">

        <Column field="name" header="Name"></Column>

    </DataTable>
</template>

<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   // optional
import Row from 'primevue/row';
import axios from "axios";
import { ref, onMounted } from 'vue';
onMounted(() => {
    axios.get('http://localhost:8080/api/public/category/getall').then((data) => (products.value = data));
});

const products = ref();




</script>