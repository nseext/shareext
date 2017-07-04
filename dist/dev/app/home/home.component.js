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
        console.log(this.calculator(530.85, 512.05, 526.70));
    };
    HomeComponent.prototype.calculator = function (high, low, close) {
        var pivot = (high + low + close) / 3.0;
        var range = high - low;
        var h5 = (high / low) * close;
        var h4 = close + (high - low) * 1.1 / 2.0;
        var h3 = close + (high - low) * 1.1 / 4.0;
        var h2 = close + (high - low) * 1.1 / 6.0;
        var h1 = close + (high - low) * 1.1 / 12.0;
        var l1 = close - (high - low) * 1.1 / 12.0;
        var l2 = close - (high - low) * 1.1 / 6.0;
        var l3 = close - (high - low) * 1.1 / 4.0;
        var l4 = close - (high - low) * 1.1 / 2.0;
        var h6 = h5 + 1.168 * (h5 - h4);
        var l5 = close - (h5 - close);
        var l6 = close - (h6 - close);
        return ({
            paivo: pivot,
            r1: h1,
            r2: h2,
            r3: h3,
            r4: h4,
            s1: l1,
            s2: l2,
            s3: l3,
            s4: l4
        });
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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9ob21lL2hvbWUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsc0NBQWtEO0FBQ2xELDJFQUF3RTtBQVd4RSxJQUFhLGFBQWE7SUFZeEIsdUJBQW1CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtRQVZuRCxZQUFPLEdBQVcsRUFBRSxDQUFDO1FBRXJCLFVBQUssR0FBVSxFQUFFLENBQUM7SUFRcUMsQ0FBQztJQUt4RCxnQ0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUE7SUFDdEQsQ0FBQztJQUdELGtDQUFVLEdBQVYsVUFBVyxJQUFTLEVBQUUsR0FBUSxFQUFFLEtBQVU7UUFHeEMsSUFBSSxLQUFLLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQTtRQUN0QyxJQUFJLEtBQUssR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFBO1FBQ3RCLElBQUksRUFBRSxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQTtRQUM3QixJQUFJLEVBQUUsR0FBRyxLQUFLLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQTtRQUN6QyxJQUFJLEVBQUUsR0FBRyxLQUFLLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQTtRQUN6QyxJQUFJLEVBQUUsR0FBRyxLQUFLLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQTtRQUN6QyxJQUFJLEVBQUUsR0FBRyxLQUFLLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQTtRQUMxQyxJQUFJLEVBQUUsR0FBRyxLQUFLLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQTtRQUMxQyxJQUFJLEVBQUUsR0FBRyxLQUFLLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQTtRQUN6QyxJQUFJLEVBQUUsR0FBRyxLQUFLLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQTtRQUN6QyxJQUFJLEVBQUUsR0FBRyxLQUFLLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQTtRQUN6QyxJQUFJLEVBQUUsR0FBRyxFQUFFLEdBQUcsS0FBSyxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFBO1FBQy9CLElBQUksRUFBRSxHQUFHLEtBQUssR0FBRyxDQUFDLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQTtRQUM3QixJQUFJLEVBQUUsR0FBRyxLQUFLLEdBQUcsQ0FBQyxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUE7UUFHN0IsTUFBTSxDQUFDLENBQUM7WUFDTixLQUFLLEVBQUUsS0FBSztZQUNaLEVBQUUsRUFBRSxFQUFFO1lBQ04sRUFBRSxFQUFFLEVBQUU7WUFDTixFQUFFLEVBQUUsRUFBRTtZQUNOLEVBQUUsRUFBRSxFQUFFO1lBQ04sRUFBRSxFQUFFLEVBQUU7WUFDTixFQUFFLEVBQUUsRUFBRTtZQUNOLEVBQUUsRUFBRSxFQUFFO1lBQ04sRUFBRSxFQUFFLEVBQUU7U0FDUCxDQUFDLENBQUE7SUFHSixDQUFDO0lBT0QsZ0NBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUU7YUFDdkIsU0FBUyxDQUNWLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQWxCLENBQWtCLEVBQzNCLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFlBQVksR0FBUSxLQUFLLEVBQTlCLENBQThCLENBQ3RDLENBQUM7SUFDTixDQUFDO0lBTUQsK0JBQU8sR0FBUDtRQUVFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztRQUNsQixNQUFNLENBQUMsS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVILG9CQUFDO0FBQUQsQ0FqRkEsQUFpRkMsSUFBQTtBQWpGWSxhQUFhO0lBTnpCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsUUFBUSxFQUFFLFNBQVM7UUFDbkIsV0FBVyxFQUFFLHFCQUFxQjtRQUNsQyxTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztLQUNsQyxDQUFDO3FDQWFvQyxtQ0FBZTtHQVp4QyxhQUFhLENBaUZ6QjtBQWpGWSxzQ0FBYSIsImZpbGUiOiJhcHAvaG9tZS9ob21lLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5hbWVMaXN0U2VydmljZSB9IGZyb20gJy4uL3NoYXJlZC9uYW1lLWxpc3QvbmFtZS1saXN0LnNlcnZpY2UnO1xyXG5cclxuLyoqXHJcbiAqIFRoaXMgY2xhc3MgcmVwcmVzZW50cyB0aGUgbGF6eSBsb2FkZWQgSG9tZUNvbXBvbmVudC5cclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgc2VsZWN0b3I6ICdzZC1ob21lJyxcclxuICB0ZW1wbGF0ZVVybDogJ2hvbWUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWydob21lLmNvbXBvbmVudC5jc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBuZXdOYW1lOiBzdHJpbmcgPSAnJztcclxuICBlcnJvck1lc3NhZ2U6IHN0cmluZztcclxuICBuYW1lczogYW55W10gPSBbXTtcclxuXHJcbiAgLyoqXHJcbiAgICogQ3JlYXRlcyBhbiBpbnN0YW5jZSBvZiB0aGUgSG9tZUNvbXBvbmVudCB3aXRoIHRoZSBpbmplY3RlZFxyXG4gICAqIE5hbWVMaXN0U2VydmljZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7TmFtZUxpc3RTZXJ2aWNlfSBuYW1lTGlzdFNlcnZpY2UgLSBUaGUgaW5qZWN0ZWQgTmFtZUxpc3RTZXJ2aWNlLlxyXG4gICAqL1xyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBuYW1lTGlzdFNlcnZpY2U6IE5hbWVMaXN0U2VydmljZSkgeyB9XHJcblxyXG4gIC8qKlxyXG4gICAqIEdldCB0aGUgbmFtZXMgT25Jbml0XHJcbiAgICovXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmdldE5hbWVzKCk7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmNhbGN1bGF0b3IoNTMwLjg1LCA1MTIuMDUsIDUyNi43MCkpXHJcbiAgfVxyXG5cclxuXHJcbiAgY2FsY3VsYXRvcihoaWdoOiBhbnksIGxvdzogYW55LCBjbG9zZTogYW55KSB7XHJcblxyXG5cclxuICAgIHZhciBwaXZvdCA9IChoaWdoICsgbG93ICsgY2xvc2UpIC8gMy4wXHJcbiAgICB2YXIgcmFuZ2UgPSBoaWdoIC0gbG93XHJcbiAgICB2YXIgaDUgPSAoaGlnaCAvIGxvdykgKiBjbG9zZVxyXG4gICAgdmFyIGg0ID0gY2xvc2UgKyAoaGlnaCAtIGxvdykgKiAxLjEgLyAyLjBcclxuICAgIHZhciBoMyA9IGNsb3NlICsgKGhpZ2ggLSBsb3cpICogMS4xIC8gNC4wXHJcbiAgICB2YXIgaDIgPSBjbG9zZSArIChoaWdoIC0gbG93KSAqIDEuMSAvIDYuMFxyXG4gICAgdmFyIGgxID0gY2xvc2UgKyAoaGlnaCAtIGxvdykgKiAxLjEgLyAxMi4wXHJcbiAgICB2YXIgbDEgPSBjbG9zZSAtIChoaWdoIC0gbG93KSAqIDEuMSAvIDEyLjBcclxuICAgIHZhciBsMiA9IGNsb3NlIC0gKGhpZ2ggLSBsb3cpICogMS4xIC8gNi4wXHJcbiAgICB2YXIgbDMgPSBjbG9zZSAtIChoaWdoIC0gbG93KSAqIDEuMSAvIDQuMFxyXG4gICAgdmFyIGw0ID0gY2xvc2UgLSAoaGlnaCAtIGxvdykgKiAxLjEgLyAyLjBcclxuICAgIHZhciBoNiA9IGg1ICsgMS4xNjggKiAoaDUgLSBoNClcclxuICAgIHZhciBsNSA9IGNsb3NlIC0gKGg1IC0gY2xvc2UpXHJcbiAgICB2YXIgbDYgPSBjbG9zZSAtIChoNiAtIGNsb3NlKVxyXG5cclxuXHJcbiAgICByZXR1cm4gKHtcclxuICAgICAgcGFpdm86IHBpdm90LFxyXG4gICAgICByMTogaDEsXHJcbiAgICAgIHIyOiBoMixcclxuICAgICAgcjM6IGgzLFxyXG4gICAgICByNDogaDQsIFxyXG4gICAgICBzMTogbDEsXHJcbiAgICAgIHMyOiBsMixcclxuICAgICAgczM6IGwzLFxyXG4gICAgICBzNDogbDQgIFxyXG4gICAgfSlcclxuXHJcblxyXG4gIH1cclxuXHJcblxyXG5cclxuICAvKipcclxuICAgKiBIYW5kbGUgdGhlIG5hbWVMaXN0U2VydmljZSBvYnNlcnZhYmxlXHJcbiAgICovXHJcbiAgZ2V0TmFtZXMoKSB7XHJcbiAgICB0aGlzLm5hbWVMaXN0U2VydmljZS5nZXQoKVxyXG4gICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICBuYW1lcyA9PiB0aGlzLm5hbWVzID0gbmFtZXMsXHJcbiAgICAgIGVycm9yID0+IHRoaXMuZXJyb3JNZXNzYWdlID0gPGFueT5lcnJvclxyXG4gICAgICApO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogUHVzaGVzIGEgbmV3IG5hbWUgb250byB0aGUgbmFtZXMgYXJyYXlcclxuICAgKiBAcmV0dXJuIHtib29sZWFufSBmYWxzZSB0byBwcmV2ZW50IGRlZmF1bHQgZm9ybSBzdWJtaXQgYmVoYXZpb3IgdG8gcmVmcmVzaCB0aGUgcGFnZS5cclxuICAgKi9cclxuICBhZGROYW1lKCk6IGJvb2xlYW4ge1xyXG4gICAgLy8gVE9ETzogaW1wbGVtZW50IG5hbWVMaXN0U2VydmljZS5wb3N0XHJcbiAgICB0aGlzLm5hbWVzLnB1c2godGhpcy5uZXdOYW1lKTtcclxuICAgIHRoaXMubmV3TmFtZSA9ICcnO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbn1cclxuIl19
