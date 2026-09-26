/**
 * Ayurvedic Era - Photographic Asset Specification & Google Flow Generation Prompts
 * Exact generation prompts designed for hyper-realistic, luxury editorial art direction.
 * References: Kinfolk, Aesop, White Feather aesthetic, tactile minimalism, warm natural daylight.
 */

export const assetPrompts = {
  hero: {
    id: "hero_main_visual",
    name: "Hero Editorial Atmosphere",
    aspectRatio: "16:9 / 4:5",
    usage: "Hero section visual centerpiece and banner backdrop",
    prompt:
      "Editorial product photography of luxury dark violet glass apothecary dropper bottle with minimalist cream label with subtle gold foil embossed text 'AYURVEDIC ERA'. Resting on a raw, warm limestone pedestal next to dried Kashmiri saffron threads in a carved brass dish, fresh Holy Basil leaves with tiny morning dew drops, and raw whole ashwagandha roots. Soft diffused morning sunlight streaming through an arched terracotta jaali screen casting delicate warm shadows. Warm ivory and deep olive green tonal palette, Kinfolk magazine style, 8k resolution, Hasselblad medium format camera, shallow depth of field, ultra-refined luxury aesthetics, cinematic stillness.",
    negativePrompt:
      "cheap plastic, saturated neon colors, cluttered background, cartoon, 3D render look, blur, extra bottles, western medicine bottles"
  },
  philosophy: {
    id: "philosophy_manifesto_visual",
    name: "Herbal Decoction & Handcrafting Ritual",
    aspectRatio: "4:3 / 1:1",
    usage: "Brand Philosophy Chapter supporting image",
    prompt:
      "Close-up authentic photographic capture of an Ayurvedic apothecary master's hands carefully pouring golden infused herbal oil from a handcrafted hammered brass vessel into a dark glass vial. Steam lightly rising, sunlight catching the translucent amber liquid. In the background: raw dried botanical herbs in woven jute baskets, slate stone countertop, warm earth tones, serene aesthetic, depth of field, natural lighting, documentary editorial style.",
    negativePrompt:
      "sterile industrial lab, neon lighting, synthetic tools, dirty background, oversaturated"
  },
  sourcing_himalayan_valley: {
    id: "sourcing_himalayan_valley",
    name: "Pampore Saffron & Himalayan Foothills",
    aspectRatio: "16:9 / 3:2",
    usage: "Sourcing Story: High Altitude Himalayan Region",
    prompt:
      "Cinematic panoramic landscape of early dawn over misty saffron fields in Pampore Kashmir with distant snow-dusted Himalayan peaks. Violet crocus flowers blooming in soft golden morning mist. Gentle atmospheric haze, warm rose-gold and soft pine green tones, fine art nature photography, National Geographic style, extreme clarity.",
    negativePrompt:
      "harsh noon sun, high contrast, oversaturated colors, crowds, modern buildings"
  },
  sourcing_malabar_ghats: {
    id: "sourcing_malabar_ghats",
    name: "Wayanad Rainforest Spicery",
    aspectRatio: "16:9 / 3:2",
    usage: "Sourcing Story: Western Ghats Rainforest",
    prompt:
      "Serene editorial nature photography of lush organic spice estates in Wayanad Western Ghats India. Sunlight filtering through tall silver oak and cardamom foliage, deep mossy green textures, fertile wet soil, tranquil botanical sanctuary, fine grain, medium format photography.",
    negativePrompt:
      "muddy, dead leaves, artificial lighting, urban elements"
  },
  sourcing_arid_plains: {
    id: "sourcing_arid_plains",
    name: "Malwa Plateau Sun-Drying Harvest",
    aspectRatio: "16:9 / 3:2",
    usage: "Sourcing Story: Arid Deccan Plateau",
    prompt:
      "Golden hour shot of wild Ashwagandha roots spread neatly on natural linen cloth drying under the sun in a tranquil rural courtyard in central India. Warm terracotta walls, earthen pottery, dappled sunlight, rich textural contrast, peaceful botanical tradition.",
    negativePrompt:
      "industrial machines, dirt, plastic tarps, harsh shadows"
  },
  product_ojas_elixir: {
    id: "product_ojas_elixir",
    name: "Ojas Radiance Nectar Bottle",
    aspectRatio: "1:1 / 3:4",
    usage: "Product Card & Modal: Ojas Radiance Nectar",
    prompt:
      "Studio product shot of a 100ml dark violet glass bottle with a minimalist ivory textured label reading 'OJAS RADIANCE NECTAR'. Placed on a sanded travertine stone block alongside three fresh saffron threads and a drop of golden amber elixir glistening on stone. Soft side lighting, neutral warm beige backdrop, luxury cosmetics photography.",
    negativePrompt:
      "reflection glare, cluttered background, cheap labels, plastic caps"
  },
  product_kumkumadi_oil: {
    id: "product_kumkumadi_oil",
    name: "Kumkumadi Sublime Facial Oil",
    aspectRatio: "1:1 / 3:4",
    usage: "Product Card & Modal: Kumkumadi Sublime Oil",
    prompt:
      "Luxury product still life of a 30ml amber-violet dropper bottle of Kumkumadi facial oil. Glass pipette with a radiant red-gold drop hovering above the bottle rim. Red sandalwood shavings and dry red lotus petals delicately placed nearby on an oat-colored raw linen backdrop. Clean high-end beauty magazine lighting.",
    negativePrompt:
      "messy drops, stained background, harsh shadows"
  },
  product_brahmi_clarity: {
    id: "product_brahmi_clarity",
    name: "Brahmi Clarity Essence Jar",
    aspectRatio: "1:1 / 3:4",
    usage: "Product Card & Modal: Brahmi Clarity Essence",
    prompt:
      "Minimalist apothecary jar with dark wooden cap and matte cream label 'BRAHMI CLARITY ESSENCE'. Fresh green Bacopa leaves resting beside the jar on a smooth river stone. Warm ivory wall background with gentle organic shadow play.",
    negativePrompt:
      "plastic supplement bottles, gym branding, neon labels"
  },
  product_triphala_powder: {
    id: "product_triphala_powder",
    name: "Triphala Harmonizing Powder Tin",
    aspectRatio: "1:1 / 3:4",
    usage: "Product Card & Modal: Triphala Powder",
    prompt:
      "Artisanal brushed bronze tin canister with minimalist seal label 'TRIPHALA HARMONIZING POWDER'. A small carved wooden spoon filled with fine herbal powder resting against the tin, with dry Amla and Haritaki fruit rinds next to it. Warm earthy studio setting.",
    negativePrompt:
      "spilled powder mess, bright white background, glossy finish"
  },
  product_bala_oil: {
    id: "product_bala_oil",
    name: "Bala Ashwagandha Restorative Body Oil",
    aspectRatio: "1:1 / 3:4",
    usage: "Product Card & Modal: Bala Oil",
    prompt:
      "Apothecary amber glass bottle with matte black pump dispenser and textured linen paper label. Standing on a polished dark green marble slab beside a woven Indian khadi towel. Soft warm candlelight ambiance, luxury hotel spa atmosphere.",
    negativePrompt:
      "clinical lab, bright blue light, plastic bottle"
  },
  distributor_atelier: {
    id: "distributor_atelier",
    name: "Ayurvedic Era Partner Atelier & Showroom",
    aspectRatio: "16:9 / 4:3",
    usage: "Distributor & Strategic Alliances banner",
    prompt:
      "Interior architecture of a luxury contemporary Ayurvedic wellness apothecary showroom. Minimalist solid teakwood shelving holding orderly rows of dark violet glass bottles, warm lime-wash plastered walls, soft warm accent lighting, bespoke bronze fixtures, serene atmosphere inspired by Aman Resorts and Aesop stores. No people, architectural photography.",
    negativePrompt:
      "messy store, supermarket shelves, crowded, cheap retail"
  }
};
