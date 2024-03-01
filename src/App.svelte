<script>
  import Stars from './lib/StarSettings.svelte';

  import logo       from '/pwlogo.png'
  import cardboard  from './assets/empty.png'
  import def        from './assets/shield.png'
  import fire       from './assets/fire.png'
  import health     from './assets/heart.png'

  let borders = [ 'SSS', 'SS', 'S', 'A', 'B', 'C', 'D', 'E' ]

  let deres = [ 'Bodere', 'Dandere', 'Deredere', 'Kamidere', 'Kuudere', 'Mayadere',
    'Tsundere', 'Yandere', 'Raito', 'Yami', 'Yato' ]

    let image = "https://sanakan.pl/i/ss/fga432a.png";
    let showStats = false;

    let starCntComp = 0;
    let selectedStarComp;
    let selectedBorder =  'C';
    let selectedDere = 'Kamidere';
</script>

<main>

  <div>
    <a href="https://sanakan.pl" target="_blank" rel="noreferrer"> <img src={logo} class="logo" alt="Logo" /> </a>
  </div>

  <div class="selector">
    <label>Ramka: <select bind:value={selectedBorder} >
      {#each borders as value}<option {value}>{value}</option>{/each}
    </select></label>

    <label>Dere: <select id="dere-select" bind:value={selectedDere} >
      {#each deres as value}<option {value}>{value}</option>{/each}
    </select></label>
  </div>

  <div class="selector">
    <Stars bind:value={selectedStarComp} bind:count={starCntComp}/>
  </div>

  <div class="selector">
    <label>Link do obrazka: <input id="url-scalp" bind:value={image} placeholder={image} /> </label>
    <label>Pokaż statystyki: <input id="show-stats" type="checkbox" bind:checked={showStats} /> </label>
  </div>

  <div class="looks">
      <img src={cardboard} class="scalp" alt="Cardboard" />
      <img src={image} class="scalp" alt="Scalpel" />
      <img src="/borders/{selectedBorder}.png" class="border" alt="Border" />
      <img src="/dere/{selectedDere}.png" class="dere" alt="Dere" />

      {#if showStats}
        <img src={def} class="scalp" alt="Defense" />
        <img src={fire} class="scalp" alt="Attack" />
        <img src={health} class="scalp" alt="Health" />
      {/if}

      {#if starCntComp > 0}
        {#each {length: starCntComp} as _, i}
          <img src={selectedStarComp} class="star" alt="Star" style="left: {239 - (18 * starCntComp) + (36 * i)}px;"/>
        {/each}
      {/if}
  </div>

</main>

<style>
  .logo {
    height: 6em;
    will-change: filter;
    transition: filter 300ms;
  }
  .looks {
    position: relative;
  }
  .scalp {
    position: absolute;
    top: 13px;
    left: 13px;
    width: 448px;
    height: auto;
  }
  .border {
    position: relative;
  }
  .star {
    position: absolute;
    top: 30px;
  }
  .dere {
    position: absolute;
    top: 0px;
    left: 0px;
  }
  .selector {
    padding-bottom: 1em;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
</style>
