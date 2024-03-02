<script>
  import Stars from './lib/StarSettings.svelte';

  import Cropper from "svelte-easy-crop";
	import { getCroppedImg } from "./lib/CanvasUtils.js"

  import logo       from '/pwlogo.png'
  import cardboard  from './assets/empty.png'
  import def        from './assets/shield.png'
  import fire       from './assets/fire.png'
  import health     from './assets/heart.png'

  let borders = [ 'SSS', 'SS', 'S', 'A', 'B', 'C', 'D', 'E' ]

  let deres = [ 'Bodere', 'Dandere', 'Deredere', 'Kamidere', 'Kuudere', 'Mayadere',
    'Tsundere', 'Yandere', 'Raito', 'Yami', 'Yato' ]

  let image = "https://sanakan.pl/i/ss/fga432a.png";
  let customBorder = "";
  let showStats = false;
  let editMode = false;

  let starCntComp = 0;
  let selectedStarComp;
  let selectedBorder =  'C';
  let selectedDere = 'Kamidere';

  async function downloadImage() {
    const croppedImage = await getCroppedImg(image, pixelCrop);
    const downloadLink = document.createElement("a");
    downloadLink.href = croppedImage;
    downloadLink.download = "skalpelek.png";
    downloadLink.click();
	}

  let pixelCrop, profilePicture, style, borderColor;

  function previewCrop(e) {
		pixelCrop = e.detail.pixels;
		const { x, y, width } = e.detail.pixels;
		const scale = 448 / width;

    const hd = -y*scale;
    const wd = -x*scale - 448 / 2;
    const wdn = profilePicture.naturalWidth * scale;

    if (pixelCrop.width < 448 || pixelCrop.height < 650) {
      borderColor = "#ff6242";
    } else {
      borderColor = "#242424";
    }

		profilePicture.style=`margin: ${hd}px 0 0 ${wd}px; width: ${wdn}px;`
	}
</script>

<main>

  <div>
    <a href="https://sanakan.pl" target="_blank" rel="noreferrer"> <img src={logo} class="logo" alt="Logo" /> </a>
  </div>

  <div class="selector">
    <label>Ramka: <select bind:value={selectedBorder} >
      {#each borders as value}<option {value}>{value}</option>{/each}
    </select></label>

    <label>&nbsp;&nbsp;Dere: <select id="dere-select" bind:value={selectedDere} >
      {#each deres as value}<option {value}>{value}</option>{/each}
    </select></label>
  </div>

  <div class="selector">
    <Stars bind:value={selectedStarComp} bind:count={starCntComp}/>
  </div>

  <div class="selector">
    <label>Link do obrazka: <input bind:value={image} /> </label>
    <label>Link do ramki:&nbsp;&nbsp;&nbsp;&nbsp; <input bind:value={customBorder} /> </label>
    <label>Pokaż statystyki: <input type="checkbox" bind:checked={showStats} /> </label>
    <label class="exp">Tryb edycji(wip): <input type="checkbox" bind:checked={editMode} on:change={() => borderColor = "#242424"} /> </label>
  </div>
  <div class="looks" style="border-color: {borderColor};" >
    <img src={cardboard} class="cardboard" alt="Cardboard" />
    {#if editMode}
      <div class="wrapper">
        <img bind:this={profilePicture} src={image} class="wrapper_img" alt="Scalpel" style={style}/>
      </div>
    {:else}
      <img src={image} class="scalp" alt="Scalpel" />
    {/if}
      {#if customBorder}
        <img src={customBorder} class="border" alt="Border" />
      {:else}
        <img src="/borders/{selectedBorder}.png" class="border" alt="Border" />
        <img src="/dere/{selectedDere}.png" class="stats" alt="Dere" />

        {#if showStats}
          <img src={def} class="stats" alt="Defense" />
          <img src={fire} class="stats" alt="Attack" />
          <img src={health} class="stats" alt="Health" />
        {/if}

        {#if starCntComp > 0}
          {#each {length: starCntComp} as _, i}
            <img src={selectedStarComp} class="star" alt="Star" style="left: {239 - (18 * starCntComp) + (36 * i)}px;"/>
          {/each}
        {/if}

      {/if}
  </div>
  {#if editMode}
  <div style="padding: 0.5em;">
    <button type="button" on:click={async () => {downloadImage()}}>Zapisz</button>
  </div>
    <div class="canva">
      <Cropper {image} crop={{x:0, y:0}} zoom={1} zoomSpeed={0.2} cropSize={{width:448, height:650}} restrictPosition={true} on:cropcomplete={previewCrop} />
    </div>
  {/if}
</main>

<style>
  .logo {
    height: 6em;
    will-change: filter;
    transition: filter 300ms;
  }
  .looks {
    position: relative;
    width: 475px;
    height: 667px;
    border: 3px;
    border-color: #242424;
    border-style: solid;
  }
  .canva {
    position: absolute;
    width: 475px;
    height: 667px;
  }
  .cardboard {
    position: absolute;
    top: 13px;
    left: 13px;
  }
  .wrapper {
    position: absolute;
    top: 13px;
    left: 13px;
    width: 448px;
    height: 650px;
    overflow: hidden;
  }
  .exp {
    color: #ff6242;
  }
  .wrapper_img {
    position: absolute;
  }
  .scalp {
    position: absolute;
    top: 13px;
    left: 13px;
    width: 448px;
    height: auto;
    clip-path: xywh(0 0 100% 650px);
  }
  .border {
    position: relative;
  }
  .star {
    position: absolute;
    top: 30px;
  }
  .stats {
    position: absolute;
    top: 0px;
    left: 0px;
  }
  .selector {
    width: 475px;
    padding-bottom: 1em;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
</style>
