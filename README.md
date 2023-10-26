# VUE3-TS-WEBPACK

## todo

- [x] webpack
- [x] vue3
- [x] typescript
- [x] vue-router
- [x] pinia
- [x] uno-css
- [x] axios 封装
- [x] layout
- [x] login页面
- [x] 权限管理
- [x] 菜单管理
- [x] git hook
- [ ] 主题色支持
- [ ] 国际化支持
- [ ] 使用文档编写
- [ ] 微前端

## 已知 bug

- [ ] vscode校验规则和 commit 提交时的校验规则不一致
- [ ] uno-css 样式不生效 color-#0D3184 这种样式不生效
- [ ] uno-css pr-1 font-size-4 这种样式需要手动刷新才生效，非热更新

## 使用文档

### 请求使用方式

```ts
import service from '@/service';
/**请求使用演示 */
interface DemoType {
  name: string;
  desc: string;
}
export async function getDemoData() {
  return service.get<DemoType>('/demo');
}

getDemoData().then((res) => {
  res.data.name;
});
```
