import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthAccessDirective } from './directives/auth-access.directive';



@NgModule({
    declarations: [
        AuthAccessDirective
    ],
    exports: [
        AuthAccessDirective
    ],
    imports: [
        CommonModule
    ],

})
export class SharedModule { }
