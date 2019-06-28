<template>
    <div class="register">
       <Form ref="formCustom" :model="formCustom" :rules="ruleCustom">
        <FormItem prop="user_name">
            <Input type="text" v-model="formCustom.user_name" placeholder="用户名"></Input>
        </FormItem>
        <FormItem prop="passwd">
            <Input type="password" v-model="formCustom.passwd" placeholder="密码"></Input>
        </FormItem>
        <FormItem prop="passwdCheck">
            <Input type="password" v-model="formCustom.passwdCheck" placeholder="确认密码"></Input>
        </FormItem>
        <FormItem>
            <Button type="primary" @click="handleSubmit('formCustom')">注册</Button>
        </FormItem>
    </Form>
    <div class="tologin">
       已有账号去<span @click='toLogin'>登录</span>
    </div>
    </div>
</template>
<script>
    export default {
        data () {
            const validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please enter your password'));
                } else {
                    if (this.formCustom.passwdCheck !== '') {
                        // 对第二个密码框单独验证
                        this.$refs.formCustom.validateField('passwdCheck');
                    }
                    callback();
                }
            };
            const validatePassCheck = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('Please enter your password again'));
                } else if (value !== this.formCustom.passwd) {
                    callback(new Error('The two input passwords do not match!'));
                } else {
                    callback();
                }
            };
            const validateAge = (rule, value, callback) => {
                if (!value) {
                    return callback(new Error('Age cannot be empty'));
                }
                // 模拟异步验证效果
                setTimeout(() => {
                    if (!Number.isInteger(value)) {
                        callback(new Error('Please enter a numeric value'));
                    } else {
                        if (value < 18) {
                            callback(new Error('Must be over 18 years of age'));
                        } else {
                            callback();
                        }
                    }
                }, 1000);
            };
            
            return {
                formCustom: {
                    passwd: '',
                    passwdCheck: '',
                    user_name: ''
                },
                ruleCustom: {
                    passwd: [
                        { validator: validatePass, trigger: 'blur' }
                    ],
                    passwdCheck: [
                        { validator: validatePassCheck, trigger: 'blur' }
                    ],
                    user_name: [
                        { validator: validateAge, trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit (name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
           toLogin () {
              this.$router.push('/user/login')
           }
        }
    }
</script>
<style lang="less">
   .register{
    border: 1px solid #ccc;
    box-shadow: 0 0 5px 1px #ccc;
    background: #fff;
    padding: 30px 40px;
    .ivu-form{
      width: 280px;
      button{
        width: 100%;
      }
    }
    .tologin{
      text-align: right;
      span{
        color: #2d8cf0;
        cursor: pointer
      }
    }
  }
</style>
