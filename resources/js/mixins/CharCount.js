// import FormField from 'laravel-nova'

export default {
    // mixins: [FormField],
    data() {
        return {
            label: null,
        }
    },
    mounted() {
        this.$nextTick(() => {
            this.label = document.querySelector("#charcount-label-" + this.field.attribute)
            // Nova.$on(this.field.attribute + '-value', () => {
            console.log(Nova.bus._events['bio-value'][0]());
            Nova.$on('bio-value', () => {
                console.log('nutting?');
            })

        })

    },
    computed: {
        charCount() {
            let field = document.querySelector("#" + this.field.attribute)
            let limit = this.field.charCount.limit
            let length = this.value ? this.value.length : 0

            if (length >= limit) {
                field.classList.add("border-danger");
                this.label.classList.add("text-danger");
                this.value = this.value.substring(0, limit);
                return limit;
            }

            if (field && this.label) {
                field.classList.remove("border-danger");
                this.label.classList.remove("text-danger");
            }
            if (this.label) {
                this.label.style.right = 0
                this.label.style.padding = 0
                this.label.style.top = '-' + this.label.clientHeight + 'px'
            }

            return length >= limit ? limit : length;
        },
    }
}