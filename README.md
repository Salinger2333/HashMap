# HashMap

This repository contains a JavaScript implementation of a Hash Map data structure. It demonstrates core concepts such as hashing, collision resolution (using chaining with arrays), and dynamic resizing based on a load factor.

本仓库包含一个哈希表（Hash Map）数据结构的 JavaScript 实现。它展示了核心概念，如哈希、冲突解决（使用数组链表法）以及基于负载因子的动态扩容。

## Features / 功能

- **`set(key, value)`**: Add or update a key-value pair. / 添加或更新键值对。
- **`get(key)`**: Retrieve the value associated with a key. / 获取与键关联的值。
- **`has(key)`**: Check if a key exists in the map. / 检查 Map 中是否存在该键。
- **`remove(key)`**: Remove a key-value pair. / 移除键值对。
- **`length()`**: Return the total number of stored keys. / 返回存储的键的总数。
- **`clear()`**: Remove all entries. / 清除所有条目。
- **`keys()`**: Return an array of all keys. / 返回所有键的数组。
- **`values()`**: Return an array of all values. / 返回所有值的数组。
- **`entries()`**: Return an array of all key-value pairs. / 返回所有键值对的数组。
- **Dynamic Resizing**: Automatically expands the bucket size when the load factor exceeds 0.75. / 动态扩容：当负载因子超过 0.75 时自动扩展桶大小。
