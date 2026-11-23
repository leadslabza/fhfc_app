import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { featuredProducts, formatRand, type ShopProduct } from "@/lib/content/shop";

function ProductCard({ product }: { product: ShopProduct }) {
  return (
    <li className="group">
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-white ring-1 ring-mist">
        <Image
          src={product.image}
          alt={product.imageAlt}
          fill
          sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 90vw"
          className="object-contain p-4 mix-blend-multiply transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="mt-4 flex items-start justify-between gap-4">
        <div>
          <h3 className="font-display text-xl leading-tight font-bold text-forest-900 uppercase">
            {product.name}
          </h3>
          {product.note ? (
            <p className="mt-1 text-sm text-slate">{product.note}</p>
          ) : null}
        </div>
        <p className="font-display text-xl font-bold text-crest">
          {formatRand(product.price)}
        </p>
      </div>
    </li>
  );
}

/**
 * Shop preview with the club's real products. The online shop itself is
 * built in Stages 4 and 5, so there is no add-to-cart here yet.
 */
export function ShopPreview() {
  return (
    <section
      id="shop"
      aria-labelledby="shop-title"
      className="bg-chalk py-24 md:py-32"
    >
      <div className="container-site">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <SectionHeading
            id="shop-title"
            eyebrow="Club shop"
            title="Wear the green"
            intro="Hoodies, shirts, caps and beanies for players and supporters."
          />
          <p className="inline-flex items-center gap-2 self-start rounded-full bg-floodlight/20 px-4 py-2 text-sm font-semibold text-forest-900 md:self-auto">
            <span className="h-2 w-2 rounded-full bg-floodlight" aria-hidden="true" />
            New online shop coming soon
          </p>
        </div>
        <ul className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </ul>
      </div>
    </section>
  );
}
