# TODO

> Todo list.


## Slides

#### ndarray

* context (e.g., Blas, Python)

* why are they useful?

  - e.g., efficient ops, like transpose (can prob find an example in one of the Math libs where they create a new data structure), flat data structure (no constant dereferencing); compatible with typed arrays

* overview

  - shape
  - strides
  - offset
  - indexing

* see `ndarray` talk

* exercise


#### Streams

* overview of streams
* streams for data analysis
* example or two demonstrating streams; e.g., anomaly detection using 3-sigma technique
* exercise


#### Sentiment Analysis

* overview. What is it?
* basic algo - dictionary look-up
* exercise


#### Command-line Utilities

* overview; establish why important
  
  - interoperability (anything which can read text)
  - can place in language agnostic pipelines

* standard streams
* demo std streams by taking rand stream and piping into a CLI sparkline
* exercise


---

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
