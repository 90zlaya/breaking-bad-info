<template>
  <nav class="navbar navbar-expand-md navbar-dark navbar-custom fixed-top">
    <a
      class="navbar-brand logo-image"
      href="/"
    >
      <img src="src/assets/images/logo.png" v-bind:alt="$t('navbar.logoImage')"/>
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarsMenu"
      aria-controls="navbarsMenu"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-awesome fas fa-bars"></span>
      <span class="navbar-toggler-awesome fas fa-times"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarsMenu">
      <ul class="navbar-nav ml-auto">
        <template v-for="(item) in navigation">
          <li class="nav-item">
            <a class="nav-link page-scroll" v-bind:href="item.href">
              {{ item.title }}
            </a>
          </li>
        </template>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    data() {
      return {
        navigation: [
          {
            href: '#header',
            title: this.$t('navbar.home'),
          },
          {
            href: '#quotes',
            title: this.$t('navbar.quotes'),
          },
          {
            href: '#characters',
            title: this.$t('navbar.characters'),
          },
          {
            href: '#statistics',
            title: this.$t('navbar.statistics'),
          },
          {
            href: '#synopsis',
            title: this.$t('navbar.synopsis'),
          },
          {
            href: '#about',
            title: this.$t('navbar.about'),
          },
        ],
      };
    },
  };
</script>

<style scoped>
  .navbar-custom {
  	background-color: #262431;
  	box-shadow: 0 0.0625rem 0.375rem 0 rgba(0, 0, 0, 0.1);
  	font: 700 0.75rem/2rem "Montserrat", sans-serif;
  	transition: all 0.2s;
  }

  .navbar-custom .navbar-brand.logo-image img {
  	height: 34px;
  	margin-bottom: 1px;
  	-webkit-backface-visibility: hidden;
  }

  .navbar-custom .navbar-brand.logo-text {
  	font: 700 2.375rem/1.5rem "Montserrat", sans-serif;
  	color: #fff;
  	letter-spacing: -0.5px;
  	text-decoration: none;
  }

  .navbar-custom .navbar-nav {
  	margin-top: 0.75rem;
  }

  .navbar-custom .nav-item .nav-link {
  	padding: 0 0.75rem 0 0.75rem;
  	color: #fff;
  	text-decoration: none;
  	transition: all 0.2s ease;
  }

  .navbar-custom .nav-item .nav-link:hover,
  .navbar-custom .nav-item .nav-link.active {
  	color: #cfd200;
  }

  /* Dropdown Menu */
  .navbar-custom .dropdown:hover > .dropdown-menu {
  	display: block; /* this makes the dropdown menu stay open while hovering it */
  	min-width: auto;
  	animation: fadeDropdown 0.2s; /* required for the fade animation */
  }

  @keyframes fadeDropdown {
      0% {
          opacity: 0;
      }

      100% {
          opacity: 1;
      }
  }

  .navbar-custom .dropdown-toggle:focus { /* removes dropdown outline on focus  */
  	outline: 0;
  }

  .navbar-custom .dropdown-menu {
  	margin-top: 0;
  	border: none;
  	border-radius: 0.25rem;
  	background-color: #262431;
  }

  .navbar-custom .dropdown-item {
  	color: #fff;
  	text-decoration: none;
  }

  .navbar-custom .dropdown-item:hover {
  	background-color: #262431;
  }

  .navbar-custom .dropdown-item .item-text {
  	font: 700 0.75rem/1.5rem "Montserrat", sans-serif;
  }

  .navbar-custom .dropdown-item:hover .item-text {
  	color: #cfd200;
  }

  .navbar-custom .dropdown-items-divide-hr {
  	width: 100%;
  	height: 1px;
  	margin: 0.25rem auto 0.25rem auto;
  	border: none;
  	background-color: #b5bcc4;
  	opacity: 0.2;
  }
  /* end of dropdown menu */

  .navbar-custom .social-icons {
  	display: none;
  }

  .navbar-custom .navbar-toggler {
  	border: none;
  	color: #fff;
  	font-size: 2rem;
  }

  .navbar-custom button[aria-expanded='false'] .navbar-toggler-awesome.fas.fa-times{
  	display: none;
  }

  .navbar-custom button[aria-expanded='false'] .navbar-toggler-awesome.fas.fa-bars{
  	display: inline-block;
  }

  .navbar-custom button[aria-expanded='true'] .navbar-toggler-awesome.fas.fa-bars{
  	display: none;
  }

  .navbar-custom button[aria-expanded='true'] .navbar-toggler-awesome.fas.fa-times{
  	display: inline-block;
  	margin-right: 0.125rem;
  }

  @media (min-width: 768px) {
    .navbar-custom {
  		padding: 2.125rem 1.5rem 2.125rem 2rem;
  		box-shadow: none;
          background: transparent;
  	}

  	.navbar-custom .navbar-brand.logo-text {
  		color: #fff;
  	}

  	.navbar-custom .navbar-nav {
  		margin-top: 0;
  	}

  	.navbar-custom .nav-item .nav-link {
  		padding: 0.25rem 0.75rem 0.25rem 0.75rem;
  		color: #fff;
  	}

  	.navbar-custom .nav-item .nav-link:hover,
  	.navbar-custom .nav-item .nav-link.active {
  		color: #cfd200;
  	}

  	.navbar-custom.top-nav-collapse {
      padding: 0.5rem 1.5rem 0.5rem 2rem;
  		box-shadow: 0 0.0625rem 0.375rem 0 rgba(0, 0, 0, 0.1);
  		background-color: #262431;
  	}

  	.navbar-custom.top-nav-collapse .navbar-brand.logo-text {
  		color: #fff;
  	}

  	.navbar-custom.top-nav-collapse .nav-item .nav-link {
  		color: #fff;
  	}

  	.navbar-custom.top-nav-collapse .nav-item .nav-link:hover,
  	.navbar-custom.top-nav-collapse .nav-item .nav-link.active {
  		color: #cfd200;
  	}

  	.navbar-custom .dropdown-menu {
  		box-shadow: 0 0.25rem 0.375rem 0 rgba(0, 0, 0, 0.03);
  	}

  	.navbar-custom .dropdown-item {
  		padding-top: 0.25rem;
  		padding-bottom: 0.25rem;
  	}

  	.navbar-custom .dropdown-items-divide-hr {
  		width: 84%;
  	}

    @media (min-width: 992px) {
      .navbar-custom .social-icons {
        display: block;
        margin-left: 0.5rem;
      }

      .navbar-custom .fa-stack {
        margin-bottom: 0.1875rem;
        margin-left: 0.375rem;
        font-size: 0.75rem;
      }

      .navbar-custom .fa-stack-2x {
        color: #cfd200;
        transition: all 0.2s ease;
      }

      .navbar-custom .fa-stack-1x {
        color: #fff;
        transition: all 0.2s ease;
      }

      .navbar-custom .fa-stack:hover .fa-stack-2x {
        color: #fff;
      }

      .navbar-custom .fa-stack:hover .fa-stack-1x {
        color: #cfd200;
      }
    }

    @media (min-width: 1200px) {
      .navbar-custom {
        padding: 2.125rem 5rem 2.125rem 5rem;
      }

      .navbar-custom.top-nav-collapse {
            padding: 0.5rem 5rem 0.5rem 5rem;
      }
    }
  }
</style>
