<script>
    import Navbar from '../lib/components/Navbar.svelte';
    import Footer from '../lib/components/Footer.svelte';
    import CookieCard from '../lib/components/CookieCard.svelte';
  </script>
  
  <div class="bg-[#fefefe] w-full overflow-x-hidden">
    <!-- Navbar -->
    <Navbar />
  
    <!-- Main Content -->
    <main class="space-y-40 py-20 min-h-screen">
      <div class="pt-20">
        <!-- Card with Image on the Left -->
        <CookieCard
          title="Hot Cocoa Cookies"
          description="Rich, fudgy treat topped with gooey marshmallow and cocoa powder."
          image="hotcocoacookies.png"
          position="left"
          hoverColor="#3e2d05"
        />
      </div>
      <div class="pb-20">
        <!-- Card with Image on the Right -->
        <CookieCard
          title="Peppermint Cupcakes"
          description="Moist chocolate cupcakes with peppermint frosting."
          image="peppermintcupcakes.png"
          position="right"
          hoverColor="#bc4e3d"
        />
      </div>
    </main>
  
    <!-- Footer -->
    <Footer />
  </div>
  