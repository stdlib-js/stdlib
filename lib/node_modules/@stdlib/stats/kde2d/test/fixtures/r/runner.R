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
options( digits = 16L );

#' Generate test fixtures.
#'
#' @examples
#' main();
main <- function() {
	#' Get the script filepath.
	#'
	#' @return The absolute path of this script
	#'
	#' @examples
	#' filepath <- get_script_path();
	get_script_path <- function() {
		args <- commandArgs( trailingOnly = FALSE );
		needle <- '--file=';
		match <- grep( needle, args );
		if ( length( match ) > 0L ) {
			# Rscript:
			filepath <- sub( needle, '', args[match] );
		} else {
			ls_vars <- ls( sys.frames()[[1L]] )
			if ( 'fileName' %in% ls_vars ) {
				# Source'd via RStudio:
				filepath <- sys.frames()[[1L]]$fileName; # nolint
			} else {
				# Source'd via R console:
				filepath <- sys.frames()[[1L]]$ofile;
			}
		}
		return( normalizePath( filepath ) );
	}

	#' Convert a data structure to JSON.
	#'
	#' @param x A data structure to convert
	#' @return JSON blob
	#'
	#' @examples
	#' x <- seq( -6.5, 25.0, 0.5 );
	#' json <- to_json( x );
	to_json <- function( x ) {
		return( jsonlite::toJSON( x, digits = 16L, auto_unbox = TRUE ) );
	}

	#' Generate an output absolute filepath based on the script directory.
	#'
	#' @param name An output filename
	#' @return An absolute filepath
	#'
	#' @examples
	#' filepath <- get_filepath( 'data.json' );
	get_filepath <- function( name ) {
		return( paste( source_dir, '/', name, sep = '' ) );
	}

	# Get the directory of this script:
	source_dir <- dirname( get_script_path() );

	# TODO: generate test fixture data (`x` and `y`), making sure to handle NaNs # nolint: todo_comment_linter.
	x <- rnorm(n = 150L, 6L, 2.5)
	y <- rnorm(n = 150L, 11L, 3L)
	ans <- MASS::kde2d(x, y)

	# Convert fixture data to JSON:
	x <- to_json( x );
	y <- to_json( y );
	ans <- to_json(ans);

	# Write the data to file...
	filepath <- get_filepath( 'datax.json' );
	write( x, filepath );

	filepath <- get_filepath( 'datay.json' );
	write( y, filepath );

	filepath <- get_filepath( 'expected.json' );
	write(ans, filepath);

	## now make the second example
	x2 <- rt(df = 37L, n = 300L);
	y2 <- runif(n = 300L, min = min(x2), max = max(x2));
	ans2 <- MASS::kde2d(x2, y2);

	x2 <- to_json( x2 );
	y2 <- to_json( y2 );
	ans2 <- to_json( ans2 );

	filepath <- get_filepath( 'datax2.json' );
	write(x2, filepath);

	filepath <- get_filepath( 'datay2.json' );
	write(y2, filepath);

	filepath <- get_filepath( 'expected2.json' );
	write(ans2, filepath);

	## now we will test the smaller example
	x_small <- c(1L, 2L, 3L, 4L, 5L);
	y_small <- c(6L, 7L, 8L, 9L, 10L);
	ans_small <- MASS::kde2d(x_small, y_small);

	x_small <- to_json(x_small);
	y_small <- to_json(y_small);
	ans_small <- to_json(ans_small);

	filepath <- get_filepath( 'dataxsmall.json' );
	write( x_small, filepath );

	filepath <- get_filepath( 'dataysmall.json' );
	write( y_small, filepath );

	filepath <- get_filepath( 'expectedsmall.json' );
	write(ans_small, filepath);

}

main();
