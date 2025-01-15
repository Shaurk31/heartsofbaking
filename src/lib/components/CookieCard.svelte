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

<div
  id={id}
  class="relative w-full p-4 md:p-10 rounded-lg flex flex-col md:flex-row items-center max-w-screen-xl mx-auto group transition duration-300"
>
  <!-- Cookie Image: Positioned to Overlay -->
  <div
    class={`absolute ${position === "left" ? "md:-left-0" : "md:-right-40"} top-1/3 transform -translate-y-1/2 -translate-x-1/4 hidden md:block`}
    style="width: auto; max-width: 400px; height: auto;"
  >
    <img
      src={image}
      alt={title}
      class="object-contain w-full h-auto"
      draggable="false"
    />
  </div>

  <!-- Responsive Image for Smaller Screens -->
  <div class="block md:hidden mb-4">
    <img
      src={image}
      alt={title}
      class="object-contain w-1/2 mx-auto"
      draggable="false"
    />
  </div>

  <!-- Text and Button Content -->
  <div class={`flex-1 ${position === "left" ? "md:ml-64 text-center md:text-right" : "md:mr-64 text-center md:text-left"}`}>
    <!-- Background container with hover effect -->
    <div
      class="p-4 md:p-8 rounded-lg transition duration-300 group-hover:text-white"
      style="background-color: transparent; transition: background-color 0.3s;"
      on:mouseenter={(e) => (e.currentTarget.style.backgroundColor = hoverColor)}
      on:mouseleave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
    >
      <h2 class="text-white text-2xl sm:text-3xl md:text-5xl font-bold font-lilita mb-4 md:mb-6 transition duration-300 group-hover:text-white">
        {title}
      </h2>
      <p class="text-white text-sm sm:text-base md:text-xl font-lilita mb-4 md:mb-8 transition duration-300 group-hover:text-white">
        {description}
      </p>
      <button
        class="text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-lg text-sm sm:text-lg md:text-xl font-jua transition duration-300 group-hover:bg-[#000000] group-hover:text-white"
        on:click={onOrderClick}
      >
        Order Now!
      </button>
    </div>
  </div>
</div>
