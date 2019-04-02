<template>
  <default-field :field="field" :errors="errors">
    <template slot="field">
      <div class="relative">
        <form-label
          :id="'charcount-label-' + field.attribute"
          class="text-sm absolute"
          v-if="field.charCount"
        >{{ charCount }} / {{ field.charCount.limit }}</form-label>
      </div>
      <input
        :id="field.attribute"
        :dusk="field.attribute"
        type="password"
        v-model="value"
        class="w-full form-control form-input form-input-bordered"
        :class="errorClasses"
        :placeholder="field.name"
        autocomplete="off"
      >
    </template>
  </default-field>
</template>

<script>
import { FormField, HandlesValidationErrors } from "laravel-nova";
import CharCount from "../../mixins/CharCount.js";

export default {
  mixins: [HandlesValidationErrors, FormField, CharCount]
};
</script>
