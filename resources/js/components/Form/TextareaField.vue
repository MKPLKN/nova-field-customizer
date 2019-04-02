<template>
  <default-field :field="field" :errors="errors" :full-width-content="true">
    <template slot="field">
      <div class="relative">
        <form-label
          :id="'charcount-label-' + field.attribute"
          class="text-sm absolute"
          v-if="field.charCount"
        >{{ charCount }} / {{ field.charCount.limit }}</form-label>
      </div>
      <textarea
        class="w-full form-control form-input form-input-bordered py-3 h-auto"
        :id="field.attribute"
        :dusk="field.attribute"
        v-model="value"
        v-bind="extraAttributes"
      />
    </template>
  </default-field>
</template>

<script>
import { FormField, HandlesValidationErrors } from "laravel-nova";
import CharCount from "../../mixins/CharCount.js";

export default {
  mixins: [FormField, HandlesValidationErrors, CharCount],

  props: {
    resourceName: { type: String },
    field: {
      type: Object,
      required: true
    }
  },

  computed: {
    defaultAttributes() {
      return {
        rows: this.field.rows,
        class: this.errorClasses,
        placeholder: this.field.name
      };
    },

    extraAttributes() {
      const attrs = this.field.extraAttributes;

      return {
        ...this.defaultAttributes,
        ...attrs
      };
    }
  }
};
</script>
