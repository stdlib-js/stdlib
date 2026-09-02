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

	# Generate test fixture data:
	a <- c( 1L, 2L, 3L, 4L, 5L, 6L, 7L, 8L, 9L, 10L );
	b <- c( 7L, 8L, 9L, 10L, 11L, 12L, 13L, 14L, 15L, 16L, 17L, 18L, 19L, 20L );
	unequal <- t.test( x = a, y = b );
	unequal <- list( a = a, b = b, pValue = unequal$p.value, statistic = unequal$statistic, lower = unequal$conf.int[1L], upper = unequal$conf.int[2L] );

	less <- t.test( x = a, y = b, alternative = 'less' );
	less <- list( a = a, b = b, pValue = less$p.value, statistic = less$statistic, lower = less$conf.int[1L], upper = less$conf.int[2L] );

	greater <- t.test( x = a, y = b, alternative = 'greater' );
	greater <- list( a = a, b = b, pValue = greater$p.value, statistic = greater$statistic, lower = greater$conf.int[1L], upper = greater$conf.int[2L] );

	a <- c( 2L, 1L, 0L, 4L, 3L );
	b <- c( 1L, 2L, 3L, 5L, 0L, 0L, 2L, 1L, 2L );
	equal <- t.test( x = a, y = b, var.equal = TRUE );
	equal <- list( a = a, b = b, pValue = equal$p.value, statistic = equal$statistic, lower = equal$conf.int[1L], upper = equal$conf.int[2L] );

	a <- c( 2L, 1L, 0L, 4L, 3L );
	b <- c( 4L, 2L, 8L, 0L, 6L );
	mu <- -2L;
	diff <- t.test( x = a, y = b, mu  = mu );
	diff <- list( a = a, b = b, mu = mu, pValue = diff$p.value, statistic = diff$statistic, lower = diff$conf.int[1L], upper = diff$conf.int[2L] );

	# Convert fixture data to JSON:
	unequal <- to_json( unequal );
	equal <- to_json( equal );
	diff <- to_json( diff );
	less <- to_json( less );
	greater <- to_json( greater );

	# Write the data to file...
	filepath <- get_filepath( 'unequal.json' );
	write( unequal, filepath );

	filepath <- get_filepath( 'equal.json' );
	write( equal, filepath );

	filepath <- get_filepath( 'diff.json' );
	write( diff, filepath );

	filepath <- get_filepath( 'less.json' );
	write( less, filepath );

	filepath <- get_filepath( 'greater.json' );
	write( greater, filepath );
}

main();
