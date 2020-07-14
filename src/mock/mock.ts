export class NavMock {
    // tslint:disable-next-line: ban-types
    public navigateBack: Function = (url: string | any[], options: any) => {};
    // tslint:disable-next-line: ban-types
    public navigateForward: Function = (url: string | any[], options: any) => {};
    // tslint:disable-next-line: ban-types
    public navigateRoot: Function = (url: string | any[], options: any) => {};
  }