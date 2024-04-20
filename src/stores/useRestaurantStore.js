import {defineStore} from "pinia";
import RestaurantAPI from "@/services/RestaurantAPI.js";
import {AxiosError} from "axios";
import {reactive} from "vue";
export let useRestaurantStore = defineStore('restaurant', {
    state: () =>({
        restaurants:reactive([]),
        originalList:[],
        isLoading: false,
    }),
    actions: {
        async getRestaurants() {
            this.isLoading = true;
            try {
                let response = await RestaurantAPI.get();
                if (response.request.status === 200) {
                    console.log(response.data);
                    console.log("success");
                    this.restaurants.value = [...response.data.data];
                    this.originalList = response.data.data;
                    this.isLoading = false;
                    return true;
                }
            } catch (e) {
                if (e instanceof AxiosError) {
                    if (e.request.status === 500) {
                        console.log(e.message);
                        console.log(e.response.data.message);
                    } else {
                        console.log(e.message);
                        console.log(e.response.data.message);
                    }
                } else {
                    console.log(e.message);
                }
                this.isLoading = false;
                return false;
            }
            this.isLoading = false;
        },
        filter(search){
            this.restaurants.value = this.originalList.filter(restaurant =>
                restaurant.name.toLowerCase().includes(search.toLowerCase()) ||
                restaurant.location.toLowerCase().includes(search.toLowerCase())
            );
        }
    }
});