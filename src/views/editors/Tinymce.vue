<template>
  <div>
    <tinymce ref="editor1"
      v-model="msg1"
      :disabled="disabled"
      @onClick="onClick">
    </tinymce>
    <button @click="clear($refs.editor1)">清空内容</button>
    <button @click="disabled1 = true">禁用</button>
    <p>你输入的内容：  {{ msg1 }}</p>

    <tinymce ref="editor2"
      v-model="msg2"
      :disabled="disabled"
      @onClick="onClick">
    </tinymce>
    <button @click="clear($refs.editor2)">清空内容</button>
    <button @click="disabled2 = true">禁用</button>
    <p>你输入的内容：  {{ msg2 }}</p>
  </div>
</template>

<script>
import {Tinymce} from '../../components'
export default {
  components: {
    Tinymce
  },
  data () {
    return {
      msg1: 'Welcome to Use Tinymce Editor1',
      disabled1: false,
      msg2: 'Welcome to Use Tinymce Editor2',
      disabled2: false,
    }
  },
  methods: {
    // 鼠标单击的事件
    onClick (e, editor) {
      console.log('Element clicked')
      console.log(e)
      console.log(editor)
    },
    // 清空内容
    clear (dom) {
      dom.clear()
    }
  }
}
</script>
