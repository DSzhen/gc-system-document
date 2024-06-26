/**
 * 文档配置模块
 *
 */
const mode = import.meta.env.MODE;

const defaultDir =
  mode === "production" ? "/static/doc/frontEnd/" : "/frontEnd/";
export const data = [
  {
    img: ``,
    title: "大屏基础组件库",
    des: "大屏基础组件库",
    url: `http://10.0.98.23/static/storybook-static/index.html?path=/docs/introduction--page`,
    type: "url",
  },
  {
    img: ``,
    title: "移动端基础组件库",
    des: "移动端基础组件库",
    url: `  http://10.0.98.23/static/storybook-spMobile/index.html?path=/story/introduction--page`,
    type: "url",
  },
  {
    img: ``,
    title: "工作台工程业务组件",
    des: "色彩token",
    url: `http://jsf-design.glodon.com/field/index.html?path=/docs/introduction-%E5%BC%95%E8%A8%80--page`,
    type: "url",
  },
  {
    img: ``,
    title: "工作台基础组件",
    des: "色彩token",
    url: `http://jsf-design.glodon.com/?path=/docs/%E5%B7%A5%E4%BD%9C%E5%8F%B0-%E5%9F%BA%E7%A1%80%E7%BB%84%E4%BB%B6-universal-%E9%80%9A%E7%94%A8-%E5%8E%9F%E5%AD%90%E6%A0%B7%E5%BC%8F-designtokens-%E8%89%B2%E5%BD%A9token--target-component`,
    type: "url",
  },
  {
    img: ``,
    title: "前端离线代码上传",
    des: "前端离线代码上传",
    url: `http://jsf-offline.glodon.com/#/login`,
    type: "url",
  },
  {
    img: ``,
    title: "常用资料整理",
    des: "日常开发中常用资料",
    url: `${defaultDir}CYZLZL.docx`,
    type: "word",
  },
  {
    img: `${defaultDir}h5XMGZ.png`,
    title: "H5开发模式改造",
    des: "开发更便捷，高效",
    url: `${defaultDir}h5XMGZ.pdf`,
    type: "pdf",
  },
  {
    img: ``,
    title: "H5开发流程",
    des: "开发更便捷，高效",
    url: `${defaultDir}YDDKALC.pdf`,
    type: "pdf",
  },
  {
    img: `${defaultDir}WQDSJ.png`,
    title: "大屏微前端架构",
    des: "微前端架构早期版本",
    url: `${defaultDir}WQDSJ.pdf`,
    type: "pdf",
  },
  {
    img: `${defaultDir}SYHBS.png`,
    title: "私有化部署",
    des: "私有化部署",
    url: `${defaultDir}SYHBS.docx`,
    type: "word",
  },
];
