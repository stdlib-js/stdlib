
# VARIABLES #

# Define the path to the executable for generating REPL help docs:
REPL_HELP ?= $(SRC_DIR)/@stdlib/namespace/scripts/build.js


# TARGETS #

# Generate REPL help.
#
# This target generates REPL help documentation.

repl-help: $(NODE_MODULES)
	$(QUIET) $(NODE) $(REPL_HELP)

.PHONY: repl-help
