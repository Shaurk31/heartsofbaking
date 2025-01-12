<script>
  let isSidebarOpen = false;
  let isOrderPopupOpen = false;

  // Scroll to the specific cookie card
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
  
  <!-- Order Now Button -->
  <button
    class="bg-pink-500 text-white px-4 py-2 rounded-lg hover:bg-pink-600 transition"
    on:click={openOrderPopup}
  >
    Order Now!
  </button>

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
          on:click={() => scrollToSection('hot-cocoa-cookies')}
        >
          Hot Cocoa Cookies
        </button>
      </li>
      <li>
        <button
          class="text-lg font-jua hover:underline"
          on:click={() => scrollToSection('peppermint-cupcakes')}
        >
          Peppermint Cupcakes
        </button>
      </li>
    </ul>
  </div>

  <!-- Order Popup -->
  {#if isOrderPopupOpen}
    <div class="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
      <div class="bg-[#F3C0C0] p-8 rounded-lg shadow-lg max-w-lg w-full font-jua">
        <h2 class="text-2xl font-bold mb-4">Place Your Order</h2>
        
        <form on:submit|preventDefault={() => alert('Order Submitted!')}>
          <!-- Cookie Selection -->
          <div class="mb-4">
            <label for="cookie" class="block text-left mb-2">Select a Cookie</label>
            <select
              id="cookie"
              class="w-full px-4 py-2 rounded-lg bg-white shadow-sm"
              required
            >
              <option value="" disabled selected>Select a cookie</option>
              <option value="Hot Cocoa Cookies">Hot Cocoa Cookies</option>
              <option value="Peppermint Cupcakes">Peppermint Cupcakes</option>
            </select>
          </div>

          <!-- Quantity Selection -->
          <div class="mb-4">
            <label for="quantity" class="block text-left mb-2">Select Quantity</label>
            <select
              id="quantity"
              class="w-full px-4 py-2 rounded-lg bg-white shadow-sm"
              required
            >
              <option value="" disabled selected>Select quantity</option>
              {#each Array.from({ length: 10 }, (_, i) => i) as num}
                <option value={num}>{num}</option>
              {/each}
            </select>
          </div>

          <!-- Delivery Address -->
          <div class="mb-4">
            <label for="address" class="block text-left mb-2">Delivery Address</label>
            <textarea
              id="address"
              rows="3"
              class="w-full px-4 py-2 rounded-lg bg-white shadow-sm"
              placeholder="Enter your delivery address"
              required
            ></textarea>
          </div>

          <!-- Payment Information -->
          <p class="text-left mb-4">
            Please make your payment via:
            <br />
            PayPal: <strong>h3artsofbaking@gmail.com</strong>
            <br />
            Venmo: <strong>h3artsofbaking</strong>
          </p>

          <!-- Submit Button -->
          <div class="flex justify-between">
            <button
              type="button"
              class="bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-500 transition"
              on:click={closeOrderPopup}
            >
              Cancel
            </button>
            <button
              type="submit"
              class="bg-[#573F34] text-white px-4 py-2 rounded-lg hover:bg-[#3E2A26] transition"
            >
              Submit Order
            </button>
          </div>
        </form>
      </div>
    </div>
  {/if}
</nav>
