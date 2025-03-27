<script lang="ts">
  import Linkedin from "./../shared/assets/LinkedIn.png";
  import Github from "./../shared/assets/Github.png";
</script>

<div class="h-full w-screen element">
  <div class="bg-white absolute z-10"></div>
  <div class="wrap h-[80%]">
    <div class="h-full w-screen shadow-xl pattern">
      <div class="gradient" />
      <div class="h-full bg-repeat move" />
    </div>
  </div>
  <div class="info-modal">
    <div class="flex flex-col justify-between items-center h-full">
      <h1>Bea</h1>
      <div class="flex flex-row gap-4">
        <a
          class="info-button"
          href="https://github.com/B-E-A-F"
          target="_blank"
        >
          <img src={Github} alt="icon for twitter" class="w-6 h-6" />
        </a>
        <a
          class="info-button"
          href="https://linkedin.com/in/beaarcher"
          target="_blank"
        >
          <img src={Linkedin} alt="icon for twitter" />
        </a>
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  @font-face {
    font-family: "KenneyPixel";
    src: url("./../shared/assets/Kenney_Pixel.ttf");
  }

  :global(html) {
    height: 100%;
    background-color: #f0f0f3;
  }

  :global(body) {
    height: 100%;
    cursor: url("./../shared/assets/hand_small_point.png"), auto;
    font-family: "KenneyPixel";
  }

  @keyframes pan {
    from {
      background-position: 0 0;
    }
    to {
      background-position: 100% 0;
    }
  }

  .move {
    background-image: url("./../shared/assets/pattern.png");
    animation: pan 180s linear infinite;
  }

  .wrap {
    filter: drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5));
  }

  .pattern {
    background: radial-gradient(#404040, #262626);
    clip-path: polygon(
      0 0,
      100% 0,
      100% 98%,
      99% 99%,
      98% 98%,
      97% 99%,
      96% 98%,
      95% 99%,
      94% 98%,
      93% 99%,
      92% 98%,
      91% 99%,
      90% 98%,
      89% 99%,
      88% 98%,
      87% 99%,
      86% 98%,
      85% 99%,
      84% 98%,
      83% 99%,
      82% 98%,
      81% 99%,
      80% 98%,
      79% 99%,
      78% 98%,
      77% 99%,
      76% 98%,
      75% 99%,
      74% 98%,
      73% 99%,
      72% 98%,
      71% 99%,
      70% 98%,
      69% 99%,
      68% 98%,
      67% 99%,
      66% 98%,
      65% 99%,
      64% 98%,
      63% 99%,
      62% 98%,
      61% 99%,
      60% 98%,
      59% 99%,
      58% 98%,
      57% 99%,
      56% 98%,
      55% 99%,
      54% 98%,
      53% 99%,
      52% 98%,
      51% 99%,
      50% 98%,
      49% 99%,
      48% 98%,
      47% 99%,
      46% 98%,
      45% 99%,
      44% 98%,
      43% 99%,
      42% 98%,
      41% 99%,
      40% 98%,
      39% 99%,
      38% 98%,
      37% 99%,
      36% 98%,
      35% 99%,
      34% 98%,
      33% 99%,
      32% 98%,
      31% 99%,
      30% 98%,
      29% 99%,
      28% 98%,
      27% 99%,
      26% 98%,
      25% 99%,
      24% 98%,
      23% 99%,
      22% 98%,
      21% 99%,
      20% 98%,
      19% 99%,
      18% 98%,
      17% 99%,
      16% 98%,
      15% 99%,
      14% 98%,
      13% 99%,
      12% 98%,
      11% 99%,
      10% 98%,
      9% 99%,
      8% 98%,
      7% 99%,
      6% 98%,
      5% 99%,
      4% 98%,
      3% 99%,
      2% 98%,
      1% 99%,
      0 98%
    );
  }

  .gradient {
    height: 100%;
    width: 100%;
    position: absolute;
    background: radial-gradient(transparent, #404040);
  }

  .element {
    background-size: 18px 18px;
    background-image: linear-gradient(
      -45deg,
      #fafafa 25%,
      #dbcdf0 25%,
      #dbcdf0 50%,
      #fafafa 50%,
      #fafafa 75%,
      #dbcdf0 75%,
      #dbcdf0 100%
    );
    animation: pan 360s linear infinite;
  }

  .info-modal {
    position: absolute;
    z-index: 10;
    top: 100%; /* Start from the bottom of the screen */
    left: 50%;
    transform: translate(-50%, 0);
    background-color: white;
    padding: 1rem;
    border: 3px solid black; /* Adjust as needed */
    border-top-right-radius: 25px; /* Adjust as needed */
    border-bottom-left-radius: 25px; /* Adjust as needed */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    animation: slide-in 1s forwards;
    background-size: 50px 50px;
    height: 250px;
    width: 400px;
    background-image: linear-gradient(
      #18181b 25%,
      #27272a 25%,
      #27272a 50%,
      #18181b 50%,
      #18181b 75%,
      #27272a 75%,
      #27272a 100%
    );
    color: white;
    font-size: 2rem;
    text-shadow:
      -1px 0 black,
      0 1px black,
      1px 0 black,
      0 -1px black;
  }

  @keyframes slide-in {
    0% {
      top: 100%;
      transform: translate(-50%, 0);
    }
    100% {
      top: 35%;
      transform: translate(-50%, -50%);
    }
  }

  .info-button {
    border: 2px solid transparent; /* Inner transparent border */
    padding: 0.375rem;
    border-radius: 0.25rem;
    background-color: white;
    box-shadow: 0 0 0 2px white; /* Outer black border */
    background-clip: padding-box;
    transition: transform 0.3s ease;
    cursor: inherit;
  }

  .info-button:hover {
    transform: scale(1.1);
  }
</style>
