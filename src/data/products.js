export const productCategories = [
  {
    id: 'fertilizers',
    title: 'Organic Fertilizers',
    icon: 'Sprout',
    color: 'from-primary-500 to-primary-700',
    description: 'Nature-based fertilizer solutions for sustainable agriculture.',
    items: [
      {
        name: 'Compost Fertilizer',
        description: 'Nutrient-rich organic compost made from farm waste and natural decomposition processes. Ideal for all crop types.',
        benefits: ['Improves soil structure', 'Enhances water retention', 'Slow-release nutrients'],
      },
      {
        name: 'Liquid Bio Fertilizer',
        description: 'Concentrated liquid organic fertilizer with beneficial microorganisms for foliar and soil application.',
        benefits: ['Rapid nutrient absorption', 'Boosts plant immunity', 'Easy application'],
      },
      {
        name: 'Soil Enrichment Solutions',
        description: 'Custom soil amendment blends tailored to specific crop and soil requirements.',
        benefits: ['Corrects nutrient deficiencies', 'Balances pH levels', 'Increases microbial activity'],
      },
    ],
  },
  {
    id: 'produce',
    title: 'Farm Produce',
    icon: 'Wheat',
    color: 'from-accent to-yellow-600',
    description: 'Fresh, organically grown produce from our farmer network.',
    items: [
      {
        name: 'Vegetables Supply',
        description: 'Seasonal organic vegetables sourced directly from partner farms in Eastern Sri Lanka.',
        benefits: ['Farm-fresh daily', 'Pesticide-free', 'Direct from growers'],
      },
      {
        name: 'Seasonal Crops',
        description: 'Locally adapted crop varieties grown using traditional organic methods.',
        benefits: ['Climate-resilient varieties', 'Traditional seed preservation', 'Support local biodiversity'],
      },
      {
        name: 'Farm Produce Distribution',
        description: 'Bulk distribution network connecting farm output to local markets and buyers.',
        benefits: ['Fair pricing for farmers', 'Quality assurance', 'Reliable supply chain'],
      },
    ],
  },
  {
    id: 'services',
    title: 'Agricultural Services',
    icon: 'Leaf',
    color: 'from-soil to-soil-light',
    description: 'Expert guidance and support for organic farming transition.',
    items: [
      {
        name: 'Soil Consultation',
        description: 'Professional soil testing and analysis with tailored recommendations for organic farming.',
        benefits: ['Scientific soil analysis', 'Custom fertilizer plans', 'Ongoing monitoring'],
      },
      {
        name: 'Organic Farming Guidance',
        description: 'End-to-end support for farmers transitioning from chemical to organic methods.',
        benefits: ['Step-by-step transition plan', 'Pest management strategies', 'Organic certification guidance'],
      },
      {
        name: 'Farmer Support Programs',
        description: 'Training, resources, and community support for sustainable farming practices.',
        benefits: ['Workshops & training', 'Peer learning network', 'Resource access'],
      },
    ],
  },
]

export const galleryImages = [
  { id: 1, src: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80', alt: 'Organic farm landscape', category: 'farm' },
  { id: 2, src: 'https://images.unsplash.com/photo-1609412058473-c199497c3c5d?w=600&q=80', alt: 'Rice paddy field', category: 'products' },
  { id: 3, src: 'https://images.unsplash.com/photo-1559737558-2f5a35f4523b?w=600&q=80', alt: 'Compost production', category: 'products' },
  { id: 4, src: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&q=80', alt: 'Farmers working together', category: 'team' },
  { id: 5, src: 'https://images.unsplash.com/photo-1505935428862-770b6f24f629?w=600&q=80', alt: 'Farmers harvesting', category: 'team' },
  { id: 6, src: 'https://images.unsplash.com/photo-1471193945509-9ad0617afabf?w=600&q=80', alt: 'Organic farming field', category: 'farm' },
  { id: 7, src: 'https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?w=600&q=80', alt: 'Paddy cultivation', category: 'events' },
  { id: 8, src: 'https://images.unsplash.com/photo-1519082572439-7ed19908e47e?w=600&q=80', alt: 'Golden rice field', category: 'products' },
  { id: 9, src: 'https://images.unsplash.com/photo-1560493676-04071c5f467b?w=600&q=80', alt: 'Soil preparation', category: 'farm' },
  { id: 10, src: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=600&q=80', alt: 'Organic fertilizer application', category: 'products' },
  { id: 11, src: 'https://images.unsplash.com/photo-1605000797499-95a51c5269ae?w=600&q=80', alt: 'Community farming', category: 'events' },
  { id: 12, src: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=600&q=80', alt: 'Sunset over farm', category: 'farm' },
]

export const testimonials = [
  {
    id: 1,
    name: 'Mohamed Rishad',
    role: 'Rice Farmer, Batticaloa',
    content: 'Switching to Serendib\'s organic compost doubled my yield while cutting costs. My soil has never been healthier.',
    rating: 5,
  },
  {
    id: 2,
    name: 'S. Tharani',
    role: 'Vegetable Grower, Ampara',
    content: 'The soil consultation service was eye-opening. They tested my land and created a custom organic plan that actually works.',
    rating: 5,
  },
  {
    id: 3,
    name: 'K. Sivakumar',
    role: 'Coconut Farmer, Trincomalee',
    content: 'I was skeptical about organic fertilizers at first, but the results speak for themselves. Stronger trees, better nuts.',
    rating: 5,
  },
  {
    id: 4,
    name: 'A. Fathima',
    role: 'Home Garden Owner, Kattankudy',
    content: 'Their liquid bio fertilizer is amazing for home gardens. My vegetables are thriving and chemical-free.',
    rating: 4,
  },
  {
    id: 5,
    name: 'N. Ganesan',
    role: 'Tea Plantation Manager, Nuwara Eliya',
    content: 'Serendib\'s soil enrichment program transformed our tea estate. Higher quality leaves and healthier plants across all sections.',
    rating: 5,
  },
  {
    id: 6,
    name: 'M. Izzath',
    role: 'Organic Farmer, Kalmunai',
    content: 'I\'ve been with Serendib since 2020. Their consistent support and quality compost have made organic farming profitable and sustainable for my family.',
    rating: 5,
  },
]

export const impactStats = [
  { label: 'Farmers Supported', value: 3200, suffix: '+', icon: 'Users' },
  { label: 'Organic Fertilizer Produced', value: 15000, suffix: ' kg+', icon: 'Package' },
  { label: 'Land Converted to Organic', value: 850, suffix: ' acres+', icon: 'MapPin' },
  { label: 'Waste Recycled into Compost', value: 45000, suffix: ' kg+', icon: 'Recycle' },
]

export const faqItems = [
  {
    q: 'How do I register as a farmer in your network?',
    a: 'Visit our Farmers page and fill out the registration form with your details. Our team will contact you within 48 hours to verify and onboard you.',
  },
  {
    q: 'Do you deliver fertilizers across Sri Lanka?',
    a: 'Yes, we deliver to all districts. Delivery charges vary by location. Contact us for a quote tailored to your area.',
  },
  {
    q: 'What is the minimum order quantity for compost?',
    a: 'For local farmers, we start from 50 kg bags. For commercial orders, minimum is 1 ton. Bulk discounts are available.',
  },
  {
    q: 'Do you help with organic certification?',
    a: 'Yes, we guide farmers through the organic certification process, including documentation, inspection preparation, and compliance.',
  },
  {
    q: 'What crops are your fertilizers suitable for?',
    a: 'Our products are suitable for rice, vegetables, fruits, coconut, tea, rubber, and home gardens. We customize blends for specific crops.',
  },
  {
    q: 'Can international buyers place orders?',
    a: 'Absolutely. Visit our Contact page and use the Export Inquiry section. We handle export documentation and shipping.',
  },
]
