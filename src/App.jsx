import React, { useState, useEffect } from 'react'
import { 
  Search, 
  ShoppingBag, 
  User, 
  ArrowUpRight, 
  Sparkles, 
  Plus, 
  ShoppingBasket, 
  Sprout, 
  ArrowRight, 
  Star, 
  CheckCircle2, 
  X, 
  Globe, 
  Flower2, 
  Leaf,
  Info,
  Zap,
  ShieldCheck,
  Droplets,
  ChevronRight,
  Truck,
  RotateCcw,
  Share2,
  ChevronLeft
} from 'lucide-react'

const Navbar = ({ cartCount, onAction, onOpenCart }) => {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-[#220213]/80 backdrop-blur-xl shadow-sm dark:shadow-none transition-all duration-300">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-6 py-3 md:py-4">
        <div className="flex items-center gap-4 md:gap-6">
          <span className="text-xl md:text-2xl font-bold text-[#b70049] dark:text-[#ff7290] cursor-pointer">R.N. Foods</span>
          <div className="hidden lg:flex items-center gap-3 md:gap-6">
            {['Shop All', 'Best Sellers', 'The Lab', 'Sustainability'].map((item) => (
              <a 
                key={item}
                className="text-[#4a2134] dark:text-[#ffd1e1] hover:text-[#b70049] transition-all duration-300 font-body relative group text-sm" 
                href="#"
                onClick={(e) => { e.preventDefault(); onAction(item); }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 md:gap-6">
          <div className="relative hidden md:block">
            <input 
              onKeyDown={(e) => e.key === 'Enter' && onAction(`Search for"${e.target.value}"`)}
              className="bg-surface-container-highest border-none rounded-full px-6 py-2 text-sm w-48 lg:w-64 focus:ring-2 focus:ring-primary/20 placeholder:text-on-surface-variant/50 transition-all outline-none font-bold" 
              placeholder="Search grains..." 
              type="text"
            />
            <Search 
              onClick={() => onAction('Search')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-secondary cursor-pointer hover:scale-110 transition-transform w-5 h-5" 
            />
          </div>
          <button 
            onClick={onOpenCart}
            className="relative hover:opacity-80 transition-all duration-200 active:scale-90 text-[#b70049] dark:text-[#ff7290] p-2">
            <ShoppingBag className="w-6 h-6 md:w-7 md:h-7" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 bg-secondary text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center animate-bounce shadow-sm font-bold ring-2 ring-white dark:ring-[#220213]">
                {cartCount}
              </span>
            )}
          </button>
          <button 
            onClick={() => onAction('Account')}
            className="hover:opacity-80 transition-opacity duration-200 active:scale-95 text-[#b70049] dark:text-[#ff7290] p-2">
            <User className="w-6 h-6 md:w-7 md:h-7" />
          </button>
        </div>
      </div>
    </nav>
  )
}

const Hero = ({ onAction }) => {
  return (
    <section className="relative h-[65vh] md:h-[870px] w-full overflow-hidden flex items-center">
      <img 
        className="absolute inset-0 w-full h-full object-cover" 
        alt="Premium grain mix" 
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqCw-6-rq4aGBzd6xHuse4D9RFYTL77SR1E6Eh_-vHoN1LnUvyBCqh20gd-_dGkhKuvFOZFafSO96bFbMabL4tyOgf09FJgY2CLA6aweqZWqjDlXgD6bulINWbgQa9OtN_awoiDT0yTzRxuhfUfejRNbCgaJQSNBf10mjYl7Oq0db5zCmA6kM43lJJD3zU9FtUmsxfD6YRvzod4IOxXn4X0PUgRGx51d1ctmI3oL9UE1kZTzEb_0LgKKDtNC78GyikXqvS4eTupIYm"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-inverse-surface/90 via-inverse-surface/40 to-transparent"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full py-12 md:py-0">
        <div className="max-w-2xl space-y-4 md:space-y-6 animate-fade-in-up text-left">
          <span className="inline-block px-3 py-1 bg-secondary-container text-on-secondary-fixed font-bold text-[9px] md:text-xs rounded-full uppercase shadow-md">The Organic Earth Edition</span>
          <h1 className="text-5xl md:text-8xl font-bold text-on-primary leading-[1] md:leading-[0.9]">
            The 24-Grain <br/>
            <span className="text-primary-fixed">Masterpiece.</span>
          </h1>
          <p className="text-sm md:text-lg text-surface-container-lowest/90 font-body max-w-md leading-relaxed hidden sm:block font-bold">
            Bio-available nutrition meeting culinary excellence. A vibrant fusion of ancient grains harvested for the modern botanist.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <button 
              onClick={() => onAction('Shop All')}
              className="power-gradient px-8 py-4 rounded-full text-on-primary font-bold shadow-lg shadow-primary/30 hover:scale-105 active:scale-95 transition-all duration-300 text-sm md:text-base flex items-center justify-center gap-2">
               Explore <ArrowUpRight className="w-5 h-5" />
            </button>
            <button 
              onClick={() => onAction('Our Process')}
              className="bg-white/10 backdrop-blur-md border border-white/20 px-8 py-4 rounded-full text-on-primary font-bold hover:bg-white/20 active:scale-95 transition-all duration-300 text-sm md:text-base flex items-center justify-center gap-2">
              Process <Sparkles className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

const ProductCard = ({ product, addToCart, onQuickView }) => {
  return (
    <div 
       className="bg-surface-container-lowest rounded-xl p-2 group cursor-pointer hover:shadow-xl transition-all duration-500 flex flex-col h-full border border-primary/5"
       onClick={() => onQuickView(product)}
    >
      <div className="relative aspect-square mb-2 overflow-hidden rounded-lg">
        <img 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
          alt={product.name} 
          src={product.image}
        />
        {product.tag && (
          <div className={`absolute top-2 left-2 px-2 py-0.5 rounded-md text-[9px] md:text-[10px] font-bold shadow-sm ${
            product.tag === '15% OFF' ? 'bg-[#25a541] text-white' : 
            product.tag === 'BEST SELLER' ? 'bg-tertiary-container text-on-tertiary-fixed' : 
            'bg-primary-container text-on-primary-container'
          }`}>
            {product.tag}
          </div>
        )}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            addToCart(product);
          }}
          className="absolute bottom-2 right-2 bg-primary text-white p-2 md:p-2.5 rounded-full shadow-md hover:scale-110 active:scale-90"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>
      <div className="px-1 pb-1 flex-grow flex flex-col text-left">
        <p className="text-[9px] text-secondary font-bold uppercase mb-0.5">{product.category}</p>
        <h3 className="font-bold text-on-surface leading-tight mb-1 h-8 overflow-hidden line-clamp-2 text-[13px] md:text-base uppercase">{product.name}</h3>
        <div className="flex items-center gap-1 mb-1 mt-auto">
          <Star className="w-3 h-3 text-tertiary-fixed fill-tertiary-fixed font-fill" />
          <span className="text-[9px] font-bold text-on-surface-variant font-body">{product.rating} ({product.reviews})</span>
        </div>
        <div className="flex items-baseline gap-1.5 md:gap-2">
          <span className="text-base md:text-lg font-bold text-on-surface">${product.price}</span>
          {product.oldPrice && <span className="text-[10px] md:text-xs text-on-surface-variant line-through hidden sm:inline opacity-30">${product.oldPrice}</span>}
        </div>
      </div>
    </div>
  )
}

const QuickViewModal = ({ product, isOpen, onClose, addToCart }) => {
  if (!product) return null;

  return (
    <>
      <div className={`fixed inset-0 bg-black/60 backdrop-blur-md z-[80] transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`} onClick={onClose} />
      <div className={`fixed top-0 md:top-1/2 left-0 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 w-full md:w-[95%] max-w-5xl h-full md:h-auto md:max-h-[85vh] bg-[#f8f8f8] md:rounded-[2rem] z-[90] shadow-4xl overflow-hidden transition-all duration-500 transform ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'} flex flex-col transition-all`}>
        
        {/* Mobile Header with Back Button */}
        <div className="md:hidden flex items-center justify-between p-3 md:p-4 bg-white sticky top-0 z-50 shadow-sm h-14">
           <button onClick={onClose} className="p-2 hover:bg-black/5 rounded-full transition-colors active:scale-90 text-on-surface flex items-center justify-center"><ChevronLeft size={28} /></button>
           <h3 className="font-bold text-[10px] uppercase truncate px-4 flex-grow text-center">{product.name}</h3>
           <div className="flex gap-2 md:gap-4">
              <button onClick={() => showToast('Link Copied!')} className="p-2 hover:bg-black/5 rounded-full"><Share2 size={20} className="text-on-surface-variant" /></button>
              <button onClick={() => setIsCartOpen(true)} className="p-2 hover:bg-black/5 rounded-full"><ShoppingBag size={20} className="text-on-surface-variant" /></button>
           </div>
        </div>

        <div className="flex-grow overflow-y-auto flex flex-col md:flex-row pb-20 md:pb-12 scrollbar-hide">
          {/* Product Gallery (Meesho Inspired Carousel) */}
          <div className="w-full md:w-1/2 h-[400px] md:h-auto relative bg-white">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            <button onClick={onClose} className="hidden md:flex absolute top-6 right-6 w-11 h-11 bg-white/50 backdrop-blur-md hover:bg-white rounded-full items-center justify-center transition-all shadow-xl"><X size={24}/></button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
               <div className="w-6 h-1.5 bg-primary rounded-full" />
               <div className="w-1.5 h-1.5 bg-black/20 rounded-full" />
               <div className="w-1.5 h-1.5 bg-black/20 rounded-full" />
            </div>
          </div>

          {/* Product Info (Meesho Detail Style) */}
          <div className="w-full md:w-1/2 space-y-3 md:p-6 bg-[#f0f1f4] md:bg-transparent">
            {/* Title & Price Card */}
            <div className="bg-white p-4 md:p-0 md:bg-transparent shadow-sm md:shadow-none mb-3">
              <div className="flex justify-between items-start mb-2 group">
                 <h2 className="text-lg md:text-2xl font-bold text-on-surface leading-tight text-left uppercase">{product.name}</h2>
                 <button onClick={() => showToast('Shared!')} className="hidden md:block text-on-surface-variant p-2 hover:bg-black/5 rounded-full transition-all"><Share2 size={20} /></button>
              </div>
              <div className="flex flex-col items-start gap-1">
                 <div className="flex items-center gap-3">
                   <span className="text-2xl md:text-3xl font-bold text-on-surface">${product.price}</span>
                   {product.oldPrice && (
                     <div className="flex items-center gap-2">
                        <span className="text-sm text-on-surface-variant line-through opacity-40">${product.oldPrice}</span>
                        <span className="text-[#25a541] text-xs font-bold uppercase">{Math.round((1 - product.price/product.oldPrice) * 100)}% Off</span>
                     </div>
                   )}
                 </div>
                 <div className="flex items-center gap-1.5 bg-[#f8f8f8] px-2 py-0.5 rounded-full text-[10px] font-bold text-tertiary-fixed mt-1">
                   <Star className="w-3.5 h-3.5 fill-current" /> {product.rating} <span className="opacity-40">• {product.reviews} Reviews</span>
                 </div>
              </div>
              <div className="mt-4 flex items-center gap-2 text-[10px] font-bold uppercase text-[#25a541] bg-[#eaf7ed] px-3 py-2 rounded-lg w-fit">
                 <Truck size={14} /> Free Delivery
              </div>
            </div>

            {/* Select Weight (Meesho Size Selector) */}
            <div className="bg-white p-4 md:p-6 shadow-sm md:shadow-none text-left">
               <h4 className="text-[10px] font-bold text-on-surface-variant uppercase mb-2 md:mb-4">Select Harvest Weight</h4>
               <div className="flex flex-wrap gap-3">
                 {['500g', '1kg', '2.5kg', '5kg'].map((w) => (
                   <button key={w} className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase border transition-all ${w === '1kg' ? 'border-primary bg-primary/5 text-primary' : 'border-black/10 text-on-surface/50 hover:border-black/40'}`}>
                     {w}
                   </button>
                 ))}
               </div>
            </div>

            {/* Details Section (Meesho Product Details) */}
            <div className="bg-white p-4 md:p-6 shadow-sm md:shadow-none text-left">
               <div className="flex items-center justify-between mb-2 md:mb-4 cursor-pointer">
                  <h4 className="text-sm font-bold uppercase text-on-surface">Product Details</h4>
                  <ChevronRight size={18} className="text-on-surface-variant" />
               </div>
               <div className="space-y-2 md:space-y-4">
                  {[
                    { l:"Type", v:"Premium Botanical" },
                    { l:"Purity", v:"99.9% Batch Tested" },
                    { l:"Origin", v:"Volcanic Highlands" },
                    { l:"Retention", v:"Max Density Cold-Press" }
                  ].map(d => (
                    <div key={d.l} className="flex text-xs font-bold leading-tight">
                       <span className="w-1/3 text-on-surface-variant uppercase opacity-50">{d.l}</span>
                       <span className="w-2/3 text-on-surface">{d.v}</span>
                    </div>
                  ))}
               </div>
               <div className="mt-8 pt-6 border-t border-black/5">
                  <p className="text-xs font-medium text-on-surface-variant opacity-80 leading-relaxed">
                     A nutrient-dense masterpiece harvested from volcanic soils. Optimized for peak cellular energy and pharmaceutical-grade purity. Engineered for the modern botanist.
                  </p>
               </div>
            </div>

            {/* Trust Badges */}
            <div className="bg-white p-4 md:p-6 shadow-sm md:shadow-none grid grid-cols-2 gap-2 md:gap-4">
                <div className="flex items-center gap-3 p-3 bg-[#f8f8f8] rounded-xl border border-black/5">
                   <RotateCcw size={20} className="text-primary-fixed" />
                   <div className="text-left">
                      <div className="text-[10px] font-bold uppercase leading-none mb-1">7 Days</div>
                      <div className="text-[9px] font-bold text-on-surface-variant opacity-60 leading-none">Returns Policy</div>
                   </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-[#f8f8f8] rounded-xl border border-black/5">
                   <ShieldCheck size={20} className="text-secondary" />
                   <div className="text-left">
                      <div className="text-[10px] font-bold uppercase leading-none mb-1">Verified</div>
                      <div className="text-[9px] font-bold text-on-surface-variant opacity-60 leading-none">Batch Purity</div>
                   </div>
                </div>
            </div>
          </div>
        </div>

        {/* Sticky Meesho Footer */}
        <div className="absolute bottom-0 left-0 w-full p-3 md:p-4 bg-white border-t border-black/5 flex gap-3 z-30 shadow-2xl-up">
           <button 
             onClick={() => addToCart(product)}
             className="flex-1 py-4.5 border-2 border-primary text-primary font-bold rounded-xl uppercase text-xs flex items-center justify-center gap-2 hover:bg-primary/5 shadow-sm active:scale-95 transition-all"
           >
              Add to Bag <ShoppingBag size={18} />
           </button>
           <button 
             onClick={() => { addToCart(product); alert('Proceeding to Direct Checkout...'); }}
             className="flex-[1.2] py-4.5 bg-primary text-on-primary font-bold rounded-xl uppercase text-xs flex items-center justify-center gap-2 shadow-xl shadow-primary/20 hover:brightness-110 active:scale-95 transition-all"
           >
              Buy Now <ArrowRight size={18} />
           </button>
        </div>
      </div>
    </>
  );
};

const CartDrawer = ({ isOpen, onClose, cartItems, onRemove, onUpdateQuantity }) => {
  const total = cartItems.reduce((acc, item) => acc + (parseFloat(item.price) * (item.quantity || 1)), 0);

  return (
    <>
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] transition-opacity duration-500 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        onClick={onClose}
      />
      <div className={`fixed top-0 right-0 h-full w-full max-w-[450px] bg-white z-[110] shadow-2xl transition-transform duration-500 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}>
        <div className="p-4 md:p-6 border-b border-primary/10 flex justify-between items-center bg-white/50 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <ShoppingBasket className="text-primary w-8 h-8 md:w-9 md:h-9" />
            <h2 className="text-xl md:text-2xl font-bold leading-none uppercase">Your Collection</h2>
          </div>
          <button onClick={onClose} className="w-9 h-9 md:w-10 md:h-10 rounded-full hover:bg-surface-container-high transition-colors flex items-center justify-center text-on-surface-variant">
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-4 md:p-6 space-y-4 md:space-y-6 scrollbar-hide">
          {cartItems.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center space-y-2 md:space-y-4 py-6 md:py-12">
              <Sprout className="w-20 h-20 md:w-24 md:h-24 text-surface-container-high opacity-50" />
              <p className="text-on-surface-variant font-bold text-sm md:text-base uppercase">Your harvest is empty.</p>
              <button 
                onClick={onClose}
                className="px-10 py-4 bg-primary text-on-primary rounded-full font-bold hover:scale-105 transition-transform text-xs uppercase"
              >
                Browse Shop
              </button>
            </div>
          ) : (
            cartItems.map((item, idx) => (
              <div key={idx} className="flex gap-3 md:gap-6 group animate-fade-in-up">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-xl md:rounded-2xl overflow-hidden bg-surface-container-low flex-none border border-primary/5 text-left">
                  <img src={item.image} alt={item.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="flex-grow flex flex-col justify-between py-0.5 text-left">
                  <div>
                    <h4 className="font-bold text-xs md:text-sm text-on-surface leading-tight mb-0.5 md:mb-1 uppercase">{item.name}</h4>
                    <p className="text-[9px] md:text-[10px] text-secondary font-bold uppercase">Premium Selection</p>
                  </div>
                  <div className="flex justify-between items-end">
                    <div className="flex items-center bg-surface-container-highest rounded-lg px-2 py-0.5 md:py-1 gap-2 md:gap-3 ring-1 ring-primary/5">
                       <button onClick={() => onUpdateQuantity(idx, -1)} className="text-xs md:text-sm font-bold text-primary hover:scale-125 transition-transform">-</button>
                       <span className="text-[11px] md:text-xs font-bold w-4 text-center">{item.quantity || 1}</span>
                       <button onClick={() => onUpdateQuantity(idx, 1)} className="text-xs md:text-sm font-bold text-primary hover:scale-125 transition-transform">+</button>
                    </div>
                    <div className="text-right">
                      <p className="font-bold text-primary text-sm md:text-base">${(parseFloat(item.price) * (item.quantity || 1)).toFixed(2)}</p>
                      <button onClick={() => onRemove(idx)} className="text-[10px] font-bold text-red-500 hover:text-red-600 transition-colors uppercase opacity-60">Remove</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {cartItems.length > 0 && (
          <div className="p-6 md:p-6 border-t border-primary/10 bg-surface-container-low/50 backdrop-blur-md">
            <div className="flex justify-between items-center mb-4 md:mb-4 md:mb-8">
              <span className="text-on-surface-variant font-bold uppercase text-[10px] md:text-xs opacity-50">Total Harvest</span>
              <span className="text-2xl md:text-3xl font-bold text-primary">${total.toFixed(2)}</span>
            </div>
            <button className="w-full py-4 md:py-5 power-gradient rounded-xl md:rounded-2xl text-on-primary font-bold text-base md:text-lg shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-3 uppercase">
              Checkout Now
              <ArrowRight className="w-6 h-6" />
            </button>
            <p className="text-center text-[9px] md:text-[10px] text-on-surface-variant mt-4 font-bold uppercase opacity-40">
              Sustainable Zero-Waste Delivery Included
            </p>
          </div>
        )}
      </div>
    </>
  )
}

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [toasts, setToasts] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    if (isCartOpen || selectedProduct) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isCartOpen, selectedProduct]);

  const showToast = (message) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts(prev => [...prev, { id, message }]);
    setTimeout(() => {
      setToasts(prev => prev.filter(t => t.id !== id));
    }, 3000);
  };

  const addToCart = (product) => {
    setCartItems(prev => {
      const existing = prev.find(item => item.name === product.name);
      if (existing) {
        return prev.map(item => item.name === product.name ? { ...item, quantity: (item.quantity || 1) + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    showToast(`Added ${product.name} to collection!`);
  };

  const removeProduct = (index) => {
    const item = cartItems[index];
    setCartItems(prev => prev.filter((_, i) => i !== index));
    showToast(`Removed from bag`);
  };

  const updateQuantity = (index, delta) => {
    setCartItems(prev => {
      const newItems = [...prev];
      const item = newItems[index];
      const newQuantity = (item.quantity || 1) + delta;
      if (newQuantity < 1) return prev;
      newItems[index] = { ...item, quantity: newQuantity };
      return newItems;
    });
  };

  const handleGenericClick = (action) => {
    showToast(`${action} soon`);
  };

  const trendingProducts = [
    {
      id: 1,
      name:"Golden Highland Quinoa - Prime Grade",
      category:"Superfood",
      price:"24.00",
      oldPrice:"32.00",
      rating:"4.9",
      reviews:"2.1k",
      tag:"15% OFF",
      image:"https://lh3.googleusercontent.com/aida-public/AB6AXuCTxPKCrTvz3zey08WkIdmEpkxrxr-4HeIPuW87f_Tvbm4wQTbmK5GTKf3nf8ejEz51kaZCQsls5lgmIJzgYhFYE0RrDyTFljf7mLv451VwjKxV3hrkEYeyCS7-fxuEQSm0UNRh1gbp24wE1HXsWr-HUUzolgT9pbypQ6KoixwAcURkPv8baj-c2F-156cF8r1DrWWOcQWGulVGOTmChqH2YFcfAFxmiGE4xtl6qF6lvD_IuZnz_v-5vNMgLO22AtWva2ReICmn4GtX"
    },
    {
      id: 2,
      name:"Midnight Forbidden Rice - Organic",
      category:"Ancient Grain",
      price:"18.50",
      rating:"5.0",
      reviews:"840",
      tag:"BEST SELLER",
      image:"https://lh3.googleusercontent.com/aida-public/AB6AXuBGyOJfIwDyEBbMIFdx0wm9fsKgt3ma_9Q_cnTJeQ0NoAZqB_t5S2CMJpwcXavgUSyDEZtsmX3lb21ypEZ_Q3WVWv8TIMbxMv1BNuCYnIKSsdnUtwxYqCnVB5UXH7A2gSGQdLawWHvZqWhR0OLAQ3Zy7paW4ZNHVFdSMcAGNmhdlBwGSEM6lMMrb3I6D2cr8usVvpO7H_DsDniaCsSJZ7kug42N_ksYmu94kLOSvQ75DufBz2ChLL05lrAvBbF0sEWSjfwsTNrAh4Zk"
    },
    {
      id: 3,
      name:"Raw Botanist Walnut & Almond Crush",
      category:"Mix-Ins",
      price:"29.99",
      rating:"4.8",
      reviews:"1.2k",
      image:"https://lh3.googleusercontent.com/aida-public/AB6AXuA2SEphSl0RAY0gzgJ9vMpP6h56PTgWCJI3IECvAFlL3l5L-AVGB1mZR5hz8qBHI06cb4DqkafD_dzpzvh7CVrQdizB7NA4nSP494eU_uhCH5O_GrRvQMe0gIQPxCssGXrTWEmZyIVoyfi69jiKVmdWqKNricmQUyAfQB7hpLqlkWPHRqZaETbrV1O3Gcn92vMFVINKMR_X1qoHLFB1KSMndFREWY2bExwiLXUwOqwUwaF7RifaAAE4pSorBLC9pZMTzUSzx1-Hd_yu"
    },
    {
      id: 4,
      name:"Barnyard Millet - Stone Ground",
      category:"Cereal",
      price:"12.00",
      rating:"4.7",
      reviews:"310",
      tag:"NEW",
      image:"https://lh3.googleusercontent.com/aida-public/AB6AXuDfozOejP8HE02IBTGhDbgy83AnAIDQwfRQvXJuXXKOG7Trs0Puo5yhj5sQEZD6W8YrTkQdQn2OvZSVn2YupuSiqpZMXn65WqdIFOikZwq_qaLuZ2G4QIgeH8ix-KURp4c3PY3YiwcKKDWcYOnorsy98C52NCrnoyTrQKAHuOEhtxFKbj-Y96FgufishFFDU-2g8ccUeVjSB_IJ4MQLpvJd6beP6phrRYec9Uurw4L4m5AS-v0EYpOFP7lzk7BlgtIEytA4RV4n0seM"
    },
    {
      id: 5,
      name:"Morning Glow Multi-Seed Fusion",
      category:"House Blend",
      price:"34.00",
      rating:"4.9",
      reviews:"4.5k",
      image:"https://lh3.googleusercontent.com/aida-public/AB6AXuC4DsbrKPQ29Qlz08xFoy22eRGaBZvBRAhMuhkZ8vhe6b4YjkxOS507Li9EEvaeEyaxLtMD-YSXNoA4t2Ds2Rc_Ur30Zg02QR2u0Wv5c1lPAXkDQwxAjhrwMLX6df_isXOL2oQeS48-NW9CWgBR2iH0CgWFDP1jeKg4yvcOQuesiFfhZx7Xvs8-hPjIpoJ742DMuPrI3TxX6086OWoxE3AKytI02wp8ptQSH7aqRjgrwvmXcSVEeeTKqLHQCkG1dXyEysNE2U0ei3zT"
    }
  ];

  return (
    <div className="bg-[#f8f8f8] font-body text-on-background selection:bg-primary-container selection:text-on-primary-container min-h-screen antialiased">
      <Navbar cartCount={cartItems.reduce((acc, item) => acc + (item.quantity || 1), 0)} onAction={handleGenericClick} onOpenCart={() => setIsCartOpen(true)} />
      
      <main className="pt-12 md:pt-12">
        <Hero onAction={handleGenericClick} />

        {/* Trending Section */}
        <section className="bg-white">
          <div className="max-w-7xl mx-auto px-4 md:px-6 py-10 md:py-12">
            <div className="flex justify-between items-end mb-8 md:mb-4 md:mb-8 gap-2 text-left">
              <div>
                <h2 className="text-3xl md:text-6xl font-bold text-on-surface leading-none uppercase">Trending Now</h2>
                <p className="text-xs md:text-sm font-bold text-on-surface-variant opacity-40 uppercase mt-2">Organic Curated Harvest</p>
              </div>
              <button 
                onClick={() => handleGenericClick('Gallery')}
                className="text-primary font-bold flex items-center gap-1.5 transition-all group text-xs md:text-sm uppercase border-b-2 border-primary/10 pb-1 hover:border-primary">
                View all <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {trendingProducts.map(product => (
                <ProductCard key={product.id} product={product} addToCart={addToCart} onQuickView={setSelectedProduct} />
              ))}
            </div>
          </div>
        </section>

        {/* Recently Viewed */}
        <section className="py-12 md:py-12 bg-[#f8f8f8]">
          <div className="max-w-7xl mx-auto px-4 md:px-6 text-left">
            <h2 className="text-xl md:text-3xl font-bold mb-4 md:mb-4 md:mb-8 text-on-surface uppercase">Your Recent Gathers</h2>
            <div className="flex gap-3 md:gap-6 overflow-x-auto pb-4 scrollbar-hide text-left">
              {[
                { name:"Steel Cut Irish Oats", price:"14.00", img:"https://lh3.googleusercontent.com/aida-public/AB6AXuDp3ZMEGX7Uf7KARFHSf0vKdYVc9ih7ZU0dk7Qrz1En0mERLUyNRKswulVeV6JI02u3ouQdnl3QUREDqAkXAZyBmktZF7rANGz9co4aildPd9hKwpHu-yfEYoARQ_XqwiA81kIY7kb_8KXi4b1TmhxpZXLi8Wg50lsKDqh3MsDHA6b11BcFadH236jaDZ56ZFRfcDyjb77fwjoz7sOIUcDp4TumJ47dLvUk7NNB3jT_4AnT6xjOpBYsUsk5G6odh8fVvrCM22uzKL7q" },
                { name:"Vibrant Bean Medley", price:"19.50", img:"https://lh3.googleusercontent.com/aida-public/AB6AXuDQuI40HnquvbvLwIltxv1i4_sRuJQ7roQe96osHZxhBCo0TA0zFHUl7Tnf4fh944JrNX7t98SPz5JQEZSwZf3xvLU8PLXex0kNZbNHZP7UvOCLLfHLdTUwHE5JRXKVqTPYaas-prxtIC8SN9qOxphOcpjFWINKSIwHGowIzCartW_zjRpgWm4R-qXUfZF0_d3IaUq_G0ZhuGFR9Zxwx7lKRS3RSuYYHBesAjPvQ5RSawnF1dAd0r6mGrzE2gXcubqfQbJvRcSN4fkF" }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setSelectedProduct({ name: item.name, price: item.price, image: item.img, category: 'Grains', rating: '4.9', reviews: '128' })}
                  className="flex-none w-56 md:w-64 bg-white p-3 rounded-2xl text-left border border-black/5 hover:shadow-2xl transition-all scale-100 hover:scale-[1.03] active:scale-95 duration-500 shadow-sm"
                >
                  <div className="aspect-square rounded-xl overflow-hidden mb-2 md:mb-4 shadow-inner ring-1 ring-black/5">
                    <img className="w-full h-full object-cover" alt={item.name} src={item.img} />
                  </div>
                  <p className="text-xs font-bold text-on-surface line-clamp-1 uppercase leading-tight mb-2">{item.name}</p>
                  <p className="text-lg font-bold text-primary leading-none">${item.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Botanical Library */}
        <section className="py-16 md:py-12 bg-white">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <div className="text-center mb-8 md:mb-4 md:mb-8 px-4">
              <h2 className="text-4xl md:text-7xl font-bold mb-2 md:mb-4 text-on-surface leading-none uppercase">The Botanical Library</h2>
              <p className="text-on-surface-variant max-w-xl mx-auto text-sm md:text-lg font-bold opacity-30 uppercase">Every grain. Every Batch. Analyzed.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6">
              {[
                {
                  title:"The Earth 24-Grain Mix",
                  desc:"Signature blend features ancient grains, providing a complete amino acid profile.",
                  price:"48.00",
                  unit:"1.5kg Eco-Bag",
                  tags: ["ORGANIC","VEGAN","NON-GMO"],
                  special:"HOUSE SPECIALTY",
                  img:"https://lh3.googleusercontent.com/aida-public/AB6AXuBZNhhyTG_UUV8N7uuzsCCHvyW0gAtecv7rSFV1sV8fmWkKyU9eemjEz-4mSjr6e5uE0WjQ70GAqAV0LY8eadoe89MV3W8nUYx67j8hHE3Rr8NYtUDvRViN9sohFPEVDUEJ4bGXW3Etmr47eWQD1lFpfpnyag0TNK3emz7yGdDr4X3twdrzEM6E4AuyYMnqLzwQdbBAcPvnWI2_m50zTZUK6RkW7ejb9e9WU7jvBW2det3UVQMHeJcLWyRXftQnK36TRGFB_N7HDSyl"
                },
                {
                  title:"The Sprinkler Set",
                  desc:"Trio of seed mixes designed to top your salads, smoothies, and breakfast bowls.",
                  price:"32.00",
                  unit:"Set of 4 Jars",
                  tags: ["RAW","GLUTEN-FREE"],
                  special:"KITCHEN ESSENTIAL",
                  img:"https://lh3.googleusercontent.com/aida-public/AB6AXuAtftJVcttsmk7xKUxF8g30rr62NIfi4z5-xQehZ-i6kaFoyGCxw3ff4V8Qm7cylTH9NW8TyFE8Lh9YYHHphm0eOjWVpnd1kNcddPGUVnnQSQR7VTAhJH0ko_aWhPnr3-93uFuZC09QMuah1urywgew0kzgkwJXkoCHE5HPkk1pcQm8HmVwXtAvGeW_WZ5jiFadb5kT5JdiRAK5s8MIQArJRo7XYF_RyCp2U815PiZmtIU8OncyYIbaYI_ETrKIcv0S41djD20-kivd"
                }
              ].map((item, idx) => (
                <div key={idx} className="bg-[#f8f8f8] rounded-[2.5rem] overflow-hidden group hover:shadow-[0_40px_80px_-20px_rgba(183,0,73,0.15)] hover:-translate-y-2 transition-all flex flex-col border border-black/5 text-left duration-700 shadow-lg">
                  <div className="relative h-72 md:h-96 overflow-hidden cursor-pointer" onClick={() => setSelectedProduct({ name: item.title, price: item.price, image: item.img, category: item.special, rating: '5.0', reviews: '2.4k' })}>
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt={item.title} src={item.img} />
                    <div className="absolute top-6 right-6">
                      <span className="bg-white/90 backdrop-blur-md px-5 py-2 rounded-full text-[10px] md:text-xs font-bold text-on-surface shadow-xl border border-white/20 uppercase">{item.special}</span>
                    </div>
                  </div>
                  <div className="p-8 md:p-6 flex flex-col flex-grow">
                    <div className="flex flex-col sm:row justify-between items-start mb-4 md:mb-6 gap-3 md:gap-6">
                      <div className="flex-grow">
                        <h3 className="text-3xl md:text-4xl font-bold text-on-surface mb-3 leading-none uppercase">{item.title}</h3>
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map(tag => (
                            <span key={tag} className="bg-white/80 px-3 py-1 rounded-full text-[10px] font-bold text-primary uppercase shadow-sm ring-1 ring-black/5">{tag}</span>
                          ))}
                        </div>
                      </div>
                      <div className="sm:text-right w-full sm:w-auto mt-auto sm:mt-0">
                        <p className="text-3xl md:text-4xl font-bold text-on-surface leading-none mb-1">${item.price}</p>
                        <p className="text-xs text-on-surface-variant font-bold uppercase opacity-40">{item.unit}</p>
                      </div>
                    </div>
                    <p className="text-on-surface-variant mb-4 md:mb-4 md:mb-8 text-sm md:text-lg leading-relaxed font-bold opacity-50">"{item.desc}"</p>
                    <button 
                      onClick={() => addToCart({ name: item.title, price: item.price, image: item.img, category: 'Large Pack' })}
                      className="w-full py-5 bg-white border-2 border-primary text-primary hover:bg-primary hover:text-on-primary rounded-3xl font-bold shadow-lg transition-all active:scale-95 text-sm md:text-base flex items-center justify-center gap-3 uppercase"
                    >
                       Collect Now <ShoppingBasket className="w-6 h-6" />
                    </button>
                  </div>
                </div>
              ))}
              <div className="col-span-1 md:col-span-2 py-8 md:py-6 md:py-10 flex flex-col items-center justify-center">
                <div className="w-16 h-16 border-4 border-primary/20 border-t-primary rounded-full animate-spin mb-4 md:mb-6 p-1">
                   <div className="w-full h-full border-2 border-primary/5 rounded-full"></div>
                </div>
                <p className="font-bold text-primary text-xs uppercase animate-pulse opacity-40">Gathering more discoveries...</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-white w-full mt-auto rounded-t-[4rem] border-t border-black/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6 px-8 py-8 md:py-6 md:py-10 text-center md:text-left">
          <div className="space-y-2 md:space-y-6">
            <span className="text-2xl font-bold text-[#b70049] uppercase">R.N. Foods</span>
            <p className="text-on-surface-variant font-body text-base leading-relaxed opacity-60 font-bold uppercase">
               Nature's Density. <br/> Scientific Purity.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-on-surface mb-4 md:mb-4 md:mb-8 text-xs uppercase opacity-30">Shop</h4>
            <ul className="space-y-2 md:space-y-4 text-on-surface font-body text-sm font-bold uppercase">
              <li><a className="hover:text-primary transition-colors" href="#" onClick={(e) => { e.preventDefault(); handleGenericClick('Grains'); }}>All Grains</a></li>
              <li><a className="hover:text-primary transition-colors" href="#" onClick={(e) => { e.preventDefault(); handleGenericClick('Lab'); }}>The Lab</a></li>
              <li><a className="hover:text-primary transition-colors" href="#" onClick={(e) => { e.preventDefault(); handleGenericClick('Bulk'); }}>Bulk Sourcing</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-on-surface mb-4 md:mb-4 md:mb-8 text-xs uppercase opacity-30">Protocol</h4>
            <ul className="space-y-2 md:space-y-4 text-on-surface font-body text-sm font-bold uppercase">
              <li><a className="hover:text-primary transition-colors" href="#" onClick={(e) => { e.preventDefault(); handleGenericClick('Green'); }}>Regenerative</a></li>
              <li><a className="hover:text-primary transition-colors" href="#" onClick={(e) => { e.preventDefault(); handleGenericClick('Read'); }}>Batch Data</a></li>
              <li><a className="hover:text-primary transition-colors" href="#" onClick={(e) => { e.preventDefault(); handleGenericClick('Story'); }}>Farmers</a></li>
            </ul>
          </div>
          <div className="space-y-3 md:space-y-6 text-left">
            <h4 className="font-bold text-on-surface text-xs uppercase opacity-30">Newsletter</h4>
            <div className="flex bg-[#f8f8f8] rounded-2xl overflow-hidden p-1 shadow-inner ring-1 ring-black/5 group focus-within:ring-primary/20 transition-all">
              <input className="bg-transparent border-none px-6 py-3 w-full focus:ring-0 text-on-surface text-xs font-bold uppercase placeholder:opacity-30" placeholder="Batch Alert Email" type="email" />
              <button onClick={() => handleGenericClick('Email')} className="bg-primary text-on-primary px-6 rounded-xl font-bold text-xs uppercase transition-all active:scale-95"><ArrowRight size={18}/></button>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto px-8 pb-12 flex flex-col md:flex-row justify-between items-center border-t border-black/5 pt-10 gap-3 md:gap-6">
          <p className="text-on-surface-variant font-body text-[10px] md:text-xs opacity-30 font-bold uppercase">© 2024 R.N. Foods. Crafted by The Vibrant Botanist.</p>
          <div className="flex gap-4 md:gap-6 opacity-30">
            <Globe className="w-6 h-6 text-on-surface hover:text-primary cursor-pointer transition-all hover:scale-125 hover:rotate-12" />
            <Flower2 className="w-6 h-6 text-on-surface hover:text-primary cursor-pointer transition-all hover:scale-125 hover:rotate-12" />
            <Leaf className="w-6 h-6 text-on-surface hover:text-primary cursor-pointer transition-all hover:scale-125 hover:rotate-12" />
          </div>
        </div>
      </footer>

      <QuickViewModal 
        product={selectedProduct} 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
        addToCart={addToCart} 
      />

      <CartDrawer 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        cartItems={cartItems} 
        onRemove={removeProduct} 
        onUpdateQuantity={updateQuantity}
      />

      {/* Toast Notifications */}
      <div className="fixed top-6 md:top-auto md:bottom-32 right-0 left-0 md:left-auto md:right-12 p-4 md:p-0 z-[120] flex flex-col gap-2 md:gap-4">
        {toasts.map(toast => (
          <div 
            key={toast.id} 
            className="bg-primary text-white px-8 md:px-12 py-4 md:py-12 rounded-2xl md:rounded-full shadow-4xl animate-fade-in-up flex items-center gap-3 md:gap-6 backdrop-blur-3xl border border-white/40 ring-1 ring-white/20"
          >
            <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 shrink-0" />
            <span className="font-bold text-sm md:text-xl leading-tight uppercase">{toast.message}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default App
