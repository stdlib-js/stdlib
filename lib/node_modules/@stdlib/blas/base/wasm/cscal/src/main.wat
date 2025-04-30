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
  (type (;1;) (func (param i32 i32 i32 i32)))
  (type (;2;) (func (param i32 i32 i32 i32 i32)))
  (import "env" "memory" (memory (;0;) 0))
  (func (;0;) (type 0)
    nop)
  (func (;1;) (type 1) (param i32 i32 i32 i32)
    (local i64 i64 i64 f32 f32 f32 f32)
    local.get 0
    i32.const 0
    i32.gt_s
    if  ;; label = @1
      local.get 2
      i32.const 1
      local.get 0
      i32.sub
      local.get 3
      i32.mul
      i32.const 0
      local.get 3
      i32.const 0
      i32.le_s
      select
      i32.const 3
      i32.shl
      i32.add
      local.set 2
      local.get 1
      i64.load align=4
      local.tee 4
      i64.const 32
      i64.shr_u
      i32.wrap_i64
      f32.reinterpret_i32
      local.set 7
      local.get 0
      i64.extend_i32_u
      local.set 5
      local.get 4
      i32.wrap_i64
      f32.reinterpret_i32
      local.set 8
      i64.const 0
      local.set 4
      loop  ;; label = @2
        local.get 2
        local.get 8
        local.get 2
        i64.load align=4
        local.tee 6
        i64.const 32
        i64.shr_u
        i32.wrap_i64
        f32.reinterpret_i32
        local.tee 9
        f32.mul
        local.get 6
        i32.wrap_i64
        f32.reinterpret_i32
        local.tee 10
        local.get 7
        f32.mul
        f32.add
        f32.store offset=4
        local.get 2
        local.get 8
        local.get 10
        f32.mul
        local.get 7
        local.get 9
        f32.mul
        f32.sub
        f32.store
        local.get 2
        local.get 3
        i32.const 3
        i32.shl
        i32.add
        local.set 2
        local.get 4
        i64.const 1
        i64.add
        local.tee 4
        local.get 5
        i64.ne
        br_if 0 (;@2;)
      end
    end)
  (func (;2;) (type 2) (param i32 i32 i32 i32 i32)
    (local f32 f32 f32 f32 i64 i64 i64)
    local.get 0
    i32.const 0
    i32.gt_s
    if  ;; label = @1
      local.get 2
      local.get 4
      i32.const 3
      i32.shl
      i32.add
      local.set 4
      local.get 1
      f32.load offset=4
      local.set 5
      local.get 1
      f32.load
      local.set 6
      local.get 0
      i64.extend_i32_u
      local.set 10
      local.get 3
      i32.const 3
      i32.shl
      local.set 0
      loop  ;; label = @2
        local.get 4
        local.get 6
        local.get 4
        i64.load align=4
        local.tee 11
        i64.const 32
        i64.shr_u
        i32.wrap_i64
        f32.reinterpret_i32
        local.tee 7
        f32.mul
        local.get 5
        local.get 11
        i32.wrap_i64
        f32.reinterpret_i32
        local.tee 8
        f32.mul
        f32.add
        f32.store offset=4
        local.get 4
        local.get 6
        local.get 8
        f32.mul
        local.get 5
        local.get 7
        f32.mul
        f32.sub
        f32.store
        local.get 0
        local.get 4
        i32.add
        local.set 4
        local.get 9
        i64.const 1
        i64.add
        local.tee 9
        local.get 10
        i64.ne
        br_if 0 (;@2;)
      end
    end)
  (export "__wasm_call_ctors" (func 0))
  (export "__wasm_apply_data_relocs" (func 0))
  (export "c_cscal" (func 1))
  (export "c_cscal_ndarray" (func 2)))
