<template>
  <div>
    <form novalidate class="md-layout" @submit.prevent="validateUser">
      <md-card class="md-layout-item md-size-65 md-small-size-100">
        <!-- <md-card-header>
          <div class="md-title">Registration</div>
        </md-card-header> -->
        <div class="fundoo">
        <span style="color:blue">F</span>
        <span style="color:red">u</span>
        <span style="color:brown">n</span>
        <span style="color:green">d</span>
        <span style="color:purple">o</span>
        <span style="color:blue">o</span>
        </div>
        <div class="md-title">Create your Fundoo Account</div>
        
        <md-card-content class="md-layout">           
           <div class="md-layout-item md-size-50">
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-50">
              <md-field :class="getValidationClass('firstName')">
                <label for="first-name">First Name</label>
                <md-input name="first-name" id="first-name" autocomplete="given-name" v-model="form.firstName" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.firstName.required">The first name is required</span>
                <span class="md-error" v-else-if="!$v.form.firstName.minlength">Invalid first name</span>
              </md-field>
             </div>
            <div class="md-layout-item md-size-50"> 
              <md-field :class="getValidationClass('lastName')">
                <label for="last-name">Last Name</label>
                <md-input name="last-name" id="last-name" autocomplete="family-name" v-model="form.lastName" :disabled="sending" />
                <span class="md-error" v-if="!$v.form.lastName.required">The last name is required</span>
                <span class="md-error" v-else-if="!$v.form.lastName.minlength">Invalid last name</span>
              </md-field>
            </div>
          </div>

          <div class="md-layout-item md-small-size-100">
          <md-field :class="getValidationClass('email')">
            <label for="email">Email</label>
            <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
            <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
            <span class="md-suffix">@gmail.com</span>
          </md-field>
            </div>
     
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-size-50">
            <md-field :class="getValidationClass('password')">
            <label for="password">Password</label>
            <md-input type="password" name="password" id="password" autocomplete="password" v-model="form.password" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.password.required">The password is required</span>
            <span class="md-error" v-else-if="!$v.form.password.minlength">Invalid password</span>
          </md-field>
            </div>

            <div class="md-layout-item md-size-50">
            <md-field :class="getValidationClass('password')"  :md-toggle-password="false">
            <label for="confirm">Confirm</label>
            <md-input type="password" name="confirm" id="confirm" autocomplete="confirm" v-model="form.password" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.confirm.required">The confirm password is required</span>
            <span class="md-error" v-else-if="!$v.form.confirm.minlength">Invalid password</span>
            </md-field>
            </div>
            </div>
            <div class="text">Use 8 or more characters with a mix of letters, numbers & symbols</div>
         
          <md-card-actions >
         <div class="act" ><p><router-link  to="/">ALREDY REGISTER?</router-link></p></div>
          <md-button type="submit" id="btn1" class="md-primary" :disabled="sending">NEXT</md-button>
        </md-card-actions>
        </div>
  

<div class="md-layout-item md-size-50"> 
 <md-card-media>
 <img src="../assets/account.jpg" alt="logo" class="img">
 </md-card-media>
 <p>One account. All of Fundoo working for you.</p>
</div>
        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

      </md-card>

      <md-snackbar :md-active.sync="userSaved">The user {{ lastUser }} was saved with success!</md-snackbar>
      
    </form>
  </div>
</template>

<script>
import { HTTP } from "../http-common";
  import { validationMixin } from 'vuelidate'
  import {
    required,
    email,
    minLength
  
  } from 'vuelidate/lib/validators'

  export default {
    name: 'Register',
    mixins: [validationMixin],
    data: () => ({
      form: {
        firstName: null,
        lastName: null,
        password: null,
        confirm:null,
        email: null,
      },
      userSaved: false,
      sending: false,
      lastUser: null
    }),
    validations: {
      form: {
        firstName: {
          required,
          minLength: minLength(3)
        },
        lastName: {
          required,
          minLength: minLength(3)
        },
        password: {
          required,
          minLength: minLength(8)
        },
         confirm: {
          required,
          minLength: minLength(8)
        },
        email: {
          required,
          email
        }
      }
    },
    methods: {
      getValidationClass (fieldName) {
        const field = this.$v.form[fieldName]

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty 
          }
        }
      },
      clearForm () {
        this.$v.$reset()
        this.form.firstName = null
        this.form.lastName = null
        this.form.password = ""
        this.form.confirm = ""
        this.form.email = ""
      },
        //JSON.stringify() takes a JavaScript object and transforms it into a JSON string.
    saveUser() {
      this.sending = true;

      const registerData = {};
      registerData.firstName = this.form.firstName;
      registerData.lastName = this.form.lastName;
      registerData.emailid = this.form.email;
      registerData.password = this.form.password;
      

  this.$log.info('test', this.form.email)

      HTTP.post(`registration`, registerData)

        .then(response => {
          //  this.$log.info('test', response)
          const data = JSON.stringify(response.data);
          alert("registration succesfully ", data);
          // this.posts = response.data;
          // this.userSaved=true
          this.sending=false
          this.clearForm()
        })
        .catch(e => {
          this.$log.info('test', e)
          alert("registration unsuccesfully" , e);
          // this.sending = false
          this.sending=false
          this.clearForm()
          // this.errors.push(e);
        });

      // Instead of this timeout, here you can call your API
      window.setTimeout(() => {
        this.lastUser = `${this.form.firstName} ${this.form.lastName}`;
        this.userSaved = true;
        this.sending = false;
        this.clearForm();
      }, 1500);
    },
    validateUser() {
      this.$v.$touch();

      if (!this.$v.$invalid) {
        this.saveUser();
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.md-progress-bar {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
}
// .md-layout{
//   margin-left: 450px;
// }
// .md-layout {
//   margin-left: 400px;
// }
// .md-title {
//   border-style: outset;
// }
#btn1 {
   background: #1a73e8;
  //background-color: #4caf50; /* Green */
  border: none;
  color: white;
  //padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
}
.md-layout{
     display: flex;
  justify-content: center
}
.md-card-content{
//  margin-right: 150px;
height: 380px; 

}
.md-card{
   margin-top: 60px; 
}
// .md-layout-item{
//   height: 500px;
// }
.fundoo{
   padding-top: .5em;
  font-size: 22px;
  padding-bottom: .5em;
}
.md-title{
  font-size: 20 px;
    padding-top: .5em;
    padding-bottom: .5em;
}
.act{
 position: relative;
  left: -155px;
   padding-top: .5em;
    padding-bottom: .5em;
}
.column {
  float: left;
}
.text{
      font-size: 13px;
    width: 100%;
}
.img{
  height: 244px;
  width:244px;
  // justify-content: center
}
</style>