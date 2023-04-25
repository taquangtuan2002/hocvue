const app = Vue.createApp({

    data() {
        return {
           products:[
               { name:"Saản phẩm a",
               price:120.0,
               },
               { name:"Saản phẩm b",
                   price:120.0,
               },
               { name:"Saản phẩm c",
                   price:120.0,
               },
           ],
        };

    },
    method: {
        onchangname() {
            this.ho = "Tạ Quang";
            this.ten = "Tuấn";
            this.ischeck = !this.ischeck;
        }
    }
});
app.mount("#contact")