import { createStore } from 'vuex'
import clients from "@/store/modules/clients"
import partners from "@/store/modules/partners"
import news from "@/store/modules/news"
import history from "@/store/modules/history";
import vacancy from "@/store/modules/vacancy";

export default createStore({
    modules: {
        clients, partners, news, history, vacancy
    },
    state() {
        return {
            radioCatalogSelect: 'ПОДБОР ПО ТИПУ МАШИНЫ',
        }
    }
})
