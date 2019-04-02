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
        class="w-full form-control form-input form-input-bordered"
        :id="field.attribute"
        :dusk="field.attribute"
        v-model="value"
        v-bind="extraAttributes"
      >
      <!-- </div> -->
    </template>
  </default-field>
</template>

<script>
import { FormField, HandlesValidationErrors } from "laravel-nova";
import CharCount from "../../mixins/CharCount.js";

export default {
  mixins: [HandlesValidationErrors, FormField, CharCount],

  computed: {
    defaultAttributes() {
      return {
        type: this.field.type || "text",
        min: this.field.min,
        max: this.field.max,
        step: this.field.step,
        pattern: this.field.pattern,
        placeholder: this.field.placeholder || this.field.name,
        class: this.errorClasses
      };
    },

    extraAttributes() {
      const attrs = this.field.extraAttributes;

      return {
        // Leave the default attributes even though we can now specify
        // whatever attributes we like because the old number field still
        // uses the old field attributes
        ...this.defaultAttributes,
        ...attrs
      };
    }
  }
};
</script>
