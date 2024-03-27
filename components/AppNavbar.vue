<script>
export default {

};
</script>

<template>
  <div class="container">
    <nav class="navbar navbar-expand-md navbar-bg navbar-dark fixed-top shadow-lg bg-nav">
      <div class="container-fluid ps-3">
        <div class="d-flex align-items-center">
          <div class="d-flex align-items-center px-2">
            <router-link :to="{ name: 'home' }" class="nav-link active d-flex">
              <a class="navbar-brand d-flex align-items-center">
                <img src="./../src/assets/doctor-logo.png" class="img-fluid" alt="logo" width="30">
              </a>
              <span class="d-flex align-items-center">
                <h4 class="text-logo mb-0">Bdoctors</h4>
              </span>
            </router-link>
          </div>

          <div class="link d-flex">
            <div class="hover_link">
              <router-link class="mx-4" :to="{ name: 'home' }">
                <span class="text-white d-flex align-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" style="height: 25px;"><path fill="#ffffff" d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"/></svg>
                  <span class="px-2">Home</span>
                </span></router-link>
            </div>
            <div class="hover_link">
              <router-link class="mx-4" :to="{ name: 'user.index' }">
                <span class="text-white d-flex align-items-center"> 
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="height: 25px;"><path fill="#f9fafa" d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-96 55.2C54 332.9 0 401.3 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-81-54-149.4-128-171.1V362c27.6 7.1 48 32.2 48 62v40c0 8.8-7.2 16-16 16H336c-8.8 0-16-7.2-16-16s7.2-16 16-16V424c0-17.7-14.3-32-32-32s-32 14.3-32 32v24c8.8 0 16 7.2 16 16s-7.2 16-16 16H256c-8.8 0-16-7.2-16-16V424c0-29.8 20.4-54.9 48-62V304.9c-6-.6-12.1-.9-18.3-.9H178.3c-6.2 0-12.3 .3-18.3 .9v65.4c23.1 6.9 40 28.3 40 53.7c0 30.9-25.1 56-56 56s-56-25.1-56-56c0-25.4 16.9-46.8 40-53.7V311.2zM144 448a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/></svg>
                  <span class="px-2">Cerca tra i nostri medici</span>
                </span>
              </router-link>
            </div>
          </div>
        </div>

        <li class="nav-link flex-column text-end">
          <span class="no_views">
            <a class="register" href="http://localhost:8000/register" target="_blank">
              Sei un medico? Registrati!
            </a>
            <a class="register_mobile" href="http://localhost:8000/register" target="_blank">
              Registrati!
            </a>
            <span class="fw-bolder" style=" font-size: .6rem; color: white; padding: 0 .3rem;"> oppure </span>
          </span>
          <a class="my-btn" href="http://localhost:8000/login" target="_blank">
            Accedi
          </a>
        </li>
      </div>
    </nav>
  </div>

</template>

<style lang="scss">
@import '../style/general.scss';


.img-fluid {
  filter: drop-shadow(1px 1px 0 white) drop-shadow(-1px -1px 0 rgb(101, 101, 101));
}

a.my-btn {
  text-decoration: none;
  border: 1px solid $main-color;
  border-radius: 25px;
  color: white;
  background-color: $main-color;
  padding: .5rem 1rem;
  transition: .20s;

  &:hover {
    background-color: $bg-color;
    border: 1px solid $main-color;
    color: $main-color;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  }
}


a {
  text-decoration: none;
  transition: border-bottom-color 1s ease-in-out;
}

.register {
  color: rgb(190, 190, 190);
  font-size: .8rem;

  &:hover {
    color: white;
  }
}

.register_mobile {
  color: rgb(190, 190, 190);
  font-size: .8rem;
  display: none;

  &:hover {
    color: white;
  }
}

.hover_link {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 7vh;
  cursor: pointer;

  &:hover {
    background-color: rgb(60, 60, 60);
  }
}

.bg-nav {
  padding: 0;
  background-color: rgb(45, 45, 45);
}

.text-logo {
  color: white;
}

.navbar {
  min-height: 7vh;
}

.link {
  height: 100%;
  text-decoration: none;
  color: black;
  font-weight: 600;
  padding-left: 2rem;
}

.nav_show {
  display: none;
}

@media (max-width: 1010px) {

  .text-logo {
    display: none;
  }

  .link {
    margin-left: 0rem;
    padding-left: 0rem;
  }

  .hover_link {
    font-size: .8rem;

    .icon_doctor {
      font-size: 1.2rem;
    }
  }

  .nav-link {
    .no_views {}
  }

}

@media (max-width: 767px) {

  .text-logo {
    display: inline;
  }

  .hover_link {
    display: none;
  }

  .nav-link {
    margin: 1rem;
  }

  .nav_show {
    padding: .5rem;
    display: block;

    &:hover {
      background-color: rgb(60, 60, 60);
    }

    .icon_doctor {
      padding-left: .5rem;
    }
  }

  .register {
    display: none;
  }

  .register_mobile {
    display: inline;
  }

}
</style>

