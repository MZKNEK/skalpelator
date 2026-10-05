<script>
  import Stars from './lib/StarSettings.svelte';

  import Cropper from "svelte-easy-crop";
	import { getCroppedImg, getMirroredImg, cropOnScreen } from "./lib/CanvasUtils.js"

  import cardboard  from './assets/empty.png'
  import def        from './assets/shield.png'
  import fire       from './assets/fire.png'
  import health     from './assets/heart.png'

  let borders = [ 'SSS', 'SS', 'S', 'A', 'B', 'C', 'D', 'E' ]

  const pwAssetsBaseUrl = 'https://raw.githubusercontent.com/MZKNEK/sanakan/master/src/Pictures/PW';

  let deres = [ 'Bodere', 'Dandere', 'Deredere', 'Kamidere', 'Kuudere', 'Mayadere',
    'Tsundere', 'Yandere', 'Raito', 'Yami', 'Yato' ]

  let image = "https://sanakan.pl/i/ss/fga432a.png";
  let customBorder = "";
  let showStats = false;
  let editMode = false;
  let localImage = false;
  let mirrorImage = false;
  let dragOver = false;

  let starCntComp = 0;
  let selectedStarComp;
  let selectedBorder =  'C';
  let selectedDere = 'Kamidere';

  let pixelCrop, profilePicture, style, borderColor, fileinput, minzoom, curzoom;

  // the crop in % of the picture: unlike pixelCrop it is not rounded
  let cropPercent = null;
  let canvaEl;
  // what the cropper shows; its own numbers only if the screen has none
  const currentCrop = () => cropOnScreen(canvaEl) ?? cropPercent;
  // extra sharpening; without it the scaling keeps the picture as it is
  let sharpen = 0;
  const sharpenLevels = [
    { value: 0, label: 'Brak (wierne skalowanie)' },
    { value: 0.3, label: 'Lekkie' },
    { value: 0.6, label: 'Średnie (jak dawniej)' },
    { value: 1, label: 'Mocne' },
  ];

  // Real preview: the cropper shows the picture as the browser scales it, so
  // once the crop stops moving, the scaled crop of the saved file is put over it
  let realPreview = true;
  let previewUrl = '';
  let previewStale = true;
  let previewTimer;
  let previewToken = 0;

  function schedulePreview() {
    previewStale = true;
    clearTimeout(previewTimer);
    if (!editMode || !realPreview || !cropPercent) return;
    previewTimer = setTimeout(updatePreview, 200);
  }

  async function updatePreview() {
    const token = ++previewToken;
    try {
      const url = await getCroppedImg(image, currentCrop(), sharpen);
      if (token !== previewToken) { URL.revokeObjectURL(url); return; }
      if (previewUrl) URL.revokeObjectURL(previewUrl);
      previewUrl = url;
      previewStale = false;
    } catch (error) {
      // the cropper still shows the picture; saving reports the error
    }
  }

  $: sharpen, realPreview, editMode, image, schedulePreview();

  const year = new Date().getFullYear();

  async function downloadImage() {
    try {
      const croppedImage = await getCroppedImg(image, currentCrop(), sharpen);
      const downloadLink = document.createElement("a");
      downloadLink.href = croppedImage;
      downloadLink.download = "skalpelek.png";
      downloadLink.click();
    } catch (error) {
      alert("Nie udało się pobrać obrazka, spróbuj z innym lub użyj lokalnego pliku.");
    }
	}

  async function toMirrorImage() {
    try {
      const croppedImage = await getMirroredImg(image);
      image = croppedImage;
      localImage = true;
    } catch (error) {
      alert("Nie udało się pobrać obrazka, spróbuj z innym lub użyj lokalnego pliku.");
    }
  }

  function onFileSelected(e) {
    const imageFile = e.target.files[0];
    if (!imageFile) return;
    readImageFile(imageFile);
  }

  function handleDragOver(e) {
    e.preventDefault();
    dragOver = true;
    e.dataTransfer.dropEffect = 'copy';
  }

  function handleDragLeave(e) {
    e.preventDefault();
    dragOver = false;
  }

  function handleFileDrop(e) {
    e.preventDefault();
    dragOver = false;
    const imageFile = e.dataTransfer.files[0];
    if (!imageFile) return;

    const dt = new DataTransfer();
    dt.items.add(imageFile);
    fileinput.files = dt.files;
    readImageFile(imageFile);
  }

  function openFilePicker(e) {
    if (e.target instanceof HTMLInputElement) return;
    fileinput?.click();
  }

  function handleDropzoneKeydown(e) {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    e.preventDefault();
    fileinput?.click();
  }

  function readImageFile(imageFile) {
    if (!imageFile.type.startsWith('image/')) {
      alert('Proszę przeciągnąć plik obrazu JPG lub PNG.');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result;
      if (typeof result !== 'string') return;

      image = result;
      localImage = true;
      editMode = false;
      minzoom = 1;
      curzoom = 1;
    };
    reader.readAsDataURL(imageFile);
  }

  function getBorderImageUrl(border) {
    return `${pwAssetsBaseUrl}/${border}.png`;
  }

  function getDereImageUrl(dere) {
    return `${pwAssetsBaseUrl}/${dere}.png`;
  }

  function previewCrop(e) {
		pixelCrop = e.detail.pixels;
		cropPercent = e.detail.percent;
		schedulePreview();
		const { x, y, width } = e.detail.pixels;
		const scale = 448 / width;

    const hd = -y*scale;
    const wd = -x*scale - 448 / 2;
    const wdn = profilePicture.naturalWidth * scale;

    borderColor = (pixelCrop.width < 448 || pixelCrop.height < 650) ? "#e86262" : "";

    const dratio = 448 / 650;
    const nratio = profilePicture.naturalWidth / profilePicture.naturalHeight;
    const mratio = dratio / nratio;
    minzoom = mratio > 1 ? mratio : 1;
    curzoom = curzoom < minzoom ? minzoom : curzoom;

		profilePicture.style=`margin: ${hd}px 0 0 ${wd}px; width: ${wdn}px;`
	}
</script>

<header class="page-head">
  <div class="page-top">
    <a class="back hud-corners" href="https://sanakan.pl/" title="Strona główna">&larr; Sanakan</a>
  </div>
  <div class="tag" aria-hidden="true">SAFEGUARD &middot; LV.9<span class="cursor">_</span></div>
  <h1 class="hud-title">Skalpelator</h1>
</header>

<main class="content">

  <div class="selector">
    <label><div class="stext">Ramka:</div> <select bind:value={selectedBorder} >
      {#each borders as value}<option {value}>{value}</option>{/each}
    </select></label>

    <label><div class="stext">Dere:</div> <select class="nselect" bind:value={selectedDere} >
      {#each deres as value}<option {value}>{value}</option>{/each}
    </select></label>
  </div>

  <div class="selector">
    <Stars bind:value={selectedStarComp} bind:count={starCntComp}/>
  </div>

  <div class="selector fields">
    <div class="dropzone"
      role="button"
      tabindex="0"
      class:dragover={dragOver}
      on:click={openFilePicker}
      on:keydown={handleDropzoneKeydown}
      on:dragover={handleDragOver}
      on:dragenter={handleDragOver}
      on:dragleave={handleDragLeave}
      on:drop={handleFileDrop}>
      <div class="ltext">Lokalny plik:</div>
      <input type="file" accept=".jpg, .jpeg, .png, .webp, .gif" on:change={onFileSelected} bind:this={fileinput} />
    </div>
    {#if !localImage}
      <label><div class="ltext">Link do obrazka:</div> <input bind:value={image} /> </label>
    {/if}
    <label><div class="ltext">Link do ramki:</div> <input bind:value={customBorder} /> </label>
    <label><div class="ltext">Pokaż statystyki:</div> <input type="checkbox" bind:checked={showStats} /> </label>
    <label class="mirror"><div class="ltext">Odbicie lustrzane:</div> <input type="checkbox" bind:checked={mirrorImage} on:change={() => toMirrorImage()}/> </label>
    <label class="exp"><div class="ltext">Tryb edycji:</div> <input type="checkbox" bind:checked={editMode} on:change={() => borderColor = ""} /> </label>
    {#if editMode}
      <label><div class="ltext">Wyostrzenie:</div> <select bind:value={sharpen}>
        {#each sharpenLevels as level}<option value={level.value}>{level.label}</option>{/each}
      </select></label>
      <label title="Po puszczeniu kadru pokazuje go przeskalowanego dokładnie tak, jak w zapisanym pliku"><div class="ltext">Podgląd wyniku:</div> <input type="checkbox" bind:checked={realPreview} /> </label>
    {/if}
  </div>
  <div class="looks" style="border-color: {borderColor};" >
    <img src={cardboard} class="cardboard" alt="Cardboard" />
    {#if editMode}
      <div class="wrapper">
        <img bind:this={profilePicture} src={image} class="wrapper_img" alt="Scalpel" style={style}/>
      </div>
      <div class="canva" bind:this={canvaEl}>
        <Cropper {image} showGrid={false} crop={{x:0, y:0}} bind:zoom={curzoom} bind:minZoom={minzoom} maxZoom={5} zoomSpeed={0.05} cropSize={{width:448, height:650}} restrictPosition={true} on:cropcomplete={previewCrop} />
      </div>
      {#if realPreview && previewUrl}
        <img src={previewUrl} class="real" class:stale={previewStale} alt="" />
      {/if}
    {:else}
      <img src={image} class="scalp" alt="Scalpel" />
    {/if}
      {#if customBorder}
        <img src={customBorder} class="border" alt="Border" />
      {:else}
        <img src={getBorderImageUrl(selectedBorder)} class="border" alt="Border" />
        <img src={getDereImageUrl(selectedDere)} class="stats" alt="Dere" />

        {#if showStats}
          <img src={def} class="stats" alt="Defense" />
          <img src={fire} class="stats" alt="Attack" />
          <img src={health} class="stats" alt="Health" />
        {/if}

        {#if starCntComp > 0}
          {#each {length: starCntComp} as _, i}
            <img src={selectedStarComp} class="star" alt="Star" style="left: {239 - (19 * starCntComp) + (38 * i)}px;"/>
          {/each}
        {/if}

      {/if}
  </div>
  {#if editMode}
  <div class="editor">
    <button type="button" class="btn-go" on:click={async () => {downloadImage()}}>Zapisz</button>
  </div>
  {/if}
</main>

<footer class="site-foot"><span>&copy; 2017&ndash;{year} Sniku</span><i aria-hidden="true">&middot;</i><a href="https://sanakan.pl/privacy/">Prywatność</a></footer>

<style>
  .ltext {
    display: inline-block;
    width: 130px;
    text-align: left;
  }
  .stext {
    display: inline-block;
    padding-left: 0.5em;
    padding-right: 0.2em;
  }
  /* one option per row: the name on the left, the field filling the rest */
  .fields label {
    display: flex;
    align-items: center;
    gap: 0.5em;
    margin-top: 6px;
    text-align: left;
  }
  .fields label .ltext {
    flex: 0 0 130px;
  }
  .fields label input:not([type="checkbox"]) {
    flex: 1;
    min-width: 0;
  }
  .fields .dropzone {
    margin-bottom: 8px;
  }
  .fields label input[type="checkbox"] {
    margin: 0;
  }
  .looks {
    position: relative;
    width: 475px;
    height: 667px;
  }
  .canva {
    position: absolute;
    width: 448px;
    height: 650px;
    top: 13px;
    left: 13px;
    z-index: 0;
  }
  .cardboard {
    position: absolute;
    pointer-events: none;
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
    z-index: -1;
  }
  .editor {
    padding: 1em 0.5em 0.5em;
  }
  .wrapper_img {
    position: absolute;
  }
  /* the real preview, over the cropper and under the frame; it lets the mouse
     through to the cropper and hides while the crop moves */
  .real {
    position: absolute;
    top: 13px;
    left: 13px;
    width: 448px;
    height: 650px;
    pointer-events: none;
    z-index: 0;
  }
  .real.stale {
    visibility: hidden;
  }
  .scalp {
    position: absolute;
    top: 13px;
    left: 13px;
    width: 448px;
    height: auto;
    pointer-events: none;
    clip-path: xywh(0 0 100% 650px);
  }
  .border {
    position: relative;
    pointer-events: none;
    z-index: 1;
  }
  .star {
    position: absolute;
    pointer-events: none;
    z-index: 3;
    top: 30px;
  }
  .stats {
    position: absolute;
    pointer-events: none;
    z-index: 3;
    top: 0px;
    left: 0px;
  }
  .selector {
    width: 475px;
    padding-bottom: 1em;
  }
</style>
