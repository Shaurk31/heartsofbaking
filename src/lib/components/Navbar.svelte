<script>
  import { faInstagram } from '@fortawesome/free-brands-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  let isSidebarOpen = false;
  let isOrderPopupOpen = false;

  // Scroll to the specific cookie card
  // @ts-ignore
  const scrollToSection = (id) => {
    requestAnimationFrame(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    });
  };

  // Open the order popup
  const openOrderPopup = () => {
    isOrderPopupOpen = true;
  };

  // Close the order popup
  const closeOrderPopup = () => {
    isOrderPopupOpen = false;
  };
</script>

<nav class="bg-[#F3C0C0] p-4 flex justify-between items-center font-jua relative">
  <!-- Menu Button -->
  <button
    class="text-lg font-bold"
    on:click={() => (isSidebarOpen = !isSidebarOpen)}
  >
    ≡ menu
  </button>

  <!-- Logo / Title -->
  <h1 class="text-xl font-semibold text-center">@heartsofbaking</h1>

  <div class="flex items-center space-x-2">
    <!-- Instagram Button -->
    <a
      href="https://www.instagram.com/heartsofbaking/"
      target="_blank"
      class="rounded-md bg-pink-500 p-1 hover:bg-pink-600 transition flex items-center justify-center"
      aria-label="Instagram"
    >
      <FontAwesomeIcon icon={faInstagram} class="text-white w-7 h-7" />
    </a>

    <!-- Order Now Button -->
    <button
      class="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
      on:click={openOrderPopup}
    >
      Order Now!
    </button>
  </div>

  <!-- Sidebar -->
  <div
    class="fixed top-4 left-4 h-auto w-[250px] bg-[#F3C0C0] shadow-lg z-50 p-6 rounded-lg transition-transform duration-300"
    style="transform: translateX({isSidebarOpen ? '0' : '-110%'}); opacity: {isSidebarOpen ? 1 : 0};"
  >
    <!-- Decoration Image -->
    <img src="menu-decoration.png" alt="Menu Decoration" class="w-3/4 mx-auto mb-4" />

    <!-- Close Button -->
    <button
      class="absolute top-4 right-4 text-2xl"
      on:click={() => (isSidebarOpen = false)}
    >
      ✕
    </button>

    <!-- Menu Items -->
    <ul class="space-y-4 text-center">
      <li>
        <button
          class="text-lg font-jua hover:underline"
          on:click={() => scrollToSection('tiramisu-cups')}
        >
          $5 | Tiramisu Cups
        </button>
      </li>
      <li>
        <button
          class="text-lg font-jua hover:underline"
          on:click={() => scrollToSection('vegan-brownies')}
        >
          $4 | Vegan Brownies
        </button>
      </li>
      <li>
        <button
          class="text-lg font-jua hover:underline"
          on:click={() => scrollToSection('cheesecakes')}
        >
          $4 | Cheesecakes
        </button>
      </li>
      <li>
        <button
          class="text-lg font-jua hover:underline"
          on:click={() => scrollToSection('vegan-cookies')}
        >
          $5 | Vegan Chocolate Chip Cookies
        </button>
      </li>
    </ul>
  </div>

  <!-- Order Popup -->
  {#if isOrderPopupOpen}
    <div class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div class="bg-[#F3C0C0] p-8 rounded-lg shadow-lg max-w-lg w-full font-jua">
        <h2 class="text-2xl font-bold mb-4">Place Your Order</h2>

        <p class="mb-4">
          To place an order, please contact us via 
          <a 
            href="https://www.instagram.com/heartsofbaking/" 
            target="_blank" 
            class="text-pink-500 underline hover:text-pink-700 transition"
            aria-label="Instagram"
          >
            Instagram
          </a>
          and use the following payment methods:
        </p>
        
        <p class="mb-4">
          <strong>PayPal:</strong> h3artsofbaking@gmail.com
          <br />
          <strong>Venmo:</strong> h3artsofbaking
        </p>


        <div class="flex justify-between">
          <button
            type="button"
            class="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
            on:click={closeOrderPopup}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  {/if}
</nav>
