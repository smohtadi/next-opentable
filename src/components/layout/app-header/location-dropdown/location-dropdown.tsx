"use client";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ChevronDownIcon, ChevronRight, MapPinIcon } from "lucide-react";
import Button from "@/components/ui/button/button";
import styles from "./styles.module.css";

const locations = [
  { id: 1, name: "Atlantic Canada" },
  { id: 2, name: "Calgary / Southern Alberta" },
  { id: 3, name: "Edmonton / Northern Alberta" },
  { id: 4, name: "Montreal / Quebec" },
  { id: 6, name: "Northwest Territories" },
  { id: 7, name: "Ottawa" },
  { id: 8, name: "Saskatoon / Saskatchewan" },
  { id: 9, name: "Toronto / Ontario" },
  { id: 10, name: "Vancouver / British Columbia" },
  { id: 11, name: "Winnipeg / Manitoba" },
  { id: 12, name: "Yukon" },
];

const regionsMap = {
  12: [
    { id: 1, name: "Whitehorse", locationId: 12 },
    { id: 2, name: "Dawson City", locationId: 12 },
    { id: 3, name: "Haines Junction", locationId: 12 },
    { id: 4, name: "Watson Lake", locationId: 12 },
    { id: 5, name: "Carcross", locationId: 12 },
  ],
  11: [
    { id: 1, name: "Winnipeg", locationId: 11 },
    { id: 2, name: "Brandon", locationId: 11 },
    { id: 3, name: "Steinbach", locationId: 11 },
    { id: 4, name: "Thompson", locationId: 11 },
    { id: 5, name: "Portage la Prairie", locationId: 11 },
  ],
  10: [
    { id: 1, name: "Vancouver", locationId: 10 },
    { id: 2, name: "Burnaby", locationId: 10 },
    { id: 3, name: "Richmond", locationId: 10 },
    { id: 4, name: "Surrey", locationId: 10 },
    { id: 5, name: "North Vancouver", locationId: 10 },
    { id: 6, name: "West Vancouver", locationId: 10 },
  ],
  9: [
    { id: 1, name: "Toronto", locationId: 9 },
    { id: 2, name: "Mississauga", locationId: 9 },
    { id: 3, name: "Brampton", locationId: 9 },
    { id: 4, name: "Oakville", locationId: 9 },
    { id: 5, name: "Hamilton", locationId: 9 },
    { id: 6, name: "Markham", locationId: 9 },
  ],
  8: [
    { id: 1, name: "Calgary", locationId: 8 },
    { id: 2, name: "Edmonton", locationId: 8 },
    { id: 3, name: "Red Deer", locationId: 8 },
    { id: 4, name: "Lethbridge", locationId: 8 },
    { id: 5, name: "St. Albert", locationId: 8 },
  ],
  7: [
    { id: 1, name: "Yellowknife", locationId: 7 },
    { id: 2, name: "Hay River", locationId: 7 },
    { id: 3, name: "Inuvik", locationId: 7 },
    { id: 4, name: "Fort Smith", locationId: 7 },
    { id: 5, name: "Behchoko", locationId: 7 },
  ],
  6: [
    { id: 1, name: "Whitehorse", locationId: 6 },
    { id: 2, name: "Dawson City", locationId: 6 },
    { id: 3, name: "Haines Junction", locationId: 6 },
    { id: 4, name: "Watson Lake", locationId: 6 },
    { id: 5, name: "Carcross", locationId: 6 },
  ],
  5: [
    { id: 1, name: "Winnipeg", locationId: 5 },
    { id: 2, name: "Brandon", locationId: 5 },
    { id: 3, name: "Steinbach", locationId: 5 },
    { id: 4, name: "Thompson", locationId: 5 },
    { id: 5, name: "Portage la Prairie", locationId: 5 },
  ],
  4: [
    { id: 1, name: "Montreal", locationId: 4 },
    { id: 2, name: "Quebec City", locationId: 4 },
    { id: 3, name: "Laval", locationId: 4 },
    { id: 4, name: "Gatineau", locationId: 4 },
    { id: 5, name: "Longueuil", locationId: 4 },
  ],
  3: [
    { id: 1, name: "Edmonton", locationId: 3 },
    { id: 2, name: "Fort McMurray", locationId: 3 },
    { id: 3, name: "Leduc", locationId: 3 },
    { id: 4, name: "St. Albert", locationId: 3 },
    { id: 5, name: "Sherwood Park", locationId: 3 },
  ],
  2: [
    { id: 1, name: "Calgary", locationId: 2 },
    { id: 2, name: "Airdrie", locationId: 2 },
    { id: 3, name: "Okotoks", locationId: 2 },
    { id: 4, name: "Chestermere", locationId: 2 },
    { id: 5, name: "Cochrane", locationId: 2 },
  ],
  1: [
    { id: 1, name: "Halifax", locationId: 1 },
    { id: 2, name: "St. John's", locationId: 1 },
    { id: 3, name: "Moncton", locationId: 1 },
    { id: 4, name: "Fredericton", locationId: 1 },
    { id: 5, name: "Charlottetown", locationId: 1 },
  ],
};

export default function LocationDropdown() {
  const [activeLocationId, setActiveLocationId] = useState<number>(9);
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button appearance="ghost" aria-label="Toggle location picker">
          <MapPinIcon />
          <ChevronDownIcon size={16} />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuPortal>
        <DropdownMenuContent
          className={styles.dropdownMenuContent}
          sideOffset={5}
        >
          <div className={styles.row}>
            <section className={styles.col}>
              <h1 className={styles.sectionTitle}>Location</h1>
              <ul role="menu" className={styles.itemList}>
                {locations.map((location) => (
                  <li
                    role="menuitem"
                    key={location.id}
                    className={styles.item}
                    onClick={() => setActiveLocationId(location.id)}
                  >
                    <span className={styles.itemLabel}>{location.name}</span>
                    <ChevronRight size={16} />
                  </li>
                ))}
              </ul>
            </section>
            <section className={styles.col}>
              <h1 className={styles.sectionTitle}>Regions</h1>
              <ul role="menu" className={styles.itemList}>
                {regionsMap[activeLocationId as keyof typeof regionsMap].map(
                  (region) => (
                    <DropdownMenuItem role="menuitem" key={region.id} className={styles.item}>
                      <span className={styles.itemLabel}>{region.name}</span>
                    </DropdownMenuItem>
                  )
                )}
              </ul>
            </section>
          </div>
        </DropdownMenuContent>
      </DropdownMenuPortal>
    </DropdownMenu>
  );
}
