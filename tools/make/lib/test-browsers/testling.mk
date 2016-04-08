
# VARIABLES #

# Define the path to the [testling][1] executable.
#
# To install testling:
#     $ npm install testling
#
# [1]: https://github.com/substack/testling

BROWSER_TEST_RUNNER_BIN ?= $(BIN)/testling

# Define command-line options to be used when invoking the testling executable:
BROWSER_TEST_RUNNER_FLAGS ?= ''


# TARGETS #

# View browser tests in a local web browser.
#
# This target runs unit tests in a local web browser using [testling][1].
#
# [1]: https://github.com/substack/testling

view-testling: node_modules
	NODE_ENV=$(NODE_ENV) \
	NODE_PATH=$(NODE_PATH_TEST) \
	$(BROWSERIFY) \
		$(BROWSERIFY_FLAGS) \
		$(TESTS) \
	| $(BROWSER_TEST_RUNNER_BIN) \
		--x $(OPEN) \
	| $(TAP_REPORTER)


.PHONY: view-testling
