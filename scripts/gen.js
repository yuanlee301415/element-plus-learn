#!/usr/bin/env node
/* eslint-disable */

/**
 * 接收参数1：路由名称1[/路由名称2]
 *  1.单个路由名称，必须是合法的 JS 变量名
 *  2.会将其全部大写后，注入到 router 的 JS 代码中
 *  3.会将其全部小写后，做为页面 URL 路径
 *
 * 接收参数2：页面标题1[/页面标题2]
 *  1.支持中文
 *  2.会将其内容原样做为对应的菜单项文本
 *
 * 调用方式：`npm run gen 路由名称1[/路由名称2] 页面标题1[/页面标题2] `
 */

const path = require("path");
const fs = require("fs");
const cwd = process.cwd();
const [, , nameArg, titleArg] = process.argv;
const routeDir = path.resolve(cwd, "src/router/routes");
const childrenReg = /(children:\s)\[(.*?)\]/is;
const upperName = (name) => name.toUpperCase();
const lowerName = (name) => name.toLowerCase();
const capitalName = (name) =>
  name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

class Gen {
  constructor() {
    // `name` 参数数组（命令行第 1 个参数，嵌套路由的 name 使用 '/' 分隔）
    // 统一使用数组表示（非嵌套路由的数组长度为1，嵌套路由的数组长度为2，支持的最大嵌套层级为2级）
    this.names = nameArg.split("/");

    // `title` 参数数组（命令行第 2 个参数，嵌套路由的 title 使用 '/' 分隔）
    // 统一使用数组表示（非嵌套路由的数组长度为1，嵌套路由的数组长度为2，支持的最大嵌套层级为2级）
    this.titles = titleArg.split("/");

    // 全小写
    this.lowerNames = this.names.map(lowerName);

    // 全大写（并且将正则中 \w 以外字符，替换成下划线）
    this.upperNames = this.names.map(upperName).map(_ => _.replace(/\W/gi, '_'));

    // 大驼峰（并以正则 \W 分隔字符，且转换为大驼峰）
    this.capitalNames = this.names.map(_ => _.split(/\W/).map(capitalName).join(''));

    // 目录
    // 非嵌套路由此值为：空
    // 嵌套路由此值为：第一级的路由名称(name)
    this.dir = "";

    // 路由配置
    this.hiddenChildrenInMenu = false;

    // 生成的路由代码
    this.routeCode = "";

    this.names.length > 1 && this.titles.length > 1
      ? this.genNested()
      : this.genSingle();
  }

  // 生成嵌套路由的视图和路由文件
  genNested() {
    if (this.names.length > 2) {
      throw new Error("嵌套层级数只支持 2 级");
    }

    if (this.names.length !== this.titles.length) {
      throw new Error("name 或 title 嵌套层级数不一致");
    }

    const dir = path.join(cwd, "src/views/" + this.lowerNames[0]);
    try {
      fs.statSync(dir);
      this.dir = this.lowerNames[0];
    } catch (err) {
      fs.mkdirSync(dir);
    }
    this.hiddenChildrenInMenu = false;
    this.genView();
    this.genRoute();
  }

  // 生成非嵌套路由的视图和路由文件
  genSingle() {
    this.hiddenChildrenInMenu = true;
    this.genView();
    this.genRoute();
  }

  // 生成视图文件
  genView() {
    const viewTemp = fs.readFileSync(
      path.join(cwd, "scripts/__viewTemplate.tpl"),
      "utf-8"
    );
    const viewCode = new Function(
      "name",
      "title",
      "return " + "`" + viewTemp + "`"
    )(this.capitalNames.join("/"), this.titles.join("/"));

    const filePath = path.join(
      cwd,
      `src/views/${this.lowerNames.join("//")}.vue`
    );
    fs.writeFileSync(filePath, viewCode, "utf-8");
    this.print(`Created view file: "${filePath}"`);
  }

  // 生成初始的路由文件
  genInitialRoute() {
    const routeIndexRaw = fs.readFileSync(
      path.join(routeDir, "index.ts"),
      "utf-8"
    );
    const routeIndexCode = routeIndexRaw
      .replace(
        '// import NESTED_ROUTE from "@/router/routes/modules/nested";',
        `import ${this.upperNames[0]}_ROUTE from "@/router/routes/modules/${this.lowerNames[0]}";\n// import NESTED_ROUTE from "@/router/routes/modules/nested";`
      )
      .replace(
        "// NESTED_ROUTE,",
        `${this.upperNames[0]}_ROUTE,\n// NESTED_ROUTE,`
      );
    const routeTemp = fs.readFileSync(
      path.join(cwd, "scripts/__routeTemplate.tpl"),
      "utf-8"
    );
    const filePath = path.join(routeDir, "index.ts");
    this.routeCode = new Function(
      "capitalNames",
      "upperNames",
      "lowerNames",
      "titles",
      "hiddenChildrenInMenu",
      "return " + "`" + routeTemp + "`"
    )(
      this.capitalNames,
      this.upperNames,
      this.lowerNames,
      this.titles,
      this.hiddenChildrenInMenu
    );
    fs.writeFileSync(filePath, routeIndexCode, "utf-8");
    this.print(`Updated route index file: "${filePath}"`);
  }

  // 添加子路由
  addChildRoute() {
    const routeRaw = fs.readFileSync(
      path.join(routeDir, `modules/${this.dir}.ts`),
      "utf-8"
    );
    const childRouteCode = `{
      path: "${this.lowerNames[1]}",
      name: "${this.capitalNames[1]}Page",
      component: () => import("@/views/${this.lowerNames.join("/")}.vue"),
      meta: {
        title: "${this.titles[1]}"
      }
    }`;
    this.routeCode = routeRaw.replace(
      childrenReg,
      `$1[$2\n\t${childRouteCode}\n\t]`
    );
  }

  // 生成路由文件
  genRoute() {
    const filePath = path.join(routeDir, `modules/${this.lowerNames[0]}.ts`);
    this.dir ? this.addChildRoute() : this.genInitialRoute();
    fs.writeFileSync(filePath, this.routeCode, "utf-8");
    this.print(`Updated route file: "${filePath}"`);
  }

  // 打印日志
  print(log) {
    console.log(log);
  }
}

new Gen();
