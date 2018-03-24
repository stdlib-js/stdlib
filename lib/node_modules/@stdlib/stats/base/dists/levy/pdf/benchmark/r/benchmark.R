#!/usr/bin/env Rscript
#
# @license Apache-2.0
#
# Copyright (c) 2018 The Stdlib Authors.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#    http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

# Set the precision to 16 digits:
options( digits = 16 );

#' Run benchmarks.
#'
#' @examples
#' main();
main <- function() {
	# Define benchmark parameters:
	name <- "dist-levy-pdf";
	iterations <- 1000000L;
	repeats <- 3;

	#' Print the TAP version.
	#'
	#' @examples
	#' print_version();
	print_version <- function() {
		cat( "TAP version 13\n" );
	}

	#' Print the TAP summary.
	#'
	#' @param total Total number of tests.
	#' @param passing Total number of passing tests.
	#'
	#' @examples
	#' print_summary( 3, 3 );
	print_summary <- function( total, passing ) {
		cat( "#\n" );
		cat( paste0( "1..", total, "\n" ) ); # TAP plan
		cat( paste0( "# total ", total, "\n" ) );
		cat( paste0( "# pass  ", passing, "\n" ) );
		cat( "#\n" );
		cat( "# ok\n" );
	}

	#' Print benchmark results.
	#'
	#' @param iterations Number of iterations.
	#' @param elapsed Elapsed time in seconds.
	#'
	#' @examples
	#' print_results( 10000L, 0.131009101868 );
	print_results <- function( iterations, elapsed ) {
		rate <- iterations / elapsed;
		cat( "  ---\n" );
		cat( paste0( "  iterations: ", iterations, "\n" ) );
		cat( paste0( "  elapsed: ", elapsed, "\n" ) );
		cat( paste0( "  rate: ", rate, "\n" ) );
		cat( "  ...\n" );
	}

	#' Run a benchmark.
	#'
	#' ## Notes
	#'
	#' * We compute and return a total "elapsed" time, rather than the minimum
	#'   evaluation time, to match benchmark results in other languages (e.g.,
	#'   Python).
	#'
	#'
	#' @param iterations Number of Iterations.
	#' @return Elapsed time in seconds.
	#'
	#' @examples
	#' elapsed <- benchmark( 10000L );
	benchmark <- function( iterations ) {
		# Run the benchmarks:
		results <- microbenchmark::microbenchmark( rmutil::dlevy( runif( 1, 10.0, 50.0 ), runif( 1, -10.0, 10.0 ), runif( 1, .Machine$double.eps, 5.0 ) ), times = iterations );

		# Sum all the raw timing results to get a total "elapsed" time:
		elapsed <- sum( results$time );

		# Convert the elapsed time from nanoseconds to seconds:
		elapsed <- elapsed / 1.0e9;

		return( elapsed );
	}

	print_version();
	for ( i in 1:repeats ) {
		cat( paste0( "# r::", name, "\n" ) );
		elapsed <- benchmark( iterations );
		print_results( iterations, elapsed );
		cat( paste0( "ok ", i, " benchmark finished", "\n" ) );
	}
	print_summary( repeats, repeats );
}

main();
