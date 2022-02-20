let displayname: string = "Matt's desk";
let inventoryType: string = "furniture";
let trackingNumber: string = "FD123455";
let createDate: Date = new Date();
let originalCost = 425;

enum InventoryItemType{
    Computer = "computer",
    Furniture = "furniture"
}

interface InventoryItem {
    displayName: string;
    inventoryType: "computer" | "furniture"
    readonly trackingNumber: string;
    createDate: Date;
    originalCost?: number;

    addNote?: (note: string) => string;
}

function getInventoryItem(trackingNumber: string) : InventoryItem {
    return null;
}

function saveInventoryItem(item: InventoryItem) {

}

let inventoryItem = getInventoryItem(trackingNumber);

let updatedInventoryItem = inventoryItem;

inventoryItem.createDate = new Date();

saveInventoryItem({
    displayName: "Macbook Pro 15 Retina",
    inventoryType: "computer",
    trackingNumber: "MBP123456",
    createDate: new Date()
});