export default {
    data() {
        return {
            lookup: [
                "formRowClasses",
                "wrapperClasses",
                "wrapperLabelClasses",
                "wrapperFieldClasses",
                "labelClasses",
                "fieldClasses",
                "stack",
                "half",
                "third",
                "forth",
                "fifth",
                "clear"
            ],
            form: null,
            formDivs: [],
        };
    },

    mounted() {
        if (this.field === undefined) {
            return
        }

        this.form = this.$el.closest("form")
        this.saveDivs();
        this.row();

        if (this.field.clear) {
            this.$el.setAttribute("class", "");
            this.clearChildNodes(this.$el.childNodes);
        }

        _.each(this.field, (params, key) => {
            if (typeof this[key] === "function" && _.includes(this.lookup, key)) {
                this[key](params);
            }
        });
    },

    methods: {
        saveDivs() {
            this.form.childNodes.forEach((cn, index) => {
                if (cn.nodeName === "DIV") {
                    cn.setAttribute("id", "form-row");
                    if (index == 0 || (index + 1) == this.form.childNodes.length) {
                        cn.classList.add('w-full')
                    }
                    this.formDivs.push(cn);
                }
            });
        },
        clearChildNodes(nodes) {
            nodes.forEach(cn => {
                if (cn.classList) {
                    cn.setAttribute("class", "");
                }
                if (cn.childNodes) {
                    this.clearChildNodes(cn.childNodes);
                }
            });
        },

        loopClasses(classes, item) {
            classes.split(" ").forEach(c => {
                item.classList.add(c);
            });
        },

        stack() {
            this.$el.classList.add("flex-col");
            this.$el.querySelectorAll("div")[0].classList.add("pb-1");
            this.$el.querySelectorAll("div")[1].classList.add("pt-1");
        },
        row() {
            this.form.classList.add("flex", "flex-wrap");

            if (this.$el.closest('#form-row').getAttribute('data-set')) {
                this.$el.closest('#form-row').classList.add('w-full');
            }

            this.$el.closest('#form-row').setAttribute('data-set', 'true');
        },

        clearFormDivWidthClasses(aboutToAdd) {
            this.$el.closest("#form-row").classList.forEach(c => {
                if (_.startsWith(c, 'w-') && c !== aboutToAdd) {
                    this.$el.closest("#form-row").classList.remove(c);
                }
            });
        },
        addFormDivClass(classes) {
            this.loopClasses(classes, this.$el.closest("#form-row"))
            // this.$el.closest("#form-row").classList.add(classes);
        },

        half() {
            this.clearFormDivWidthClasses("w-1/2");
            this.addFormDivClass("w-full md:w-1/2");
        },
        third() {
            this.clearFormDivWidthClasses("w-1/3");
            this.addFormDivClass("w-full md:w-1/3");
        },
        forth() {
            this.clearFormDivWidthClasses("w-1/4");
            this.addFormDivClass("w-full md:w-1/4");
        },
        fifth() {
            this.clearFormDivWidthClasses("w-1/5");
            this.addFormDivClass("w-full md:w-1/5");
        },

        formRowClasses(params) {
            let elem = this.$el.closest("#form-row");
            if (params.clear) {
                elem.setAttribute("class", "");
            }
            this.loopClasses(params.classes, elem);
        },
        wrapperClasses(params) {
            if (params.clear) {
                this.$el.setAttribute("class", "");
            }
            this.loopClasses(params.classes, this.$el);
        },
        wrapperLabelClasses(params) {
            let elem = this.$el.querySelector("div");
            if (params.clear) {
                elem.setAttribute("class", "");
            }
            this.loopClasses(params.classes, elem);
        },
        wrapperFieldClasses(params) {
            let elem = this.$el.querySelectorAll("div")[1];
            if (params.clear) {
                elem.setAttribute("class", "");
            }
            this.loopClasses(params.classes, elem);
        },
        labelClasses(params) {
            let elem = this.$el.querySelector("div label");
            if (params.clear) {
                elem.setAttribute("class", "");
            }
            this.loopClasses(params.classes, elem);
        },
        fieldClasses(params) {
            let elem = this.$el.querySelector("div input");
            if (params.clear) {
                elem.setAttribute("class", "");
            }
            this.loopClasses(params.classes, elem);
        }
    }
}