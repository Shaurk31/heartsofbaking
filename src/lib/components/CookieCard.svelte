<script>
    export let title = "Product Title";
    export let description = "Product description goes here.";
    export let image = ""; // Add an image prop for the cookie image
    export let position = "left"; // Add a position prop with a default value of "left"
  </script>
  
  <div class="relative bg-[#5DBDD2] h-[400px] w-full p-10 rounded-lg flex items-center max-w-screen-xl mx-auto overflow-visible">
    <!-- Cookie Image: Positioned to Overlay -->
    <div
      class={`absolute ${position === "left" ? "-left-60" : "-right-60"} top-2/3 transform -translate-y-1/2`}
    >
      <img src={image} alt={title} class="w-[500px] h-[500px] object-cover" />
    </div>
  
    <!-- Text and Button Content -->
    <div class={`flex-1 ${position === "left" ? "ml-64 text-right" : "mr-64"}`}>
      <h2 class="text-5xl font-bold text-white mb-6">{title}</h2>
      <p class="text-xl text-white mb-8">{description}</p>
      <button class="bg-[#573F34] text-white px-8 py-4 rounded-lg text-xl hover:bg-[#3E2A26] transition">
        Order Now!
      </button>
    </div>
  </div>
  