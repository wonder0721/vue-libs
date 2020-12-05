export default class Tag {
    constructor(key, value, options){ 
        this.key = key
        this.value = value
        this.getLabel(options)
    }

    getLabel(options){
        const option = options[this.key]
        let label = this.value
        if (option) {
            if (!Array.isArray(option)) label = option
            else if (Array.isArray(option)) {
                const item = option.find((o => o.value === this.value))
                label = item ? (item.label || this.value) : '-'
            }
        }
        this.label = label
    }
}