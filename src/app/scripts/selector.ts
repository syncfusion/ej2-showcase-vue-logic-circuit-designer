/**
 * Selector Handler
 */
import {
  Diagram,
} from "@syncfusion/ej2-diagrams";
import { UtilityMethods } from "./utilitymethods";
import { ToolbarComponent } from "@syncfusion/ej2-vue-navigations";

export class ExportSettings {
  private m_fileName = "Diagram";
  public get fileName(): string {
    return this.m_fileName;
  }
  
  public set fileName(fileName: string) {
    this.m_fileName = fileName;
  }
  
  private m_format = "JPG";
  public get format(): string {
    return this.m_format;
  }
  
  public set format(format: string) {
  this.m_format = format;
  }
  
  private m_region = "PageSettings";
  public get region(): string {
    return this.m_region;
  }
  
  public set region(region: string) {
  this.m_region = region;
  }
}

export class PrintSettings {
  private _region: string = "PageSettings";
  public get region(): string {
    return this._region;
  }
  public set region(value: string) {
    this._region = value;
  }

  private _pageWidth: number = 0;
  public get pageWidth(): number {
    return this._pageWidth;
  }
  public set pageWidth(value: number) {
    this._pageWidth = value;
  }

  private _pageHeight: number = 0;
  public get pageHeight(): number {
    return this._pageHeight;
  }
  public set pageHeight(value: number) {
    this._pageHeight = value;
  }

  private _isPortrait: boolean = true;
  public get isPortrait(): boolean {
    return this._isPortrait;
  }
  public set isPortrait(value: boolean) {
    this._isPortrait = value;
  }

  private _isLandscape: boolean = false;
  public get isLandscape(): boolean {
    return this._isLandscape;
  }
  public set isLandscape(value: boolean) {
    this._isLandscape = value;
  }

  private _multiplePage: boolean = true;
  public get multiplePage(): boolean {
    return this._multiplePage;
  }
  public set multiplePage(value: boolean) {
    this._multiplePage = value;
  }

  private _paperSize: string = "Letter";
  public get paperSize(): string {
    return this._paperSize;
  }
  public set paperSize(value: string) {
    this._paperSize = value;
    const printCustomSize = document.getElementById("printCustomSize");
    const printOrientation = document.getElementById("printOrientation");
    if (printCustomSize && printOrientation) {
      printCustomSize.style.display = value === "Custom" ? "" : "none";
      printOrientation.style.display = value === "Custom" ? "none" : "";
    }
  }
}

export class PageSettings {
  public pageWidth: number = 1056;
  public pageHeight: number = 816;
  public showPageBreaks?: boolean;
  public backgroundColor: string = "#ffffff";
  public isPortrait: boolean = false;
  public isLandscape: boolean = true;
  public paperSize: string = "Letter";
  public pageBreaks: boolean = false;
}

export class ScrollSettings {
  public currentZoom: string = "82%";
}

export class SelectorViewModel {
  public diagram!: Diagram;
  public toolbarEditor!: ToolbarComponent;
  public preventSelectionChange = false;
  public isLoading = false;
  public exportSettings = new ExportSettings();
  public printSettings = new PrintSettings();
  public pageSettings = new PageSettings();
  public utilityMethods = new UtilityMethods();
  public scrollSettings = new ScrollSettings();

}