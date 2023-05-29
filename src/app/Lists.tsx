// EDIT PROVISIONING ORDER ITEMS HERE

const provisioningOrderItems: ItemType[] = [
  { id: "1", name: "dhcp:stop" },
  { id: "2", name: "redirection:stop" },
];

// EDIT CODEC LIST HERE
const codecItems: ItemType[] = [
  { id: "1", name: "g722" },
  { id: "2", name: "pcmu" },
  { id: "3", name: "pcma" },
  { id: "4", name: "gsm" },
  { id: "5", name: "g723" },
  { id: "6", name: "g726-32" },
  { id: "7", name: "aal2-g726-32" },
  { id: "8", name: "g729" },
  { id: "9", name: "telephone-event" },
  { id: "0", name: "Ignore Bar: Codecs below will be ignored.", filtered: true },
];

interface ItemType {
  id: string;
  name: string;
  filtered?: boolean;
}

const getItems = (itemList: ItemType[]) => {
  const items: string[] = [];
  for (const item of itemList) {
    if (item.id === "0") break;

    items.push(item.name);
  }

  return items;
}

export {
  provisioningOrderItems,
  codecItems,
  getItems
}

export type { ItemType };