/**
 * Products currently sold on fhfc.co.za (WooCommerce, audited 23 Nov 2026).
 * Prices are in rand. This is a read-only preview list for the homepage until
 * the shop catalogue moves into the database in Stage 4.
 */

export type ShopProduct = {
  slug: string;
  name: string;
  price: number;
  image: string;
  imageAlt: string;
  note?: string;
};

export const featuredProducts: ShopProduct[] = [
  {
    slug: "fhfc-zip-up-hoodie",
    name: "FHFC Zip Up Hoodie",
    price: 350,
    image: "/shop/zip-up-hoodie.webp",
    imageAlt: "Forest Hills FC zip-up hoodie, front and back",
    note: "2026 season · 3-week lead time",
  },
  {
    slug: "fhfc-long-sleeve-shirt",
    name: "FHFC Long Sleeve Shirt",
    price: 200,
    image: "/shop/long-sleeve-shirt.webp",
    imageAlt: "Forest Hills FC long-sleeve shirt",
    note: "2026 season · 3-week lead time",
  },
  {
    slug: "fhfc-supporter-shirt",
    name: "FHFC Supporter Shirt",
    price: 199,
    image: "/shop/supporter-shirt-green.webp",
    imageAlt: "Green Forest Hills FC supporter shirt",
    note: "Green or pink",
  },
  {
    slug: "fhfc-trucker-cap-green-white",
    name: "FHFC Trucker Cap",
    price: 250,
    image: "/shop/trucker-cap-green.webp",
    imageAlt: "Green and white Forest Hills FC trucker cap",
    note: "Green & white or black & white",
  },
];

const rand = new Intl.NumberFormat("en-ZA", {
  style: "currency",
  currency: "ZAR",
  maximumFractionDigits: 0,
});

export function formatRand(amount: number) {
  return rand.format(amount);
}
