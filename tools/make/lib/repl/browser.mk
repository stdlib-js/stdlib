
# VARIABLES #

# Define the command to create a disposable HTTP server:
repl_tmp_http_server := $(NODE) $(SRC_DIR)/@stdlib/tools/disposable-http-server/bin/cli

# Define the source file to bundle:
REPL_BROWSER_BUNDLE ?= $(DIST_DIR)/stdlib-repl.min.js


# TARGETS #

# Start a browser REPL environment.
#
# This target starts a browser REPL environment.

repl-browser: $(NODE_MODULES) $(REPL_BROWSER_BUNDLE)
	$(QUIET) $(CAT) $(REPL_BROWSER_BUNDLE) | DEBUG=* $(repl_tmp_http_server) \
		--stdin javascript \
		--open

.PHONY: repl-browser
