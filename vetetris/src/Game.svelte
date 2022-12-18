<script lang="ts">
  import Square from "./Square.svelte";
  import { sleep } from "./utils";
  import { Game } from "./types";
  export let height = 5;
  export let width = 3;

  const game = new Game(height, width);

  const play = async () => {
    for (let y = 0; y < height; y++) {
      for (let x = 0; x < width; x++) {
            if ((x + y) % 2 == 1)
              game.toggle(x,y)
            else
              game.board[y][x] = "green";
            await sleep(1000)
          }
       }
    }

  play();

</script>

<board>
  {#each game.board as row }
    <row>
      {#each row as square}
        <Square color={square} />
      {/each}
    </row>
  {/each}
</board>

<style>
  board {
    display: flex;
    flex-direction: column;
    gap: 1px;
  }

  row {
    display: flex;
    flex-direction: row;
    gap: 1px;
  }

</style>