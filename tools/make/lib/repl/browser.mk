
# VARIABLES #

# Define the path to the `browserify` executable:
BROWSERIFY ?= $(BIN_DIR)/browserify

# Define the command to create a disposable HTTP server:
repl_tmp_http_server := $(NODE) $(SRC_DIR)/@stdlib/tools/disposable-http-server/bin/cli

# Define the source file to bundle:
REPL_BROWSER_SRC ?= $(SRC_DIR)/@stdlib/repl/scripts/browser.js

# Define command-line options when generating a `browserify` bundle:
REPL_BROWSERIFY_FLAGS ?=

# Define the output directory for a browser bundle:
REPL_BROWSER_BUNDLE_OUT ?= $(BUILD_DIR)/repl

# Define the output file:
REPL_BROWSER_BUNDLE ?= $(REPL_BROWSER_BUNDLE_OUT)/bundle.js


# TARGETS #

# Start a browser REPL environment.
#
# This target starts a browser REPL environment.

repl-browser: $(NODE_MODULES)
	$(QUIET) NODE_ENV=$(NODE_ENV_REPL) $(BROWSERIFY) \
		$(REPL_BROWSERIFY_FLAGS) \
		$(REPL_BROWSER_SRC) \
	| DEBUG=* $(repl_tmp_http_server) \
		--stdin javascript \
		--open

.PHONY: repl-browser


# Generate a browser bundle.
#
# This target generates a browser bundle for a browser REPL environment.

repl-browser-bundle: $(NODE_MODULES)
	$(QUIET) $(MKDIR_RECURSIVE) $(REPL_BROWSER_BUNDLE_OUT)
	$(QUIET) NODE_ENV=$(NODE_ENV_REPL) $(BROWSERIFY) \
		$(REPL_BROWSERIFY_FLAGS) \
		$(REPL_BROWSER_SRC) > $(REPL_BROWSER_BUNDLE)

.PHONY: repl-browser-bundle


# Remove browser bundle.
#
# This target removes previously generated browser bundles.

clean-repl-browser-bundle:
	$(QUIET) $(DELETE) $(DELETE_FLAGS) $(REPL_BROWSER_BUNDLE_OUT)

.PHONY: clean-repl-browser-bundle
