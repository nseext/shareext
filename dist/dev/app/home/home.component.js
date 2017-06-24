"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var name_list_service_1 = require("../shared/name-list/name-list.service");
var HomeComponent = (function () {
    function HomeComponent(nameListService) {
        this.nameListService = nameListService;
        this.newName = '';
        this.names = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getNames();
    };
    HomeComponent.prototype.getNames = function () {
        var _this = this;
        this.nameListService.get()
            .subscribe(function (names) { return _this.names = names; }, function (error) { return _this.errorMessage = error; });
    };
    HomeComponent.prototype.addName = function () {
        this.names.push(this.newName);
        this.newName = '';
        return false;
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sd-home',
        templateUrl: 'home.component.html',
        styleUrls: ['home.component.css'],
    }),
    __metadata("design:paramtypes", [name_list_service_1.NameListService])
], HomeComponent);
exports.HomeComponent = HomeComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWtEO0FBQ2xELDJFQUF3RTtBQVd4RSxJQUFhLGFBQWE7SUFZeEIsdUJBQW1CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQVZuRCxZQUFPLEdBQVcsRUFBRSxDQUFDO1FBRXJCLFVBQUssR0FBVSxFQUFFLENBQUM7SUFRb0MsQ0FBQztJQUt2RCxnQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFLRCxnQ0FBUSxHQUFSO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRTthQUN2QixTQUFTLENBQ1IsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssRUFBbEIsQ0FBa0IsRUFDM0IsVUFBQSxLQUFLLElBQUksT0FBQSxLQUFJLENBQUMsWUFBWSxHQUFRLEtBQUssRUFBOUIsQ0FBOEIsQ0FDeEMsQ0FBQztJQUNOLENBQUM7SUFNRCwrQkFBTyxHQUFQO1FBRUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlCLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLE1BQU0sQ0FBQyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUgsb0JBQUM7QUFBRCxDQTNDQSxBQTJDQyxJQUFBO0FBM0NZLGFBQWE7SUFOekIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsU0FBUztRQUNuQixXQUFXLEVBQUUscUJBQXFCO1FBQ2xDLFNBQVMsRUFBRSxDQUFDLG9CQUFvQixDQUFDO0tBQ2xDLENBQUM7cUNBYW9DLG1DQUFlO0dBWnhDLGFBQWEsQ0EyQ3pCO0FBM0NZLHNDQUFhIiwiZmlsZSI6ImFwcC9ob21lL2hvbWUuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTmFtZUxpc3RTZXJ2aWNlIH0gZnJvbSAnLi4vc2hhcmVkL25hbWUtbGlzdC9uYW1lLWxpc3Quc2VydmljZSc7XHJcblxyXG4vKipcclxuICogVGhpcyBjbGFzcyByZXByZXNlbnRzIHRoZSBsYXp5IGxvYWRlZCBIb21lQ29tcG9uZW50LlxyXG4gKi9cclxuQENvbXBvbmVudCh7XHJcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcclxuICBzZWxlY3RvcjogJ3NkLWhvbWUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnaG9tZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJ2hvbWUuY29tcG9uZW50LmNzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgSG9tZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIG5ld05hbWU6IHN0cmluZyA9ICcnO1xyXG4gIGVycm9yTWVzc2FnZTogc3RyaW5nO1xyXG4gIG5hbWVzOiBhbnlbXSA9IFtdO1xyXG5cclxuICAvKipcclxuICAgKiBDcmVhdGVzIGFuIGluc3RhbmNlIG9mIHRoZSBIb21lQ29tcG9uZW50IHdpdGggdGhlIGluamVjdGVkXHJcbiAgICogTmFtZUxpc3RTZXJ2aWNlLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtOYW1lTGlzdFNlcnZpY2V9IG5hbWVMaXN0U2VydmljZSAtIFRoZSBpbmplY3RlZCBOYW1lTGlzdFNlcnZpY2UuXHJcbiAgICovXHJcbiAgY29uc3RydWN0b3IocHVibGljIG5hbWVMaXN0U2VydmljZTogTmFtZUxpc3RTZXJ2aWNlKSB7fVxyXG5cclxuICAvKipcclxuICAgKiBHZXQgdGhlIG5hbWVzIE9uSW5pdFxyXG4gICAqL1xyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5nZXROYW1lcygpO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogSGFuZGxlIHRoZSBuYW1lTGlzdFNlcnZpY2Ugb2JzZXJ2YWJsZVxyXG4gICAqL1xyXG4gIGdldE5hbWVzKCkge1xyXG4gICAgdGhpcy5uYW1lTGlzdFNlcnZpY2UuZ2V0KClcclxuICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICBuYW1lcyA9PiB0aGlzLm5hbWVzID0gbmFtZXMsXHJcbiAgICAgICAgZXJyb3IgPT4gdGhpcy5lcnJvck1lc3NhZ2UgPSA8YW55PmVycm9yXHJcbiAgICAgICk7XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBQdXNoZXMgYSBuZXcgbmFtZSBvbnRvIHRoZSBuYW1lcyBhcnJheVxyXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IGZhbHNlIHRvIHByZXZlbnQgZGVmYXVsdCBmb3JtIHN1Ym1pdCBiZWhhdmlvciB0byByZWZyZXNoIHRoZSBwYWdlLlxyXG4gICAqL1xyXG4gIGFkZE5hbWUoKTogYm9vbGVhbiB7XHJcbiAgICAvLyBUT0RPOiBpbXBsZW1lbnQgbmFtZUxpc3RTZXJ2aWNlLnBvc3RcclxuICAgIHRoaXMubmFtZXMucHVzaCh0aGlzLm5ld05hbWUpO1xyXG4gICAgdGhpcy5uZXdOYW1lID0gJyc7XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=
