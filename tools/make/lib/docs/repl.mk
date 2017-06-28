
# VARIABLES #

# Define the path to the executable for generating REPL help docs:
REPL_HELP ?= $(SRC_DIR)/@stdlib/repl/help/scripts/build.js

# Define the path to the executable for aggregating REPL examples:
REPL_EXAMPLES ?= $(SRC_DIR)/@stdlib/repl/example/scripts/build.js


# TARGETS #

# Generate REPL docs.
#
# This target generates REPL documentation.

repl-docs: repl-help repl-examples

.PHONY: repl-docs


# Generate REPL help.
#
# This target generates REPL help documentation.

repl-help: $(NODE_MODULES) $(REPL_HELP)
	$(QUIET) $(NODE) $(REPL_HELP)

.PHONY: repl-help


# Aggregate REPL examples.
#
# This target aggregates REPL examples.

repl-examples: $(NODE_MODULES) $(REPL_EXAMPLES)
	$(QUIET) $(NODE) $(REPL_EXAMPLES)

.PHONY: repl-examples
