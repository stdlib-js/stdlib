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
	set.seed( 300L );
	x <- rnorm( 100L );
	twosided <- t.test( x );
	twosided <- list( x = x, pValue = twosided$p.value, statistic = twosided$statistic, lower = twosided$conf.int[1L], upper = twosided$conf.int[2L] );

	x <- rnorm( 100L, 2.0, 2.5 );
	twosided_custom_alpha <- t.test( x, conf.level = 0.9 );
	twosided_custom_alpha <- list(
		x = x, pValue = twosided_custom_alpha$p.value,
		statistic = twosided_custom_alpha$statistic,
		lower = twosided_custom_alpha$conf.int[1L],
		upper = twosided_custom_alpha$conf.int[2L]
	);

	x <- rnorm( 100L );
	less <- t.test( x, alternative = 'less' );
	less <- list( x = x, pValue = less$p.value, statistic = less$statistic, lower = less$conf.int[1L], upper = less$conf.int[2L] );

	x <- rnorm( 100L );
	greater <- t.test( x, alternative = 'greater' );
	greater <- list( x = x, pValue = greater$p.value, statistic = greater$statistic, lower = greater$conf.int[1L], upper = greater$conf.int[2L] );

	x <- rnorm( 100L );
	less_custom_alpha <- t.test( x, alternative = 'less', conf.level = 0.99 );
	less_custom_alpha <- list( x = x, pValue = less_custom_alpha$p.value, statistic = less_custom_alpha$statistic, lower = less_custom_alpha$conf.int[1L], upper = less_custom_alpha$conf.int[2L] );

	x <- rnorm( 100L );
	greater_custom_alpha <- t.test( x, alternative = 'greater', conf.level = 0.9 );
	greater_custom_alpha <- list(
		x = x,
		pValue = greater_custom_alpha$p.value,
		statistic = greater_custom_alpha$statistic,
		lower = greater_custom_alpha$conf.int[1L],
		upper = greater_custom_alpha$conf.int[2L]
	);
	x <- rnorm( 100L, 1.0, 2.0 );
	y <- rnorm( 100L, 1.0, 2.0 );
	paired <- t.test( x, y, paired = TRUE );
	paired <- list( x = x, y = y, pValue = paired$p.value, statistic = paired$statistic, lower = paired$conf.int[1L], upper = paired$conf.int[2L] );

	x <- rnorm( 100L, 1.0, 2.0 );
	y <- rnorm( 100L, 2.0, 2.0 );
	paired_less <- t.test( x, y, paired = TRUE, alternative = 'less' );
	paired_less <- list( x = x, y = y, pValue = paired_less$p.value, statistic = paired_less$statistic, lower = paired_less$conf.int[1L], upper = paired_less$conf.int[2L] );

	# Convert fixture data to JSON:
	twosided <- to_json( twosided );
	twosided_custom_alpha <- to_json( twosided_custom_alpha );
	greater <- to_json( greater );
	less <- to_json( less );
	paired <- to_json( paired );
	paired_less <- to_json( paired_less );
	less_custom_alpha <- to_json( less_custom_alpha );
	greater_custom_alpha <- to_json( greater_custom_alpha );

	# Write the data to file...
	filepath <- get_filepath( 'twosided.json' );
	write( twosided, filepath );

	filepath <- get_filepath( 'twosided_custom_alpha.json' );
	write( twosided_custom_alpha, filepath );

	filepath <- get_filepath( 'greater.json' );
	write( greater, filepath );

	filepath <- get_filepath( 'less.json' );
	write( less, filepath );

	filepath <- get_filepath( 'paired.json' );
	write( paired, filepath );

	filepath <- get_filepath( 'paired_less.json' );
	write( paired_less, filepath );

	filepath <- get_filepath( 'less_custom_alpha.json' );
	write( less_custom_alpha, filepath );

	filepath <- get_filepath( 'greater_custom_alpha.json' );
	write( greater_custom_alpha, filepath );
}

main();
