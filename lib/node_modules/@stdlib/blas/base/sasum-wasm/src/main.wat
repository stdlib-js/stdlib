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
  (type (;1;) (func (param i32 i32 i32) (result f32)))
  (type (;2;) (func (param i32 i32 i32 i32) (result f32)))
  (import "env" "memory" (memory (;0;) 0))
  (func (;0;) (type 0)
    nop)
  (func (;1;) (type 1) (param i32 i32 i32) (result f32)
    (local i64)
    local.get 0
    local.get 1
    local.get 2
    local.get 2
    i64.extend_i32_s
    local.tee 3
    i64.const 1
    local.get 0
    i64.extend_i32_s
    i64.sub
    i64.mul
    i64.const 0
    local.get 3
    i64.const 0
    i64.le_s
    select
    i32.wrap_i64
    call 2)
  (func (;2;) (type 2) (param i32 i32 i32 i32) (result f32)
    (local f32 i32 i32)
    local.get 0
    i32.const 0
    i32.le_s
    if  ;; label = @1
      f32.const 0x0p+0 (;=0;)
      return
    end
    block  ;; label = @1
      local.get 2
      i32.const 1
      i32.ne
      if  ;; label = @2
        loop  ;; label = @3
          local.get 4
          local.get 1
          local.get 3
          i32.const 2
          i32.shl
          i32.add
          f32.load
          f32.abs
          f32.add
          local.set 4
          local.get 2
          local.get 3
          i32.add
          local.set 3
          local.get 5
          i32.const 1
          i32.add
          local.tee 5
          local.get 0
          i32.ne
          br_if 0 (;@3;)
        end
        br 1 (;@1;)
      end
      block  ;; label = @2
        local.get 0
        i32.const 6
        i32.rem_u
        local.tee 2
        i32.eqz
        if  ;; label = @3
          local.get 3
          local.set 5
          br 1 (;@2;)
        end
        loop  ;; label = @3
          local.get 4
          local.get 1
          local.get 3
          i32.const 2
          i32.shl
          i32.add
          f32.load
          f32.abs
          f32.add
          local.set 4
          local.get 3
          i32.const 1
          i32.add
          local.tee 5
          local.set 3
          local.get 6
          i32.const 1
          i32.add
          local.tee 6
          local.get 2
          i32.ne
          br_if 0 (;@3;)
        end
      end
      local.get 0
      i32.const 6
      i32.lt_s
      br_if 0 (;@1;)
      loop  ;; label = @2
        local.get 4
        local.get 1
        local.get 5
        i32.const 2
        i32.shl
        i32.add
        local.tee 3
        f32.load
        f32.abs
        local.get 3
        f32.load offset=4
        f32.abs
        f32.add
        local.get 3
        f32.load offset=8
        f32.abs
        f32.add
        local.get 3
        f32.load offset=12
        f32.abs
        f32.add
        local.get 3
        f32.load offset=16
        f32.abs
        f32.add
        local.get 3
        f32.load offset=20
        f32.abs
        f32.add
        f32.add
        local.set 4
        local.get 5
        i32.const 6
        i32.add
        local.set 5
        local.get 2
        i32.const 6
        i32.add
        local.tee 2
        local.get 0
        i32.lt_s
        br_if 0 (;@2;)
      end
    end
    local.get 4)
  (export "__wasm_call_ctors" (func 0))
  (export "__wasm_apply_data_relocs" (func 0))
  (export "c_sasum" (func 1))
  (export "c_sasum_ndarray" (func 2)))
