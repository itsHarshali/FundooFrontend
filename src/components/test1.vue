<template>
  <div class="md-layout-item-user md-size-5">
    <md-menu md-size="medium" md-align-trigger @click="showContent">
      <md-avatar md-menu-trigger class="md-medium">
        <img :src="imageUrl" />
        <md-tooltip md-direction="bottom">
          <div style="font-weight:bold">Fundoo Account</div>
        </md-tooltip>
      </md-avatar>

      <md-menu-content>
        <div class="relative">
          <md-avatar class="md-large">
            <img :src="imageUrl" />
          </md-avatar>
          <md-avatar class="addImageBotton">
            <div @click="dialog = true">
              <md-icon>add_a_photo</md-icon>
            </div>
          </md-avatar>
        </div>

        <div class="userName">{{ fullName }}</div>
        <div class="userEmail">{{ emailId }}</div>
        <hr style=" width:100%" />
        <div class="out">
          <md-button @click="signOut">Sign Out</md-button>
        </div>
      </md-menu-content>
    </md-menu>

    <md-dialog style="border-redius:8px;" :md-active.sync="dialog">
      <div class="box">
        <md-card class="md-layout md-size-100" style="display:grid;">
          <md-card>
            <div>
              <div class="close">
                <span>Select profile photo</span>
                <md-button
                  class="md-icon-button md-dense"
                  @click="dialog = false"
                >
                  <md-icon>close</md-icon>
                </md-button>
              </div>
              <div>
                <md-tabs md-dynamic-height>
                  <md-tab class="upload" md-label="Upload photos">
                    <md-empty-state
                      style="padding: 0px;"
                      md-icon="add_photo_alternate"
                      md-description="Drage a profile photo here"
                    >
                      <div>
                        <input
                          type="file"
                          placeholder="select photo"
                          @change="onFileSelected"
                        />
                      </div>
                    </md-empty-state>
                  </md-tab>

                  <md-tab class="upload" md-label="Your photos">
                    <div style="display:flex">
                      <input
                        class="imageUpload"
                        type="text"
                        autocomplete="off"
                      />
                      <md-button
                        class="md-raised"
                        style="margin-left:5px;margin:0px"
                      >
                        <md-icon>search</md-icon>
                        <md-tooltip md-direction="bottom">search </md-tooltip>
                      </md-button>
                    </div>
                    <md-empty-state
                      style="padding: 0px;"
                      md-icon="add_photo_alternate"
                      md-description="Drage a profile photo here"
                    >
                      <input type="file" placeholder="select photo" />
                    </md-empty-state>
                  </md-tab>
                </md-tabs>
              </div>
            </div>
          </md-card>
          <div style="display:flex; padding:10px;">
            <md-button
              @click="uploadProfile(), (dialog = false)"
              style="text-transform: none;"
              class="md-dense md-raised md-primary"
              >Set as profile photo
            </md-button>
            <md-button style="text-transform: none;" @click="dialog = false">
              Close
            </md-button>
          </div>
        </md-card>
      </div>
    </md-dialog>
  </div>
</template>
<script>
import HTTP from "../services/http-common";
export default {
  name: "UploadImage",
  data: () => ({
    image: null,
    imageUrl: null,
    dialog: false,
    fullName: "",
    firstName: "",
    lastName: "",
    emailId: ""
  }),
  created() {
    this.$log.info("created profile..");
    this.showContent();
  },
  methods: {
    signOut() {
      localStorage.clear();
      this.$router.push("/login");
    },
    showContent() {
      this.firstName = localStorage.getItem("firstName");
      this.lastName = localStorage.getItem("lastName");
      this.fullName = this.firstName + " " + this.lastName;
      this.$log.info(this.fullName);
      this.emailId = localStorage.getItem("emailId");
      this.$log.info(this.emailId);
      this.imageUrl = localStorage.getItem("image");
      this.$log.info(this.imageUrl);
    },
    onFileSelected(event) {
      this.image = event.target.files[0];
    },
    uploadProfile() {
      let noteData = new FormData();
      noteData.append("image", this.image, this.image.name);
      this.token = localStorage.getItem("token");
      this.$log.info("token :" + this.token);
      HTTP.post("imageUpload", noteData, { headers: { token: this.token } })
        .then(response => {
          this.imageUpload = response.data.data;
          this.$log.info("image data : " + JSON.stringify(this.imageUpload));
          localStorage.setItem("image", response.data.data.image);
        })
        .catch(error => {
          const err = JSON.stringify(error);
          this.$log.error("response in error", err);
        });
    }
  }
};
</script>
<style>
.userName {
  color: #202124;
  font: 500 16px/22px Google Sans, Roboto, RobotoDraft, Helvetica, Arial,
    sans-serif;
  letter-spacing: 0.29px;
  margin: 0;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
}
.userEmail {
  color: #5f6368;
  font: 400 14px/19px Roboto, RobotoDraft, Helvetica, Arial, sans-serif;
  letter-spacing: normal;
  text-align: center;
  text-overflow: ellipsis;
  overflow: hidden;
  margin-left: 10px;
  margin-right: 10px;
}
.out {
  display: flex;
  justify-content: center;
}
.md-layout-item-user {
  padding: 2px;
  display: flex;
  justify-content: flex-end;
}
.close {
  font-size: 22px;
  padding: 16px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}
.md-button {
  text-transform: none;
}
.upload {
  height: 323px;
  overflow: visible;
}
.box {
  width: 760px;
  height: 504px;
}
.imageUpload {
  outline: none;
  width: 350px;
  height: 37px;
  padding: 1px 8px;
}
.profile {
  border-radius: 50%;
  height: 25px;
  width: 25px;
}
.md-avatar.addImageBotton {
  margin: 0px;
  background-color: white;
  right: 80px;
  top: 40px;
  width: 30px;
  height: 30px;
  min-width: 30px;
}
.relative {
  padding-bottom: 20px;
  display: flex;
  justify-content: center;
}
</style>
