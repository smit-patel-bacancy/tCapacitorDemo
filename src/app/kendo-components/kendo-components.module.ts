import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { GanttModule } from "@progress/kendo-angular-gantt";
import { GridModule } from '@progress/kendo-angular-grid';
import { IconsModule } from '@progress/kendo-angular-icons';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { LayoutModule } from '@progress/kendo-angular-layout';
import { ContextMenuModule, MenuModule } from '@progress/kendo-angular-menu';
import { AppBarModule, NavigationModule } from '@progress/kendo-angular-navigation';
import { NotificationModule } from '@progress/kendo-angular-notification';
import { PDFExportModule } from '@progress/kendo-angular-pdf-export';
import { PopupModule } from '@progress/kendo-angular-popup';
import { RippleModule } from '@progress/kendo-angular-ripple';
import { ScrollViewModule } from '@progress/kendo-angular-scrollview';
import { ToolBarModule } from '@progress/kendo-angular-toolbar';
import { TooltipModule } from '@progress/kendo-angular-tooltip';
import { ExcelModule, PDFModule, TreeListModule } from '@progress/kendo-angular-treelist';
import { TreeViewModule } from '@progress/kendo-angular-treeview';
import { UploadModule } from '@progress/kendo-angular-upload';

// import { AgGridModule } from 'ag-grid-angular';


@NgModule({
  imports: [
    CommonModule,
    DialogsModule,
    IconsModule,
    InputsModule,
    ButtonsModule,
    ContextMenuModule,
    DropDownsModule,
    GanttModule,
    GridModule,
    IndicatorsModule,
    LabelModule,
    LayoutModule,
    MenuModule,
    PopupModule,
    ToolBarModule,
    TooltipModule,
    TreeViewModule,
    UploadModule,
    RippleModule,
    ScrollViewModule,
    NavigationModule,
    AppBarModule,
    DateInputsModule,
    NotificationModule,
    // AgGridModule,
    TreeListModule,
    PDFModule,
    ExcelModule,
    PDFExportModule,
  ],
  exports: [
    CommonModule,
    DialogsModule,
    IconsModule,
    InputsModule,
    ButtonsModule,
    ContextMenuModule,
    DropDownsModule,
    GanttModule,
    GridModule,
    IndicatorsModule,
    LabelModule,
    LayoutModule,
    MenuModule,
    PopupModule,
    ToolBarModule,
    TooltipModule,
    TreeViewModule,
    UploadModule,
    RippleModule,
    ScrollViewModule,
    DateInputsModule,
    NavigationModule,
    AppBarModule,
    NotificationModule,
    // AgGridModule,
    TreeListModule,
    PDFModule,
    ExcelModule,
    PDFExportModule,
  ]
})
export class KendoComponentsModule { }
