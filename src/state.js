import { reactive } from 'vue';
import axios from 'axios';
export const state = reactive({
    archetype_url: `https://db.ygoprodeck.com/api/v7/archetypes.php`,
    base_url: 'https://db.ygoprodeck.com/api/v7/cardinfo.php',
    cards: null,
    archetype: null,
    image_url: null,
    name: null,
    archetypes_name: null,
    archetype_name: null,
    myParams: {

    },

    fetchData() {

        //console.log(this, this.base_url);

        axios
            .get(this.base_url, {

                params: {
                    archetype: this.archetype_name,
                    num: 20,
                    offset: 0
                }

            })
            .then(response => {
                console.log(response);
                this.cards = response.data.data;
                //console.log(this.cards[0].card_images[0].image_url);
            })
            .catch(error => {
                console.error(error)
            })
    },
    fetchArchetype() {
        axios
            .get(this.archetype_url)
            .then(response => {
                //console.log(response);
                this.archetypes_name = response.data;
                //console.log(this.archetypes_name[0].archetype_name);
            })
            .catch(error => {
                console.error(error)
            })
    }
})