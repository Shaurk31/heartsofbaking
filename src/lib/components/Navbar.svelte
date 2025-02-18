<script>
  import { colors } from "$lib/color.js";
  import { menu } from "$lib/menu.js";
  import { faInstagram } from '@fortawesome/free-brands-svg-icons';
  import { FontAwesomeIcon } from '@fortawesome/svelte-fontawesome';
  let isSidebarOpen = false;
  let isOrderPopupOpen = false;

  const menuItems = Object.keys(menu).map(key => ({
    id: key,
    // @ts-ignore
    title: menu[key].title,
  }));

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

<nav class="p-4 flex items-center justify-between font-jua relative gap-2 flex-nowrap overflow-hidden"
     style="background-color: {colors.navbarBackground}; color: {colors.navbarText}; white-space: nowrap;">
  
  <!-- Menu Button -->
  <button
    class="text-lg font-bold flex-shrink-0 min-w-[60px]"
    on:click={() => (isSidebarOpen = !isSidebarOpen)}
  >
    ≡ menu
  </button>

  <!-- Logo / Title (Hides if it can't fit) -->
  <h1 class="text-xl font-semibold text-center flex-grow text-nowrap overflow-hidden sm:block hidden">@heartsofbaking</h1>

  <!-- Right Section: Instagram & Order Button -->
  <div class="flex items-center gap-2 flex-nowrap">
    <!-- Instagram Button -->
    <a
      href="https://www.instagram.com/heartsofbaking/"
      target="_blank"
      class="rounded-md p-1 hover:bg-pink-600 transition flex items-center justify-center flex-shrink-0"
      style="background-color: {colors.navbarHover}"
      aria-label="Instagram"
    >
      <FontAwesomeIcon icon={faInstagram} class="text-white w-7 h-7" />
    </a>

    <!-- Order Now Button -->
    <button
      class="px-4 py-2 rounded-lg hover:bg-pink-600 transition flex-shrink-0"
      style="background-color: {colors.buttonBackground}; color: {colors.buttonText}"
      on:click={openOrderPopup}
      on:mouseenter={(e) => (e.currentTarget.style.backgroundColor = colors.buttonHover)}
      on:mouseleave={(e) => (e.currentTarget.style.backgroundColor = colors.buttonBackground)}
    >
      Order Now!
    </button>
  </div>

  <!-- Sidebar -->
  <div
    class="fixed top-4 left-4 h-auto w-[250px] shadow-lg z-50 p-6 rounded-lg transition-transform duration-300"
    style="background-color: {colors.sidebarBackground}; transform: translateX({isSidebarOpen ? '0' : '-110%'}); opacity: {isSidebarOpen ? 1 : 0};"
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
      {#each menuItems as item}
        <li>
          <button
            class="text-lg font-jua hover:underline break-words whitespace-normal w-full"
            on:click={() => scrollToSection(item.id)}
            style="color: {colors.sidebarText}"
          >
            {item.title}
          </button>
        </li>
      {/each}
    </ul>
    

  <!-- Order Popup (broken)
  {#if isOrderPopupOpen}
    <div class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center"
         style="background-color: {colors.popupOverlay}">
      <div class="p-8 rounded-lg shadow-lg max-w-lg w-full font-jua"
           style="background-color: {colors.popupBackground}; color: {colors.popupText}">
        <h2 class="text-2xl font-bold mb-4">Place Your Order</h2>

        <p class="mb-4">
          To place an order, please contact us via 
          <a 
            href="https://www.instagram.com/heartsofbaking/" 
            target="_blank" 
            class="text-pink-500 underline hover:text-pink-700 transition"
            style="color: {colors.navbarHover}"
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
            class="px-4 py-2 rounded-lg transition"
            style="background-color: {colors.buttonBackground}; color: {colors.buttonText}"
            on:click={closeOrderPopup}
          >
            Cancel
          </button>
        </div>
      </div>
    
    </div>
  {/if}
  -->
</nav>
