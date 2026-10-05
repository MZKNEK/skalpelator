<script>
  import Segmented from './Segmented.svelte';
  import Select from './Select.svelte';

  let starCount = [ 0, 1, 2, 3, 4, 5, 6 ]

  let starColors = [ 'Bronze', 'Silver', 'Gold', 'Blue', 'Green', 'Red', 'Purple', 'Black', 'White', 'Candy', 'Vapor', 'Neon', 'Rainbow' ]

  let starShapes = [ 'Triangle', 'Rhombus', 'Pentagon',  'Star', 'DualStar' ]

  let starTypes = [ 'Full', 'Empty' ]

  const pwStarsBaseUrl = 'https://raw.githubusercontent.com/MZKNEK/sanakan/master/src/Pictures/PW/stars';

  let starCnt = 0;
  let starShape = 'Star';
  let starColor = 'Blue';
  let starType = 'Full';

  // the star of a shape and colour, as the bot draws it
  const starIcon = (shape, color, type) => `background-image: url(${pwStarsBaseUrl}/${type}/${starColors.indexOf(color)+1}_${starShapes.indexOf(shape)+1}.png);`;

  let selectedValue;
  $: selectedValue = `${pwStarsBaseUrl}/${starType}/${starColors.indexOf(starColor)+1}_${starShapes.indexOf(starShape)+1}.png`;

  export { selectedValue as value };
  export { starCnt as count };
</script>

<div class="field"><span class="label">Gwiazdki</span><Segmented bind:value={starCnt} options={starCount} label="Gwiazdki" /></div>

{#if starCnt > 0}
  <div class="field"><span class="label">Kształt</span><Select bind:value={starShape} options={starShapes} label="Kształt gwiazdek" layout="grid"
    icon={(shape) => starIcon(shape, starColor, starType)} /></div>

  <div class="field"><span class="label">Kolor</span><Select bind:value={starColor} options={starColors} label="Kolor gwiazdek" layout="grid"
    icon={(color) => starIcon(starShape, color, starType)} /></div>

  <div class="field"><span class="label">Typ</span><Segmented bind:value={starType} options={starTypes} label="Typ gwiazdek" words /></div>
{/if}
