import { writable } from 'svelte/store';
export const tools = writable([
    {title: "shovel", condition: "fair", uses: "digging", src: "/shovel.png", id: "1", pickupdate: "", duration: 1},
    {title: "cart", condition: "great", uses: "hauling heavy items", src: "/utilitycart.png", id: "2", pickupdate: "", duration: 1},
    {title: "drill", condition: "good", uses: "affixing things to other things", src: "/drill.png", id: "3", pickupdate: "", duration: 1},
    {title: "hammer", condition: "fair", uses: "smashing nails into things", src: "/hammer.png", id: "4", pickupdate: "", duration: 1}
]);

export const checkout = writable([]);