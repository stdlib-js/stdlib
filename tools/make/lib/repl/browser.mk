
# VARIABLES #

# Define the executable to start a browser REPL environment:
REPL_BROWSER ?= $(SRC_DIR)/@stdlib/repl/scripts/browser_run


# TARGETS #

# Start a browser REPL environment.
#
# This target starts a browser REPL environment.

repl-browser: $(NODE_MODULES) $(REPL_BROWSER)
	$(QUIET) NODE_ENV=$(NODE_ENV_REPL) $(NODE) $(REPL_BROWSER)

.PHONY: repl-browser
