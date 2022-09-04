<template>
  <div class="container-fluid pt-3">
    <div class="row md-4">
      <div class="col-md-12 fw-bold fs-3">
        <i class="fas fa-tachometer-alt mr-2"></i> Dashboard
      </div>
      <hr />
    </div>

    <div class="row mt-2 text-white">
      <div class="col-md-4">
        <div class="card bg-secondary" style="width: 20rem">
          <div class="card-body">
            <div class="card-body-icon">
              <i class="fas fa-mountain"></i>
            </div>
            <h5 class="card-title fw-bold fs-3">Alam/Buatan</h5>
            <div class="display-4">{{ alams.length }}</div>
            <h7>Objek Wisata Alam/Buatan</h7>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card bg-dark" style="width: 20rem">
          <div class="card-body">
            <div class="card-body-icon">
              <i class="fas fa-landmark"></i>
            </div>
            <h5 class="card-title fw-bold fs-3">Sejarah</h5>
            <div class="display-4">{{ sejarahs.length }}</div>
            <h7>Objek Wisata Sejarah</h7>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card bg-success" style="width: 20rem">
          <div class="card-body">
            <div class="card-body-icon">
              <i class="fas fa-mosque"></i>
            </div>
            <h5 class="card-title fw-bold fs-3">Religi</h5>
            <div class="display-4">{{ religis.length }}</div>
            <h7>Objek Wisata Religi</h7>
          </div>
        </div>
      </div>
    </div>

    <div class="row mt-4 text-white">
      <div class="col-md-4">
        <div class="card bg-danger" style="width: 20rem">
          <div class="card-body">
            <div class="card-body-icon">
              <i class="fas fa-utensils"></i>
            </div>
            <h5 class="card-title fw-bold fs-3">Kuliner</h5>
            <div class="display-4">{{ kuliners.length }}</div>
            <h7>Objek Kuliner</h7>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card bg-primary" style="width: 20rem">
          <div class="card-body">
            <div class="card-body-icon">
              <i class="fas fa-store"></i>
            </div>
            <h5 class="card-title fw-bold fs-3">Pasar/Mall</h5>
            <div class="display-4">{{ pasars.length }}</div>
            <h7>Objek Pasar/Mall</h7>
          </div>
        </div>
      </div>

      <div class="col-md-4">
        <div class="card bg-warning" style="width: 20rem">
          <div class="card-body">
            <div class="card-body-icon">
              <i class="fas fa-mug-hot"></i>
            </div>
            <h5 class="card-title fw-bold fs-3">Cafe</h5>
            <div class="display-4">{{ cafes.length }}</div>
            <h7>Objek Cafe</h7>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import firebase from "firebase";
const dbRef = firebase.database().ref("Alam");
const dbSejarah = firebase.database().ref("Sejarah");
const dbReligi = firebase.database().ref("Religi");
const dbKuliner = firebase.database().ref("Kuliner");
const dbPasar = firebase.database().ref("Pasar");
const dbCafe = firebase.database().ref("Cafe");
export default {
  name: "Dashboard",
  data() {
    return {
      alams: [],
      sejarahs: [],
      religis: [],
      kuliners: [],
      pasars: [],
      cafes: [],
    };
  },
  methods: {
    readData() {
      dbRef
        .get()
        .then((snapshot) => {
          this.alams = [];
          if (snapshot.exists()) {
            snapshot.forEach((item) => {
              let data = {
                alamKey: item.key,
              };
              this.alams.push(data);
            });
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
      dbSejarah
        .get()
        .then((snapshot) => {
          this.sejarahs = [];
          if (snapshot.exists()) {
            snapshot.forEach((item) => {
              let data = {
                sejarahKey: item.key,
              };
              this.sejarahs.push(data);
            });
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
      dbReligi
        .get()
        .then((snapshot) => {
          this.religis = [];
          if (snapshot.exists()) {
            snapshot.forEach((item) => {
              let data = {
                religiKey: item.key,
              };
              this.religis.push(data);
            });
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
      dbKuliner
        .get()
        .then((snapshot) => {
          this.kuliners = [];
          if (snapshot.exists()) {
            snapshot.forEach((item) => {
              let data = {
                kulinerKey: item.key,
              };
              this.kuliners.push(data);
            });
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
      dbPasar
        .get()
        .then((snapshot) => {
          this.pasars = [];
          if (snapshot.exists()) {
            snapshot.forEach((item) => {
              let data = {
                pasarKey: item.key,
              };
              this.pasars.push(data);
            });
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
      dbCafe
        .get()
        .then((snapshot) => {
          this.cafes = [];
          if (snapshot.exists()) {
            snapshot.forEach((item) => {
              let data = {
                cafeKey: item.key,
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

.card {
  border: none;
}

.card:hover {
  box-shadow: 0px 10px 10px #b1acac;
}

.display-4 {
  font-weight: bold;
}

.col-md-4 .card-body-icon {
  position: absolute;
  z-index: 0;
  top: 15px;
  right: 10px;
  opacity: 1;
  font-size: 90px;
}
</style>