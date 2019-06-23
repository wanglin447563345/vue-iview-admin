<template>
    <div>
        <wang-editor editorRef='wangEditor' @input='getContent1'></wang-editor>
        <div>
            你输入的内容: {{editorContent1}}
        </div>
        <wang-editor editorRef='wangEditor' @input='getContent2'></wang-editor>
        <div>
            你输入的内容: {{editorContent2}}
        </div>
    </div>
</template>

<script>
import WangEditor from '../../components/WangEditor.vue'
export default {
    data () {
        return {
            editorContent1: '',
            editorContent2: ''
        }
    },
    components: {
        WangEditor
    },
    mounted () {
        this.getContent1()
        this.getContent2()
    },
    methods: {
        getContent1 (v) {
            this.editorContent1 = v
        },
        getContent2 (v) {
            this.editorContent2 = v
        }
    }
}
</script>