<template>
  <div class="container-fluid pt-3">
    <!-- Button trigger modal -->
    <div class="row md-4">
      <div class="col-md-6 fw-bold fs-3">Cafe List ({{ cafes.length }})</div>
      <hr />
      <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        <button
          class="btn btn-success"
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#addModal"
        >
          <i class="fas fa-plus"></i>
          Add Data
        </button>
      </div>
    </div>
    <div class="row pt-2">
      <div class="col-md-12">
        <table class="table table-hover table-sm">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Nama</th>
              <th scope="col">Deskripsi</th>
              <th scope="col">Alamat</th>
              <th scope="col">Harga Menu</th>
              <th scope="col">Open</th>
              <th scope="col">Instagram</th>
              <th scope="col">Latitude</th>
              <th scope="col">Longitude</th>
              <th scope="col">Image</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(cafe, index) in cafes" :key="cafe.cafeKey">
              <th scope="row">{{ index + 1 }}.</th>
              <td style="text-size: 2rem">{{ cafe.nama }}</td>
              <td>{{ cafe.description }}</td>
              <td>{{ cafe.alamat }}</td>
              <td>{{ cafe.hargaMenu }}</td>
              <td>{{ cafe.open }}</td>
              <td>{{ cafe.instagram }}</td>
              <td>{{ cafe.latitude }}</td>
              <td>{{ cafe.longitude }}</td>
              <th scope="row">
                <img :src="cafe.picture" width="120" height="120" />
              </th>
              <td>
                <button
                  type="button"
                  class="btn btn-warning"
                  data-bs-toggle="modal"
                  data-bs-target="#editModal"
                  v-on:click.prevent="updateItem(cafe)"
                >
                  <i class="fas fa-edit"></i>
                </button>
                <button
                  type="button"
                  class="btn btn-danger"
                  v-on:click.prevent="deleteItem(cafe.cafeKey)"
                >
                  <i class="fa fa-trash"></i>
                </button>
                <button
                  type="button"
                  class="btn btn-success"
                  v-on:click.prevent="addItem(cafe)"
                >
                  <i class="fas fa-plus"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Modal Add-->
    <div
      class="modal fade bd-example-modal-lg"
      id="addModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add Object Form</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form @submit="Add">
              <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label"
                  >Nama</label
                >
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    v-model="cafe.nama"
                    required
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label"
                  >Deskripsi</label
                >
                <div class="col-sm-10">
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    v-model="cafe.description"
                    required
                  ></textarea>
                </div>
              </div>
              <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label"
                  >Alamat</label
                >
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    v-model="cafe.alamat"
                    required
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label"
                  >Harga Menu</label
                >
                <div class="col-sm-10">
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    v-model="cafe.hargaMenu"
                    required
                  ></textarea>
                </div>
              </div>
              <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label"
                  >Open</label
                >
                <div class="col-sm-10">
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    v-model="cafe.open"
                    required
                  ></textarea>
                </div>
              </div>
              <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label"
                  >Instagram</label
                >
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    v-model="cafe.instagram"
                    required
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label"
                  >Latitude</label
                >
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    v-model.number="cafe.latitude"
                    required
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label"
                  >Longitude</label
                >
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    v-model.number="cafe.longitude"
                    required
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label"
                  >Gambar</label
                >
                <div class="col-sm-10">
                  <input
                    class="form-control"
                    type="file"
                    v-on:change="upload"
                  />
                </div>
                <p></p>

                <div class="col-md-2"></div>
                <div class="col-sm-10" v-if="previewimg">
                  <img :src="cafe.picture" height="200" width="300" />
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-success"
                  data-bs-dismiss="modal"
                  v-on:click="Add"
                >
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!--end Modal-->

    <!-- Modal Edit -->
    <div
      class="modal fade bd-example-modal-lg"
      id="editModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">
              Update Object Form
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label"
                  >Nama</label
                >
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    v-model="cafe.nama"
                    required
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="inputPassword" class="col-sm-2 col-form-label"
                  >Deskripsi</label
                >
                <div class="col-sm-10">
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    v-model="cafe.description"
                    required
                  ></textarea>
                </div>
              </div>
              <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label"
                  >Alamat</label
                >
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    v-model="cafe.alamat"
                    required
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label"
                  >Harga Menu</label
                >
                <div class="col-sm-10">
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    v-model="cafe.hargaMenu"
                    required
                  ></textarea>
                </div>
              </div>
              <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label"
                  >Open</label
                >
                <div class="col-sm-10">
                  <textarea
                    class="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    v-model="cafe.open"
                    required
                  ></textarea>
                </div>
              </div>
              <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label"
                  >Instagram</label
                >
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    v-model="cafe.instagram"
                    required
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label"
                  >Latitude</label
                >
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    v-model.number="cafe.latitude"
                    required
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label"
                  >Longitude</label
                >
                <div class="col-sm-10">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    v-model.number="cafe.longitude"
                    required
                  />
                </div>
              </div>
              <div class="mb-3 row">
                <label for="staticEmail" class="col-sm-2 col-form-label"
                  >Gambar</label
                >
                <div class="col-sm-10">
                  <input
                    class="form-control"
                    type="file"
                    v-on:change="upload"
                  />
                </div>
                <p></p>

                <div class="col-md-2"></div>
                <div class="col-sm-10" v-if="previewimg">
                  <img :src="cafe.picture" height="200" width="300" />
                </div>
                <div class="col-sm-10" v-else>
                  <img :src="cafe.picture" height="200" width="300" />
                </div>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-warning"
                  data-bs-dismiss="modal"
                  v-on:click="editItem(cafe.cafeKey)"
                >
                  Update
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!--end Modal-->
  </div>
</template>
<script>
import firebase from "firebase";
import Swal from "sweetalert2";
const database = firebase.database();
const dbRef = firebase.database().ref("Cafe");
const dbRec = firebase.database().ref("RekomendasiCafe");
export default {
  name: "Cafe",
  data() {
    return {
      cafe: {
        nama: "",
        description: "",
        alamat: "",
        hargaMenu: "",
        open: "",
        instagram: "",
        latitude: "",
        longitude: "",
        picture: [],
      },
      cafes: [],
      previewimg: "",
    };
  },
  methods: {
    Add() {
      dbRef
        .push(this.cafe)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Object added successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      this.reset();
    },
    reset() {
      (this.cafe = {
        name: null,
        description: null,
        alamat: null,
        hargaMenu: null,
        open: null,
        instagram: null,
        latitude: null,
        longitude: null,
        picture: [],
      }),
        (this.previewimg = null);
    },
    readData() {
      dbRef
        .get()
        .then((snapshot) => {
          this.cafes = [];
          if (snapshot.exists()) {
            snapshot.forEach((item) => {
              let data = {
                cafeKey: item.key,
                nama: item.val().nama,
                description: item.val().description,
                alamat: item.val().alamat,
                hargaMenu: item.val().hargaMenu,
                open: item.val().open,
                instagram: item.val().instagram,
                latitude: item.val().latitude,
                longitude: item.val().longitude,
                picture: item.val().picture,
              };
              this.cafes.push(data);
            });
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    },
    updateItem(cafe) {
      this.cafe = cafe;
    },
    editItem: function (cafeKey) {
      database
        .ref("/Cafe/" + cafeKey)
        .update(this.cafe)
        .then((response) => {
          console.log(response);
        })
        .catch((err) => {
          console.log(err);
        });
      Swal.fire({
        icon: "success",
        title: "Object updated successfully",
      });
      this.reset();
    },
    deleteItem: function (cafeKey) {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          database.ref("/Cafe/" + cafeKey).remove();
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    },
    addItem(cafe) {
      this.cafe = cafe
      Swal.fire({
        title: "Are you sure to add to Recommendation?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes!",
      }).then((result) => {
        if (result.isConfirmed) {
          dbRec
            .push(this.cafe)
            .then((response) => {
              console.log(response);
            })
            .catch((err) => {
              console.log(err);
            });

          Swal.fire("Added!", "Your data has been added.", "success");
        }
      });
    },
    upload(event) {
      this.uploadValue = 0;
      this.cafe.picture = null;
      this.previewimg = event.target.files[0];
      this.onUpload();
    },
    onUpload() {
      this.cafe.picture = null;
      const storageRef = firebase
        .storage()
        .ref("/cafe_img/")
        .child(`${this.previewimg.name}`)
        .put(this.previewimg);
      storageRef.on(
        `state_changed`,
        (snapshot) => {
          this.uploadValue =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        },
        (error) => {
          console.log(error.message);
        },
        () => {
          this.uploadValue = 100;
          storageRef.snapshot.ref.getDownloadURL().then((url) => {
            this.cafe.picture = url;
            console.log(this.picture);
          });
        }
      );
    },
  },
  created() {
    dbRef.on("value", this.readData, this.errorData);
  },
};
</script>

<style scoped>
.row {
  text-align: left;
  margin: 0rem 1rem;
}
</style>