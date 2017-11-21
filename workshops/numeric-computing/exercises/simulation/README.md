# Simulation

> This exercise covers reproducible simulation, with extension to [discrete-time Markov chains][markov-chain].

## Exercises

### 1) Coin-flipping

-   Simulate `100` coin flips of a fair-sided coin and determine the longest streak of heads and the longest streak of tails.
-   Simulate `100` coin flips of an unfair coin, where the probability of getting heads is `0.7` and the probability of getting tails is `0.3`. Determine the longest streak of heads and the longest streak of tails.

### 2) Markov Chain

-   Given the following initial probability `array` and transition probability `matrix`, simulate the first `100` steps of a [discrete-time Markov chain][markov-chain].

    ```javascript
    var initial = [ 0.2, 0.8 ]; // sums to unity
    var transition = [
        [ 0.3, 0.7 ], // sums to unity
        [ 0.4, 0.6 ]  // sums to unity
    ];
    ```

    The output should be a `101` element state vector; e.g., `[1,1,0,1,0,0,0,1,1,...]`, where the first element is the initial state.

-   As a bonus, extend the simulation to `5` states and `1000` steps and plot the state vector.

### 3) Model Generation

-   Download and process a training corpus.

    -   Download a full plain text copy of [Moby Dick][moby-dick] from [Project Gutenberg][moby-dick].

    -   Remove the front matter before `Chapter 1`, and remove the end matter after the `Epilogue`.

    -   Replace all tab characters with a single space.

    -   Replace all newline characters (and trailing spaces) with a single space.

    -   Replace multiple spaces with a single space.

    -   Split the text into separate "words" using a single space as the delimiter.

    -   Write the word list to file.

    -   Build a database (dictionary) where each key is a pair of consecutive words and the key value is an `array` of words which follow the key pair. For example, given the phrase "The quick brown fox jumped over the lazy cat.", the database would be

        ```javascript
        var dict = {
            'The quick': ['brown'],
            'quick brown': ['fox'],
            'brown fox': ['jumped'],
            'fox jumped': ['over'],
            'jumped over': ['the'],
            'over the': ['lazy'],
            'the lazy': ['cat.']
        };
        ```

    -   Write the database to file as JSON.

### 4) Text Generation

-   Using the database and word list from above, create a function to generate text having a maximum word length of `25`. Hints:

    -   First seed the text generator with two words from the word list.
    -   Look up the list of possible third words in the database and randomly pick one of them.
    -   Next, use the second and third words to find a fourth word, and so on and so forth.
    -   Stop once you have generated the desired number of words.

## Tips

-   Use `123456` to seed [randu][@stdlib/random/base/randu], thus allowing comparison with solution results.

-   When processing the training corpus, consider using streams (e.g., [split][@stdlib/streams/utils/split], [join][@stdlib/streams/utils/join], and [transform][@stdlib/streams/utils/transform]) for efficient processing.

-   To select a random element from a list,

    ```javascript
    var randu = require( '@stdlib/random/base/randu' );
    var floor = require( '@stdlib/random/base/floor' );

    var list = [ 1, 2, 3, 4, 5 ];

    // Generate a random index:
    var i = floor( randu()*list.length );

    // Grab a random element:
    var el = list[ i ];
    ```

## Testing

Assuming that each solution is placed in a separate file,

```bash
$ node ./path/to/<solution_1>.js
$ node ./path/to/<solution_2>.js
# ...
```

When all your solutions succeed, proceed to the [next exercise][next-exercise].

<section class="links">

[markov-chain]: https://en.wikipedia.org/wiki/Markov_chain

[@stdlib/random/base/randu]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/random/base/randu

[@stdlib/streams/utils/split]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/streams/utils/split

[@stdlib/streams/utils/join]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/streams/utils/join

[@stdlib/streams/utils/transform]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/streams/utils/transform

[moby-dick]: http://www.gutenberg.org/cache/epub/2701/pg2701.txt

[next-exercise]: https://github.com/stdlib-js/stdlib/blob/develop/workshops/numeric-computing/exercises

</section>

<!-- /.links --> 
