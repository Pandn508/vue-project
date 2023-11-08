# 微服务内核

> 按需生成，只有创建基座服务才会生成这个文件夹

## 规则

### 数据格式

```ts
export interface SubApp {
  name: string; // 子应用通配名称，例如此处name 为 ailpha::*, 则子应用路由所有路由 name 都为 ailpha::xxx
  url: string; // url 地址可为绝对地址(http://127.0.0.1:8080/)，也可以为不带协议的相对地址(//127.0.0.1:8080/)，也可以为相对地址(/ailpha/)，相对地址会根据基座服务的 url 计算出绝对地址
  baseroute: string; // 该子服务激活路径，例如 /ailpha
  custom?: boolean;
}
```

**关于 custom 单独说明**
如果为 true，则 xxxx
如果为 false 或则 缺省

### 子服务

子服务路由模式可以用 hash 或者 history 模式

### 子服务路由规范
