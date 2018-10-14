<template>
    <Grid
        :streched="true"
        :column="2"
        :centered="true"
        :celled="true">
        <Row :strechted="true">
            <Column
                :width="4">
                <Header>
                    Hello from Layout
                    <Card>Hello from card</Card>
                </Header>
            </Column>
            <Column
                :width="12">
                <main>
                    <nuxt />
                </main>
            </Column>
        </Row>
    </Grid>
</template>

<script>
    import Vue from 'vue';
    import Card from 'semantic-ui-vue/dist/commonjs/views/Card/Card'
    import Grid from 'semantic-ui-vue/dist/commonjs/collections/Grid/Grid';
    import GridColumn from 'semantic-ui-vue/dist/commonjs/collections/Grid/GridColumn'
    import GridRow from 'semantic-ui-vue/dist/commonjs/collections/Grid/GridRow';
    import SemanticUIVue from 'semantic-ui-vue';

    Vue.use(SemanticUIVue);

    export default {
        created() {
            this.$axios.get('/api/cats').then( res => console.table(res.data))
        },
        components: {
            Card,
            Grid,
            Row: GridRow,
            Column: GridColumn
        },
        watch: {
            Card(newValue) {
                console.log(newValue)
            }
        }
    }
</script>