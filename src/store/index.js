import { createStore } from 'vuex'
import clients from "@/store/modules/clients";

export default createStore({
    modules: {
        clients
    },
    state() {
        return {
            radioCatalogSelect: 'ПОДБОР ПО ТИПУ МАШИНЫ',
        }
    }
})
