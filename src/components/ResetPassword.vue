<template>
    <div>
      <form novalidate class="md-layout" @submit.prevent="validateUser">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Reset Password</div>
        </md-card-header>
           
        <md-card-content>
           <!-- v-for directive allows us to loop through items in an array or object. -->
          
           
          <md-field :class="getValidationClass('password')">
            <label for="password">Password</label>
            <md-input type="password" name="password" id="password" autocomplete="password" v-model="form.password" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.password.required">The password is required</span>
            <span class="md-error" v-else-if="!$v.form.password.password.minlength">Invalid password</span>
          </md-field>
         
          <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>

          <md-button type="submit" id="btn1" class="md-primary" :disabled="sending">Submit</md-button>
        </md-card-actions>
         <!-- <p>Not registered?<a href="url">Create an account</a> </p> -->
          
        </md-card-content>     
 

        <md-progress-bar md-mode="indeterminate" v-if="sending"/>

       
      </md-card>

      <md-snackbar :md-active.sync="userSaved">The user {{ lastUser }} was saved with success!</md-snackbar>
      </form>
         
    <!--    <md-field>
        
      <label>Initial Value</label>
      <md-input v-model="initial"></md-input></md-field>
      <md-field>
      <label>First Name</label>
      <md-input v-model="firstName" ></md-input>

    </md-field>
--><nav>

  
    </nav>
    </div>
    
</template>

<script>
import { HTTP } from "../http-common";
  import { validationMixin } from 'vuelidate'
  import {
    required,
    minLength,
  
  } from 'vuelidate/lib/validators'

  export default {
    name: 'ResetPassword',
    mixins: [validationMixin],
    data: () => ({
      form: {
        password:null,
      },
      userSaved: false,
      sending: false,
      lastUser: null
    }),
    validations: {
      form: {
        password: {
          required,
          minLength: minLength(8)
        },
      
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
        this.form.password = null
      },
      saveUser() {
      this.sending = true;

      const resetPasswordData = {};

      resetPasswordData.password = this.form.password;

      HTTP.post(`reset`, resetPasswordData)

        .then(response => {
          const data = JSON.stringify(response.data);
          alert("reset password succesfully ", data);
          // this.posts = response.data;
          //this.userSaved=true
          this.sending=false
          this.clearForm()
        })
        .catch(e => {
          alert("reset password not succesfully" , e);
         
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
.md-title {
  border-style: outset;
}
#btn1 {
  background-color: #4caf50; /* Green */
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
  margin-left: 450px;
}
</style>

