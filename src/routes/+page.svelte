<script>
    import Navbar from '../lib/components/Navbar.svelte';
    import Footer from '../lib/components/Footer.svelte';
    import CookieCard from '../lib/components/CookieCard.svelte';
  </script>
  
  <div class="bg-[#CDF4F6] w-full overflow-x-hidden">
    <!-- Navbar -->
    <Navbar />
  
    <!-- Main Content -->
    <main class="space-y-12 py-20 min-h-screen">
      <div class="pt-20">
        <!-- Card with Image on the Left -->
        <CookieCard
          title="Hot Cocoa Cookies"
          description="Rich fudgy treat topped with gooey marshmallow and cocoa powder."
          image="hotcocoacookies.png"
          position="left"
        />
      </div>
      <div class="pb-20">
        <!-- Card with Image on the Right -->
        <CookieCard
          title="Peppermint Cupcakes"
          description="Moist chocolate cupcakes with peppermint frosting."
          image="peppermintcupcakes.png"
          position="right"
        />
      </div>
    </main>
  
    <!-- Footer -->
    <Footer />
  </div>
  