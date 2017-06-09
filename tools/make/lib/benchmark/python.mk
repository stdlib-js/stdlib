
# TARGETS #

# Run Python benchmarks.
#
# This target runs a list of Python benchmarks in sequential order. Note that we assume the benchmarks can be run using Python.

benchmark-python:
	$(QUIET) $(FIND_PYTHON_BENCHMARKS_CMD) | grep '^\/' | while read -r file; do \
		echo ""; \
		echo "Running benchmark: $$file"; \
		$(PYTHON) $$file || exit 1; \
	done

.PHONY: benchmark-python


# Run Python benchmarks.
#
# This target runs a specified list of Python benchmarks in sequential order. Note that we assume the benchmarks can be run using Python.

benchmark-python-files:
	$(QUIET) for file in $(FILES); do \
		echo ""; \
		echo "Running benchmark: $$file"; \
		$(PYTHON) $$file || exit 1; \
	done

.PHONY: benchmark-python-files
