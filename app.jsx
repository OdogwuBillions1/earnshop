import React, { useState } from 'react';
import { ShoppingCart, Star, Gift, Users, TrendingUp, Search, CheckCircle, Shield } from 'lucide-react';

export default function EarnShopAlibaba() {
  const [page, setPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [cart, setCart] = useState([]);
  const [earnings] = useState({ cashback: 340, referrals: 560, resales: 350, total: 1250 });

  const sellers = [
    {
      id: 1,
      name: 'TechFactory Asia',
      country: '🇨🇳 China',
      verified: true,
      goldSupplier: true,
      rating: 4.9,
      reviews: 2340,
      yearsInBusiness: 8,
      productCount: 450,
      responseTime: '2 hours',
      description: 'Leading electronics manufacturer specializing in wireless devices',
      logo: '🏭'
    },
    {
      id: 2,
      name: 'Fashion Industries EU',
      country: '🇪🇺 Europe',
      verified: true,
      goldSupplier: true,
      rating: 4.7,
      reviews: 5120,
      yearsInBusiness: 12,
      productCount: 800,
      responseTime: '4 hours',
      description: 'Premium cotton apparel manufacturer for 12+ years',
      logo: '👗'
    },
    {
      id: 3,
      name: 'Electronics Factory',
      country: '🇨🇳 China',
      verified: true,
      goldSupplier: false,
      rating: 4.9,
      reviews: 8540,
      yearsInBusiness: 6,
      productCount: 320,
      responseTime: '1 hour',
      description: 'Certified electronics manufacturer with ISO certifications',
      logo: '⚡'
    },
    {
      id: 4,
      name: 'Global Beauty Co',
      country: '🇰🇷 South Korea',
      verified: true,
      goldSupplier: true,
      rating: 4.8,
      reviews: 4100,
      yearsInBusiness: 10,
      productCount: 280,
      responseTime: '3 hours',
      description: 'Organic skincare products with international certifications',
      logo: '💅'
    }
  ];

  const products = [
    {
      id: 1,
      sellerId: 1,
      name: 'Wireless Headphones Pro',
      price: 45,
      retail: 129,
      emoji: '🎧',
      rating: 4.8,
      reviews: 2340,
      cashback: 12,
      category: 'Electronics',
      bulkPricing: [
        { qty: 1, price: 45 },
        { qty: 10, price: 40 },
        { qty: 50, price: 35 },
        { qty: 100, price: 30 }
      ],
      stock: 5000,
      certification: ['CE', 'RoHS']
    },
    {
      id: 2,
      sellerId: 2,
      name: 'Premium Cotton T-Shirt',
      price: 8,
      retail: 25,
      emoji: '👕',
      rating: 4.6,
      reviews: 5120,
      cashback: 15,
      category: 'Fashion',
      bulkPricing: [
        { qty: 1, price: 8 },
        { qty: 20, price: 7 },
        { qty: 100, price: 6 },
        { qty: 500, price: 5 }
      ],
      stock: 50000,
      certification: ['OEKO-TEX']
    },
    {
      id: 3,
      sellerId: 3,
      name: 'USB-C Fast Charger',
      price: 12,
      retail: 35,
      emoji: '🔌',
      rating: 4.9,
      reviews: 8540,
      cashback: 14,
      category: 'Electronics',
      bulkPricing: [
        { qty: 1, price: 12 },
        { qty: 15, price: 10 },
        { qty: 50, price: 8 },
        { qty: 200, price: 6 }
      ],
      stock: 20000,
      certification: ['CE', 'FCC', 'RoHS']
    },
    {
      id: 4,
      sellerId: 4,
      name: 'Organic Skincare Set',
      price: 28,
      retail: 85,
      emoji: '💅',
      rating: 4.8,
      reviews: 4100,
      cashback: 16,
      category: 'Beauty',
      bulkPricing: [
        { qty: 1, price: 28 },
        { qty: 12, price: 22 },
        { qty: 50, price: 18 },
        { qty: 200, price: 15 }
      ],
      stock: 10000,
      certification: ['Organic', 'Cruelty-Free']
    }
  ];

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (filterCategory === 'all' || p.category.toLowerCase() === filterCategory.toLowerCase())
  );

  if (page === 'home') {
    return (
      <div className="min-h-screen bg-white">
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setPage('home')}>
              <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white font-bold">E</div>
              <h1 className="text-2xl font-bold text-gray-900">EarnShop</h1>
            </div>
            <div className="flex gap-4">
              <button onClick={() => setPage('shop')} className="px-4 py-2 text-gray-700 hover:text-emerald-600">Browse</button>
              <button onClick={() => setPage('suppliers')} className="px-4 py-2 text-gray-700 hover:text-emerald-600">Suppliers</button>
              <button onClick={() => setPage('dashboard')} className="px-4 py-2 bg-emerald-600 text-white rounded-lg">Account</button>
            </div>
          </div>
        </nav>

        <section className="max-w-6xl mx-auto px-6 py-20 text-center">
          <div className="inline-block mb-6 px-4 py-2 bg-emerald-100 rounded-full">
            <p className="text-emerald-700 font-semibold text-sm">✨ 2,500+ Verified Suppliers</p>
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Buy Direct From<br/>
            <span className="text-emerald-600">Global Manufacturers</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Shop from 2,500+ verified suppliers. 50-70% cheaper than retail. Bulk pricing. International certifications. Earn money on every purchase.
          </p>
          <button 
            onClick={() => setPage('shop')}
            className="px-8 py-4 bg-emerald-600 text-white rounded-lg font-bold text-lg hover:bg-emerald-700"
          >
            Browse Suppliers & Products
          </button>
        </section>

        <section className="bg-gray-50 py-16 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Alibaba-Inspired Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
                <p className="text-3xl mb-3">✅</p>
                <h3 className="font-bold text-gray-900 mb-2">Verified Suppliers</h3>
                <p className="text-sm text-gray-600">Gold supplier badges, ratings, years in business</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
                <p className="text-3xl mb-3">📊</p>
                <h3 className="font-bold text-gray-900 mb-2">Bulk Pricing</h3>
                <p className="text-sm text-gray-600">Buy 1 or 1,000 - see tiered pricing instantly</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
                <p className="text-3xl mb-3">🔐</p>
                <h3 className="font-bold text-gray-900 mb-2">Certifications</h3>
                <p className="text-sm text-gray-600">CE, RoHS, ISO - verify product quality</p>
              </div>
              <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
                <p className="text-3xl mb-3">💰</p>
                <h3 className="font-bold text-gray-900 mb-2">Earn Money</h3>
                <p className="text-sm text-gray-600">12-16% cashback on every purchase</p>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-emerald-600 text-white py-16 px-6">
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div><p className="text-4xl font-bold">2,500+</p><p className="text-emerald-100 mt-2">Verified Suppliers</p></div>
            <div><p className="text-4xl font-bold">50K+</p><p className="text-emerald-100 mt-2">Active Buyers</p></div>
            <div><p className="text-4xl font-bold">$5.2M</p><p className="text-emerald-100 mt-2">Cashback Paid</p></div>
            <div><p className="text-4xl font-bold">4.8/5</p><p className="text-emerald-100 mt-2">Avg Rating</p></div>
          </div>
        </section>
      </div>
    );
  }

  if (page === 'suppliers') {
    return (
      <div className="min-h-screen bg-gray-50">
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-emerald-600 cursor-pointer" onClick={() => setPage('home')}>EarnShop</h1>
            <button onClick={() => setPage('home')} className="text-gray-700">← Back</button>
          </div>
        </nav>

        <div className="max-w-6xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Verified Suppliers Directory</h1>
          <p className="text-gray-600 mb-10">Browse 2,500+ verified manufacturers worldwide</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sellers.map(seller => (
              <div key={seller.id} className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition p-6">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-5xl">{seller.logo}</p>
                  <div className="flex gap-2">
                    {seller.verified && <CheckCircle className="w-5 h-5 text-emerald-600" />}
                    {seller.goldSupplier && <Shield className="w-5 h-5 text-yellow-500" />}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-gray-900 mb-1">{seller.name}</h3>
                <p className="text-sm text-gray-600 mb-4">{seller.country}</p>
                <p className="text-sm text-gray-600 line-clamp-2 mb-4">{seller.description}</p>

                <div className="space-y-2 text-sm border-t pt-4">
                  <div className="flex justify-between"><span className="text-gray-600">Rating:</span><span className="font-bold text-yellow-500">{seller.rating}/5</span></div>
                  <div className="flex justify-between"><span className="text-gray-600">Products:</span><span className="font-bold">{seller.productCount}</span></div>
                  <div className="flex justify-between"><span className="text-gray-600">Experience:</span><span className="font-bold">{seller.yearsInBusiness}y</span></div>
                  <div className="flex justify-between"><span className="text-gray-600">Response:</span><span className="font-bold text-emerald-600">{seller.responseTime}</span></div>
                </div>

                <button 
                  onClick={() => setPage('shop')}
                  className="w-full mt-4 bg-emerald-600 text-white py-2 rounded-lg font-semibold hover:bg-emerald-700"
                >
                  View Products
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (page === 'shop') {
    if (selectedProduct) {
      const product = products.find(p => p.id === selectedProduct);
      const seller = sellers.find(s => s.id === product.sellerId);
      
      return (
        <div className="min-h-screen bg-gray-50">
          <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
            <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
              <h1 className="text-2xl font-bold text-emerald-600 cursor-pointer" onClick={() => setPage('home')}>EarnShop</h1>
              <button onClick={() => setSelectedProduct(null)} className="text-gray-700">← Back</button>
            </div>
          </nav>

          <div className="max-w-4xl mx-auto px-6 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-8 bg-white p-8 rounded-xl">
              <div className="bg-emerald-50 h-64 rounded-lg flex items-center justify-center text-8xl">{product.emoji}</div>
              
              <div>
                <div className="mb-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="text-2xl">{seller.logo}</p>
                      <h4 className="font-bold text-gray-900">{seller.name}</h4>
                      <p className="text-sm text-gray-600">{seller.country}</p>
                    </div>
                    <div className="text-right">
                      {seller.goldSupplier && <p className="text-xs bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-bold">Gold Supplier</p>}
                    </div>
                  </div>
                </div>

                <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
                
                <div className="mb-6">
                  <p className="text-5xl font-bold text-emerald-600">${product.price}</p>
                  <p className="text-gray-500 line-through">${product.retail}</p>
                </div>

                {product.certification && (
                  <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                    <p className="text-sm font-bold text-gray-900 mb-2">Certifications:</p>
                    <div className="flex gap-2">
                      {product.certification.map(cert => (
                        <span key={cert} className="text-xs bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full font-bold">{cert}</span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="bg-blue-50 p-4 rounded-lg mb-6 border border-blue-200">
                  <p className="text-sm text-gray-600 mb-1">Earn Cashback</p>
                  <p className="text-3xl font-bold text-blue-600">+${(product.price * product.cashback / 100).toFixed(2)}</p>
                </div>

                <button 
                  onClick={() => {
                    setCart([...cart, product]);
                    alert('Added to cart!');
                    setSelectedProduct(null);
                  }}
                  className="w-full bg-emerald-600 text-white py-3 rounded-lg font-bold hover:bg-emerald-700"
                >
                  Add to Cart
                </button>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Bulk Pricing (Like Alibaba)</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {product.bulkPricing.map((tier, idx) => (
                  <div key={idx} className="p-4 border border-gray-200 rounded-lg text-center hover:border-emerald-600 transition cursor-pointer">
                    <p className="text-sm text-gray-600 mb-2">{tier.qty}+ units</p>
                    <p className="text-2xl font-bold text-emerald-600">${tier.price}</p>
                    <p className="text-xs text-gray-500 mt-2">
                      Save {Math.round((1 - tier.price / product.price) * 100)}%
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Details</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-gray-600 text-sm">Stock Available</p>
                  <p className="text-2xl font-bold text-gray-900">{product.stock.toLocaleString()} units</p>
                </div>
                <div>
                  <p className="text-gray-600 text-sm">Rating</p>
                  <p className="text-2xl font-bold text-yellow-500">{product.rating}/5 ({product.reviews})</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="min-h-screen bg-gray-50">
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-emerald-600 cursor-pointer" onClick={() => setPage('home')}>EarnShop</h1>
            <div className="flex gap-4">
              <button onClick={() => setPage('suppliers')} className="text-gray-700">Suppliers</button>
              <button onClick={() => setPage('dashboard')} className="text-gray-700">Account</button>
            </div>
          </div>
        </nav>

        <div className="max-w-6xl mx-auto px-6 py-8">
          <div className="bg-white rounded-xl p-6 mb-8 border border-gray-200">
            <div className="flex gap-4 flex-wrap">
              <div className="flex-1 min-w-64">
                <div className="relative">
                  <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
              <select
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg"
              >
                <option value="all">All Categories</option>
                <option value="electronics">Electronics</option>
                <option value="fashion">Fashion</option>
                <option value="beauty">Beauty</option>
              </select>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Products from Verified Suppliers</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map(product => {
              const seller = sellers.find(s => s.id === product.sellerId);
              return (
                <div 
                  key={product.id}
                  onClick={() => setSelectedProduct(product.id)}
                  className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition cursor-pointer"
                >
                  <div className="bg-emerald-50 h-40 flex items-center justify-center text-6xl">{product.emoji}</div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <p className="text-sm">{seller.logo}</p>
                      <div className="flex-1">
                        <p className="text-xs font-bold text-gray-700">{seller.name}</p>
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                          <span className="text-xs text-gray-600">{seller.rating}</span>
                          {seller.goldSupplier && <Shield className="w-3 h-3 text-yellow-500" />}
                        </div>
                      </div>
                    </div>

                    <h3 className="font-bold text-gray-900 mb-3">{product.name}</h3>

                    <div className="mb-4">
                      <div className="flex gap-2 mb-2">
                        <span className="text-2xl font-bold text-emerald-600">${product.price}</span>
                        <span className="text-gray-500 line-through text-sm pt-1">${product.retail}</span>
                      </div>
                      <div className="text-blue-600 font-semibold text-sm">
                        +${(product.price * product.cashback / 100).toFixed(2)} cashback
                      </div>
                    </div>

                    <div className="mb-4 p-2 bg-purple-50 rounded text-xs text-purple-700 font-bold text-center">
                      Bulk pricing: {product.bulkPricing.length} tiers
                    </div>

                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setCart([...cart, product]);
                        alert('Added to cart!');
                      }}
                      className="w-full bg-emerald-600 text-white py-2 rounded-lg font-semibold hover:bg-emerald-700"
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  if (page === 'dashboard') {
    return (
      <div className="min-h-screen bg-gray-50">
        <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-emerald-600 cursor-pointer" onClick={() => setPage('home')}>EarnShop</h1>
            <button onClick={() => setPage('shop')} className="text-gray-700">Shop</button>
          </div>
        </nav>

        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl p-10 mb-12">
            <p className="text-emerald-100 mb-2">Total Balance</p>
            <h1 className="text-5xl font-bold">${earnings.total.toFixed(2)}</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="flex items-center gap-3">
                <Gift className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-600">Cashback</p>
                  <p className="text-2xl font-bold">${earnings.cashback}</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6 text-purple-600" />
                <div>
                  <p className="text-sm text-gray-600">Referrals</p>
                  <p className="text-2xl font-bold">${earnings.referrals}</p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <div className="flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-orange-600" />
                <div>
                  <p className="text-sm text-gray-600">Resales</p>
                  <p className="text-2xl font-bold">${earnings.resales}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
    }
