<script>
  // @ts-nocheck
    export let id = "";
    export let title = "Product Title";
    export let description = "Product description goes here.";
    export let image = ""; // Add an image prop for the cookie image
    export let position = "left"; // Add a position prop with a default value of "left"
    export let hoverColor = "#5DBDD2"; // Add a hoverColor prop with a default value
    export let onOrderClick = () => {}; // Function to handle the Order Now button click
  </script>
  
  <div id={id} class="relative w-full p-10 rounded-lg flex items-center max-w-screen-xl mx-auto group transition duration-300">
    <!-- Cookie Image: Positioned to Overlay -->
    <div
      class={`absolute ${position === "left" ? "-left-70" : "-right-40"} top-1/3 transform -translate-y-1/2 -translate-x-1/4`}
    >
      <img src={image} alt={title} class="w-[400px] h-[400px] object-cover" />
    </div>
  
    <!-- Text and Button Content -->
    <div class={`flex-1 ${position === "left" ? "ml-64 text-right" : "mr-64 text-left"}`}>
      <!-- Background container with hover effect -->
      <div
        class="p-8 rounded-lg transition duration-300 group-hover:text-white"
        style="background-color: transparent; transition: background-color 0.3s;"
        on:mouseenter={(e) => (e.currentTarget.style.backgroundColor = hoverColor)}
        on:mouseleave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
      >
        <h2 class="text-5xl font-bold font-lilita mb-6 transition duration-300 group-hover:text-white">{title}</h2>
        <p class="text-xl font-lilita mb-8 transition duration-300 group-hover:text-white">{description}</p>
        <button
          class="px-8 py-4 rounded-lg text-xl font-jua transition duration-300 group-hover:bg-[#000000] group-hover:text-white"
          on:click={onOrderClick} 
        >
          Order Now!
        </button>
      </div>
    </div>
  </div>
  