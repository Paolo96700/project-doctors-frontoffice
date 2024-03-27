
<script>
import { store } from './../src/store';

import DoctorsList from "../components/DoctorsList.vue"

export default {
  name: 'AppHome',
  data() {
    return {
      store,
      doctor: null,

    }
  },
  components: {
    DoctorsList,
  },

};

</script>

<template>
  <div class="d-flex justify-content-around align-items-center flex-wrap jumbo px-5">
    <div class="d-flex flex-column justify-content-center first-col">
      <div class=" waviy">
        <h1>Benvenuto in <span class="fw-semibold">B-Doctor</span></h1>
      </div>

      <div>
        <p class="mb-4 "> Cerca qui il medico che fa per te tra centinaia di Specialisti e
          Medici di Medicina Generale
        </p>
      </div>
      <div>
        <button class="text-center show-doc">
          <router-link :to="{ name: 'user.index' }" class="nav-link active">
            <span class="">Mostra tutti i Dottori</span>
          </router-link>
        </button>
      </div>
    </div>
    <!-- <div class="col-5 jumbotron"> </div> -->
    <section class="pt-5">
      <div class="container p-3 mx-auto">
        <div class="row justify-content-center">
          <div
            class="info-card col-11 mx-4 mb-3 col-md-8 col-lg-3 card-tool border rounded-4 p-3 text-center bg-white shadow">
            <div class="info-title d-flex flex-column justify-content-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="height: 40px;" class="my-2">
                <path fill="#116bb0" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-96 55.2C54 332.9 0 401.3 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-81-54-149.4-128-171.1V362c27.6 7.1 48 32.2 48 62v40c0 8.8-7.2 16-16 16H336c-8.8 0-16-7.2-16-16s7.2-16 16-16V424c0-17.7-14.3-32-32-32s-32 14.3-32 32v24c8.8 0 16 7.2 16 16s-7.2 16-16 16H256c-8.8 0-16-7.2-16-16V424c0-29.8 20.4-54.9 48-62V304.9c-6-.6-12.1-.9-18.3-.9H178.3c-6.2 0-12.3 .3-18.3 .9v65.4c23.1 6.9 40 28.3 40 53.7c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.4 16.9-46.8 40-53.7V311.2zM144 448a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/>
              </svg>
              <h5 class="mb-4">
                Trova il dottore adatto a te!
              </h5>
            </div>
            <p>
              Scegli il tipo di specializzazione che ti interessa per trovare il medico inerente o
              scopri la vasta scelta di dottori offerti dal nostro sito.
            </p>
          </div>
          <div class="col-11 mx-4 mb-3 col-md-8 col-lg-3 card-tool border rounded-4 p-3 text-center bg-white shadow">
            <div class="info-title d-flex flex-column">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style="height: 40px;" class="my-2">
                <path fill="#116bb0" d="M48 0C21.5 0 0 21.5 0 48V256H144c8.8 0 16 7.2 16 16s-7.2 16-16 16H0v64H144c8.8 0 16 7.2 16 16s-7.2 16-16 16H0v80c0 26.5 21.5 48 48 48H265.9c-6.3-10.2-9.9-22.2-9.9-35.1c0-46.9 25.8-87.8 64-109.2V271.8 48c0-26.5-21.5-48-48-48H48zM152 64h16c8.8 0 16 7.2 16 16v24h24c8.8 0 16 7.2 16 16v16c0 8.8-7.2 16-16 16H184v24c0 8.8-7.2 16-16 16H152c-8.8 0-16-7.2-16-16V152H112c-8.8 0-16-7.2-16-16V120c0-8.8 7.2-16 16-16h24V80c0-8.8 7.2-16 16-16zM512 272a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM288 477.1c0 19.3 15.6 34.9 34.9 34.9H541.1c19.3 0 34.9-15.6 34.9-34.9c0-51.4-41.7-93.1-93.1-93.1H381.1c-51.4 0-93.1 41.7-93.1 93.1z"/>
              </svg>
              <h5 class="mb-4">
                Prenota la tua visita!
              </h5>
            </div>
            <p>
              Con il nostro servizio di messaggistica, potrai inviare personalmente un messaggio ad uno dei nostri dottori
              per avere informazioni e prenotare un appuntamento.
            </p>
          </div>
          <div class="col-11 mx-4 mb-3 col-md-8 col-lg-3 card-tool border rounded-4 p-3 text-center bg-white shadow">
            <div class="info-title d-flex flex-column">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" style="height: 40px;" class="my-2">
                <path fill="#116bb0" d="M471.6 21.7c-21.9-21.9-57.3-21.9-79.2 0L362.3 51.7l97.9 97.9 30.1-30.1c21.9-21.9 21.9-57.3 0-79.2L471.6 21.7zm-299.2 220c-6.1 6.1-10.8 13.6-13.5 21.9l-29.6 88.8c-2.9 8.6-.6 18.1 5.8 24.6s15.9 8.7 24.6 5.8l88.8-29.6c8.2-2.7 15.7-7.4 21.9-13.5L437.7 172.3 339.7 74.3 172.4 241.7zM96 64C43 64 0 107 0 160V416c0 53 43 96 96 96H352c53 0 96-43 96-96V320c0-17.7-14.3-32-32-32s-32 14.3-32 32v96c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96z"/>
              </svg>
              <h5 class="mb-4">
                Lascia la tua recensione!
              </h5>
            </div>
            <p>
              Oltre a poter leggere le recensioni di altri pazienti, avrai la possibilità
              di inserire la tua personale recensione per farci sapere la tua opinione sulla visita effettuate.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>

  <div class="main-home border-top">

  </div>


  <div class="section_two">
    <h2 class="pt-4 text-center "> Medici in evidenza </h2>
    <div class="doctor_list">
      <DoctorsList />
    </div>
  </div>
</template>

<style lang="scss" scoped>

@import '../style/partials/variables';
@import '../style/general.scss';


.jumbo {
  color: $main-color;
  padding-top: 7vh;
  min-height: 100vh;
  background-image: url(./../src/assets/img/background.jpg);
  background-size: cover;
}

.jumbotron {
  background-image: url(./../src/assets/img/doc3jumbonobg.png);
  background-repeat: no-repeat;
  background-position: center;
  background-size: 90%;
  height: 100%;
}

.first-col {
  height: 40vh;
  width: 100vw;

  div {
    display: flex;
    justify-content: center;
    text-align: center;
  }
}

.container {
  height: 100%;
}

.doctor_list {
  margin-inline: auto;
  width: 80vw;
}

.row {
  height: 100%;
}

.show-doc {
  outline: none;
  width: fit-content;
  height: fit-content;
  padding: .7rem 1.5rem;
  background-image: linear-gradient(to top, #D8D9DB 0%, #fff 80%, #FDFDFD 100%);
  border-radius: 30px;
  border: 1px solid $main-color;
  transition: all 0.1s ease;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #606060;
  text-shadow: 0 1px #fff;
}

button:hover {
  box-shadow: 0 1px 1px 1px #FCFCFC, 0 1px 1px #00bdcd, 0 -1px 1px #CECFD1, 0 -1px 1px #00bdcd, inset 0 0 1px 1px #CECFD1;
}

button:active {
  box-shadow: 0 4px 3px 1px #FCFCFC, 0 6px 8px #D6D7D9, 0 -4px 4px #CECFD1, 0 -6px 4px #FEFEFE, inset 0 0 5px 3px #999, inset 0 0 30px #aaa;
}

// button:focus {
//   box-shadow: 0 4px 3px 1px #FCFCFC, 0 6px 8px #D6D7D9, 0 -4px 4px #CECFD1, 0 -6px 4px #FEFEFE, inset 0 0 5px 3px #999, inset 0 0 30px #aaa;
// }

.icon_doctor {
  font-size: 2.5rem;
  margin: .8rem;
}


.waviy {
  position: relative;
}

.waviy span {
  position: relative;
  display: inline-block;
  font-size: 40px;
  animation: flip 1s;
  animation-delay: calc(.2s * var(--i))
}

@keyframes flip {

  0%,
  80% {
    transform: rotateY(360deg)
  }
}

@media (max-width: 1010px) {

  .doctor_list {
    margin-inline: auto;
    width: 90vw;
  }

  .jumbo {
    background-image: url(../assets/img/background_2.jpeg);
    background-size: contain;

  }

  h1 {
    margin-bottom: 3rem;
  }

  .jumbotron {
    display: none;
  }

  .first-col {
    height: 90vh;

    div {
      display: flex;
      justify-content: center;
      text-align: center;
    }
  }

  .show-doc {
    padding: .2rem 1rem;
  }
}
</style>
../src/store.js