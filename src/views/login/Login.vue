<template>
    <div class="login">
      <Form ref="formLogin" :model="formLogin" :rules="ruleLogin">
        <FormItem prop="user">
          <Input type="text" v-model="formLogin.user" :placeholder="$t('login.USERNAME')">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input type="password" v-model="formLogin.password" :placeholder="$t('login.PASSWORD')">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formLogin')">{{$t('login.LOGIN')}}</Button>
        </FormItem>
      </Form>
      <div class="toregister">
        没有账号去<span @click='toRegister'>注册</span>
      </div>
    </div>
</template>
<script>
  import {login} from '../../api'
    export default {
        data () {
            return {
              formLogin: {
                    user: '',
                    password: ''
                },
              ruleLogin: {
                    user: [
                        { required: true, message: `$t('login.VALUDATENAME')`, trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: 'Please fill in the password.', trigger: 'blur' },
                        { type: 'string', min: 6, message: 'The password length cannot be less than 6 bits', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(formLogin) {
                this.$refs[formLogin].validate((valid) => {
                    if (valid) {
                      login(formLogin).then(data => {
                        // if () {
                        //
                        // }
                      })
                      this.$Message.success('Success!');
                      this.$router.push('/home/analysis')
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            toRegister () {
              this.$router.push('/user/register')
            }
        }
    }
</script>

<style lang="less" scope>
  .login{
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
    .toregister{
      text-align: right;
      span{
        color: #2d8cf0;
        cursor: pointer
      }
    }
  }
</style>
