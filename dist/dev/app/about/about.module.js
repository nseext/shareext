"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var about_component_1 = require("./about.component");
var about_routing_module_1 = require("./about-routing.module");
var AboutModule = (function () {
    function AboutModule() {
    }
    return AboutModule;
}());
AboutModule = __decorate([
    core_1.NgModule({
        imports: [common_1.CommonModule, about_routing_module_1.AboutRoutingModule],
        declarations: [about_component_1.AboutComponent],
        exports: [about_component_1.AboutComponent]
    })
], AboutModule);
exports.AboutModule = AboutModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hYm91dC9hYm91dC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQSxzQ0FBeUM7QUFDekMsMENBQStDO0FBQy9DLHFEQUFtRDtBQUNuRCwrREFBNEQ7QUFPNUQsSUFBYSxXQUFXO0lBQXhCO0lBQTJCLENBQUM7SUFBRCxrQkFBQztBQUFELENBQTNCLEFBQTRCLElBQUE7QUFBZixXQUFXO0lBTHZCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRSxDQUFDLHFCQUFZLEVBQUUseUNBQWtCLENBQUM7UUFDM0MsWUFBWSxFQUFFLENBQUMsZ0NBQWMsQ0FBQztRQUM5QixPQUFPLEVBQUUsQ0FBQyxnQ0FBYyxDQUFDO0tBQzFCLENBQUM7R0FDVyxXQUFXLENBQUk7QUFBZixrQ0FBVyIsImZpbGUiOiJhcHAvYWJvdXQvYWJvdXQubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQWJvdXRDb21wb25lbnQgfSBmcm9tICcuL2Fib3V0LmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFib3V0Um91dGluZ01vZHVsZSB9IGZyb20gJy4vYWJvdXQtcm91dGluZy5tb2R1bGUnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBBYm91dFJvdXRpbmdNb2R1bGVdLFxyXG4gIGRlY2xhcmF0aW9uczogW0Fib3V0Q29tcG9uZW50XSxcclxuICBleHBvcnRzOiBbQWJvdXRDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBYm91dE1vZHVsZSB7IH1cclxuIl19
