import "core-js/modules/es.array.flat";
export default class MainService {
  dataList = "";
  constructor({ targetEl }) {
    this.targetEl = targetEl;
  }

  init(dataList) {
    this.dataList = dataList.flat(2).join("");
    this.render(this.dataList);
  }

  render(data) {
    this.targetEl.innerHTML = `<span>${data}</span>`;
  }
}
