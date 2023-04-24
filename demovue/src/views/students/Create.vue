<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-header">
                <h4>Add Students</h4>
            </div>
            <div class="card-body">
                <div class="mb-3">
                    <label for="">Name</label>
                    <input type="text" v-model="model.category.name" class="form-control">
                </div>
                <div class="mb-3">
                    <button type="button" @click="saveCategory()" class="btn btn-primary">Save</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: 'studentCreate',
    data() {
        return {
            model: {
                category: {
                    name: ''
                }
            }
        }
    },
    methods: {
        saveCategory() {
            axios.post('http://localhost:8080/api/public/category/create', this.model.category).then(res => {
                console.log(res.data)
                alert(res.data.message);
                this.model.category={
                    name:''
                }
            }).catch(function (error){
                if(error.response){

                }
            });
        }
    }
}
</script>