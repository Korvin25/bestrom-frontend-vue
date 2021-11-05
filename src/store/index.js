import { createStore } from 'vuex'
import clients from "@/store/modules/clients"
import partners from "@/store/modules/partners"
import news from "@/store/modules/news"

export default createStore({
    modules: {
        clients, partners, news
    },
    state() {
        return {
            radioCatalogSelect: 'ПОДБОР ПО ТИПУ МАШИНЫ',
        }
    }
})
