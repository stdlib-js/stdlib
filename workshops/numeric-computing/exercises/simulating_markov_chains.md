# Simulating Markov Chains

> This exercise covers reproducible simulation, with extension to [discrete-time Markov chains][markov-chain].


## Exercises

### 1) Coin-flipping

* Simulate `100` coin flips of a fair-sided coin and determine the longest streak of heads and the longest streak of tails.
* Simulate `100` coin flips of an unfair coin, where the probability of getting heads is `0.7` and the probability of getting tails is `0.3`. Determine the longest streak of heads and the longest streak of tails.


### 2) Markov Chain

* Given the following initial probability `array` and transition probability `matrix`, simulate the first `100` steps of a [discrete-time Markov chain][markov-chain].

  ``` javascript
  var initial = [ 0.2, 0.8 ]; // sums to unity
  var transition = [
      [ 0.3, 0.7 ], // sums to unity
      [ 0.4, 0.6 ]  // sums to unity
  ];
  ```

  The output should be a `101` element state vector; e.g., `[1,1,0,1,0,0,0,1,1,...]`, where the first element is the initial state.

* As a bonus, extend the simulation to `5` states and `1000` steps and plot the state vector.


### 3) Model Training

* Download and process a training corpus.

  - Download a full plain text copy of [Moby Dick][moby-dick] from [Project Gutenberg][moby-dick].
  - Remove the front matter before `Chapter 1`, and remove the end matter after the `Epilogue`.
  - Replace all newline characters with a single space.
  - Replace multiple spaces with a single space.


## Tips

*  Use `123456` to seed [randu][randu], thus allowing comparison with solution results.


## Testing

Assuming that each solution is placed in a separate file,

``` bash
$ node ./path/to/<solution_1>.js
$ node ./path/to/<solution_2>.js
# ...
```

When all your solutions pass, proceed to the [next exercise][next-exercise].


<!-- <links> -->

[markov-chain]: https://en.wikipedia.org/wiki/Markov_chain

[randu]: https://github.com/stdlib-js/stdlib/tree/develop/lib/node_modules/%40stdlib/math/base/random/randu

[moby-dick]: http://www.gutenberg.org/cache/epub/2701/pg2701.txt

<!-- TODO -->

[next-exercise]: https://github.com/stdlib-js/stdlib/blob/develop/workshops/numeric-computing/exercises/

<!-- </links> --> 
