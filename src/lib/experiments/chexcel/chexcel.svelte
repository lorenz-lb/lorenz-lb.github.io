<script lang="ts">
  import banner from "./banner.png";

  // images
  import img_vibe from "./img/chess_vibe.jpg";
  import img_data from "./img/data.png";
  import img_input from "./img/input.png";
  import img_selectable_closeup from "./img/selectable_matrix.png";
  import img_selectable_all from "./img/all selectable.png";
  import img_selectable_row from "./img/data_selectable_row.png";
  import img_mask_mat from "./img/mask_mat.png";
  import img_helper_mat from "./img/helper_mat.png";
  import img_id_mat from "./img/id_mat.png";
  import img_group_mat from "./img/group_mat.png";
  import img_sum_mat from "./img/sum_matrix.png";
  import img_rook_situation from "./img/rook_situation.png";
  import img_masking from "./img/masking.gif";
  import img_queen from "./img/queen_formular_mat.png";
  import img_game from "./img/game.png";
</script>

<main class="flex mx-[1px]">
  <div class="min-h-screen p-5 space-y-10 overflow-hidden">
    <!-- TEXT -->
    <div class="space-y-10">
      <!-- Banner -->
      <img src={banner} alt={"banner"} />
      <!-- Head -->
      <h1 class="text-3xl font-bold text-center mb-8">
        Chexcel <br /> Chess in Excel
      </h1>
      <section>
        <!-- prettier-ignore -->
        <p class="">
Yes you read that right. Chexcel. Chess in Excel.<br>
But why? <br>
Once a famous man (who definitely lived a long and happy life and is not just a videogame character) said: <br>
<br>

</p>
        <blockquote class="quote">
          “Science isn’t about why – it’s about why not.” ~ Cave Johnson
        </blockquote>
        <p>
          <br />
          But lets start in the beginning. One day a fellow student accused me of
          being a “Vibe coder” and send the following meme with the words
          <br />“Oh look Lorenz has vibe coded a chess game”
        </p>

        <figure class="fig-center">
          <img src={img_vibe} alt="vibe" class="w-full max-w-100" />
          <figcaption class="mt-2">
            *For the record I think this is actually quite funny
          </figcaption>
        </figure>
        <p>
          That evening, I started developing my webpage (the one you’re reading
          right now) and realized that I not only needed the webpage itself, but
          also some content to fill it. Then it hit me: Chess in Excel –
          Chexcel! It would be a completely useless spreadsheet, probably with
          fewer features than the real thing, consuming my time and resulting in
          something nobody needs (or wants). Perfect!
        </p>
        <p>
          As a first step, I rewatched a brilliant video called
          <a class="link" href="https://www.youtube.com/watch?v=5rg7xvTJ8SU"
            >"I Built My Own 16-Bit CPU in Excel"</a
          >
          by
          <a class="link" href="https://www.youtube.com/@InkboxSoftware"
            >Inkbox</a
          >
          to get some inspiration on how to approach this challenge. <br />
          I encourage you to check out the video and leave a like, it’s very entertaining.<br
          />
          And because the concept of chess in Excel wasn’t ridiculous enough, I decided
          to use Excel exactly as god intended: no macros, no VBA, nothing. Just
          formulas and frustration!
          <br />
          <br />
          So that’s the "why" now let’s focus on the "how".
        </p>
      </section>
      <section>
        <h2>Concepts</h2>
        <!-- prettier-ignore -->
        <p class="">
          Before we can understand the entire spreadsheet, we need to look at some key concepts that make the whole thing possible.
        </p>
        <h3>Updating</h3>
        <p class="">
          Because we need to save data and manipulate it over time, we must
          control when and how each cell is updated. The first important insight
          I took from the Inkbox video is that, in Excel, you can set formula
          calculations to iterative and define a maximum number of iterations.
          By setting the maximum iterations to one, you can effectively control
          exactly when Excel updates each cell’s value.
        </p>
        <p>
          The second information I yanked from Inkbox is that excel updates its
          cells from the top left to the bottom right. A direct result of that
          is that if you have a formular which references cells which are
          updated later, the calculation may end up using outdated values. So,
          not only do the formulas themselves need to be correct, but the
          relative position of the cells also matters.
        </p>
        <h3>Assigning Data</h3>
        <p>
          Another very important concept in Excel makes this entire project much
          more complicated and convoluted: Each cell can only modify its own
          value. What sounds obvious at first is actually the key difference
          between “normal” programming and programming in Excel (if you can even
          call it that). In most programming languages, you can easily create
          and modify state. In Excel, however, you must define a formula that
          accounts for everything and sets the cell’s content/state to the
          correct value.
        </p>
        <p>
          Consider the following move function as an example. It can move a
          piece to a new position while also capturing anything already
          occupying that space. The code might not represent "great chess
          architecture", but it demonstrates how a function can modify the state
          of its input.
        </p>

        <figure>
          <pre>
    move(piece, position) &lbrace; 
      // kill if applicable
      allPieces.forEach(x => if(x.position == position) x.alive = false );

      // actual movement
      piece.position = position;
    &rbrace; 
 </pre>
        </figure>
        <p>
          Meanwhile, if you wanted to update a piece’s “aliveness” in Excel, you
          could do something like this:
        </p>
        <figure>
          <pre>
    // [self] as name for the actual cell position
    =IF(TURN_POSITION = OWN_POSITION, FALSE, [self])
  </pre>
        </figure>
        <p>
          Here you can notice two things. First, there is only a single formula
          that determines the “aliveness” of one chess piece. Second, this
          introduces the next concept.
        </p>
        <h3>Self referencing</h3>
        <p>
          What would normally result in a circular reference problem is actually
          what makes this entire project possible: self-referencing. A cell only
          changes its value if certain criteria are met, otherwise it keeps its
          current state.
          <br />
          I can already hear you asking, "BUT WHAT IS THE STATE IT’S KEEPING?"
          <br />
          For that we have to extend the formular:
        </p>
        <figure>
          <pre>
    // [self] as name for the actual cell position
  =IF(RESET, TRUE, IF(TURN_POSITION = OWN_POSITION, FALSE, [self]))
  </pre>
        </figure>
        <p>
          With this approach, you can reset the game, set each piece’s
          “aliveness” back to its initial state (<code>TRUE</code>), and update
          a cell’s value only when a specific condition is met.
        </p>
        <p>
          Now that these concepts are clear, let’s take a look at how the board
          is structured, what data each piece stores, and how the input is
          handled.
        </p>
      </section>
      <section>
        <h2>The Data</h2>
        <p>
          Each piece has different properties, some of which depend on one
          another. For example, the <code>FirstMove</code> property is calculated
          as follows:
        </p>

        <figure>
          <pre>
=(Pos = PosInit)
  </pre>
        </figure>

        <p>
          Note that this calculation of <code>FirstMove</code> applies only to
          pawns. This is because every other piece can return to its initial
          position, but pawns cannot. Fortunately, pawns are the only pieces
          that use <code>FirstMove</code>, since each pawn has the option to
          move two spaces on its first move. To track the location of each
          piece, I index each square from the top left to the bottom right,
          starting at 0.
        </p>

        <figure class="fig-center">
          <img src={img_data} alt="-" />
        </figure>
      </section>
      <section>
        <h2>The Input</h2>
        <p>
          The input consists of only three cells. The first cell is for
          resetting the game, the second for selecting a piece, and the third
          for selecting a target. The game loop then works as follows: choose a
          piece, choose a target, switch players, and repeat, just like in real
          chess.
        </p>
        <p>
          The validation that ensures a player can only select their own colored
          pieces and make legal chess moves is handled via Excel’s Data
          Validation feature. This allows you to define a range of possible
          values for a cell. How these values are determined will be explained
          later.
        </p>
        <figure class="fig-center">
          <img src={img_input} alt="-" />
        </figure>
      </section>
      <section>
        <h2>The Statemanagement</h2>
        <p>
          To actually play chess, you need to manage at least some state. For
          example, you must remember whose turn it is to ensure that white can
          only select white pieces and black only black pieces.<br />
          Chexcel has four states:
        </p>
        <br />
        <ul>
          <li>
            <b>0 - Select</b>: to select a piece
          </li>
          <li>
            <b>1 - DataPropagation1</b>: to update the selection so that only
            valid targets can be chosen
          </li>
          <li>
            <b>2 - Update</b>: to select a target and update the piece's data
          </li>
          <li>
            <b>3 - DataPropagation2</b>: to clear the selections
          </li>
        </ul>
        <br />
        <p>
          Each state also has a condition that must be met; otherwise, a
          transition is not possible. For example, before transitioning to state
          1 (DataPropagation1), you must select a piece and ensure the target is
          unselected.
        </p>
      </section>
      <section>
        <h2>Moving</h2>
        <p>
          Now comes the most important part: moving a piece. Here is the
          definition of a piece’s position:
        </p>

        <figure>
          <pre>
=IF(RST, PosInit, IF(STATE_UPDATE, IF(Alive=0,BLANK, IF(PLAYER&lt;&gt;Id, Pos, TARGET)),Pos))
  </pre>
        </figure>

        <p>
          The idea is to set the initial state to <code>PosInit</code> if
          <code>RST</code>
          is <code>TRUE</code>. If no reset occurs, the position is updated only
          when we are in the correct state, the Update state. Next, a check is
          performed to see if the piece is even alive. After that comes the
          actual calculation to determine whether the position should change. An
          update is required if the piece to move (called <code>PLAYER</code>)
          matches its own <code>ID</code>. If that’s the case, the input
          <code>TARGET</code>
          is used as the new position. Combined with the Alive property introduced
          earlier, this is all you need to move pieces around the board and play
          chess, if everyone is honest and only enters correct information.
          <br />
          Beautiful, isn’t it?
        </p>
      </section>
      <section>
        <h2>What is selectable?</h2>
        <p>
          Now comes the hard part: which piece is actually selectable, and what
          moves are allowed for that piece? First, let’s think about it. If we
          can determine all valid moves for each piece, we can figure out
          whether a piece is selectable simply by checking if it has at least
          one valid move. So, let’s do this!
        </p>
        <h3>Selectable Pieces</h3>
        <p>
          For that we simply assume that we have a Matrix for each piece
          containing all its possible moves. This could look something like
          this:
        </p>
        <figure class="fig-center">
          <img src={img_selectable_closeup} alt="-" />
        </figure>

        <p>for each piece:</p>
        <figure class="fig-center">
          <img src={img_selectable_all} alt="-" />
        </figure>
        <p>
          With this setup, we can simply check whether the sum of a piece’s
          corresponding matrix is greater than 0. If it is, the piece can move.
          Then, if the piece is alive and matches the color of the current
          player, it can be selected. The formular for that looks like this:
        </p>

        <figure>
          <pre>
=IF(AND(Alive,Color=CURRENT_COLOR),
IF(
SUM(
OFFSET(INDIRECT(ADDRESS(
XLOOKUP(Id, MOVTBL_ID,MOVTBL_ROW),
XLOOKUP(Id ,MOVTBL_ID,MOVTBL_COL)
)),0,0,8,8))>0,Id ,BLANK),
BLANK)

  </pre>
        </figure>

        <p>
          The part inside the <code>SUM</code> function simply returns a range
          over which the sum is calculated. Since each piece, identified by its
          <code>ID</code>, has its own matrix of allowed moves located in
          slightly different positions within the spreadsheet, a table of these
          locations is used to create an indirection, making it easy to copy the
          formulas. Here’s how it works:
        </p>
        <br />
        <ul>
          <li>
            <b>XLOOKUP</b>: finds the row and column of the required matrix
          </li>
          <li>
            <b>ADDRESS</b>: converts these coordinates into a string
            representing the cell address
          </li>
          <li>
            <b>INDIRECT</b>: turns that string into an actual cell reference
            that can be used in other functions
          </li>
          <li>
            <b>OFFSET</b>: then returns the corresponding 8×8 range
          </li>
        </ul>
        <br />
        <p>
          If each piece calculates its selectability in this way, we can simply
          set the Data Validation range to the <code>Selectable</code> property in
          the data table.
        </p>

        <figure class="fig-center">
          <img src={img_selectable_row} alt="-" />
        </figure>
      </section>
      <section>
        <h2>Selectable Moves</h2>
        <p>
          Now comes the really hard but also interesting part: How on earth can
          we program chess movement rules in Excel? It's challenging for several
          reasons:
        </p>
        <br />
        <ol type="A">
          <li>1. Each piece has a different position.</li>
          <li>
            2. Different types of pieces have different movement patterns.
          </li>
          <li>
            3. Pieces cannot “jump over” others to get behind them - except for
            the knight.
          </li>
        </ol>
        <br />
        <p>
          Before we dive into these problems, let me introduce you to my new
          favorite Excel functions.
        </p>

        <h3>LET(name, name_value, scope)</h3>
        <p>
          <code>LET</code> allows you to define a variable that takes a
          specified value and is available within a certain scope. With
          <code>LET</code>, you can prevent Excel from recalculating the same
          values repeatedly, making it more efficient. But for our purposes, the
          main benefit is that it lets us write less repetitive formulas and
          makes them easier to read. For example, if we have the position of a
          piece on the chessboard, the <code>X</code> and <code>Y</code> coordinates
          can be easily calculated and used like this, for Pos = 8 this would result
          in a cell value of “1/0”.
        </p>
        <figure>
          <pre>
=LET(X, MOD(Pos,8),
LET(Y,FLOOR(Pos/8,1),
CONCAT(X,”/”,Y)
)) 

          </pre>
        </figure>

        <h3>MAP(array[s], lambda)</h3>
        <p>
          Every programmer knows <code>MAP</code>: it takes an array and
          transforms each value by applying a <code>LAMBDA</code> function,
          which is essentially a wrapper to define variables and perform a
          calculation. <code>MAP</code> can also accept multiple arrays. If you
          provide multiple arrays, you must define multiple variables in the
          <code>LAMBDA</code>. The following example demonstrates the vector
          addition of two arrays:
        </p>
        <figure>
          <pre>
A = [1,2,3,4]; B = [1,1,1,1]
=MAP(A,B,LAMBDA(a,b,a+b))
          </pre>
        </figure>
      </section>
      <section>
        <h2>Matrices!</h2>
        <p>
          The idea is to create a matrix containing all possible moves by
          consecutively applying rules to narrow down each piece’s options until
          only legal moves remain. This rule application is done by creating
          intersections of matrices. For that we need different matricies. First
          of all, an <code>ID_MATRIX</code> is created which is just a table
          containing all IDs at the correct positions for each piece, respecting
          if a piece is alive or not. Initial the <code>ID_MATRIX</code> looks something
          like this:
        </p>
        <figure class="fig-center">
          <img src={img_id_mat} alt="-" />
        </figure>
        <p>
          There are also “helper” matricies which are used in some <code
            >MAP</code
          >
          functions to give access to the Position or the <code>x</code> and
          <code>y</code> coordinates while processing a matrix.
        </p>

        <figure class="fig-center">
          <img src={img_helper_mat} alt="-" />
        </figure>

        <p>
          Next comes the key part: a <b>mask matrix</b> is created for each type
          of piece. The masks are 15×15 in size because, if a piece is placed in
          a corner, the mask still needs to cover the entire chessboard.
        </p>
        <figure class="fig-center">
          <img src={img_mask_mat} alt="-" />
        </figure>
        <p>Now only one type of matrix is missing.</p>
      </section>
      <section>
        <h2>Crossing other pieces</h2>
        <p>
          The last thing to do is to ensure that a piece can’t walk through
          other pieces. Consider the following situation, with <code>W</code>
          for a white rook and <code>B</code> for any black piece. Gray indicates
          all possible positions the rook can occupy in its next move.
        </p>
        <figure class="fig-center">
          <img src={img_rook_situation} alt="-" />
        </figure>

        <p>
          The white Rook can capture the black piece but should not be able to
          move further. To esure that we simply create a new matrix called the
          <code>SUM_MATRIX</code>. It sums up the occurrences of pieces between
          a position and the piece.
        </p>
        <figure class="fig-center">
          <img src={img_sum_mat} alt="-" />
        </figure>

        <p>
          If a square we've calculated as walkable also has a sum of 0 in the
          <code>SUM_MATRIX</code>, we know for a fact that no pieces were
          skipped. This method works for the Rook and King. The Queen and
          Bishop, however, can move diagonally and thus require special
          handling. This is where the Group mask comes in. It lets the formula
          differentiate between diagonal and horizontal movements.
        </p>
        <figure class="fig-center">
          <img src={img_group_mat} alt="-" />
        </figure>

        <p>
          I wont bother you with how exactly the masks are overlayed.
          Essentially its some index calculation, offsets etc.. The pawn gets
          multiple masks because its movement is not identical between black and
          white. Also, the first move and the capture process of the pawn are
          special cases. But with the LET function introduced before, a simple
          conditional assignment is possible to always use the correct mask.
        </p>
        <p>
          The following gif demonstrates the steps taken to get the final set of
          positions each piece can move to. The board layout is that the white
          pawn at the bottom right already went two steps and the matrix
          calculated is for the white rook at the bottom right.
        </p>
        <p>
          First it’s assumed that all board spaces are walkable. The second step
          is to remove all spaces already occupied by the same color. Then the
          corresponding Mask, here the Rook Mask is applied. In the end the
          <code>SUM_MATRIX</code> is used. Note that the <code>SUM_MATRIX</code>
          is not a simple <code>AND</code>
          operation but more like a <code>where SUM_MATRIX == 0</code>.
        </p>

        <figure class="fig-center">
          <img src={img_masking} alt="-" />
        </figure>

        <p>
          With all of that I want to present the calculation of what positions
          are valid next moves for the queen:
        </p>

        <figure class="fig-center">
          <img src={img_queen} alt="-" />
        </figure>

        <p>Finally while playing, the game looks something like this:</p>

        <figure class="fig-center">
          <img src={img_game} alt="-" />
        </figure>

        <p>
          I just couldn't be bothered to implement pawn promotion or the en
          passant rule. I know they're both very important, but I decided to
          call it a day. Its not chess, its Chexcel!
        </p>
      </section>
      <section>
        <h2>Learnings</h2>
        <p>
          I learned a lot about Excel, especially by extensively studying its
          various functions. But that wasn't really the point. I wanted to prove
          a point… . I can do it if I'm dedicated enough. Modern systems and
          tools are often so complex that I find myself thinking “I'd never be
          able to do that, I'm not skilled enough.”. The reality, however, is
          that with time and dedication, you can accomplish many, many things.
        </p>
        <p>
          Another great realization I had was that when designing a system,
          choosing the correct level of abstraction is difficult. Do I really
          need a function that's so abstract it can be applied to integers,
          floats, strings, and even an unsigned Toyota Yaris 2023? Probably not.
          Do all my chess pieces need the same function to calculate their
          possible moves? No. Does it make sense to share the calculation logic
          between a rook, a bishop, and a queen? Yes. During this development, I
          often found myself wanting either too much or too little common
          behavior. This experience showed me the importance of frequently
          questioning whether the work done so far is really correct and the
          right way to go.
        </p>
        <br /><br /><br />
        <p>
          If you want to play chess in Excel, visit my <a
            class="link"
            href="https://github.com/lorenz-lb/chexcel"
            >GitHub
          </a> (Start &gt; Links &gt; Github)! If you find a bug in the Excel sheet
          or something that doesn't work as expected, let me know (I probably won't
          fix it). The best part is that you don't need to enable macros in the spreadsheet
          because there are none!
        </p>
        <br />

        <p>Shoutout to the NamingManager in Excel, love that thing.</p>
        <br />
        <p>
          Anit Shoutout to Excel not being able to open two different
          Spreadsheets with the same name.
        </p>
        <br />
        <p>
          A special thanks to Stephi for getting me to waste multiple days of my
          life, but the meme was funny.
        </p>
      </section>
    </div>
  </div>
</main>

<style>
  @import "$lib/components/ui95/assets/ui95.css";

  h1 {
    font-weight: bold;
    font-size: xx-large;
    width: 100%;
    margin-top: 26pt;
  }

  h2 {
    font-weight: bold;
    font-size: xx-large;
    margin-top: 26pt;
  }

  h3 {
    font-weight: bold;
    font-size: x-large;
    margin-top: 26pt;
  }

  figure {
    margin-top: 10pt;
  }

  pre {
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  .fig-center {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2em;
    margin-bottom: 2em;
  }

  .fig-center > img {
    width: 100%;
    max-height: 300px;
    height: auto;
    object-fit: contain;
  }

  p {
    margin-top: 0.5em;
  }
</style>
