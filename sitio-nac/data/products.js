/* =========================================================================
   CATÁLOGO DE PRODUCTOS
   ⚠️ Todos estos productos son DE EJEMPLO (placeholder). Reemplázalos por los tuyos.

   Campos de cada producto:
   - id:          número único
   - slug:        identificador para la URL (minúsculas, sin tildes ni espacios)
   - name:        nombre visible
   - category:    slug de la categoría (ver config/site.js)
   - brand:       slug de la marca (ver config/site.js)
   - description: texto del detalle
   - images:      lista de rutas, ej: ["products/whey-2lb-1.jpg", "products/whey-2lb-2.jpg"]
                  (si está vacía se muestra un recuadro gris de ejemplo)
   - price:       precio normal en pesos (sin puntos)
   - salePrice:   precio de oferta (opcional; si existe se muestra "¡Oferta!")
   - stock:       unidades disponibles (0 = Agotado). Si hay variantes, se usa el stock de cada variante.
   - variantLabel: "Sabor" o "Tamaño" (opcional)
   - variants:    lista opcional [{ name, price, salePrice?, stock }]
   - isNew:       true = aparece en "Nuevos suplementos"
   - bestSeller:  true = aparece en "Más vendidos"
   - combo:       true = aparece en "Combos"
   - paymentLink: (reservado para enlaces de pago futuros, déjalo vacío)
   ========================================================================= */
window.PRODUCTS = [
  { id: 1, slug: "whey-isolate-chocolate-2lb", name: "Whey Isolate 2 LB (ejemplo)", category: "proteinas", brand: "atlas-nutrition",
    description: "Proteína aislada de suero de ejemplo. Ideal después de entrenar para apoyar la recuperación muscular. Reemplaza este texto por la descripción real del producto.",
    images: [], price: 265000, salePrice: 239000, stock: 12, variantLabel: "Sabor",
    variants: [
      { name: "Chocolate", price: 265000, salePrice: 239000, stock: 6 },
      { name: "Vainilla", price: 265000, salePrice: 239000, stock: 4 },
      { name: "Fresa", price: 265000, salePrice: 239000, stock: 0 },
    ], isNew: false, bestSeller: true, paymentLink: "" },

  { id: 2, slug: "whey-isolate-5lb", name: "Whey Isolate 5 LB (ejemplo)", category: "proteinas", brand: "atlas-nutrition",
    description: "Presentación grande de proteína aislada de ejemplo, con más servicios por envase.",
    images: [], price: 520000, salePrice: 479000, stock: 8, isNew: false, bestSeller: true, paymentLink: "" },

  { id: 3, slug: "creatina-monohidratada-300g", name: "Creatina Monohidratada 300 G (ejemplo)", category: "creatinas", brand: "forja-labs",
    description: "Creatina monohidratada micronizada de ejemplo, sin sabor. Mézclala con agua o con tu batido.",
    images: [], price: 139000, stock: 20, variantLabel: "Tamaño",
    variants: [
      { name: "300 g", price: 139000, stock: 12 },
      { name: "500 g", price: 147000, stock: 8 },
    ], isNew: false, bestSeller: true, paymentLink: "" },

  { id: 4, slug: "mass-gainer-10lb", name: "Mass Gainer 10 LB (ejemplo)", category: "hipercaloricos", brand: "hierro-lab",
    description: "Hipercalórico de ejemplo para quienes buscan subir de peso con un aporte alto de calorías y carbohidratos.",
    images: [], price: 245000, salePrice: 229000, stock: 6, isNew: false, bestSeller: true, paymentLink: "" },

  { id: 5, slug: "whey-gold-blend-5lb", name: "Whey Blend 5 LB (ejemplo)", category: "proteinas", brand: "pulso-pro",
    description: "Mezcla de proteínas de suero de ejemplo con buena relación precio/porción.",
    images: [], price: 420000, salePrice: 389000, stock: 10, variantLabel: "Sabor",
    variants: [
      { name: "Cookies & Cream", price: 420000, salePrice: 389000, stock: 5 },
      { name: "Chocolate", price: 420000, salePrice: 389000, stock: 5 },
    ], isNew: false, bestSeller: true, paymentLink: "" },

  { id: 6, slug: "pre-entreno-explosivo-30", name: "Pre-entreno Explosivo 30 serv. (ejemplo)", category: "pre-entrenos", brand: "vertice",
    description: "Pre-entreno de ejemplo con cafeína y beta-alanina para entrenamientos intensos. Consulta su uso con un profesional.",
    images: [], price: 155000, salePrice: 130000, stock: 14, variantLabel: "Sabor",
    variants: [
      { name: "Limonada", price: 155000, salePrice: 130000, stock: 7 },
      { name: "Frutos rojos", price: 155000, salePrice: 130000, stock: 7 },
    ], isNew: true, bestSeller: true, paymentLink: "" },

  { id: 7, slug: "bcaa-2-1-1-60", name: "BCAA 2:1:1 60 serv. (ejemplo)", category: "aminoacidos", brand: "andes-sport",
    description: "Aminoácidos de cadena ramificada de ejemplo para tomar durante el entrenamiento.",
    images: [], price: 118000, stock: 9, isNew: false, bestSeller: true, paymentLink: "" },

  { id: 8, slug: "glutamina-500g", name: "Glutamina 500 G (ejemplo)", category: "glutaminas", brand: "forja-labs",
    description: "L-glutamina pura de ejemplo, sin sabor.",
    images: [], price: 112000, salePrice: 99000, stock: 7, isNew: false, bestSeller: true, paymentLink: "" },

  { id: 9, slug: "multivitaminico-120-caps", name: "Multivitamínico 120 Cápsulas (ejemplo)", category: "multivitaminicos", brand: "nordika",
    description: "Complejo de vitaminas y minerales de ejemplo para el día a día.",
    images: [], price: 72000, stock: 25, isNew: true, bestSeller: true, paymentLink: "" },

  { id: 10, slug: "quemador-termogenico-60", name: "Quemador Termogénico 60 Caps (ejemplo)", category: "quemadores", brand: "vertice",
    description: "Termogénico de ejemplo. No recomendado para personas sensibles a la cafeína.",
    images: [], price: 128000, salePrice: 115000, stock: 0, isNew: false, bestSeller: true, paymentLink: "" },

  { id: 11, slug: "proteina-vegana-2lb", name: "Proteína Vegetal 2 LB (ejemplo)", category: "proteinas", brand: "cumbre-fit",
    description: "Proteína de origen vegetal de ejemplo (arveja y arroz).",
    images: [], price: 168000, stock: 6, isNew: true, bestSeller: true, paymentLink: "" },

  { id: 12, slug: "barra-proteina-caja-12", name: "Barras de Proteína x12 (ejemplo)", category: "snacks", brand: "ruta-max",
    description: "Caja de 12 barras de proteína de ejemplo para tus meriendas.",
    images: [], price: 96000, salePrice: 86000, stock: 15, variantLabel: "Sabor",
    variants: [
      { name: "Maní", price: 96000, salePrice: 86000, stock: 8 },
      { name: "Chocolate", price: 96000, salePrice: 86000, stock: 7 },
    ], isNew: true, bestSeller: true, paymentLink: "" },

  { id: 13, slug: "shaker-nac-700ml", name: "Shaker New Athletic 700 ML (ejemplo)", category: "termos-shakers", brand: "new-athletic",
    description: "Shaker de ejemplo con rejilla mezcladora y tapa antiderrame.",
    images: [], price: 35000, stock: 30, variantLabel: "Color",
    variants: [
      { name: "Negro", price: 35000, stock: 20 },
      { name: "Blanco", price: 35000, stock: 10 },
    ], isNew: true, bestSeller: true, paymentLink: "" },

  { id: 14, slug: "tribulus-90-caps", name: "Tribulus 90 Cápsulas (ejemplo)", category: "precursores-naturales", brand: "nordika",
    description: "Precursor natural de ejemplo a base de extracto vegetal.",
    images: [], price: 84000, stock: 5, isNew: false, bestSeller: true, paymentLink: "" },

  { id: 15, slug: "creatina-micronizada-1kg", name: "Creatina Micronizada 1 KG (ejemplo)", category: "creatinas", brand: "hierro-lab",
    description: "Presentación de 1 kg de creatina de ejemplo para varios meses de uso.",
    images: [], price: 289000, salePrice: 259000, stock: 4, isNew: false, bestSeller: true, paymentLink: "" },

  { id: 16, slug: "omega-3-120", name: "Omega 3 120 Cápsulas (ejemplo)", category: "multivitaminicos", brand: "andes-sport",
    description: "Omega 3 de ejemplo con EPA y DHA.",
    images: [], price: 75000, stock: 18, isNew: true, bestSeller: true, paymentLink: "" },

  { id: 17, slug: "hipercalorico-6lb", name: "Hipercalórico 6 LB (ejemplo)", category: "hipercaloricos", brand: "pulso-pro",
    description: "Hipercalórico de ejemplo en presentación mediana.",
    images: [], price: 189000, stock: 0, isNew: false, bestSeller: true, paymentLink: "" },

  { id: 18, slug: "pre-entreno-sin-estimulantes", name: "Pre-entreno Sin Estimulantes (ejemplo)", category: "pre-entrenos", brand: "cumbre-fit",
    description: "Pre-entreno de ejemplo sin cafeína, enfocado en bombeo.",
    images: [], price: 142000, salePrice: 125000, stock: 6, isNew: false, bestSeller: true, paymentLink: "" },

  { id: 19, slug: "eaa-30-serv", name: "Aminoácidos Esenciales EAA (ejemplo)", category: "aminoacidos", brand: "vertice",
    description: "Aminoácidos esenciales de ejemplo, 30 servicios.",
    images: [], price: 134000, stock: 7, isNew: true, bestSeller: true, paymentLink: "" },

  { id: 20, slug: "termo-acero-1l", name: "Termo de Acero 1 L (ejemplo)", category: "termos-shakers", brand: "new-athletic",
    description: "Termo de acero inoxidable de ejemplo que conserva la temperatura.",
    images: [], price: 68000, salePrice: 59000, stock: 12, isNew: true, bestSeller: true, paymentLink: "" },

  { id: 21, slug: "whey-isolate-10lb", name: "Whey Isolate 10 LB (ejemplo)", category: "proteinas", brand: "atlas-nutrition",
    description: "La presentación más rendidora de nuestra proteína aislada de ejemplo.",
    images: [], price: 734000, salePrice: 699000, stock: 3, isNew: false, bestSeller: false, paymentLink: "" },

  { id: 22, slug: "proteina-de-carne-4lb", name: "Proteína de Carne 4 LB (ejemplo)", category: "proteinas", brand: "hierro-lab",
    description: "Proteína de ejemplo de origen bovino, sin lactosa.",
    images: [], price: 314000, salePrice: 287000, stock: 5, isNew: false, bestSeller: false, paymentLink: "" },

  { id: 23, slug: "l-carnitina-liquida", name: "L-Carnitina Líquida (ejemplo)", category: "quemadores", brand: "ruta-max",
    description: "L-carnitina líquida de ejemplo.",
    images: [], price: 89000, salePrice: 79000, stock: 9, isNew: true, bestSeller: false, paymentLink: "" },

  { id: 24, slug: "glutamina-1kg", name: "Glutamina 1 KG (ejemplo)", category: "glutaminas", brand: "andes-sport",
    description: "Glutamina de ejemplo en presentación grande.",
    images: [], price: 189000, stock: 0, isNew: true, bestSeller: false, paymentLink: "" },

  { id: 25, slug: "vitamina-d3-k2", name: "Vitamina D3 + K2 (ejemplo)", category: "multivitaminicos", brand: "nordika",
    description: "Vitamina D3 con K2 de ejemplo, 60 perlas.",
    images: [], price: 77000, stock: 14, isNew: true, bestSeller: false, paymentLink: "" },

  { id: 26, slug: "mantequilla-mani-proteina", name: "Mantequilla de Maní Proteica (ejemplo)", category: "snacks", brand: "cumbre-fit",
    description: "Mantequilla de maní con proteína de ejemplo.",
    images: [], price: 38000, stock: 20, isNew: true, bestSeller: false, paymentLink: "" },

  { id: 27, slug: "maca-negra-100-caps", name: "Maca Negra 100 Cápsulas (ejemplo)", category: "precursores-naturales", brand: "andes-sport",
    description: "Maca negra de ejemplo en cápsulas.",
    images: [], price: 58000, salePrice: 49000, stock: 10, isNew: true, bestSeller: false, paymentLink: "" },

  /* ---- COMBOS (combo: true) ---- */
  { id: 28, slug: "combo-volumen", name: "Combo Volumen: Gainer + Creatina (ejemplo)", category: "hipercaloricos", brand: "new-athletic", combo: true,
    description: "Combo de ejemplo: hipercalórico 10 LB + creatina 300 g + shaker de regalo.",
    images: [], price: 384000, salePrice: 349000, stock: 5, isNew: true, bestSeller: false, paymentLink: "" },

  { id: 29, slug: "combo-definicion", name: "Combo Definición: Isolate + Quemador (ejemplo)", category: "proteinas", brand: "new-athletic", combo: true,
    description: "Combo de ejemplo: proteína aislada 2 LB + quemador termogénico.",
    images: [], price: 393000, salePrice: 355000, stock: 4, isNew: true, bestSeller: false, paymentLink: "" },

  { id: 30, slug: "combo-inicio", name: "Combo Inicio: Whey + Shaker (ejemplo)", category: "proteinas", brand: "new-athletic", combo: true,
    description: "Combo de ejemplo para empezar: proteína 2 LB + shaker New Athletic.",
    images: [], price: 300000, stock: 0, isNew: true, bestSeller: false, paymentLink: "" },
];
