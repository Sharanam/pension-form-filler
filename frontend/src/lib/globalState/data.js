import { writable } from "svelte/store";
import { initialRecord } from "../tools/initialRecord";

export const data = writable([initialRecord()]),
    index = writable(0),
    preferences = writable({
        showAll: false,
    });