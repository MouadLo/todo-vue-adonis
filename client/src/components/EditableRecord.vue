<template>
<v-layout row wrap>
    <v-flex xs9 class="text-xs-left">
        <span
            @click="$emit('onClick')"
            v-if="isEditMode">
            {{ title }}
        </span>
        <v-text-field
        autofoccus
        v-if="!isEditMode"
        :value="title"
        @keyup.enter="$emit('onSave')"
        @input="$emit('onInput', $event)"
        >
        </v-text-field>
    </v-flex>
    <v-flex xs3 class="text-xs-right">
        <v-icon
        v-if="isEditMode"
        @click="$emit('onEdit')">
        edit
        </v-icon>
        <v-icon
        class="ml-5"
        v-if="!isEditMode"
        @click="$emit('onSave')">
        check
        </v-icon>
        <v-icon
        class="mr-2"
        @click="$emit('onDelete')">
        delete
        </v-icon>
    </v-flex>
</v-layout>
</template>

<script>
export default {
 props: [
    'isEditMode',
    'title',
    'record',
  ],
}
</script>

<style>

</style>
