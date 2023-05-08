export class Component {
  constructor(options) {
    this.document = options.shadowDom;
    this.check = this.document.getElementById("check");
    this.initPromise = uiBuilder.ready(this.check);
  }

  async setConfig(config) {
    if (config.value) {
      await this.setValue(config.value);
    }
  }

  async setValue(v) {
    await this.initPromise;
    this.check.component.checked = v;
  }

  getValue() {
    return this.check.component.checked;
  }
}
