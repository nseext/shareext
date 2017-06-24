"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'sd-navbar',
        template: "<nav>   <a [routerLink]=\"['/']\" [routerLinkActive]=\"['router-link-active']\" [routerLinkActiveOptions]=\"{exact:true}\">HOME</a>   <a [routerLink]=\"['/about']\" [routerLinkActive]=\"['router-link-active']\" [routerLinkActiveOptions]=\"{exact:true}\">ABOUT</a> </nav>",
        styles: [":host{border:0 solid #e1e1e1;border-bottom-width:1px;display:block;height:48px;padding:0 16px}nav a{color:#8f8f8f;font-size:14px;font-weight:500;line-height:48px;margin-right:20px;text-decoration:none;vertical-align:middle;cursor:pointer}nav a.router-link-active{color:#106cc8}"],
    })
], NavbarComponent);
exports.NavbarComponent = NavbarComponent;
