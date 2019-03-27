import ManipulateField from './mixins/ManipulateField'

Nova.booting((Vue, router, store) => {

    Vue.mixin(ManipulateField)
})
