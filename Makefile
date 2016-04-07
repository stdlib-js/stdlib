# NOTE: this file should be located in the top-level application directory.

.PHONY: help

help:
	@echo ''
	@echo 'Usage: make <cmd>'
	@echo ''
	@echo '  make help                Print this message.'
	@echo '  make notes               Search for code annotations.'
	@echo '  make list-sources        List all source files (excluding examples and tests).'
	@echo '  make list-examples       List all example files.'
	@echo '  make list-tests          List all test files.'
	@echo '  make examples            Run examples.'
	@echo '  make test                Run tests.'
	@echo '  make test-summary        Run tests and output a test summary.'
	@echo '  make test-cov            Run tests with code coverage.'
	@echo '  make test-browsers       Run tests in a local web browser.'
	@echo '  make view-cov            View the most recent code coverage report.'
	@echo '  make view-browser-tests  View browser tests in a local web browser.'
	@echo '  make docs-src            Generate source documentation.'
	@echo '  make view-src-docs       View source documentation.'
	@echo '  make lint                Run code linting.'
	@echo '  make install             Install dependencies.'
	@echo '  make clean               Clean the build directory.'
	@echo '  make clean-node          Remove Node dependencies.'
	@echo ''


#############
# VARIABLES #

# Determine the Makefile filename:
THIS_FILE := $(lastword $(MAKEFILE_LIST))

# Determine the absolute path of the Makefile (see http://blog.jgc.org/2007/01/what-makefile-am-i-in.html):
THIS_DIR := $(dir $(CURDIR)/$(word $(words $(MAKEFILE_LIST)),$(MAKEFILE_LIST)))

# Remove the trailing slash:
THIS_DIR := $(patsubst %/,%,$(THIS_DIR))

ROOT ?= $(THIS_DIR)
CONFIG_DIR ?= $(ROOT)/etc

GREP ?= grep
NPM ?= npm
NODE ?= node
NODE_ENV ?= test
NODE_MODULES ?= $(ROOT)/node_modules
TRAVIS ?= false

KERNEL ?= $(shell uname -s)
ifeq ($(KERNEL), Darwin)
	OPEN ?= open
else
	OPEN ?= xdg-open
endif


# NOTES #

NOTES ?= 'TODO|FIXME|WARNING|HACK|NOTE|OPTIMIZE'


# TAPE #

TAPE ?= $(NODE_MODULES)/.bin/tape
TAP_REPORTER ?= $(NODE_MODULES)/.bin/tap-spec
TAP_SUMMARY ?= $(NODE_MODULES)/.bin/tap-summary


# ISTANBUL #

REPORTS_DIR ?= $(ROOT)/reports
ISTANBUL ?= $(NODE_MODULES)/.bin/istanbul
ISTANBUL_OUT ?= $(REPORTS_DIR)/coverage
ISTANBUL_REPORT ?= lcov
ISTANBUL_LCOV_INFO_PATH ?= $(ISTANBUL_OUT)/lcov.info
ISTANBUL_HTML_REPORT_PATH ?= $(ISTANBUL_OUT)/lcov-report/index.html


# CODECOV #

CODECOV ?= $(NODE_MODULES)/.bin/codecov


# BROWSERIFY #

BROWSERIFY ?= $(NODE_MODULES)/.bin/browserify
BROWSERIFY_PROXYQUIRE ?= $(NODE_MODULES)/proxyquire-universal


# TESTLING #

TESTLING ?= $(NODE_MODULES)/.bin/testling
TESTLING_DIR ?= $(ROOT)/


# JSDOC #

JSDOC ?= $(NODE_MODULES)/.bin/jsdoc
JSDOC_CONF ?= $(CONFIG_DIR)/jsdoc.conf.json
JSDOC_OUT ?= $(ROOT)/build/docs
JSDOC_JSON_TEMPLATE ?= $(ROOT)/tools/docs/jsdoc/templates/json
JSDOC_JSON_PATH ?= $(ROOT)/build/docs.json
JSDOC_HTML_TEMPLATE ?= templates/default
JSDOC_HTML_PATH ?= $(JSDOC_OUT)/index.html


# JSHINT #

# TODO: replace with eslint
JSHINT ?= $(NODE_MODULES)/.bin/jshint
JSHINT_REPORTER ?= $(NODE_MODULES)/jshint-stylish


# FILES #

SOURCE_DIR ?= lib
TESTS_DIR ?= test
EXAMPLES_DIR ?= examples
BUILD_DIR ?= $(ROOT)/build

SOURCES_PATTERN ?= *.js
TESTS_PATTERN ?= test*.js
EXAMPLES_PATTERN ?= *.js

SOURCES_FILTER ?= .*/.*
TESTS_FILTER ?= .*/.*
EXAMPLES_FILTER ?= .*/.*

# On Mac OSX, in order to use `|` and other regular expression operators, we need to use enhanced regular expression syntax (-E); see https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man7/re_format.7.html#//apple_ref/doc/man/7/re_format.

ifeq ($(KERNEL), Darwin)
	SOURCES ?= $(shell find -E $(ROOT) \
		-name "$(SOURCES_PATTERN)" \
		-regex "$(SOURCES_FILTER)" \
		-not -name "$(TESTS_PATTERN)" \
		-not -path "$(NODE_MODULES)/*" \
		-not -path "$(BUILD_DIR)/*" \
		-not -path "**/$(EXAMPLES_DIR)/*" \
		-not -path "$(REPORTS_DIR)/*" \
	)

	TESTS ?= $(shell find -E $(ROOT) \
		-name "$(TESTS_PATTERN)" \
		-regex "$(TESTS_FILTER)" \
		-not -path "$(NODE_MODULES)/*" \
		-not -path "$(BUILD_DIR)/*" \
	)

	EXAMPLES ?= $(shell find -E $(ROOT) \
		-name "$(EXAMPLES_PATTERN)" \
		-path "$(ROOT)/**/$(EXAMPLES_DIR)/**" \
		-regex "$(EXAMPLES_FILTER)" \
		-not -path "$(NODE_MODULES)/*" \
		-not -path "$(BUILD_DIR)/*" \
	)
else
	SOURCES ?= $(shell find $(ROOT) \
		-name "$(SOURCES_PATTERN)" \
		-regextype posix-extended \
		-regex "$(SOURCES_FILTER)" \
		-not -name "$(TESTS_PATTERN)" \
		-not -path "$(NODE_MODULES)/*" \
		-not -path "$(BUILD_DIR)/*" \
		-not -path "**/$(EXAMPLES_DIR)/*" \
		-not -path "$(REPORTS_DIR)/*" \
	)

	TESTS ?= $(shell find $(ROOT) \
		-name "$(TESTS_PATTERN)" \
		-regextype posix-extended \
		-regex "$(TESTS_FILTER)" \
		-not -path "$(NODE_MODULES)/*" \
		-not -path "$(BUILD_DIR)/*" \
	)

	EXAMPLES ?= $(shell find $(ROOT) \
		-name "$(EXAMPLES_PATTERN)" \
		-path "$(ROOT)/**/$(EXAMPLES_DIR)/**" \
		-regextype posix-extended \
		-regex "$(EXAMPLES_FILTER)" \
		-not -path "$(NODE_MODULES)/*" \
		-not -path "$(BUILD_DIR)/*" \
	)
endif



###########
# TARGETS #


# NOTES #

.PHONY: notes

notes:
	$(GREP) -Ern $(NOTES) $(ROOT) \
		--exclude-dir "$(NODE_MODULES)/*" \
		--exclude-dir "$(BUILD_DIR)/*" \
		--exclude "$(THIS_FILE)" \
		--exclude "$(ROOT)/.*" \
		--exclude "$(REPORTS_DIR)/*" \
		--exclude TODO.md


# FILES #

.PHONY: list-sources list-examples list-tests

list-sources:
	@printf '%s\n' $(SOURCES)

list-examples:
	@printf '%s\n' $(EXAMPLES)

list-tests:
	@printf '%s\n' $(TESTS)


# EXAMPLES #

.PHONY: examples

examples: node_modules
	for file in $(EXAMPLES); do \
		echo ""; \
		echo "Running example: $$file"; \
		$(NODE) $$file; \
	done


# UNIT TESTS #

.PHONY: test test-local test-tape test-summary

test:
ifeq ($(TRAVIS), true)
	@$(MAKE) -f $(THIS_FILE) test-ci
else
	@$(MAKE) -f $(THIS_FILE) test-local
endif

test-local: test-tape

test-tape: node_modules
	NODE_ENV=$(NODE_ENV) \
	NODE_PATH=$(NODE_PATH_TEST) \
	$(TAPE) \
		$(TESTS) \
	| $(TAP_REPORTER)

test-summary: node_modules
	NODE_ENV=$(NODE_ENV) \
	NODE_PATH=$(NODE_PATH_TEST) \
	$(TAPE) \
		$(TESTS) \
	| $(TAP_SUMMARY)


# BROWSER TESTS #

.PHONY: test-browsers test-testling view-browser-tests view-testling

test-browsers: test-testling

test-testling: node_modules
	NODE_ENV=$(NODE_ENV) \
	NODE_PATH=$(NODE_PATH_TEST) \
	$(BROWSERIFY) \
		-p $(BROWSERIFY_PROXYQUIRE) \
		$(TESTS) \
	| $(TESTLING) \
	| $(TAP_REPORTER)

view-browser-tests: view-testling

view-testling: node_modules
	NODE_ENV=$(NODE_ENV) \
	NODE_PATH=$(NODE_PATH_TEST) \
	$(BROWSERIFY) \
		-p $(BROWSERIFY_PROXYQUIRE) \
		$(TESTS) \
	| $(TESTLING) \
		--x $(OPEN) \
	| $(TAP_REPORTER)


# CODE COVERAGE #

.PHONY: test-cov test-istanbul-tape

test-cov: test-istanbul-tape

test-istanbul-tape: node_modules
	NODE_ENV=$(NODE_ENV) \
	NODE_PATH=$(NODE_PATH_TEST) \
	$(ISTANBUL) cover \
		--no-default-excludes \
		-x 'node_modules/**' \
		-x 'build/**' \
		-x '**/test/**' \
		-x '**/tests/**' \
		-x 'reports/**' \
		--dir $(ISTANBUL_OUT) \
		--report $(ISTANBUL_REPORT) \
	$(TAPE) -- \
		$(TESTS)


# COVERAGE REPORT #

.PHONY: view-cov view-istanbul-report

view-cov: view-istanbul-report

view-istanbul-report:
	$(OPEN) $(ISTANBUL_HTML_REPORT_PATH)


# CONTINUOUS INTEGRATION #

.PHONY: test-ci test-ci-browsers test-ci-testling
.PHONY: coverage coverage-codecov

# test-ci: test-local test-ci-browsers
test-ci: test-local

test-ci-browsers: node_modules
	xvfb-run make -f $(THIS_FILE) test-ci-testling

test-ci-testling: node_modules
	for file in $(TESTS); do \
		NODE_ENV=$(NODE_ENV) \
		NODE_PATH=$(NODE_PATH_TEST) \
		$(BROWSERIFY) \
			-p $(BROWSERIFY_PROXYQUIRE) \
			$$file \
		| $(TESTLING) \
		| $(TAP_REPORTER); \
	done

coverage: coverage-codecov

coverage-codecov: test-cov
	$(NPM) install codecov
	cat $(ISTANBUL_LCOV_INFO_PATH) | $(CODECOV)


# SOURCE DOCS #

.PHONY: docs-src docs-jsdoc jsdoc-json view-src-docs

docs-src: docs-jsdoc

docs-jsdoc: node_modules
	rm -rf $(JSDOC_OUT)
	mkdir -p $(JSDOC_OUT)
	$(JSDOC) \
		--template $(JSDOC_HTML_TEMPLATE) \
		--configure $(JSDOC_CONF) \
		--encoding utf8 \
		--destination $(JSDOC_OUT) \
		--verbose \
		$(SOURCES)

jsdoc-json: node_modules
	rm -f $(JSDOC_JSON_PATH)
	mkdir -p $(BUILD_DIR)
	$(JSDOC) \
		--template $(JSDOC_JSON_TEMPLATE) \
		--configure $(JSDOC_CONF) \
		--encoding utf8 \
		--destination console \
		$(SOURCES) \
	> $(JSDOC_JSON_PATH)

view-src-docs:
	$(OPEN) $(JSDOC_HTML_PATH)


# LINT #

.PHONY: lint lint-jshint

lint: lint-jshint

lint-jshint: node_modules
	$(JSHINT) \
		--reporter $(JSHINT_REPORTER) \
		$(ROOT)/


# NODE #

.PHONY: install clean-node

install: package.json
	$(NPM) install

clean-node:
	rm -rf $(NODE_MODULES)


# CLEAN #

.PHONY: clean

clean:
	rm -rf $(BUILD_DIR)
