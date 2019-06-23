<template>
    <div>
         <div :ref="editorRef"></div>
    </div>
</template>

<script>
import E from 'wangeditor'
export default {
    props: {
        editorRef: {
            type: String,
            default: 'wangeditor'
        }
    },
    mounted() {
        const editor = new E(this.$refs[this.editorRef])
        editor.customConfig.onchange = (html) => {
            this.$emit('input', html)
        }
        editor.create()
    },
}
</script>