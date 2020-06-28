export class Resource {
  constructor(_name: string, _path: string) {
    this._name = _name;
    this._path = _path;
  }

  private _name: string;
  public get name(): string {
    return this._name;
  }
  public set name(v: string) {
    this._name = v;
  }

  private _path: string;
  public get path(): string {
    return this._path;
  }
  public set path(v: string) {
    this._path = v;
  }
}
