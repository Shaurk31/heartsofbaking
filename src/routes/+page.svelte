<script>
  // @ts-ignore
  import Navbar from '../lib/components/Navbar.svelte';
  import Footer from '../lib/components/Footer.svelte';
  import CookieCard from '../lib/components/CookieCard.svelte';
  import { onMount } from 'svelte';
  import { colors } from "$lib/color.js";
  import { menu } from "$lib/menu.js";

  let showImage = true;
  let menuArray = Object.values(menu);

  // Handle scroll to collapse the image
  const handleScroll2 = () => {
    showImage = window.scrollY < 200; // Hide the image after 200px of scrolling
    showBackToTop = window.scrollY > 300; // Show back-to-top button after scrolling 300px
  };

  onMount(() => {
    window.addEventListener('scroll', handleScroll2);
    return () => window.removeEventListener('scroll', handleScroll2);
  });

  let isOrderPopupOpen = false;

  // Function to open the popup
  const openOrderPopup = () => {
    isOrderPopupOpen = true;
  };

  // Function to close the popup
  const closeOrderPopup = () => {
    isOrderPopupOpen = false;
  };

  let showBackToTop = false;

  // Function to scroll back to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
</script>

<div class="w-full overflow-x-hidden" style="background-color: {colors.pageBackground}">
  <!-- Navbar -->
  <Navbar />

  <!-- Collapsible Image Section -->
  <div class="w-full relative">
    <img
      src="banner.png"
      alt="Banner Image"
      class="w-full h-[30vh] md:h-[500px] object-cover"
      draggable="false"
    />
  </div>
  

  <!-- Main Content -->
  <main class="py-20 min-h-screen">
    <!-- Manually setting the first item without additional spacing -->
    {#if menuArray.length > 0}
      <div class="pt-10">
        <CookieCard
          id={menuArray[0].id}
          title={menuArray[0].title}
          description={menuArray[0].description}
          image={menuArray[0].image}
          position={menuArray[0].position}
          hoverColor={menuArray[0].hoverColor}
          onOrderClick={openOrderPopup}
        />
      </div>
    {/if}

    <!-- Dynamically render the rest of the items with the correct spacing -->
    {#each menuArray.slice(1) as item}
      <div class="pt-20">
        <CookieCard
          id={item.id}
          title={item.title}
          description={item.description}
          image={item.image}
          position={item.position}
          hoverColor={item.hoverColor}
          onOrderClick={openOrderPopup}
        />
      </div>
    {/each}
  </main>

  <!-- Footer -->
  <Footer />

  <!-- Order Popup -->
  {#if isOrderPopupOpen}
  <div class="fixed inset-0 z-50 flex items-center justify-center"
       style="background-color: {colors.popupOverlay}">
    <div class="p-8 rounded-lg shadow-lg max-w-lg w-full font-jua text-center"
         style="background-color: {colors.orderPopupBackground}; color: {colors.orderPopupText}">
      <h2 class="text-2xl font-bold mb-4">Place Your Order!</h2>
      <p class="mb-4">
        To place an order, please contact us via 
        <a href="https://www.instagram.com/heartsofbaking/" 
           target="_blank" 
           class="underline transition"
           style="color: {colors.navbarHover}">
          Instagram
        </a>
      </p>

     <!--<p class="mb-4">
        <strong>PayPal:</strong> h3artsofbaking@gmail.com
        <br />
        <strong>Venmo:</strong> h3artsofbaking
      </p>-->

      <!-- Centered Venmo Logo -->
      <img src="/venmo.png" 
           alt="Venmo Logo" 
           class="w-24 mx-auto mb-2" 
           draggable="false" />
           

      <!-- Venmo QR Code Image -->
      <img src="/qr code.jpg" 
           alt="Venmo QR Code" 
           class="w-40 h-40 mx-auto mb-4 rounded-lg shadow-md" 
           draggable="false" />

      <button type="button"
              class="px-4 py-2 rounded-lg transition mt-4"
              style="background-color: {colors.buttonBackground}; color: {colors.buttonText}"
              on:click={closeOrderPopup}>
        Close
      </button>
    </div>
  </div>
{/if}


  <!-- Scroll to Top Button -->
  {#if showBackToTop}
    <button class="font-jua fixed bottom-8 right-8 px-6 py-3 rounded-full shadow-lg transition"
            style="background-color: {colors.backToTopBackground}; color: {colors.backToTopText}"
            on:mouseenter={(e) => (e.currentTarget.style.backgroundColor = colors.backToTopHover)}
            on:mouseleave={(e) => (e.currentTarget.style.backgroundColor = colors.backToTopBackground)}
            on:click={scrollToTop}>
      ↑ Back to Top
    </button>
  {/if}
</div>
