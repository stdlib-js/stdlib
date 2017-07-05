
# VARIABLES #

# Define the path to the script for generating REPL language stats:
REPL_LANG_STATS ?= $(TOOLS_DIR)/scripts/repl_lang_stats


# TARGETS #

# Compute REPL language stats.
#
# This target computes REPL language statistics.

stats-repl-lang: $(REPL_LANG_STATS)
	$(QUIET) $(MAKE_EXECUTABLE) $(REPL_LANG_STATS)
	$(QUIET) $(REPL_LANG_STATS)

.PHONY: stats-repl-lang
