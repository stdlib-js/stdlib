
# VARIABLES #

# Define the Node environment:
NODE_ENV ?= test

# Determine the host kernel:
KERNEL ?= $(shell uname -s)

# Based on the kernel, determine the `open` command:
ifeq ($(KERNEL), Darwin)
	OPEN ?= open
else
	OPEN ?= xdg-open
endif
# TODO: add Windows command

# Define the path to the [testling][1] executable.
#
# To install testling:
#     $ npm install testling
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
	$(BROWSERIFY) \
		$(BROWSERIFY_FLAGS) \
		$(TESTS) \
	| $(BROWSER_TEST) \
		--x $(OPEN) \
	| $(TAP_REPORTER)

.PHONY: view-testling
