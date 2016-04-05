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
	@echo '  make lint                Run code linting.'
	@echo '  make install             Install dependencies.'
	@echo '  make clean               Clean the build directory.'
	@echo '  make clean-node          Remove Node dependencies.'
	@echo ''


#############
# VARIABLES #

# Determine the Makefile's path:
THIS_FILE := $(lastword $(MAKEFILE_LIST))

GREP ?= grep
NPM ?= npm
NODE ?= node
NODE_ENV ?= test
NODE_MODULES ?= ./node_modules
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
TAP_REPORTER ?=  $(NODE_MODULES)/.bin/tap-spec
TAP_SUMMARY ?= $(NODE_MODULES)/.bin/tap-summary


# ISTANBUL #

REPORTS_DIR ?= ./reports
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
TESTLING_DIR ?= ./


# TRAVIS #

TRAVIS_RUN ?= ./.travis.sh


# JSHINT #

JSHINT ?= $(NODE_MODULES)/.bin/jshint
JSHINT_REPORTER ?= $(NODE_MODULES)/jshint-stylish


# FILES #

SOURCE_DIR ?= .
TESTS_DIR ?= test
EXAMPLES_DIR ?= examples

SOURCES_FILTER ?= .*/.*
TESTS_FILTER ?= .*/.*
EXAMPLES_FILTER ?= .*/.*

# On Mac OSX, in order to use `|` and other regular expression operators, we need to use enhanced regular expression syntax (-E); see https://developer.apple.com/library/mac/documentation/Darwin/Reference/ManPages/man7/re_format.7.html#//apple_ref/doc/man/7/re_format.

ifeq ($(KERNEL), Darwin)
	SOURCES ?= $(shell find -E $(SOURCE_DIR) \
		-name '*.js' \
		-regex "$(SOURCES_FILTER)" \
		-not -name 'test*.js' \
		-not -path '$(NODE_MODULES)/*' \
		-not -path "**/$(EXAMPLES_DIR)/*" \
		-not -path "$(REPORTS_DIR)/*" \
	)

	TESTS ?= $(shell find -E $(SOURCE_DIR) \
		-name 'test*.js' \
		-regex "$(TESTS_FILTER)" \
		-not -path "$(NODE_MODULES)/*" \
	)

	EXAMPLES ?= $(shell find -E $(SOURCE_DIR) \
		-name '*.js' \
		-path "$(SOURCE_DIR)/**/$(EXAMPLES_DIR)/**" \
		-regex "$(EXAMPLES_FILTER)" \
		-not -path "$(NODE_MODULES)/*" \
	)
else
	SOURCES ?= $(shell find $(SOURCE_DIR) \
		-name '*.js' \
		-regextype posix-extended \
		-regex "$(SOURCES_FILTER)" \
		-not -name 'test*.js' \
		-not -path '$(NODE_MODULES)/*' \
		-not -path "**/$(EXAMPLES_DIR)/*" \
		-not -path "$(REPORTS_DIR)/*" \
	)

	TESTS ?= $(shell find $(SOURCE_DIR) \
		-name 'test*.js' \
		-regextype posix-extended \
		-regex "$(TESTS_FILTER)" \
		-not -path "$(NODE_MODULES)/*" \
	)

	EXAMPLES ?= $(shell find $(SOURCE_DIR) \
		-name '*.js' \
		-path "$(SOURCE_DIR)/**/$(EXAMPLES_DIR)/**" \
		-regextype posix-extended \
		-regex "$(EXAMPLES_FILTER)" \
		-not -path "$(NODE_MODULES)/*" \
	)
endif



###########
# TARGETS #


# NOTES #

.PHONY: notes

notes:
	$(GREP) -Ern $(NOTES) $(SOURCE_DIR) \
		--exclude-dir "$(NODE_MODULES)/*" \
		--exclude $(THIS_FILE) \
		--exclude './.*' \
		--exclude '$(REPORTS_DIR)/*' \
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

.PHONY: test-ci test-ci-browsers
.PHONY: coverage coverage-codecov

test-ci: node_modules
	chmod 755 $(TRAVIS_RUN)
	$(TRAVIS_RUN)

test-ci-browsers: node_modules
	xvfb-run make -f $(THIS_FILE) test-browsers

coverage: coverage-codecov

coverage-codecov: test-cov
	$(NPM) install codecov
	cat $(ISTANBUL_LCOV_INFO_PATH) | $(CODECOV)


# LINT #

.PHONY: lint lint-jshint

lint: lint-jshint

lint-jshint: node_modules
	$(JSHINT) \
		--reporter $(JSHINT_REPORTER) \
		./


# NODE #

.PHONY: install clean-node

install: package.json
	$(NPM) install

clean-node:
	rm -rf $(NODE_MODULES)


# CLEAN #

.PHONY: clean

clean:
	rm -rf build
