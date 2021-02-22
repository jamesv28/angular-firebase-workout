import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './../material.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

@NgModule({
    declarations: [],
    imports: [
        FormsModule,
        CommonModule,
        
    ],
    exports: [
        FormsModule,
        CommonModule,
        MaterialModule,
        FlexLayoutModule
    ]
})

export class SharedModule {}