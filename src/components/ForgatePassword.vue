<template>
    <div>
      <form novalidate class="md-layout" @submit.prevent="validateUser">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
            <div class="fundoo">
        <span style="color:blue">F</span>
        <span style="color:red">u</span>
        <span style="color:brown">n</span>
        <span style="color:green">d</span>
        <span style="color:purple">o</span>
        <span style="color:blue">o</span>
        </div>
        <div class="md-title">Forget Password</div>
        
        </md-card-header>
           
        <md-card-content>
           <!-- v-for directive allows us to loop through items in an array or object. -->
          <md-field :class="getValidationClass('email')">
            <label for="email">Email</label>
            <md-input type="email" name="email" id="email" autocomplete="email" v-model="form.email" :disabled="sending" />
            <span class="md-error" v-if="!$v.form.email.required">The email is required</span>
            <span class="md-error" v-else-if="!$v.form.email.email">Invalid email</span>
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
    email,
   
  
  } from 'vuelidate/lib/validators'

  export default {
    name: 'FormValidation',
    mixins: [validationMixin],
    data: () => ({
      form: {
       
        email: null,
       
      },
      userSaved: false,
      sending: false,
      lastUser: null
    }),
    validations: {
      form: {
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
       
        this.form.email = null
      },
      saveUser() {
      this.sending = true;
      const forgetPasswordData = {};  
      forgetPasswordData.emailid = this.form.email;

      HTTP.post('forgetPassword', forgetPasswordData)
        .then(response => {
          const data = JSON.stringify(response.data);
          alert("Email Send Succesfully ", data);
          // this.posts = response.data;
          // this.userSaved=true
          // this.sending=false
          // this.clearForm()
        })
        .catch(e => {
          alert("Email Send unsuccesfully" , e);
          // this.sending = false

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
  margin-left: 450px;
}
</style>

