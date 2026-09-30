#!/usr/bin/env Rscript
#
# @license Apache-2.0
#
# Copyright (c) 2020 The Stdlib Authors.
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
	set.seed( 74L );
	x <- c( 6L, 8L, 14L, 16L, 23L, 24L, 28L, 29L, 41L, -48L, 49L, 56L, 60L, -67L, 75L );
	twosided <- wilcox.test( x, exact = TRUE );
	twosided <- list( x = x, pValue = twosided$p.value, statistic = twosided$statistic );

	x <- c( 8L, 3L, 7L, 5L, 5L, 2L, 4L, 4L, -2L, -3L );
	ties <- wilcox.test( x, exact = TRUE );
	ties <- list( x = x, pValue = ties$p.value, statistic = ties$statistic );

	x <- rnorm( 100L, 0.0, 2.0 );
	twosided_approx <- wilcox.test( x, exact = FALSE, correct = TRUE );
	twosided_approx <- list( x = x, pValue = twosided_approx$p.value, statistic = twosided_approx$statistic );

	x <- c( 6L, 8L, 14L, 16L, 23L, 24L, 28L, 29L, 41L, -48L, 49L, 56L, 60L, -67L, 75L );
	less <- wilcox.test( x, alternative = 'less', exact = TRUE );
	less <- list( x = x, pValue = less$p.value, statistic = less$statistic );

	x <- rnorm( 100L, 0.0, 2.0 );
	less_approx <- wilcox.test( x, alternative = 'less', exact = FALSE, correct = TRUE );
	less_approx <- list( x = x, pValue = less_approx$p.value, statistic = less_approx$statistic );

	x <- c( 6L, 8L, 14L, 16L, 23L, 24L, 28L, 29L, 41L, -48L, 49L, 56L, 60L, -67L, 75L );
	greater <- wilcox.test( x, alternative = 'greater', exact = TRUE );
	greater <- list( x = x, pValue = greater$p.value, statistic = greater$statistic );

	x <- rnorm( 100L, 0.0, 2.0 );
	greater_approx <- wilcox.test( x, alternative = 'greater', exact = FALSE, correct = TRUE );
	greater_approx <- list( x = x, pValue = greater_approx$p.value, statistic = greater_approx$statistic );

	x <- rnorm( 20L, 1.0, 2.0 );
	y <- rnorm( 20L, 3.0, 2.0 );
	paired <- wilcox.test( x, y, paired = TRUE, exact = TRUE );
	paired <- list( x = x, y = y, pValue = paired$p.value, statistic = paired$statistic );

	x <- rnorm( 20L, 1.0, 2.0 );
	y <- rnorm( 20L, 2.0, 2.0 );
	paired_less <- wilcox.test( x, y, paired = TRUE, alternative = 'less', exact = TRUE );
	paired_less <- list( x = x, y = y, pValue = paired_less$p.value, statistic = paired_less$statistic );

	x <- rnorm( 20L, 1.0, 2.0 );
	y <- rnorm( 20L, 2.0, 2.0 );
	paired_greater <- wilcox.test( x, y, paired = TRUE, alternative = 'greater', exact = TRUE );
	paired_greater <- list( x = x, y = y, pValue = paired_less$p.value, statistic = paired_less$statistic );

	# Convert fixture data to JSON:
	twosided <- to_json( twosided );
	twosided_approx <- to_json( twosided_approx );
	ties <- to_json( ties );
	greater <- to_json( greater );
	greater_approx <- to_json( greater_approx );
	less <- to_json( less );
	less_approx <- to_json( less_approx );
	paired <- to_json( paired );
	paired_less <- to_json( paired_less );
	paired_greater <- to_json( paired_greater );

	# Write the data to file...
	filepath <- get_filepath( 'twosided.json' );
	write( twosided, filepath );

	filepath <- get_filepath( 'ties.json' );
	write( ties, filepath );

	filepath <- get_filepath( 'twosided_approx.json' );
	write( twosided_approx, filepath );

	filepath <- get_filepath( 'greater.json' );
	write( greater, filepath );

	filepath <- get_filepath( 'greater_approx.json' );
	write( greater_approx, filepath );

	filepath <- get_filepath( 'less.json' );
	write( less, filepath );

	filepath <- get_filepath( 'less_approx.json' );
	write( less_approx, filepath );

	filepath <- get_filepath( 'paired.json' );
	write( paired, filepath );

	filepath <- get_filepath( 'paired_less.json' );
	write( paired_less, filepath );

	filepath <- get_filepath( 'paired_greater.json' );
	write( paired_greater, filepath );
}

main();
