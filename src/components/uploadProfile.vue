<template>
  <div>
    <md-menu md-direction="bottom-start">
      <md-button md-menu-trigger class="md-icon-button">
        <md-avatar>
          <img :src="imageUrl" />
        </md-avatar>
      </md-button>

      <md-menu-content class="c1">
        <md-menu-item>
          <!-- <div class="relative">
            <md-avatar>
              <img src="../assets/rose.jpeg" />
            </md-avatar>
            <div class="absolute" @click="showDialogUploadProfile = true">
              <md-icon>camera</md-icon>
            </div>
          </div> -->
           <div class="relative">
          <md-avatar class="md-large">
             <img :src="imageUrl"/>
          </md-avatar>
          <md-avatar class="addInBotton">
            <div @click="showDialogUploadProfile = true">
              <md-icon>add_a_photo</md-icon>
            </div>
          </md-avatar>
        </div>

        </md-menu-item>

        <md-menu-item v-model="name"> {{ name }}</md-menu-item>
        <md-menu-item v-model="email">{{ email }}</md-menu-item>
        <md-divider></md-divider>
        <md-menu-item>
          <md-button @click="singOut()">Sing Out</md-button>
        </md-menu-item>
      </md-menu-content>
    </md-menu>

<md-dialog  class="dialogBox" :md-active.sync="showDialogUploadProfile" @click.stop="stopTheEvent">
      <div >
        <md-card class="md-layout md-size-100 g1" >
          <md-card>
            <div>
              <div class="close">
                <span>Select profile photo</span>
                <md-button
                  class="md-icon-button md-dense"
                  @click="showDialogUploadProfile = false"
                >
                  <md-icon>close</md-icon>
                </md-button>
              </div>
              <div>
                <md-tabs md-dynamic-height>
                  <md-tab class="upload" md-label="Upload photos">
                    <md-empty-state
                      md-icon="add_photo_alternate"
                      md-description="Drage a profile photo here"
                    >
                      <div>
                        <input
                          type="file"
                          placeholder="select photo"
                          @change="selected"
                        />
                      </div>
                    </md-empty-state>
                  </md-tab>
                </md-tabs>
              </div>
            </div>
          </md-card>
          <div class ="setProfile" >
            <md-button  
              @click="OnUploadProfile(), (showDialogUploadProfile = false)"            
              class="md-dense md-raised md-primary"
              >Set as profile photo
            </md-button>
            
            <md-button  @click="showDialogUploadProfile = false">
              Close
            </md-button>
          </div>
        </md-card>
      </div>
    </md-dialog>
<!-- 
        <md-dialog :md-active.sync="showDialogUploadProfile" @click.stop="stopTheEvent">
          >
          <md-dialog-title>Select Profile Photo</md-dialog-title>
          <md-tabs md-dynamic-height>
            <md-tab md-label="Upload Photos">
              <input type="file" />
              <button>Upload!</button>
            </md-tab>
            <md-tab md-label="your Photos">
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
            </md-tab>
          </md-tabs>

          <md-dialog-actions>
            <md-button>Set as Profile Photo</md-button>
            <md-button @click="showDialogUploadProfile = false">Close</md-button>
          </md-dialog-actions>
        </md-dialog>
      </md-menu-content>
    </md-menu>

   
    <md-dialog :md-active.sync="showDialog">
      <md-dialog-title>Select Profile Photo</md-dialog-title>

      <md-tabs md-dynamic-height>
        <md-tab md-label="Upload Photos">
          <input type="file" @change="onFileChanged" />
          <button @click="onUpload">Upload!</button>
        </md-tab>
        <md-tab md-label="your Photos">
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam mollitia dolorum dolores quae commodi impedit possimus qui, atque at voluptates cupiditate. Neque quae culpa suscipit praesentium inventore ducimus ipsa aut.</p>
        </md-tab>
      </md-tabs>

      <md-dialog-actions>
        <md-button class="md-primary" @click="showDialog = false">Set as Profile Photo</md-button>
        <md-button class="md-primary" @click="showDialog = false">Close</md-button>
      </md-dialog-actions>
    </md-dialog> -->
  </div>
</template>

<script>
import { HTTP } from "../http-common";
export default {
  name: "DialogCustom",

data: () => ({
    image: null,
    showDialogUploadProfile: false,
    imageUrl: null,
    dialog: false,
    showDialog: false,
    name: "",
    email: ""
  }),
  created() {
    this.$log.info("<<<<<<<<<<>>>>>>>>>>>");
    this.showData();
  },
  methods: {
  stopTheEvent: (event) => event.stopPropagation() ,

    showData() {
      this.name = localStorage.getItem("name");  
      this.email = localStorage.getItem("emailid");
      this.imageUrl = localStorage.getItem("image");
    
    },
      OnUploadProfile() {
        
      let noteData = new FormData();
      noteData.append("image", this.image, this.image.name);

      HTTP.post("/image-upload", noteData, {
        headers: { token: localStorage.getItem("token") }
          })
        .then(response => {
          this.imageUpload = response.data.data;
          this.$log.info("data >>> " + JSON.stringify(this.imageUpload));
          localStorage.setItem("image", response.data.data.imageUrl);
        })
        .catch(e => {
          const error = JSON.stringify(e);
          this.$log.error("response in error", error);
        });
    },
    selected(event) {
      this.image = event.target.files[0];
    },
      singOut() {
      localStorage.clear();
      this.$router.push("/");
    },
    
    }
};
</script>

<style lang="scss" scoped>
.g1{
  display:grid;
}
.setProfile{
  display:flex; padding:10px;

}
.dialogBox{
border-radius: 6px;

}
.md-dialog {
  max-width: 768px;
  width: 500px;
}
   .md-menu-content{
      max-height: 50vh;
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
.md-avatar.addInBotton {
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