import ManipulateField from './mixins/ManipulateField'

Nova.booting((Vue, router, store) => {
    Vue.mixin(ManipulateField)

    Vue.component('form-text-field', require('./components/Form/TextField.vue'))
    Vue.component('form-textarea-field', require('./components/Form/TextareaField.vue'))
    Vue.component('form-password-field', require('./components/Form/PasswordField.vue'))
})
