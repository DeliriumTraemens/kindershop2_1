<template>
    <v-card class="mb-4" style="max-width: 450px; padding:5px">
        <v-card-title   class="d-inline-block text-truncate"
                        style="max-width: 400px;">
            {{prod.name}}
        </v-card-title>
        <v-card-subtitle>
            {{prod.id}}
        </v-card-subtitle>
        <v-img

                width="150px"
                :src="'http://localhost:9292/images/'+prod.image"
        />
        <v-card-text>
            <div class="textdescr">{{prod.description}}</div>
        </v-card-text>
        <hr class="my-4">
        <strong>Цена </strong> {{prod.price}} руб.
        <hr class="my-4">
        <v-card-actions>
            <v-btn x-small >Show</v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        name: "ProductListCard",
        props: {
            prod: Object
        }
    }
</script>

<style scoped>
    .textdescr {
        display: inline-block;
        max-height: 100px;
        border: 1px dashed ;
        border-radius: 5px;

        text-overflow: ellipsis "[ ..]";
        padding: 5px;
        overflow: hidden;
        /*text-trim: force-end;*/

    }
</style>