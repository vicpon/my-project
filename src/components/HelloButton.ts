export default class HelloButton {
  public onClick: Function = () => null;

  private click() {
    this.onClick();
  }
}