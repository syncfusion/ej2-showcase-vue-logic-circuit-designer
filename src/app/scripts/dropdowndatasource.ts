import { ItemModel } from "@syncfusion/ej2-splitbuttons";
import { MenuItemModel } from "@syncfusion/ej2-navigations";

interface MenuItem {
  text: string;
  iconCss?: string;
  separator?: boolean;
  items?: MenuItem[];
  value?: string;
}

export class DropDownDataSources {
    public fileMenuItems: ItemModel[] = this.getFileMenuItems();
    public editMenuItems: ItemModel[] = this.getEditMenuItems();
    public arrangeMenuItems: MenuItemModel[] = this.getArrangeMenuItems();
    public selectMenuItems: MenuItemModel[] = this.getSelectMenuItems();
    public toolMenuItems: MenuItemModel[] = this.getToolMenuItems();
    public viewMenuItems: ItemModel[] = this.getViewMenuItems();
    public zoomMenuItems: ItemModel[] = this.getZoomMenuItems();

    public fileFormats: MenuItem[] = [
        { text: "JPG", value: "JPG" },
        { text: "PNG", value: "PNG" },
        { text: "SVG", value: "SVG" },
    ];

    public diagramRegions: MenuItem[] = [
        { text: "Content", value: "Content" },
        { text: "PageSettings", value: "PageSettings" },
    ];

    public paperList: MenuItem[] = [
        { text: "Letter (8.5 in x 11 in)", value: "Letter" },
        { text: "Legal (8.5 in x 14 in)", value: "Legal" },
        { text: "Tabloid (279 mm x 432 mm)", value: "Tabloid" },
        { text: "A3 (297 mm x 420 mm)", value: "A3" },
        { text: "A4 (210 mm x 297 mm)", value: "A4" },
        { text: "A5 (148 mm x 210 mm)", value: "A5" },
        { text: "A6 (105 mm x 148 mm)", value: "A6" },
        { text: "Custom", value: "Custom" },
    ];

    private getFileMenuItems(): ItemModel[] {
        return [
            { text: 'New', iconCss: 'sf-icon-new' },
            { text: 'Open', iconCss: 'sf-icon-open' },
            { text: 'Save', iconCss: 'sf-icon-save' },
            { text: 'Export', iconCss: 'sf-icon-export' },
            { text: 'Print', iconCss: 'sf-icon-print' },
        ];
    }

    private getEditMenuItems(): ItemModel[] {
        return [
            { text: 'Copy', iconCss: 'sf-icon-copy' },
            { text: 'Cut', iconCss: 'sf-icon-cut' },
            { text: 'Paste', iconCss: 'sf-icon-paste' },
            { separator: true },
            { text: 'Delete', iconCss: 'sf-icon-delete' },
        ];
    }

    public conTypeItems: ItemModel[] = [
        { text: 'Straight', iconCss: 'sf-icon-straight_line' },
        { text: 'Orthogonal', iconCss: 'sf-icon-orthogonal_line' },
        { text: 'Bezier', iconCss: 'sf-icon-bezier' }
    ];

    private getZoomMenuItems(): ItemModel[] {
        return [
          { text: "Zoom In" },
          { text: "Zoom Out" },
          { text: "Zoom to Fit" },
          { text: "Zoom to 50%" },
          { text: "Zoom to 100%" },
          { text: "Zoom to 200%" },
        ];
    }

    private getViewMenuItems(): ItemModel[] {
        return [
            { text: 'Show Lines', iconCss: 'sf-icon-check-tick' },
            { text: 'Snap To Grid', iconCss: 'sf-icon-check-tick' },
            { text: 'Snap To Object', iconCss: 'sf-icon-check-tick' },
            { text: 'Show Ruler', iconCss: 'sf-icon-check-tick' },
            { text: 'Show Page Breaks' },
            { text: 'Show Multiple Page'},
            { separator: true },
            { text: 'Fit To Width' },
            { text: 'Fit To Page' },
        ];
    }

    private getSelectMenuItems(): MenuItemModel[] {
        return [
            { text: 'Select All', iconCss: 'em-icons e-cut' },
            { text: 'Select All Nodes', iconCss: 'em-icons e-copy' },
            { text: 'Select All Connectors', iconCss: 'em-icons e-paste' },
            { text: 'Deselect All', iconCss: 'em-icons e-paste' },
        ];
    }

    private getToolMenuItems(): MenuItemModel[] {
        return [
            { text: 'Selection Tool', iconCss: 'sf-icon-pointer' },
            { text: 'Pan Tool', iconCss: 'sf-icon-pan tb-icons' },
        ];
    }

    private getArrangeMenuItems(): MenuItem[] {
        return [
            {
                text: 'Orientation',
                items: [
                    { text: 'Landscape', iconCss: 'sf-icon-check-tick' },
                    { text: 'Portrait' },
                ],
            },
            {
                text: 'Page Size',
                items: [
                    { text: 'Letter (8.5 in x 11 in)', value: 'Letter', iconCss: 'sf-icon-check-tick' },
                    { text: 'Legal (8.5 in x 14 in)', value: 'Legal' },
                    { text: 'Tabloid (279 mm x 432 mm)', value: 'Tabloid' },
                    { text: 'A3 (297 mm x 420 mm)', value: 'A3' },
                    { text: 'A4 (210 mm x 297 mm)', value: 'A4' },
                    { text: 'A5 (148 mm x 210 mm)', value: 'A5' },
                    { text: 'A6 (105 mm x 148 mm)', value: 'A6' },
                ],
            },
        ];
    }
}