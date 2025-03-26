import { Node } from '@syncfusion/ej2-diagrams';
import { SelectorViewModel } from './selector';
import { DialogComponent } from '@syncfusion/ej2-vue-popups';
import { ContextMenu, ToolbarComponent } from '@syncfusion/ej2-vue-navigations';

export class PaperSize {
    public pageWidth: number = 0;
    public pageHeight: number = 0;
}

export class UtilityMethods {
    public tempDialog?: DialogComponent;
    public toolbarEditor?: ToolbarComponent;

    // Updates toolbar item states based on selected diagram elements
    public enableToolbarItems(selectedItems: any[]): void {
        const toolbarContainer = document.getElementsByClassName('db-toolbar-container')[0];
        if (!toolbarContainer) return;

        let toolbarClassName = 'db-toolbar-container';
        if (toolbarContainer.classList.contains('db-undo')) {
            toolbarClassName += ' db-undo';
        }
        if (toolbarContainer.classList.contains('db-redo')) {
            toolbarClassName += ' db-redo';
        }
        toolbarContainer.className = toolbarClassName;

        if (selectedItems.length === 1) {
            toolbarContainer.className += ' db-select';
            if (selectedItems[0] instanceof Node) {
                if ((selectedItems[0] as any).children) {
                    toolbarContainer.className += (selectedItems[0] as any).children.length > 2
                        ? ' db-select db-double db-multiple db-node db-group'
                        : ' db-select db-double db-node db-group';
                } else {
                    toolbarContainer.className += ' db-select db-node';
                }
            }
        } else if (selectedItems.length === 2) {
            toolbarContainer.className += ' db-select db-double';
        } else if (selectedItems.length > 2) {
            toolbarContainer.className += ' db-select db-double db-multiple';
        }

        if (selectedItems.length > 1) {
            for (const item of selectedItems) {
                if (item instanceof Node) {
                    toolbarContainer.className += ' db-select db-node';
                    break;
                }
            }
        }
    }

    // Enables or disables arrange menu items based on the selected elements
    public enableArrangeMenuItems(selectedItem: SelectorViewModel): void {
        const contextInstance = document.getElementById('arrangeContextMenu');
        if (contextInstance) {
            const contextMenu = (contextInstance as any).ej2_instances[0] as ContextMenu;
            const selectedItems = [...(selectedItem as any).diagram.selectedItems.nodes, ...(selectedItem as any).diagram.selectedItems.connectors];
            for (const item of contextMenu.items) {
                contextMenu.enableItems([(item as any).text], false);
            }
        }
    }

    // Retrieves page dimensions based on standard paper size names
    public getPaperSize(paperName: string): PaperSize {
        const paperSize = new PaperSize();
        switch (paperName) {
            case 'Letter':
                paperSize.pageWidth = 816;
                paperSize.pageHeight = 1056;
                break;
            case 'Legal':
                paperSize.pageWidth = 816;
                paperSize.pageHeight = 1344;
                break;
            case 'Tabloid':
                paperSize.pageWidth = 1056;
                paperSize.pageHeight = 1632;
                break;
            case 'A3':
                paperSize.pageWidth = 1122;
                paperSize.pageHeight = 1587;
                break;
            case 'A4':
                paperSize.pageWidth = 793;
                paperSize.pageHeight = 1122;
                break;
            case 'A5':
                paperSize.pageWidth = 559;
                paperSize.pageHeight = 793;
                break;
            case 'A6':
                paperSize.pageWidth = 396;
                paperSize.pageHeight = 559;
                break;
        }
        return paperSize;
    }
}