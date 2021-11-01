import { createStore } from 'vuex'
import clients from "@/store/modules/clients"
import partners from "@/store/modules/partners"

export default createStore({
    modules: {
        clients, partners
    },
    state() {
        return {
            radioCatalogSelect: 'ПОДБОР ПО ТИПУ МАШИНЫ',
        }
    }
})
