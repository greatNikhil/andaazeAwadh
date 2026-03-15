import { useEffect, useState } from "react";
import { useLocation } from "wouter";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import kebabImg from "@/assets/images/kebab.png";
import biryaniImg from "@/assets/images/biryani.png";
import shahiTukdaImg from "@/assets/images/shahi-tukda.png";

const MOCK_MENU = [
  

  // ROTIS / BREADS
  { id: 1, name: "Tandoori Roti", description: "Whole wheat roti baked in a traditional clay tandoor.", price: 15, category: "Main Course", subCategory: "Rotis", image: "/images/menu/tandoori-roti.jpg" },
  { id: 2, name: "Tandoori Butter Roti", description: "Tandoori roti finished with melted butter.", price: 20, category: "Main Course", subCategory: "Rotis", image: "/images/menu/tandoori-butter-roti.jpg" },
  { id: 3, name: "Tava Roti", description: "Soft whole wheat roti cooked on flat iron griddle.", price: 12, category: "Main Course", subCategory: "Rotis", image: "/images/menu/tava-roti.jpg" },
  { id: 4, name: "Tava Butter Roti", description: "Griddle cooked roti topped with butter.", price: 15, category: "Main Course", subCategory: "Rotis", image: "/images/menu/tava-butter-roti.jpg" },
  { id: 5, name: "Butter Naan", description: "Soft naan bread brushed with butter.", price: 40, category: "Main Course", subCategory: "Rotis", image: "/images/menu/butter-naan.jpg" },
  { id: 6, name: "Garlic Naan", description: "Classic naan topped with fresh garlic and butter.", price: 60, category: "Main Course", subCategory: "Rotis", image: "/images/menu/garlic-naan.jpg" },
  { id: 7, name: "Missi Roti", description: "Traditional Punjabi roti made with gram flour and spices.", price: 40, category: "Main Course", subCategory: "Rotis", image: "/images/menu/missi-roti.jpg" },
  { id: 8, name: "Lachcha Paratha", description: "Layered flaky paratha cooked with butter.", price: 35, category: "Main Course", subCategory: "Rotis", image: "/images/menu/lachcha-paratha.jpg" },
  { id: 9, name: "Plain Naan", description: "Soft plain naan baked in tandoor.", price: 35, category: "Main Course", subCategory: "Rotis", image: "/images/menu/plain-naan.jpg" },
  { id: 10, name: "Aloo Kulcha", description: "Stuffed kulcha filled with spiced potatoes.", price: 45, category: "Main Course", subCategory: "Rotis", image: "/images/menu/aloo-kulcha.jpg" },
  { id: 11, name: "Paneer Kulcha", description: "Soft kulcha stuffed with seasoned paneer.", price: 70, category: "Main Course", subCategory: "Rotis", image: "/images/menu/paneer-kulcha.jpg" },

  // PARATHA
  { id: 12, name: "Aloo Paratha", description: "Paratha stuffed with spiced mashed potatoes.", price: 60, category: "Main Course", subCategory: "Paratha", image: "/images/menu/aloo-paratha.jpg" },
  { id: 13, name: "Aloo Pyaz Paratha", description: "Potato and onion stuffed paratha.", price: 70, category: "Main Course", subCategory: "Paratha", image: "/images/menu/aloo-pyaz-paratha.jpg" },
  { id: 14, name: "Paneer Paratha", description: "Paratha stuffed with flavorful paneer filling.", price: 90, category: "Main Course", subCategory: "Paratha", image: "/images/menu/paneer-paratha.jpg" },
  { id: 15, name: "Pyaz Paratha", description: "Stuffed paratha filled with seasoned onions.", price: 75, category: "Main Course", subCategory: "Paratha", image: "/images/menu/pyaz-paratha.jpg" },

  // RICE
  { id: 16, name: "Steam Rice", description: "Plain steamed basmati rice.", price: 80, category: "Main Course", subCategory: "Rice", image: "/images/menu/steam-rice.jpg" },
  { id: 17, name: "Jeera Rice", description: "Basmati rice tempered with cumin seeds.", price: 100, category: "Main Course", subCategory: "Rice", image: "/images/menu/jeera-rice.jpg" },
  { id: 18, name: "Mater Pulav", description: "Rice cooked with green peas and spices.", price: 110, category: "Main Course", subCategory: "Rice", image: "/images/menu/matar-pulav.jpg" },
  { id: 19, name: "Veg Pulav", description: "Fragrant rice cooked with seasonal vegetables.", price: 120, category: "Main Course", subCategory: "Rice", image: "/images/menu/veg-pulav.jpg" },
  { id: 20, name: "Lemon Rice", description: "Tangy South Indian style lemon flavored rice.", price: 110, category: "Main Course", subCategory: "Rice", image: "/images/menu/lemon-rice.jpg" },

  // BIRYANI
  { id: 21, name: "Veg Biryani", description: "Aromatic basmati rice cooked with vegetables and spices.", price: 150, category: "Main Course", subCategory: "Biryani", image: "/images/menu/veg-biryani.jpg" },
  { id: 22, name: "Soya Chaap Biryani", description: "Flavorful biryani cooked with marinated soya chaap.", price: 160, category: "Main Course", subCategory: "Biryani", image: "/images/menu/soya-chaap-biryani.jpg" },

  // DRY SABJI
  { id: 23, name: "Aloo Gobhi Masala", description: "Potatoes and cauliflower sautéed with spices.", price: 150, category: "Main Course", subCategory: "Dry Sabji", image: "/images/menu/aloo-gobhi.jpg" },
  { id: 24, name: "Aloo Mater Masala", description: "Potato and peas dry curry.", price: 150, category: "Main Course", subCategory: "Dry Sabji", image: "/images/menu/aloo-matar.jpg" },
  { id: 25, name: "Adaraki Aloo Gobhi", description: "Ginger flavored potato and cauliflower preparation.", price: 150, category: "Main Course", subCategory: "Dry Sabji", image: "/images/menu/adaraki-aloo-gobhi.jpg" },
  { id: 26, name: "Mix Veg", description: "Seasonal vegetables sautéed with aromatic spices.", price: 150, category: "Main Course", subCategory: "Dry Sabji", image: "/images/menu/mix-veg.jpg" },
  { id: 27, name: "Aloo Dhania", description: "Potatoes cooked with fresh coriander and spices.", price: 150, category: "Main Course", subCategory: "Dry Sabji", image: "/images/menu/aloo-dhania.jpg" },
  { id: 28, name: "Aloo Jeera", description: "Simple potato dish flavored with cumin.", price: 120, category: "Main Course", subCategory: "Dry Sabji", image: "/images/menu/aloo-jeera.jpg" },
  { id: 29, name: "Seasonal Veg", description: "Chef's selection of seasonal vegetables.", price: 150, category: "Main Course", subCategory: "Dry Sabji", image: "/images/menu/seasonal-veg.jpg" },
  { id: 30, name: "Zalfreji Sabji", description: "Spicy mixed vegetable preparation with capsicum.", price: 170, category: "Main Course", subCategory: "Dry Sabji", image: "/images/menu/zalfreji.jpg" },
  { id: 31, name: "Bhindi Do Pyaza", description: "Okra cooked with onions and spices.", price: 150, category: "Main Course", subCategory: "Dry Sabji", image: "/images/menu/bhindi-do-pyaza.jpg" },
  { id: 32, name: "Paneer Bhurji", description: "Scrambled paneer cooked with spices and onions.", price: 170, category: "Main Course", subCategory: "Dry Sabji", image: "/images/menu/paneer-bhurji.jpg" },

  // GRAVY SABJI
  { id: 33, name: "Kaju Curry Masala", description: "Rich cashew gravy curry.", price: 260, category: "Main Course", subCategory: "Gravy Sabji", image: "/images/menu/kaju-curry.jpg" },
  { id: 34, name: "Paneer Butter Masala", description: "Paneer cubes in creamy tomato butter gravy.", price: 210, category: "Main Course", subCategory: "Gravy Sabji", image: "/images/menu/paneer-butter-masala.jpg" },
  { id: 35, name: "Kadai Paneer", description: "Paneer cooked with capsicum in kadai masala.", price: 220, category: "Main Course", subCategory: "Gravy Sabji", image: "/images/menu/kadai-paneer.jpg" },
  { id: 36, name: "Mater Paneer", description: "Paneer cooked with green peas in mild gravy.", price: 180, category: "Main Course", subCategory: "Gravy Sabji", image: "/images/menu/matar-paneer.jpg" },
  { id: 37, name: "Handi Paneer", description: "Paneer cooked in traditional handi style gravy.", price: 200, category: "Main Course", subCategory: "Gravy Sabji", image: "/images/menu/handi-paneer.jpg" },
  { id: 38, name: "Palak Paneer", description: "Paneer cubes cooked in spinach gravy.", price: 230, category: "Main Course", subCategory: "Gravy Sabji", image: "/images/menu/palak-paneer.jpg" },

  // RAITA
  { id: 39, name: "Plain Dahi", description: "Fresh homemade yogurt.", price: 50, category: "Main Course", subCategory: "Raita", image: "/images/menu/plain-dahi.jpg" },
  { id: 40, name: "Veg Raita", description: "Yogurt mixed with chopped vegetables.", price: 70, category: "Main Course", subCategory: "Raita", image: "/images/menu/veg-raita.jpg" },
  { id: 41, name: "Boondi Raita", description: "Curd mixed with crispy boondi.", price: 70, category: "Main Course", subCategory: "Raita", image: "/images/menu/boondi-raita.jpg" },
  { id: 42, name: "Cucumber Raita", description: "Refreshing yogurt with grated cucumber.", price: 80, category: "Main Course", subCategory: "Raita", image: "/images/menu/cucumber-raita.jpg" },

  // SALAD / PAPAD
  { id: 43, name: "Onion Salad", description: "Fresh sliced onions served with lemon.", price: 40, category: "Main Course", subCategory: "Salad", image: "/images/menu/onion-salad.jpg" },
  { id: 44, name: "Green Salad", description: "Healthy mix of fresh vegetables.", price: 60, category: "Main Course", subCategory: "Salad", image: "/images/menu/green-salad.jpg" },
  { id: 45, name: "Peanut Chaat", description: "Tangy peanut snack with onions and spices.", price: 100, category: "Main Course", subCategory: "Salad", image: "/images/menu/peanut-chaat.jpg" },
  { id: 46, name: "Roasted Papad", description: "Crispy roasted papad (2 pcs).", price: 50, category: "Main Course", subCategory: "Papad", image: "/images/menu/roasted-papad.jpg" },
  { id: 47, name: "Fried Papad", description: "Golden fried papad (2 pcs).", price: 50, category: "Main Course", subCategory: "Papad", image: "/images/menu/fried-papad.jpg" },
  { id: 48, name: "Masala Papad", description: "Papad topped with onion tomato masala.", price: 70, category: "Main Course", subCategory: "Papad", image: "/images/menu/masala-papad.jpg" },

  // SWEETS
  { id: 49, name: "Gulab Jamun (2 pcs)", description: "Soft milk dumplings soaked in sugar syrup.", price: 50, category: "Main Course", subCategory: "Sweets", image: "/images/menu/gulab-jamun.jpg" },
  { id: 50, name: "Gajar Halwa", description: "Traditional carrot dessert cooked with milk.", price: 100, category: "Main Course", subCategory: "Sweets", image: "/images/menu/gajar-halwa.jpg" },
  { id: 51, name: "Moong Dal Halwa", description: "Rich halwa made from moong dal and ghee.", price: 100, category: "Main Course", subCategory: "Sweets", image: "/images/menu/moong-dal-halwa.jpg" },
  { id: 52, name: "Handi Kheer", description: "Creamy rice pudding served in handi.", price: 100, category: "Main Course", subCategory: "Sweets", image: "/images/menu/kheer.jpg" },

  // DRINKS
  { id: 53, name: "Lassi", description: "Traditional chilled yogurt drink.", price: 60, category: "Main Course", subCategory: "Drinks", image: "/images/menu/lassi.jpg" },
  { id: 54, name: "Masala Chach", description: "Spiced buttermilk drink.", price: 60, category: "Main Course", subCategory: "Drinks", image: "/images/menu/chaach.jpg" },
  { id: 55, name: "Nimbu Sikanji", description: "Refreshing lemon drink.", price: 50, category: "Main Course", subCategory: "Drinks", image: "/images/menu/nimbu-sikanji.jpg" },
  { id: 56, name: "Soda Sikanji", description: "Lemon soda cooler.", price: 60, category: "Main Course", subCategory: "Drinks", image: "/images/menu/soda-sikanji.jpg" },
  { id: 57, name: "Soft Drink", description: "Coke, Sprite or other soft drink.", price: 30, category: "Main Course", subCategory: "Drinks", image: "/images/menu/soft-drink.jpg" },
  { id: 58, name: "Mineral Water", description: "Packaged drinking water.", price: "MRP", category: "Main Course", subCategory: "Drinks", image: "/images/menu/water.jpg" },
  { id: 59, name: "Coolberg Fruit Beer", description: "Non-alcoholic flavored fruit beer.", price: "MRP", category: "Main Course", subCategory: "Drinks", image: "/images/menu/coolberg.jpg" },

  // THAALI
  { id: 60, name: "Regular Thali", description: "Dal fry, dry sabji, rice, 2 tandoori roti, achar, salad and papad.", price: 149, category: "Main Course", subCategory: "Thaali", image: "/images/menu/regular-thali.jpg" },
  { id: 61, name: "Paneer Thali", description: "Paneer curry, dal, dry sabji, matar pulao, baby naan, raita, salad, papad and sweet.", price: 180, category: "Main Course", subCategory: "Thaali", image: "/images/menu/paneer-thali.jpg" },
  { id: 62, name: "Andaaz-E-Awadh Special Thali", description: "Kadai paneer, dal makhani, dry sabji, jeera rice, baby naan, lachcha paratha, sweet, salad and papad.", price: 220, category: "Main Course", subCategory: "Thaali", image: "/images/menu/special-thali.jpg" },
  
  // Breakfast
  {
    id: 63,
    name: "Bread Pakoda",
    description: "Crispy fried bread stuffed with spicy potato filling.",
    price: 45,
    image: "/images/snacks/bread_pakoda.webp",
    category: "Snacks",
    subCategory: "Breakfast"
  },
  {
    id: 64,
    name: "Paneer Pakoda (10 pcs)",
    description: "Delicious paneer fritters fried to golden perfection.",
    price: 160,
    image: "/images/snacks/paneer_pakoda.webp",
    category: "Snacks",
    subCategory: "Breakfast"
  },
  {
    id: 65,
    name: "Mix Veg Pakoda",
    description: "Assorted vegetable fritters with crispy coating.",
    price: 130,
    image: "/images/snacks/mix_veg_pakoda.webp",
    category: "Snacks",
    subCategory: "Breakfast"
  },
  {
    id: 66,
    name: "Pyaz Pakoda",
    description: "Onion fritters with a crunchy exterior and soft center.",
    price: 100,
    image: "/images/snacks/pyaz_pakoda.webp",
    category: "Snacks",
    subCategory: "Breakfast"
  },
  {
    id: 67,
    name: "Bread Toast",
    description: "Simple toasted bread served with butter or jam.",
    price: 40,
    image: "/images/snacks/bread_toast.webp",
    category: "Snacks",
    subCategory: "Breakfast"
  },
  {
    id: 68,
    name: "Bread Jam",
    description: "Toasted bread served with sweet fruit jam.",
    price: 40,
    image: "/images/snacks/bread_jam.webp",
    category: "Snacks",
    subCategory: "Breakfast"
  },
  {
    id: 69,
    name: "Bun Makhan",
    description: "Soft bun served with creamy butter.",
    price: 50,
    image: "/images/snacks/bun_makhan.webp",
    category: "Snacks",
    subCategory: "Breakfast"
  },
  {
    id: 70,
    name: "Poha",
    description: "Flattened rice cooked with spices, peanuts, and herbs.",
    price: 60,
    image: "/images/snacks/poha.webp",
    category: "Snacks",
    subCategory: "Breakfast"
  },
  {
    id: 71,
    name: "Puri Sabji",
    description: "Deep fried bread served with spicy vegetable curry.",
    price: 80,
    image: "/images/snacks/puri_sabji.webp",
    category: "Snacks",
    subCategory: "Breakfast"
  },
  {
    id: 72,
    name: "Pav Bhaji",
    description: "Spiced mashed vegetables served with buttered pav.",
    price: 100,
    image: "/images/snacks/pav_bhaji.webp",
    category: "Snacks",
    subCategory: "Breakfast"
  },
  {
    id: 73,
    name: "Misal Pav",
    description: "Spicy curry with sprouts served with pav.",
    price: 110,
    image: "/images/snacks/misal_pav.webp",
    category: "Snacks",
    subCategory: "Breakfast"
  },
  {
    id: 74,
    category: "Snacks",
    subCategory: "Breakfast",
    name: "Chhole Bhature",
    description: "Spicy chickpea curry served with deep fried fluffy bhature.",
    price: 120,
    image: "/images/snacks/chole-bhature.jpg"
  },
  {
    id: 75,
    category: "Snacks",
    subCategory: "Breakfast",
    name: "Chola Rice",
    description: "Flavorful chole served with steamed rice.",
    price: 110,
    image: "/images/snacks/chola-rice.jpg"
  },

  // FINGER CHIPS
  {
    id: 76,
    category: "Snacks",
    subCategory: "Finger Chips",
    name: "Classic Fries",
    description: "Crispy golden french fries lightly salted.",
    price: 80,
    image: "/images/snacks/classic-fries.jpg"
  },
  {
    id: 77,
    category: "Snacks",
    subCategory: "Finger Chips",
    name: "Masala Fries",
    description: "Crispy fries tossed with special Indian masala.",
    price: 90,
    image: "/images/snacks/masala-fries.jpg"
  },
  {
    id: 78,
    category: "Snacks",
    subCategory: "Finger Chips",
    name: "Peri Peri Fries",
    description: "French fries coated with spicy peri peri seasoning.",
    price: 100,
    image: "/images/snacks/peri-peri-fries.jpg"
  },

  // VADA PAV
  {
    id: 79,
    category: "Snacks",
    subCategory: "Vada Pav",
    name: "Classic Vada Pav",
    description: "Mumbai style potato fritter served inside a bun with chutneys.",
    price: 45,
    image: "/images/snacks/classic-vada-pav.jpg"
  },
  {
    id: 80,
    category: "Snacks",
    subCategory: "Vada Pav",
    name: "Schezwan Vada Pav",
    description: "Classic vada pav with spicy schezwan sauce.",
    price: 50,
    image: "/images/snacks/schezwan-vada-pav.jpg"
  },
  {
    id: 81,
    category: "Snacks",
    subCategory: "Vada Pav",
    name: "Ulta Pulta Vada Pav",
    description: "Special vada pav with unique layered chutneys and masala.",
    price: 55,
    image: "/images/snacks/ulta-pulta-vada-pav.jpg"
  },
  {
    id: 82,
    category: "Snacks",
    subCategory: "Vada Pav",
    name: "Cheese Vada Pav",
    description: "Crispy vada pav topped with melted cheese.",
    price: 55,
    image: "/images/snacks/cheese-vada-pav.jpg"
  },

  // PASTA
  {
    id: 83,
    category: "Snacks",
    subCategory: "Pasta",
    name: "White Sauce Pasta",
    description: "Creamy white sauce pasta with herbs and vegetables.",
    price: 150,
    image: "/images/snacks/white-sauce-pasta.jpg"
  },
  {
    id: 84,
    category: "Snacks",
    subCategory: "Pasta",
    name: "Red Sauce Pasta",
    description: "Pasta cooked in tangy tomato based red sauce.",
    price: 160,
    image: "/images/snacks/red-sauce-pasta.jpg"
  },
  {
    id: 85,
    category: "Snacks",
    subCategory: "Pasta",
    name: "Mix Sauce Pasta",
    description: "Delicious pasta with a blend of white and red sauce.",
    price: 170,
    image: "/images/snacks/mix-sauce-pasta.jpg"
  },
  // SANDWICH
{
  id: 86,
  category: "Snacks",
  subCategory: "Sandwich",
  name: "Veg Sandwich",
  description: "Fresh vegetable sandwich with butter, chutney, and seasonal veggies.",
  price: 80,
  image: "/images/snacks/veg-sandwich.jpg"
},
{
  id: 87,
  category: "Snacks",
  subCategory: "Sandwich",
  name: "Bombay Sandwich",
  description: "Mumbai style sandwich layered with chutney, potato, vegetables, and spices.",
  price: 80,
  image: "/images/snacks/bombay-sandwich.jpg"
},
{
  id: 88,
  category: "Snacks",
  subCategory: "Sandwich",
  name: "Cheese Plain Sandwich",
  description: "Simple grilled sandwich with melted cheese and butter.",
  price: 120,
  image: "/images/snacks/cheese-plain-sandwich.jpg"
},
{
  id: 89,
  category: "Snacks",
  subCategory: "Sandwich",
  name: "Cheese Veg Sandwich",
  description: "Vegetable sandwich loaded with melted cheese.",
  price: 140,
  image: "/images/snacks/cheese-veg-sandwich.jpg"
},
{
  id: 90,
  category: "Snacks",
  subCategory: "Sandwich",
  name: "Schezwan Cheese Sandwich",
  description: "Grilled sandwich with spicy schezwan sauce and melted cheese.",
  price: 130,
  image: "/images/snacks/schezwan-cheese-sandwich.jpg"
},
{
  id: 91,
  category: "Snacks",
  subCategory: "Sandwich",
  name: "Paneer Masala Sandwich",
  description: "Sandwich stuffed with spicy paneer masala filling.",
  price: 150,
  image: "/images/snacks/paneer-masala-sandwich.jpg"
},
{
  id: 92,
  category: "Snacks",
  subCategory: "Sandwich",
  name: "Paneer Corn Sandwich",
  description: "Creamy paneer and sweet corn sandwich with spices.",
  price: 150,
  image: "/images/snacks/paneer-corn-sandwich.jpg"
},
{
  id: 93,
  category: "Snacks",
  subCategory: "Sandwich",
  name: "Cheese Corn Sandwich",
  description: "Sweet corn mixed with creamy melted cheese inside grilled bread.",
  price: 120,
  image: "/images/snacks/cheese-corn-sandwich.jpg"
},
{
  id: 94,
  category: "Snacks",
  subCategory: "Sandwich",
  name: "Caramelized Onion Sandwich",
  description: "Grilled sandwich with sweet caramelized onions and cheese.",
  price: 130,
  image: "/images/snacks/caramelized-onion-sandwich.jpg"
},
// BURGER
{
  id: 95,
  category: "Snacks",
  subCategory: "Burger",
  name: "Veg Burger",
  description: "Crispy vegetable patty burger with lettuce and sauces.",
  price: 70,
  image: "/images/snacks/veg-burger.jpg"
},
{
  id: 96,
  category: "Snacks",
  subCategory: "Burger",
  name: "Cheese Veg Burger",
  description: "Veg burger topped with melted cheese slice.",
  price: 80,
  image: "/images/snacks/cheese-veg-burger.jpg"
},
{
  id: 97,
  category: "Snacks",
  subCategory: "Burger",
  name: "Aloo Tikki Burger",
  description: "Burger filled with crispy spiced potato tikki.",
  price: 60,
  image: "/images/snacks/aloo-tikki-burger.jpg"
},
{
  id: 98,
  category: "Snacks",
  subCategory: "Burger",
  name: "Paneer Burger",
  description: "Burger with grilled paneer patty and fresh vegetables.",
  price: 100,
  image: "/images/snacks/paneer-burger.jpg"
},
{
  id: 99,
  category: "Snacks",
  subCategory: "Burger",
  name: "Cheese Paneer Burger",
  description: "Paneer burger layered with melted cheese and sauces.",
  price: 110,
  image: "/images/snacks/cheese-paneer-burger.jpg"
},

// MAGGI
{
  id: 100,
  category: "Snacks",
  subCategory: "Maggi",
  name: "Plain Maggi",
  description: "Classic Maggi noodles cooked with simple seasoning.",
  price: 50,
  image: "/images/snacks/plain-maggi.jpg"
},
{
  id: 101,
  category: "Snacks",
  subCategory: "Maggi",
  name: "Veg Masala Maggi",
  description: "Maggi noodles cooked with mixed vegetables and masala.",
  price: 70,
  image: "/images/snacks/veg-masala-maggi.jpg"
},
{
  id: 102,
  category: "Snacks",
  subCategory: "Maggi",
  name: "Schezwan Maggi",
  description: "Spicy Maggi noodles tossed in schezwan sauce.",
  price: 90,
  image: "/images/snacks/schezwan-maggi.jpg"
},
{
  id: 103,
  category: "Snacks",
  subCategory: "Maggi",
  name: "Cheese Maggi",
  description: "Creamy Maggi noodles topped with melted cheese.",
  price: 100,
  image: "/images/snacks/cheese-maggi.jpg"
},
{
  id: 104,
  category: "Snacks",
  subCategory: "Maggi",
  name: "Paneer Maggi",
  description: "Maggi noodles with soft paneer cubes and spices.",
  price: 100,
  image: "/images/snacks/paneer-maggi.jpg"
},

// MOCKTAILS
{
  id: 105,
  category: "Snacks",
  subCategory: "Mocktails",
  name: "Mojito Mint",
  description: "Refreshing mint mojito with lime and soda.",
  price: 100,
  image: "/images/snacks/mojito-mint.jpg"
},
{
  id: 106,
  category: "Snacks",
  subCategory: "Mocktails",
  name: "Orange Mint",
  description: "Fresh orange mocktail blended with mint flavor.",
  price: 100,
  image: "/images/snacks/orange-mint.jpg"
},
{
  id: 107,
  category: "Snacks",
  subCategory: "Mocktails",
  name: "Mango Passion",
  description: "Sweet mango mocktail with tropical flavors.",
  price: 100,
  image: "/images/snacks/mango-passion.jpg"
},
{
  id: 108,
  category: "Snacks",
  subCategory: "Mocktails",
  name: "Blue Curacao",
  description: "Refreshing blue curacao flavored mocktail.",
  price: 100,
  image: "/images/snacks/blue-curacao.jpg"
},
{
  id: 109,
  category: "Snacks",
  subCategory: "Mocktails",
  name: "Lemon Iced Tea",
  description: "Chilled iced tea with fresh lemon flavor.",
  price: 100,
  image: "/images/snacks/lemon-iced-tea.jpg"
},
{
  id: 110,
  category: "Snacks",
  subCategory: "Mocktails",
  name: "Watermelon",
  description: "Refreshing watermelon based summer mocktail.",
  price: 100,
  image: "/images/snacks/watermelon-mocktail.jpg"
},
// STARTER (CHINESE)

{
  id: 111,
  category: "Starter",
  subCategory: "Chinese Starter",
  name: "Paneer 65",
  description: "Crispy deep fried paneer tossed with spicy 65 masala.",
  price: 200,
  image: "/images/starter/paneer-65.jpg"
},
{
  id: 112,
  category: "Starter",
  subCategory: "Chinese Starter",
  name: "Crispy Corn",
  description: "Golden fried sweet corn tossed with spices.",
  price: 150,
  image: "/images/starter/crispy-corn.jpg"
},
{
  id: 113,
  category: "Starter",
  subCategory: "Chinese Starter",
  name: "Chilli Paneer Dry",
  description: "Crispy paneer tossed with chilli sauce and vegetables.",
  price: 180,
  image: "/images/starter/chilli-paneer-dry.jpg"
},
{
  id: 114,
  category: "Starter",
  subCategory: "Chinese Starter",
  name: "Chilli Paneer Gravy",
  description: "Paneer cubes cooked in spicy chilli gravy with vegetables.",
  price: 170,
  image: "/images/starter/chilli-paneer-gravy.jpg"
},
{
  id: 115,
  category: "Starter",
  subCategory: "Chinese Starter",
  name: "Mushroom Chilli Dry",
  description: "Crispy mushrooms tossed with chilli sauce and spices.",
  price: 180,
  image: "/images/starter/mushroom-chilli-dry.jpg"
},
{
  id: 116,
  category: "Starter",
  subCategory: "Chinese Starter",
  name: "Mushroom Chilli Gravy",
  description: "Mushrooms cooked in spicy chilli gravy.",
  price: 170,
  image: "/images/starter/mushroom-chilli-gravy.jpg"
},
{
  id: 117,
  category: "Starter",
  subCategory: "Chinese Starter",
  name: "Veg Manchurian Dry",
  description: "Vegetable balls tossed in spicy Manchurian sauce.",
  price: 180,
  image: "/images/starter/veg-manchurian-dry.jpg"
},
{
  id: 118,
  category: "Starter",
  subCategory: "Chinese Starter",
  name: "Veg Manchurian Gravy",
  description: "Veg Manchurian served in flavorful Chinese gravy.",
  price: 170,
  image: "/images/starter/veg-manchurian-gravy.jpg"
},
{
  id: 119,
  category: "Starter",
  subCategory: "Chinese Starter",
  name: "Chilli Potato",
  description: "Crispy potato fingers tossed in spicy chilli sauce.",
  price: 110,
  image: "/images/starter/chilli-potato.jpg"
},
{
  id: 120,
  category: "Starter",
  subCategory: "Chinese Starter",
  name: "Honey Chilli Potato",
  description: "Crispy potatoes glazed with honey chilli sauce.",
  price: 140,
  image: "/images/starter/honey-chilli-potato.jpg"
},
// SPECIAL STARTER

{
  id: 121,
  category: "Starter",
  subCategory: "Special Starter",
  name: "Tandoori Paneer Tikka",
  description: "Paneer cubes marinated in spices and grilled in tandoor.",
  price: 200,
  image: "/images/starter/tandoori-paneer-tikka.jpg"
},
{
  id: 122,
  category: "Starter",
  subCategory: "Special Starter",
  name: "Malai Paneer Tikka",
  description: "Creamy marinated paneer grilled with mild spices.",
  price: 220,
  image: "/images/starter/malai-paneer-tikka.jpg"
},
{
  id: 123,
  category: "Starter",
  subCategory: "Special Starter",
  name: "Paneer Achari Tikka",
  description: "Paneer marinated with tangy pickle spices and grilled.",
  price: 220,
  image: "/images/starter/paneer-achari-tikka.jpg"
},
{
  id: 124,
  category: "Starter",
  subCategory: "Special Starter",
  name: "Tandoori Paneer Afghani Tikka",
  description: "Paneer tikka prepared in rich Afghani style marinade.",
  price: 220,
  image: "/images/starter/paneer-afghani-tikka.jpg"
},
{
  id: 125,
  category: "Starter",
  subCategory: "Special Starter",
  name: "Achari Paneer Tikka",
  description: "Grilled paneer with flavorful achari spices.",
  price: 220,
  image: "/images/starter/achari-paneer-tikka.jpg"
},
{
  id: 126,
  category: "Starter",
  subCategory: "Special Starter",
  name: "Hariyali Paneer Tikka",
  description: "Paneer marinated with green herbs and grilled.",
  price: 220,
  image: "/images/starter/hariyali-paneer-tikka.jpg"
},
{
  id: 127,
  category: "Starter",
  subCategory: "Special Starter",
  name: "Mushroom Paneer Tikka",
  description: "Grilled paneer and mushroom in tandoori marinade.",
  price: 200,
  image: "/images/starter/mushroom-paneer-tikka.jpg"
},
{
  id: 128,
  category: "Starter",
  subCategory: "Special Starter",
  name: "Achari Mushroom Tikka",
  description: "Mushrooms marinated with tangy achari spices and grilled.",
  price: 220,
  image: "/images/starter/achari-mushroom-tikka.jpg"
},
{
  id: 129,
  category: "Starter",
  subCategory: "Special Starter",
  name: "Tandoori Soya Chaap",
  description: "Soya chaap marinated in tandoori spices and grilled.",
  price: 200,
  image: "/images/starter/tandoori-soya-chaap.jpg"
},
{
  id: 130,
  category: "Starter",
  subCategory: "Special Starter",
  name: "Hariyali Soya Chaap",
  description: "Soya chaap marinated with green herb spices.",
  price: 200,
  image: "/images/starter/hariyali-soya-chaap.jpg"
},
{
  id: 131,
  category: "Starter",
  subCategory: "Special Starter",
  name: "Dahi Ke Sholey",
  description: "Crispy stuffed rolls filled with spiced yogurt mixture.",
  price: 180,
  image: "/images/starter/dahi-ke-sholey.jpg"
},
{
  id: 132,
  category: "Starter",
  subCategory: "Special Starter",
  name: "Hara Bhara Kebab",
  description: "Healthy spinach and vegetable kebabs served crispy.",
  price: 150,
  image: "/images/starter/hara-bhara-kebab.jpg"
},

// NOODLE / RICE

{
  id: 133,
  category: "Starter",
  subCategory: "Noodle / Rice",
  name: "Veg Noodle",
  description: "Stir fried noodles with fresh vegetables.",
  price: 100,
  image: "/images/starter/veg-noodle.jpg"
},
{
  id: 134,
  category: "Starter",
  subCategory: "Noodle / Rice",
  name: "Schezwan Noodle",
  description: "Spicy schezwan flavored noodles with vegetables.",
  price: 120,
  image: "/images/starter/schezwan-noodle.jpg"
},
{
  id: 135,
  category: "Starter",
  subCategory: "Noodle / Rice",
  name: "Paneer Noodle",
  description: "Stir fried noodles with paneer cubes and vegetables.",
  price: 140,
  image: "/images/starter/paneer-noodle.jpg"
},
{
  id: 136,
  category: "Starter",
  subCategory: "Noodle / Rice",
  name: "Hot Garlic Noodle",
  description: "Spicy noodles tossed in garlic sauce.",
  price: 150,
  image: "/images/starter/hot-garlic-noodle.jpg"
},
{
  id: 137,
  category: "Starter",
  subCategory: "Noodle / Rice",
  name: "Veg Fried Rice",
  description: "Fried rice with mixed vegetables and Chinese seasoning.",
  price: 110,
  image: "/images/starter/veg-fried-rice.jpg"
},
{
  id: 138,
  category: "Starter",
  subCategory: "Noodle / Rice",
  name: "Paneer Fried Rice",
  description: "Fried rice cooked with paneer cubes and vegetables.",
  price: 150,
  image: "/images/starter/paneer-fried-rice.jpg"
},
{
  id: 139,
  category: "Starter",
  subCategory: "Noodle / Rice",
  name: "Schezwan Fried Rice",
  description: "Spicy fried rice cooked with schezwan sauce.",
  price: 120,
  image: "/images/starter/schezwan-fried-rice.jpg"
},

// SOUP

{
  id: 140,
  category: "Starter",
  subCategory: "Soup",
  name: "Veg Soup",
  description: "Light vegetable soup with mild seasoning.",
  price: 60,
  image: "/images/starter/veg-soup.jpg"
},
{
  id: 141,
  category: "Starter",
  subCategory: "Soup",
  name: "Veg Manchurian Soup",
  description: "Soup with Manchurian balls in flavorful broth.",
  price: 70,
  image: "/images/starter/veg-manchurian-soup.jpg"
},
{
  id: 142,
  category: "Starter",
  subCategory: "Soup",
  name: "Hot n Sour Soup",
  description: "Spicy and tangy Chinese style soup.",
  price: 60,
  image: "/images/starter/hot-n-sour-soup.jpg"
},
{
  id: 143,
  category: "Starter",
  subCategory: "Soup",
  name: "Sweet Corn Soup",
  description: "Creamy sweet corn soup with vegetables.",
  price: 65,
  image: "/images/starter/sweet-corn-soup.jpg"
},
{
  id: 144,
  category: "Starter",
  subCategory: "Soup",
  name: "Lemon Coriander Soup",
  description: "Refreshing soup flavored with lemon and coriander.",
  price: 60,
  image: "/images/starter/lemon-coriander-soup.jpg"
},


  // TEA & COFFEE

{
  id: 145,
  category: "Beverages",
  subCategory: "Tea & Coffee",
  name: "Kulhad Tea",
  description: "Traditional Indian tea served in a clay kulhad.",
  price: 25,
  image: "/images/beverages/kulhad-tea.jpg"
},
{
  id: 146,
  category: "Beverages",
  subCategory: "Tea & Coffee",
  name: "Masala Tea (Half)",
  description: "Spiced Indian tea with aromatic masala.",
  price: 20,
  image: "/images/beverages/masala-tea.jpg"
},
{
  id: 147,
  category: "Beverages",
  subCategory: "Tea & Coffee",
  name: "Masala Tea (Full)",
  description: "Strong masala tea with milk and spices.",
  price: 30,
  image: "/images/beverages/masala-tea.jpg"
},
{
  id: 148,
  category: "Beverages",
  subCategory: "Tea & Coffee",
  name: "Ginger Tea (Half)",
  description: "Refreshing tea brewed with fresh ginger.",
  price: 25,
  image: "/images/beverages/ginger-tea.jpg"
},
{
  id: 149,
  category: "Beverages",
  subCategory: "Tea & Coffee",
  name: "Ginger Tea (Full)",
  description: "Strong ginger flavored tea with milk.",
  price: 40,
  image: "/images/beverages/ginger-tea.jpg"
},
{
  id: 150,
  category: "Beverages",
  subCategory: "Tea & Coffee",
  name: "Lemon Tea (Half)",
  description: "Light tea with fresh lemon flavor.",
  price: 25,
  image: "/images/beverages/lemon-tea.jpg"
},
{
  id: 151,
  category: "Beverages",
  subCategory: "Tea & Coffee",
  name: "Lemon Tea (Full)",
  description: "Refreshing lemon flavored tea.",
  price: 40,
  image: "/images/beverages/lemon-tea.jpg"
},
{
  id: 152,
  category: "Beverages",
  subCategory: "Tea & Coffee",
  name: "Honey Lemon Ginger Tea",
  description: "Healthy tea with honey, lemon and ginger.",
  price: 40,
  image: "/images/beverages/honey-lemon-ginger-tea.jpg"
},
{
  id: 153,
  category: "Beverages",
  subCategory: "Tea & Coffee",
  name: "Green Tea",
  description: "Light and healthy green tea.",
  price: 40,
  image: "/images/beverages/green-tea.jpg"
},
{
  id: 154,
  category: "Beverages",
  subCategory: "Tea & Coffee",
  name: "Black Tea (Half)",
  description: "Classic strong black tea.",
  price: 25,
  image: "/images/beverages/black-tea.jpg"
},
{
  id: 155,
  category: "Beverages",
  subCategory: "Tea & Coffee",
  name: "Black Tea (Full)",
  description: "Full cup of strong black tea.",
  price: 30,
  image: "/images/beverages/black-tea.jpg"
},
{
  id: 156,
  category: "Beverages",
  subCategory: "Tea & Coffee",
  name: "Black Coffee",
  description: "Strong brewed black coffee.",
  price: 50,
  image: "/images/beverages/black-coffee.jpg"
},
{
  id: 157,
  category: "Beverages",
  subCategory: "Tea & Coffee",
  name: "Regular Hot Coffee",
  description: "Classic hot milk coffee.",
  price: 60,
  image: "/images/beverages/hot-coffee.jpg"
},
{
  id: 158,
  category: "Beverages",
  subCategory: "Tea & Coffee",
  name: "Chocolate Tea",
  description: "Unique tea infused with chocolate flavor.",
  price: 60,
  image: "/images/beverages/chocolate-tea.jpg"
},
{
  id: 159,
  category: "Beverages",
  subCategory: "Tea & Coffee",
  name: "Kesar Tea",
  description: "Premium saffron infused tea.",
  price: 40,
  image: "/images/beverages/kesar-tea.jpg"
},
{
  id: 160,
  category: "Beverages",
  subCategory: "Tea & Coffee",
  name: "Rose Tea",
  description: "Aromatic tea infused with rose flavor.",
  price: 40,
  image: "/images/beverages/rose-tea.jpg"
},
{
  id: 161,
  category: "Beverages",
  subCategory: "Tea & Coffee",
  name: "Paan Tea",
  description: "Special tea with paan flavor.",
  price: 40,
  image: "/images/beverages/paan-tea.jpg"
},
{
  id: 162,
  category: "Beverages",
  subCategory: "Tea & Coffee",
  name: "Irani Tea",
  description: "Rich creamy Irani style tea.",
  price: 40,
  image: "/images/beverages/irani-tea.jpg"
},
{
  id: 163,
  category: "Beverages",
  subCategory: "Tea & Coffee",
  name: "Detox Tea",
  description: "Herbal detox tea with healthy ingredients.",
  price: 40,
  image: "/images/beverages/detox-tea.jpg"
},
{
  id: 164,
  category: "Beverages",
  subCategory: "Tea & Coffee",
  name: "Kashmiri Kahwa",
  description: "Traditional Kashmiri green tea with saffron and spices.",
  price: 40,
  image: "/images/beverages/kashmiri-kahwa.jpg"
},

// SHAKES

{
  id: 165,
  category: "Beverages",
  subCategory: "Shakes",
  name: "Cold Coffee",
  description: "Chilled coffee blended with milk and ice.",
  price: 100,
  image: "/images/beverages/cold-coffee.jpg"
},
{
  id: 166,
  category: "Beverages",
  subCategory: "Shakes",
  name: "Cold Coffee with Ice Cream",
  description: "Cold coffee topped with creamy ice cream.",
  price: 130,
  image: "/images/beverages/cold-coffee-icecream.jpg"
},
{
  id: 167,
  category: "Beverages",
  subCategory: "Shakes",
  name: "Black Currant Shake",
  description: "Sweet and tangy black currant flavored milkshake.",
  price: 110,
  image: "/images/beverages/black-currant-shake.jpg"
},
{
  id: 168,
  category: "Beverages",
  subCategory: "Shakes",
  name: "Blue Berry Shake",
  description: "Creamy blueberry flavored milkshake.",
  price: 120,
  image: "/images/beverages/blueberry-shake.jpg"
},
{
  id: 169,
  category: "Beverages",
  subCategory: "Shakes",
  name: "Chocolate Shake",
  description: "Classic chocolate milkshake.",
  price: 120,
  image: "/images/beverages/chocolate-shake.jpg"
},
{
  id: 170,
  category: "Beverages",
  subCategory: "Shakes",
  name: "Strawberry Shake",
  description: "Sweet strawberry flavored milkshake.",
  price: 100,
  image: "/images/beverages/strawberry-shake.jpg"
},
{
  id: 171,
  category: "Beverages",
  subCategory: "Shakes",
  name: "Pineapple Shake",
  description: "Refreshing pineapple flavored milkshake.",
  price: 100,
  image: "/images/beverages/pineapple-shake.jpg"
},
{
  id: 172,
  category: "Beverages",
  subCategory: "Shakes",
  name: "Orange Shake",
  description: "Creamy orange flavored shake.",
  price: 100,
  image: "/images/beverages/orange-shake.jpg"
},
{
  id: 173,
  category: "Beverages",
  subCategory: "Shakes",
  name: "Mango Shake",
  description: "Classic thick mango milkshake.",
  price: 100,
  image: "/images/beverages/mango-shake.jpg"
},
{
  id: 174,
  category: "Beverages",
  subCategory: "Shakes",
  name: "Kiwi Shake",
  description: "Smooth and tangy kiwi flavored shake.",
  price: 100,
  image: "/images/beverages/kiwi-shake.jpg"
},
{
  id: 175,
  category: "Beverages",
  subCategory: "Shakes",
  name: "Kitkat Shake",
  description: "Chocolate shake blended with Kitkat.",
  price: 120,
  image: "/images/beverages/kitkat-shake.jpg"
},
{
  id: 176,
  category: "Beverages",
  subCategory: "Shakes",
  name: "Vanilla Oreo Shake",
  description: "Creamy vanilla shake blended with Oreo cookies.",
  price: 130,
  image: "/images/beverages/oreo-shake.jpg"
},

// FRESH JUICE

{
  id: 177,
  category: "Beverages",
  subCategory: "Fresh Juice",
  name: "Watermelon Juice",
  description: "Freshly squeezed watermelon juice.",
  price: 60,
  image: "/images/beverages/watermelon-juice.jpg"
},
{
  id: 178,
  category: "Beverages",
  subCategory: "Fresh Juice",
  name: "Orange Juice",
  description: "Fresh orange juice full of vitamin C.",
  price: 90,
  image: "/images/beverages/orange-juice.jpg"
},
{
  id: 179,
  category: "Beverages",
  subCategory: "Fresh Juice",
  name: "Mosambi Juice",
  description: "Fresh sweet lime juice.",
  price: 90,
  image: "/images/beverages/mosambi-juice.jpg"
},
{
  id: 180,
  category: "Beverages",
  subCategory: "Fresh Juice",
  name: "Pineapple Juice",
  description: "Fresh pineapple juice served chilled.",
  price: 90,
  image: "/images/beverages/pineapple-juice.jpg"
},
{
  id: 185,
  category: "Buffets",
  subCategory: "Special Buffet",
  name: "Andaaz-E-Awadh Special Buffet",
  description: "Special Awadhi style buffet meal served with welcome drink, starters, main course, and desserts.",
  price: 449,
  includes: {
    welcomeDrink: [
      "Cold Drink",
      "Soup"
    ],
    starters: [
      "Chilli Paneer Dry",
      "Veg Manchurian Dry",
      "Hakka Noodles",
      "Pasta",
      "Chilli Potato"
    ],
    mainCourse: [
      "Paneer Veg",
      "Dry Veg",
      "Jeera Rice",
      "Pulao",
      "Dal Fry / Dal Tadka",
      "Tandoori Roti",
      "Lachha Paratha",
      "Naan",
      "Salad",
      "Raita",
      "Papad"
    ],
    sweets: [
      "Gulab Jamun",
      "Moong Dal Halwa",
      "Ice Cream"
    ]
  },
  notes: "Serving only 1 time. GST extra.",
  image: "/images/buffet/andaaz-awadh-special-buffet.jpg"
},

];



const CATEGORIES = ["ALL", "Snacks", "Starter", "Main Course", "Beverages", "Buffets" ];
//JAy ho
export default function Menu() {

  const [activeCategory, setActiveCategory] = useState("ALL")
   const [location] = useLocation();

   useEffect(() => {
    setActiveCategory("ALL");
  }, [location]);

  const filteredMenu =
    activeCategory === "ALL"
      ? MOCK_MENU
      : MOCK_MENU.filter((item) => item.category === activeCategory)

  // GROUP ITEMS BY SUBCATEGORY
  const groupedMenu = filteredMenu.reduce((acc, item) => {

    const key = item.subCategory || "Others"

    if (!acc[key]) {
      acc[key] = []
    }

    acc[key].push(item)

    return acc

  }, {} as Record<string, typeof filteredMenu>)

  return (

    <div className="min-h-screen bg-background pt-8 pb-24">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* PAGE TITLE */}

        <div className="text-center mb-16 space-y-6">

          <h1 className="font-serif text-5xl md:text-7xl text-primary font-bold tracking-tight">
            Our <span className="text-accent italic">Royal</span> Dastarkhwan
          </h1>

          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light">
            A curated selection of authentic Awadhi recipes, prepared with the
            finest ingredients and centuries-old techniques.
          </p>

          <div className="w-24 h-1 bg-accent mx-auto mt-8" />

        </div>

        {/* CATEGORY TABS */}

        <Tabs
          defaultValue="ALL"
          value={activeCategory}
          className="w-full"
          onValueChange={setActiveCategory}
        >

          <div className="flex justify-center mb-12 overflow-x-auto pb-4 hide-scrollbar">

            <TabsList className="bg-transparent h-auto p-0 flex space-x-2 md:space-x-8 border-b border-border/50 rounded-none w-max">

              {CATEGORIES.map((category) => (

                <TabsTrigger
                  key={category}
                  value={category}
                  className="data-[state=active]:bg-transparent
                  data-[state=active]:shadow-none
                  data-[state=active]:border-b-2
                  data-[state=active]:border-accent
                  rounded-none px-4 py-4 text-base uppercase tracking-widest
                  font-medium text-muted-foreground
                  data-[state=active]:text-primary transition-all"
                >

                  {category}

                </TabsTrigger>

              ))}

            </TabsList>

          </div>

          <TabsContent value={activeCategory} className="mt-0 outline-none">

            {/* SUBCATEGORY SECTIONS */}

            {Object.entries(groupedMenu).map(([subCategory, items]) => (

              <div key={subCategory} className="mb-20">

                {/* STICKY SUBCATEGORY HEADING */}

                <div className="sticky top-0 bg-background z-10 py-4">

                  <h2 className="font-serif text-3xl font-bold text-primary border-b border-border pb-3">

                    {subCategory}

                  </h2>

                </div>

                {/* MENU ITEMS */}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 mt-10">

                  {items.map((item) => (

                    <div
                      key={item.id}
                      className="flex gap-6 group hover:bg-card p-4 -m-4 rounded-xl transition-colors"
                    >

                      {/* IMAGE */}

                      <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 border-2 border-accent/20">

                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />

                      </div>

                      {/* TEXT */}

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

              </div>

            ))}

            {/* EMPTY STATE */}

            {filteredMenu.length === 0 && (

              <div className="text-center py-20 text-muted-foreground">

                No items found in this category.

              </div>

            )}

          </TabsContent>

        </Tabs>

      </div>

    </div>

  )

}