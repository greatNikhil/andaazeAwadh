import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import kebabImg from "@/assets/images/kebab.png";
import biryaniImg from "@/assets/images/biryani.png";
import shahiTukdaImg from "@/assets/images/shahi-tukda.png";

// Mock data
const MOCK_MENU = [
  {
    id: 1,
    name: "Galouti Kebab",
    description: "Finely minced lamb kebabs, infused with over 150 spices.",
    price: 650,
    category: "Starters",
    image: kebabImg
  },
  {
    id: 2,
    name: "Kakori Kebab",
    description: "Melt-in-mouth lamb kebabs flavored with cloves and cinnamon.",
    price: 680,
    category: "Starters",
    image: "https://images.unsplash.com/photo-1599487405270-20b12bc1a815?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Paneer Tikka",
    description: "Cottage cheese marinated in yogurt and spices, cooked in tandoor.",
    price: 450,
    category: "Starters",
    image: "https://images.unsplash.com/photo-1599487405270-20b12bc1a815?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Nihari",
    description: "Slow-cooked meat stew enriched with bone marrow.",
    price: 850,
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1544025162-811114cd8543?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 5,
    name: "Murgh Awadhi Korma",
    description: "Chicken cooked in a rich, creamy cashew and saffron gravy.",
    price: 750,
    category: "Main Course",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 6,
    name: "Awadhi Dum Biryani",
    description: "Fragrant basmati rice cooked with succulent meat and spices.",
    price: 950,
    category: "Biryani",
    image: biryaniImg
  },
  {
    id: 7,
    name: "Subz Dum Biryani",
    description: "Aromatic rice layered with fresh vegetables and saffron.",
    price: 550,
    category: "Biryani",
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 8,
    name: "Shahi Tukda",
    description: "Rich bread pudding flavored with saffron and nuts.",
    price: 350,
    category: "Desserts",
    image: shahiTukdaImg
  },
  {
    id: 9,
    name: "Phirni",
    description: "Classic Awadhi dessert made with ground rice, milk, and saffron.",
    price: 300,
    category: "Desserts",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80"
  }
];

const CATEGORIES = ["All", "Starters", "Main Course", "Biryani", "Desserts"];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredMenu = activeCategory === "All" 
    ? MOCK_MENU 
    : MOCK_MENU.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-background pt-8 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16 space-y-6">
          <h1 className="font-serif text-5xl md:text-7xl text-primary font-bold tracking-tight">
            Our <span className="text-accent italic">Royal</span> Dastarkhwan
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light">
            A curated selection of authentic Awadhi recipes, prepared with the finest ingredients and centuries-old techniques.
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-8" />
        </div>

        <Tabs defaultValue="All" className="w-full" onValueChange={setActiveCategory}>
          <div className="flex justify-center mb-12 overflow-x-auto pb-4 hide-scrollbar">
            <TabsList className="bg-transparent h-auto p-0 flex space-x-2 md:space-x-8 border-b border-border/50 rounded-none w-max">
              {CATEGORIES.map(category => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:border-b-2 data-[state=active]:border-accent rounded-none px-4 py-4 text-base uppercase tracking-widest font-medium text-muted-foreground data-[state=active]:text-primary transition-all"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          <TabsContent value={activeCategory} className="mt-0 outline-none">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-12 gap-y-16">
              {filteredMenu.map((item) => (
                <div key={item.id} className="flex gap-6 group hover:bg-card p-4 -m-4 rounded-xl transition-colors">
                  <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 border-2 border-accent/20">
                    <img 
                      src={item.image} 
                      alt={item.name} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="flex flex-col flex-1 justify-center">
                    <div className="flex justify-between items-baseline mb-2">
                      <h3 className="font-serif text-2xl font-bold text-primary group-hover:text-accent transition-colors">
                        {item.name}
                      </h3>
                      <span className="font-serif text-xl font-semibold text-accent whitespace-nowrap pl-4">
                        ₹{item.price}
                      </span>
                    </div>
                    <div className="w-full border-b border-dashed border-border/60 mb-3" />
                    <p className="text-muted-foreground font-light text-sm md:text-base leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            {filteredMenu.length === 0 && (
              <div className="text-center py-20 text-muted-foreground">
                No items found in this category.
              </div>
            )}
          </TabsContent>
        </Tabs>
        
      </div>
    </div>
  );
}