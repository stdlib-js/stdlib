# TODO

> Todo list.


## Exercises

#### ndarray

* basics
* slicing
* any other functionality
* maybe one demo use case (toy problem)


#### Streams

* point to `debug` and `inspect` stream utils
* create a readstream which emits a random number
* create a map stream which transforms the random number (e.g., mu + randn*sigma)
* create a writestream counter (incrcount)
  - once stream ends (finish), print to console
* extend counter to compute various summary statistics, like mean, stdev, etc
  - incrstatistics
* extend to windowed statistics
* smooth a timeseries
  - generate randn data using readstream and transform
  - pipe to moving mean
  - generate various timeseries and apply different windows; overlay the various results in a plot


#### Sentiment Analysis

* load raw tweet data
* convert raw data to structured data
* create stream which performs dictionary lookup and assigns each tweet a sentiment score
* pipe to stream stats module to compute avg sentiment, etc.


#### Command-line Utilities

* transform stream pipeline into a standard stream pipeline
