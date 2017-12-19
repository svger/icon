## Icon

我们使用了阿里巴巴矢量图标库:

- 从 http://www.iconfont.cn/manage/index?manage_type=myprojects&projectId=501801 中查找需要用的图标，如icon-add,如果没有找到，则从矢量图标库中选择想要的，然后添加到项目中。

- 如果改动了图标（添加或删除），在上述链接中中找到我的项目，将Font class下所对应的新的链接替换到Icon项目src/style/index.less文件中。

## 属性
|属性| 说明| 类型|默认值|
|---|----|-----|-----|
|type|图标的类型，如icon-add|string|无|
|className|外部传入类，用来补充定义样式，可以改变图标的大小，颜色等|string|无|
|color|常用的图标颜色，目前有blue和white两个值|string|blue|
|size|常用的图标大小|目前有sm,md,lg三个值|string|md|
|onClick|点击图标的回调函数|func|()=>{}|

## 如何使用
使用 `<Icon />` 标签声明组件，指定图标对应的 type 属性，示例代码如下:

``` html
<Icon type="icon-add" color="blue" size="md"/>
<Icon type="icon-right" className="cefc-button-icon-right"/>
```

## 注意事项
Icon组件内部样式定义采用的类是 cefc-icon- 的形式，比如cefc-icon-right,所以在组件中使用Icon，并向Icon传入className时，避免
采用cefc-icon-，以免造成样式覆盖。