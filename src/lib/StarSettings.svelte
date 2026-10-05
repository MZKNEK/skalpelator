<script>
  import Segmented from './Segmented.svelte';

  let starCount = [ 0, 1, 2, 3, 4, 5, 6 ]

  let starColors = [ 'Bronze', 'Silver', 'Gold', 'Blue', 'Green', 'Red', 'Purple', 'Black', 'White', 'Candy', 'Vapor', 'Neon', 'Rainbow' ]

  let starShapes = [ 'Triangle', 'Rhombus', 'Pentagon',  'Star', 'DualStar' ]

  let starTypes = [ 'Full', 'Empty' ]

  const pwStarsBaseUrl = 'https://raw.githubusercontent.com/MZKNEK/sanakan/master/src/Pictures/PW/stars';

  let starCnt = 0;
  let starShape = 'Star';
  let starColor = 'Blue';
  let starType = 'Full';

  let selectedValue;
  $: selectedValue = `${pwStarsBaseUrl}/${starType}/${starColors.indexOf(starColor)+1}_${starShapes.indexOf(starShape)+1}.png`;

  export { selectedValue as value };
  export { starCnt as count };
</script>

<div class="field"><span class="label">Gwiazdki</span><Segmented bind:value={starCnt} options={starCount} label="Gwiazdki" /></div>

{#if starCnt > 0}
  <label class="field"><span class="label">Kształt</span><select bind:value={starShape}>
    {#each starShapes as value}<option {value}>{value}</option>{/each}
  </select></label>

  <label class="field"><span class="label">Kolor</span><select bind:value={starColor}>
    {#each starColors as value}<option {value}>{value}</option>{/each}
  </select></label>

  <div class="field"><span class="label">Typ</span><Segmented bind:value={starType} options={starTypes} label="Typ gwiazdek" words /></div>
{/if}
