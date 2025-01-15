<script>
  // @ts-ignore
  import Navbar from '../lib/components/Navbar.svelte';
  import Footer from '../lib/components/Footer.svelte';
  import CookieCard from '../lib/components/CookieCard.svelte';
  import { onMount } from 'svelte';

  let showImage = true;

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

<div class="bg-[#395192] w-full overflow-x-hidden">
  <!-- Navbar -->
  <Navbar />

  <!-- Collapsible Image Section -->
  <div
    class="transition-all duration-500 ease-in-out"
    style="height: {showImage ? '500px' : '0px'}; overflow: hidden;"
  >
    <img
      src="banner.png"
      alt="Banner Image"
      class="w-full object-cover h-[500px]"
      draggable="false"
    />
  </div>

  <!-- Main Content -->
  <main class="space-y-80 py-40 min-h-screen">
    <div class="pt-20">
      <CookieCard
      id="tiramisu-cups"
      title="$5 | Tiramisu Cups (1)"
      description="Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      image="tiramisu.png"
      position="left"
      hoverColor="#77562c"
      onOrderClick={openOrderPopup}
    /> <div/>
    <div class="pt-20">
    <CookieCard
      id="vegan-brownies"
      title="$4 | Vegan Brownies (2)"
      description="Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      image="brownie.png"
      position="right"
      hoverColor="#3e2d05"
      onOrderClick={openOrderPopup}
    /><div/>
    <div class="pt-20">
      <CookieCard
      id="cheesecakes"
      title="$4 | Cheesecakes (2)"
      description="Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      image="cheesecakes.png"
      position="left"
      hoverColor="#cab394"
      onOrderClick={openOrderPopup}
    /><div/>
    <div class="pt-20">
    <CookieCard
      id="vegan-cookies"
      title="$5 | Vegan Chocolate Chip Cookies (3)"
      description="Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      image="cookie.png"
      position="right"
      hoverColor="#946f4d"
      onOrderClick={openOrderPopup}
    /><div/>
  </main>

  <!-- Footer -->
  <Footer />

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

        <button
          type="button"
          class="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition mt-4"
          on:click={closeOrderPopup}
        >
          Close
        </button>
      </div>
    </div>
  {/if}

  <!-- Scroll to Top Button -->
  {#if showBackToTop}
    <button
      class=" font-jua fixed bottom-8 right-8 bg-pink-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-pink-600 transition"
      on:click={scrollToTop}
    >
      ↑ Back to Top
    </button>
  {/if}
</div>
