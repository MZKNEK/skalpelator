<script>
  import logo from '/pwlogo.png'
  import cardboard from './assets/empty.png'
  import def from './assets/shield.png'
  import fire from './assets/fire.png'
  import health from './assets/heart.png'

  import srainbow from './assets/star/Rainbow.png'
  import spink from './assets/star/Pink.png'
  import sgold from './assets/star/Gold.png'
  import sorange from './assets/star/Orange.png'
  import spurple from './assets/star/Purple.png'
  import sblue from './assets/star/Blue.png'
  import sgreen from './assets/star/Green.png'
  import sgrey from './assets/star/Grey.png'
  import swhite from './assets/star/White.png'
  import sblack from './assets/star/Black.png'

  import be from './assets/borders/E.png'
  import ba from './assets/borders/A.png'
  import bb from './assets/borders/B.png'
  import bc from './assets/borders/C.png'
  import bd from './assets/borders/D.png'
  import bs from './assets/borders/S.png'
  import bss from './assets/borders/SS.png'
  import bsss from './assets/borders/SSS.png'

  import bodere from './assets/dere/Bodere.png'
  import dandere from './assets/dere/Dandere.png'
  import deredere from './assets/dere/Deredere.png'
  import kamidere from './assets/dere/Kamidere.png'
  import kuudere from './assets/dere/Kuudere.png'
  import mayadere from './assets/dere/Mayadere.png'
  import tsundere from './assets/dere/Tsundere.png'
  import yandere from './assets/dere/Yandere.png'
  import raito from './assets/dere/Raito.png'
  import yami from './assets/dere/Yami.png'
  import yato from './assets/dere/Yato.png'

  let borders = [
    { id: 'SSS', value: bsss },
    { id: 'SS',  value: bss  },
    { id: 'S',   value: bs   },
    { id: 'A',   value: ba   },
    { id: 'B',   value: bb   },
    { id: 'C',   value: bc   },
    { id: 'D',   value: bd   },
    { id: 'E',   value: be   },
  ]

  let deres = [
    { id: 'Bodere',   value: bodere   },
    { id: 'Dandere',  value: dandere  },
    { id: 'Deredere', value: deredere },
    { id: 'Kamidere', value: kamidere },
    { id: 'Kuudere',  value: kuudere  },
    { id: 'Mayadere', value: mayadere },
    { id: 'Tsundere', value: tsundere },
    { id: 'Yandere',  value: yandere  },
    { id: 'Raito',    value: raito    },
    { id: 'Yami',     value: yami     },
    { id: 'Yato',     value: yato     },
  ]

  let starTypes = [
    { id: 'SSS', value: srainbow },
    { id: 'SS',  value: spink    },
    { id: 'S',   value: sgold    },
    { id: 'A',   value: sorange  },
    { id: 'B',   value: spurple  },
    { id: 'C',   value: sblue    },
    { id: 'D',   value: sgreen   },
    { id: 'E',   value: sgrey    },
    { id: 'F',   value: swhite   },
    { id: 'G',   value: sblack   },
  ]

  let starCount = [
    0,
    1,
    2,
    3,
    4,
    5,
    6
  ]

  let starCnt = 0;
  let selectedStar = { id: 'C', value: sblue };
  let selectedBorder = { id: 'C', value: bc };
  let selectedDere = { id: 'Kamidere', value: kamidere };
  let image = "https://sanakan.pl/i/ss/fga432a.png";
  let showStats = false;

</script>

<main>
  <div>
    <a href="https://waifu.sanakan.pl" target="_blank" rel="noreferrer">
      <img src={logo} class="logo" alt="Logo" />
    </a>
  </div>

  <div class="selector">
    <label for="border-select">Ramka:</label>
    <select id="border-select" bind:value={selectedBorder}>
      {#each borders as value}<option {value}>{value.id}</option>{/each}
    </select>
    <label for="dere-select">Dere:</label>
    <select id="dere-select" bind:value={selectedDere}>
      {#each deres as value}<option {value}>{value.id}</option>{/each}
    </select>
    <label for="star-cnt">Gwiazdki:</label>
    <select id="star-cnt" bind:value={starCnt}>
      {#each starCount as value}<option {value}>{value}</option>{/each}
    </select>
    {#if starCnt > 0}
      <label for="star-type">Kolor:</label>
      <select id="star-type" bind:value={selectedStar}>
        {#each starTypes as value}<option {value}>{value.id}</option>{/each}
      </select>
    {/if}
  </div>
  <div class="selector">
    <label for="url-scalp">Link do obrazka:</label>
    <input id="url-scalp" bind:value={image} placeholder={image} />
    <label for="show-stats">Pokaż statystyki:</label>
    <input id="show-stats" type="checkbox" bind:checked={showStats} />
  </div>
  <div class="looks">
      <img src={cardboard} class="scalp" alt="Cardboard" />
      <img src={image} class="scalp" alt="Scalpel" />
      <img src={selectedBorder.value} class="border" alt="Border" />
      <img src={selectedDere.value} class="dere" alt="Dere" />
      {#if showStats}
        <img src={def} class="scalp" alt="Defense" />
        <img src={fire} class="scalp" alt="Attack" />
        <img src={health} class="scalp" alt="Health" />
      {/if}
      {#if starCnt > 0}
        {#each {length: starCnt} as _, i}
          <img src={selectedStar.value} class="star" alt="Star" style="left: {239 - (18 * starCnt) + (36 * i)}px;"/>
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
