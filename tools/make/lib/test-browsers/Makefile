
# VARIABLES #

BROWSER_TEST_RUNNER ?= testling

# Define the path to the browserify executable:
BROWSERIFY ?= $(BIN)/browserify

# Define the path to the browserify plugin which allows proxyquire to be run in a browser:
BROWSERIFY_PROXYQUIRE ?= $(NODE_MODULES)/proxyquire-universal

# Define command-line options to be used when invoking the browserify executable:
BROWSERIFY_FLAGS ?= -p $(BROWSERIFY_PROXYQUIRE)

# Define the path to the `tap-spec` executable:
TAP_REPORTER ?= $(BIN)/tap-spec


# DEPENDENCIES #

# Browser test runner.
#
# All test runners are expected to output TAP.
ifeq ($(BROWSER_TEST_RUNNER), testling)
	include $(TOOLS_MAKE_DIR)/lib/test-browsers/testling.mk
endif


# TARGETS #

# Run unit tests in a (headless) browser.
#
# This target [browserifies][1] test files (and the [proxyquire-universal][2] plugin), runs unit tests in a local (headless) browser using a specified test runner, and pipes output to a TAP reporter which is expected to be [tap-spec][3].
#
# To install browserify, proxyquire-universal, and tap-spec:
#    $ npm install browserify proxyquire-universal tap-spec
#
# [1]: https://github.com/substack/node-browserify
# [2]: https://github.com/bendrucker/proxyquire-universal
# [3]: https://github.com/scottcorgan/tap-spec

test-browsers: node_modules
	NODE_ENV=$(NODE_ENV) \
	NODE_PATH=$(NODE_PATH_TEST) \
	$(BROWSERIFY) \
		$(BROWSERIFY_FLAGS) \
		$(TESTS) \
	| $(BROWSER_TEST_RUNNER_BIN) $(BROWSER_TEST_RUNNER_FLAGS) \
	| $(TAP_REPORTER)


# View browser tests in a local web browser.
#
# This target runs unit tests in a local web browser.

view-browser-tests:
ifeq ($(BROWSER_TEST_RUNNER), testling)
	@$(MAKE) -f $(THIS_FILE) view-testling
endif


.PHONY: test-browsers view-browser-tests
