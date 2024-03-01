<script>
  let starCount = [ 0, 1, 2, 3, 4, 5 ]

  let starColors = [ 'SSS', 'SS', 'S', 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]

  let starTypes = [ 'Full', 'Empty', 'Pig', 'Snek', 'Black', 'White' ]

  let starCnt = 0;
  let starColor = 'C';
  let starType = 'Full';

  let selectedValue = `/star/${starType}/${starColor}.png`;

  export { selectedValue as value };
  export { starCnt as count };
</script>

<label>Gwiazdki: <select bind:value={starCnt} on:change={() => selectedValue = `/star/${starType}/${starColor}.png` }>
  {#each starCount as value}<option {value}>{value}</option>{/each}
</select></label>

<label>Kolor: <select bind:value={starColor} on:change={() => selectedValue = `/star/${starType}/${starColor}.png` }>
  {#each starColors as value}<option {value}>{value}</option>{/each}
</select></label>

<label>Typ: <select bind:value={starType} on:change={() => selectedValue = `/star/${starType}/${starColor}.png` }>
  {#each starTypes as value}<option {value}>{value}</option>{/each}
</select></label>