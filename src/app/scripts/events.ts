import { SelectorViewModel } from "./selector";
import {
    ISelectionChangeEventArgs, Diagram, Connector,
    SelectorConstraints,
    IScrollChangeEventArgs,
} from "@syncfusion/ej2-diagrams";
import { DropDownListComponent } from "@syncfusion/ej2-vue-dropdowns";
import { DiagramComponent } from "@syncfusion/ej2-vue-diagrams";
import { ToolbarComponent } from "@syncfusion/ej2-vue-navigations";

export class DiagramClientSideEvents {
    private selectedItem: SelectorViewModel;
    public diagram: Diagram | null = null;
    public toolbarEditor: ToolbarComponent | null = null;
    public ddlTextPosition: DropDownListComponent | null = null;

    constructor(selectedItem: SelectorViewModel) {
        this.selectedItem = selectedItem;
        this.selectionChange = this.selectionChange.bind(this);
        this.historyChange = this.historyChange.bind(this);
        this.initializeComponents();
    }

    // Initializes diagram and toolbar components from the DOM
    private initializeComponents(): void {
        const diagramElement = document.getElementById("diagram");
        if (diagramElement) {
            this.diagram = (diagramElement as any).ej2_instances[0];
        }

        const toolbarElement = document.getElementById("toolbarEditor");
        if (toolbarElement) {
            this.toolbarEditor = (toolbarElement as any).ej2_instances[0];
        }
    }

    // Handles selection change events and updates the toolbar accordingly
    public selectionChange(args: ISelectionChangeEventArgs): void {
        if (this.selectedItem.preventSelectionChange || this.selectedItem.isLoading) {
            return;
        }

        if (!this.diagram || !this.toolbarEditor) {
            this.initializeComponents();
            if (!this.diagram || !this.toolbarEditor) {
                return;
            }
        }

        if (args.state === "Changed") {
            let selectedItems: Object[] = this.diagram.selectedItems.nodes || [];
            selectedItems = selectedItems.concat(this.diagram.selectedItems.connectors || []);
            this.selectedItem.utilityMethods.enableToolbarItems(selectedItems);

            if (args.newValue.length > 0 && args.newValue[0] instanceof Connector) {
                this.diagram.selectedItems = { constraints: SelectorConstraints.All };
                this.toolbarEditor.hideItem(6, true);
            } else {
                const selectedNodes = (this.diagram.selectedItems as any).nodes;
                if (selectedNodes.length > 0) {
                    const firstNode = selectedNodes[0];
                    const isClockNode = firstNode.id.includes('Clock');
                    this.toolbarEditor.hideItem(3, !isClockNode);
                } else {
                    this.toolbarEditor.hideItem(3, true);
                }

                this.diagram.selectedItems = { constraints: SelectorConstraints.All & ~SelectorConstraints.Rotate & ~SelectorConstraints.ResizeAll };
            }
        }
    }

    // Updates toolbar state based on the undo and redo history
    public historyChange(): void {
        if (!this.diagram) {
            this.initializeComponents();
            if (!this.diagram) {
                return;
            }
        }
        const toolbarContainer = document.querySelector('.db-toolbar-container') as HTMLDivElement;
        if (!toolbarContainer) return;

        toolbarContainer.classList.remove('db-undo', 'db-redo');
        if ((this.diagram as any).historyManager.undoStack.length > 0) {
            toolbarContainer.classList.add('db-undo');
        }
        if ((this.diagram as any).historyManager.redoStack.length > 0) {
            toolbarContainer.classList.add('db-redo');
        }
    }
    public scrollChange(args: IScrollChangeEventArgs) {
        let btnZoomIncrement: any = (document.getElementById('btnZoomIncrement') as any).ej2_instances[0];
        if(args.panState !=='Start'){
            btnZoomIncrement.content = Math.round((this as any).scrollSettings.currentZoom * 100) + ' %';
        }
    }
}