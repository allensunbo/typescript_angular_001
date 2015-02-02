/**
 * Created by bsun on 2/2/15.
 */
declare module com.axioma.interface {
   interface IAppCtrlScope extends ng.IScope {
      content: string;
      doClick(content:string): void;
   }
}