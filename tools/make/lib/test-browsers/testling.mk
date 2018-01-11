
# VARIABLES #

# Define the path to the [testling][1] executable.
#
# To install testling:
#
# ```bash
# $ npm install testling
# ```
#
# [1]: https://github.com/substack/testling
BROWSER_TEST ?= $(BIN_DIR)/testling

# Define command-line options to be used when invoking the testling executable:
BROWSER_TEST_FLAGS ?=


# TARGETS #

# View browser tests in a local web browser.
#
# This target runs unit tests in a local web browser using [testling][1].
#
# [1]: https://github.com/substack/testling

view-testling: $(NODE_MODULES)
	$(QUIET) NODE_ENV=$(NODE_ENV_TEST) \
	$(BROWSERIFY) \
		$(BROWSERIFY_FLAGS) \
		$(TESTS) \
	| $(BROWSER_TEST) \
		--x $(OPEN) \
	| $(TAP_REPORTER)

.PHONY: view-testling
