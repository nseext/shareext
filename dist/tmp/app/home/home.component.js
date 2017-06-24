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
        template: "<section class=\"mbr-box mbr-section mbr-section--relative mbr-section--fixed-size mbr-section--full-height mbr-section--bg-adapted\" id=\"header2-0\" style=\"background-color: rgb(76, 105, 114);\">     <div class=\"mbr-box__magnet mbr-box__magnet--sm-padding mbr-box__magnet--center-left\">                  <div class=\"mbr-box__container mbr-section__container container\">             <div class=\"mbr-box mbr-box--stretched\"><div class=\"mbr-box__magnet mbr-box__magnet--center-left\">                 <div class=\"row\"><div class=\" col-sm-6 col-sm-offset-6\">                     <div class=\"mbr-hero animated fadeInUp\">                         <h1 class=\"mbr-hero__text\">SHAREEXT</h1>                         <p class=\"mbr-hero__subtext\">It helps you to select share with high volatile with calculator.</p>                     </div>                     <div class=\"mbr-buttons btn-inverse mbr-buttons--left\"><a class=\"mbr-buttons__btn btn btn-lg btn-warning animated fadeInUp delay\" href=\"/\">LEARN MORE</a></div>                 </div></div>             </div></div>         </div>              </div> </section>",
        styles: [""],
    }),
    __metadata("design:paramtypes", [name_list_service_1.NameListService])
], HomeComponent);
exports.HomeComponent = HomeComponent;
