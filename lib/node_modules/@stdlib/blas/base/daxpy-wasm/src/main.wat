;; @license Apache-2.0
;;
;; Copyright (c) 2024 The Stdlib Authors.
;;
;; Licensed under the Apache License, Version 2.0 (the "License");
;; you may not use this file except in compliance with the License.
;; You may obtain a copy of the License at
;;
;;    http://www.apache.org/licenses/LICENSE-2.0
;;
;; Unless required by applicable law or agreed to in writing, software
;; distributed under the License is distributed on an "AS IS" BASIS,
;; WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
;; See the License for the specific language governing permissions and
;; limitations under the License.

(module
  (type (;0;) (func))
  (type (;1;) (func (param i32 f64 i32 i32 i32 i32)))
  (type (;2;) (func (param i32 f64 i32 i32 i32 i32 i32 i32)))
  (import "env" "memory" (memory (;0;) 0))
  (func (;0;) (type 0)
    nop)
  (func (;1;) (type 1) (param i32 f64 i32 i32 i32 i32)
    (local i64 i64)
    local.get 0
    local.get 1
    local.get 2
    local.get 3
    local.get 3
    i64.extend_i32_s
    local.tee 6
    i64.const 1
    local.get 0
    i64.extend_i32_s
    local.tee 7
    i64.sub
    i64.mul
    i64.const 0
    local.get 6
    i64.const 0
    i64.le_s
    select
    i32.wrap_i64
    local.get 4
    local.get 5
    local.get 5
    i64.extend_i32_s
    local.tee 6
    i64.const 1
    local.get 7
    i64.sub
    i64.mul
    i64.const 0
    local.get 6
    i64.const 0
    i64.le_s
    select
    i32.wrap_i64
    call 2)
  (func (;2;) (type 2) (param i32 f64 i32 i32 i32 i32 i32 i32)
    (local i32 i32 i32 i32 i32)
    block  ;; label = @1
      local.get 0
      i32.const 0
      i32.le_s
      br_if 0 (;@1;)
      local.get 1
      f64.const 0x0p+0 (;=0;)
      f64.eq
      br_if 0 (;@1;)
      local.get 0
      i32.const 1
      i32.and
      local.set 9
      local.get 0
      i32.const 1
      i32.ne
      if  ;; label = @2
        local.get 0
        i32.const 2147483646
        i32.and
        local.set 10
        local.get 6
        local.get 6
        i32.add
        local.set 11
        local.get 3
        local.get 3
        i32.add
        local.set 12
        i32.const 0
        local.set 0
        loop  ;; label = @3
          local.get 5
          local.get 7
          i32.const 3
          i32.shl
          i32.add
          local.tee 8
          local.get 1
          local.get 2
          local.get 4
          i32.const 3
          i32.shl
          i32.add
          f64.load
          f64.mul
          local.get 8
          f64.load
          f64.add
          f64.store
          local.get 5
          local.get 6
          local.get 7
          i32.add
          i32.const 3
          i32.shl
          i32.add
          local.tee 8
          local.get 1
          local.get 2
          local.get 3
          local.get 4
          i32.add
          i32.const 3
          i32.shl
          i32.add
          f64.load
          f64.mul
          local.get 8
          f64.load
          f64.add
          f64.store
          local.get 7
          local.get 11
          i32.add
          local.set 7
          local.get 4
          local.get 12
          i32.add
          local.set 4
          local.get 0
          i32.const 2
          i32.add
          local.tee 0
          local.get 10
          i32.ne
          br_if 0 (;@3;)
        end
      end
      local.get 9
      i32.eqz
      br_if 0 (;@1;)
      local.get 5
      local.get 7
      i32.const 3
      i32.shl
      i32.add
      local.tee 0
      local.get 1
      local.get 2
      local.get 4
      i32.const 3
      i32.shl
      i32.add
      f64.load
      f64.mul
      local.get 0
      f64.load
      f64.add
      f64.store
    end)
  (export "__wasm_call_ctors" (func 0))
  (export "__wasm_apply_data_relocs" (func 0))
  (export "c_daxpy" (func 1))
  (export "c_daxpy_ndarray" (func 2)))
