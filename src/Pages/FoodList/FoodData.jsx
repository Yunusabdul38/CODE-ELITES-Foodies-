const foodItemsData = [
  {
    id: 1,
    name: "Cheeseburger",
    description:
      "Juicy beef patty with melted cheese, lettuce, and tomato on a sesame seed bun.",
    price: 999,
    image:
      "https://media.istockphoto.com/id/1149596729/photo/classic-cheeseburger-on-a-brioche-bun-with-fries-and-a-milkshake.webp?b=1&s=170667a&w=0&k=20&c=9QOA41Ya07_bE0SbMAHej4mN3kekvC7iqXoyFBOCFE0=",
    category: "Burgers",
  },
  {
    id: 2,
    name: "Margherita Pizza",
    description:
      "Classic pizza topped with fresh tomatoes, mozzarella cheese, and basil leaves.",
    price: 1249,
    image:
      "https://images.unsplash.com/photo-1598023696416-0193a0bcd302?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8TWFyZ2hlcml0YSUyMFBpenphfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "Pizzas",
  },
  {
    id: 3,
    name: "Chicken Caesar Salad",
    description:
      "Grilled chicken breast, crisp romaine lettuce, croutons, and Caesar dressing.",
    price: 899,
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Q2hpY2tlbiUyMENhZXNhciUyMFNhbGFkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "Salads",
  },
  {
    id: 4,
    name: "Pasta Carbonara",
    description:
      "Spaghetti with creamy egg and cheese sauce, pancetta, and black pepper.",
    price: 1079,
    image:
      "https://images.unsplash.com/photo-1560434019-4558f9a9e2a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UGFzdGElMjBDYXJib25hcmF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    category: "Pasta",
  },
  {
    id: 5,
    name: "Sushi Roll Combo",
    description:
      "Assorted sushi rolls including California, Spicy Tuna, and Rainbow rolls.",
    price: 1499,
    image:
      "https://images.unsplash.com/photo-1564489563601-c53cfc451e93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fFN1c2hpJTIwUm9sbCUyMENvbWJvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "Desserts",
  },
  {
    id: 6,
    name: "Chocolate Brownie Sundae",
    description:
      "Warm chocolate brownie topped with vanilla ice cream, whipped cream, and chocolate sauce.",
    price: 649,
    image:
      "https://images.unsplash.com/photo-1553452118-621e1f860f43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hvY29sYXRlJTIwQnJvd25pZSUyMFN1bmRhZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "Desserts",
  },
  {
    id: 7,
    name: "Grilled Steak",
    description:
      "Tender grilled steak with garlic mashed potatoes and sautéed vegetables.",
    price: 1899,
    image:
      "https://images.unsplash.com/photo-1611171711791-b34fa42e9fc2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8R3JpbGxlZCUyMFN0ZWFrfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "Desserts",
  },
  {
    id: 8,
    name: "Veggie Wrap",
    description: "A healthy wrap filled with assorted vegetables and hummus.",
    price: 799,
    image:
      "https://images.unsplash.com/photo-1536304494833-02c3abf8bd4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8VmVnZ2llJTIwV3JhcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "Sandwiches",
  },
  {
    id: 9,
    name: "Fruit Smoothie",
    description: "Refreshing smoothie with mixed berries, banana, and yogurt.",
    price: 549,
    image:
      "https://images.unsplash.com/photo-1589734575451-8ddc34c5752b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fEZydWl0JTIwU21vb3RoaWV8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    category: "Beverages",
  },
  {
    id: 10,
    name: "Cheesecake",
    description: "Creamy cheesecake topped with your choice of fruit compote.",
    price: 799,
    image:
      "https://images.unsplash.com/photo-1578775887804-699de7086ff9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Q2hlZXNlY2FrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "Desserts",
  },
  {
    id: 11,
    name: "Chicken Quesadilla",
    description: "Grilled chicken and melted cheese in a folded tortilla.",
    price: 949,
    image:
      "https://media.istockphoto.com/id/536172987/photo/chicken-fajitas.webp?b=1&s=170667a&w=0&k=20&c=FZnqQrn8TUZ3YLiDmslPtvV0HFPgP0jf3cLkhYS6WV4=",
    category: "Appetizers",
  },
  {
    id: 12,
    name: "Mushroom Risotto",
    description: "Creamy risotto with sautéed mushrooms and Parmesan cheese.",
    price: 1199,
    image:
      "https://images.unsplash.com/photo-1669216284093-a975043a4645?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8TXVzaHJvb20lMjBSaXNvdHRvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "Pasta",
  },
  {
    id: 13,
    name: "Greek Salad",
    description:
      "Fresh tomatoes, cucumbers, olives, and feta cheese in Greek dressing.",
    price: 749,
    image:
      "https://plus.unsplash.com/premium_photo-1690561082636-06237f98bfab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R3JlZWslMjBTYWxhZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "Salads",
  },
  {
    id: 14,
    name: "Steak Burrito",
    description:
      "Savory grilled steak wrapped in a large tortilla with rice and beans.",
    price: 1099,
    image:
      "https://plus.unsplash.com/premium_photo-1664478294917-c11274b9ce79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3RlYWslMjBCdXJyaXRvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "Burritos",
  },
  {
    id: 15,
    name: "Tiramisu",
    description:
      "Classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone.",
    price: 899,
    image:
      "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8VGlyYW1pc3V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    category: "Desserts",
  },
  {
    id: 16,
    name: "Fish Tacos",
    description:
      "Crispy fish fillets in soft corn tortillas with slaw and a tangy sauce.",
    price: 10.49,
    image:
      "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RmlzaCUyMFRhY29zfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "Tacos",
  },
  {
    id: 17,
    name: "Caprese Salad",
    description:
      "Fresh mozzarella, ripe tomatoes, and basil drizzled with balsamic glaze.",
    price: 849,
    image:
      "https://images.unsplash.com/photo-1570197571499-166b36435e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Q2FwcmVzZSUyMFNhbGFkfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "Salads",
  },
  {
    id: 18,
    name: "Pho",
    description:
      "Traditional Vietnamese noodle soup with beef or chicken, herbs, and spices.",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8UGhvfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "Soups",
  },
  {
    id: 19,
    name: "Veggie Burger",
    description:
      "Plant-based burger patty with lettuce, tomato, and vegan mayo.",
    price: 1049,
    image:
      "https://images.unsplash.com/photo-1585730316463-715e64340a2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VmVnZ2llJTIwQnVyZ2VyfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "Burgers",
  },
  {
    id: 20,
    name: "Chicken Alfredo",
    description:
      "Creamy fettuccine pasta with grilled chicken and Parmesan cheese.",
    price: 1299,
    image:
      "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2hpY2tlbiUyMEFsZnJlZG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    category: "Pasta",
  },
  {
    id: 21,
    name: "Mango Lassi",
    description: "Refreshing Indian drink made with yogurt and sweet mango.",
    price: 499,
    image:
      "https://images.unsplash.com/photo-1620878439719-0348b19e4d5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fE1hbmdvJTIwTGFzc2l8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    category: "Beverages",
  },
  {
    id: 22,
    name: "Shrimp Scampi",
    description:
      "Sautéed shrimp in a garlic and white wine sauce served over linguine.",
    price: 1449,
    image:
      "https://images.unsplash.com/photo-1633504581786-316c8002b1b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8U2hyaW1wJTIwU2NhbXBpfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "Main Dishes",
  },
  {
    id: 23,
    name: "Chicken Wings",
    description:
      "Crispy chicken wings with your choice of sauce: BBQ, Buffalo, or Teriyaki.",
    price: 899,
    image:
      "https://images.unsplash.com/photo-1625943553852-781c6dd46faa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U2hyaW1wJTIwU2NhbXBpfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "Appetizers",
  },
  {
    id: 24,
    name: "Fettuccine Alfredo",
    description:
      "Creamy Alfredo sauce tossed with fettuccine noodles and Parmesan cheese.",
    price: 1179,
    image:
      "https://images.unsplash.com/photo-1662478839788-7d2898ca66cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8RmV0dHVjY2luZSUyMEFsZnJlZG98ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    category: "Pasta",
  },
  {
    id: 25,
    name: "Fruit Salad",
    description:
      "Assorted fresh fruits, perfect for a light and healthy option.",
    price: 699,
    image:
      "https://images.unsplash.com/photo-1519996529931-28324d5a630e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RnJ1aXQlMjBTYWxhZHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "Salads",
  },
  {
    id: 26,
    name: "Hawaiian Pizza",
    description: "Pizza topped with ham, pineapple, and mozzarella cheese.",
    price: 1399,
    image:
      "https://media.istockphoto.com/id/185009286/photo/hawaiian-pizza.webp?b=1&s=170667a&w=0&k=20&c=K_4Z7MQMkqZ94cD5xq0MILzScwUHb2s-RoGJU3b_hSE=",
    category: "Pizzas",
  },
  {
    id: 27,
    name: "Pad Thai",
    description:
      "Classic Thai dish with stir-fried rice noodles, shrimp, egg, and peanuts.",
    price: 199,
    image:
      "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8SGF3YWlpYW4lMjBQaXp6YXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "Main Dishes",
  },
  {
    id: 28,
    name: "Chicken Tenders",
    description:
      "Crispy breaded chicken tenders served with your choice of dipping sauce.",
    price: 749,
    image:
      "https://images.unsplash.com/photo-1627662056598-dcfc5000f769?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Q2hpY2tlbiUyMFRlbmRlcnN8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    category: "Appetizers",
  },
  {
    id: 29,
    name: "Baked Ziti",
    description:
      "Ziti pasta baked with marinara sauce, ricotta, and mozzarella cheese.",
    price: 979,
    image:
      "https://media.istockphoto.com/id/183291641/photo/baked-ziti.webp?b=1&s=170667a&w=0&k=20&c=3RIKrH8qbeI6fmlO8bkJ7xHXgm4esaGu9irB4kBWw58=",
    category: "Pasta",
  },
  {
    id: 30,
    name: "Mango Sorbet",
    description: "Refreshing mango-flavored sorbet, a perfect dessert option.",
    price: 449,
    image:
      "https://images.unsplash.com/photo-1484654815877-4677f5cade22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8QmFrZWQlMjBaaXRpfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "Desserts",
  },
  {
    id: 31,
    name: "Beef Stir-Fry",
    description:
      "Sliced beef and vegetables stir-fried in a savory soy-based sauce.",
    price: 1299,
    image:
      "https://plus.unsplash.com/premium_photo-1664472637341-3ec829d1f4df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8QmVlZiUyMFN0aXIlMjBGcnl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    category: "Main Dishes",
  },
  {
    id: 32,
    name: "Club Sandwich",
    description:
      "Triple-decker sandwich with layers of turkey, bacon, lettuce, and tomato.",
    price: 299,
    image:
      "https://images.unsplash.com/photo-1622720757920-1a7b292c46c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Q2x1YiUyMFNhbmR3aWNofGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "Sandwiches",
  },
  {
    id: 33,
    name: "Iced Coffee",
    description:
      "Chilled coffee served with ice and your choice of milk or cream.",
    price: 399,
    image:
      "https://images.unsplash.com/photo-1620360289100-030b032e5a27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8SWNlZCUyMENvZmZlZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "Beverages",
  },
  {
    id: 34,
    name: "Lobster Roll",
    description:
      "Buttery lobster meat in a toasted roll, a Main Dishes lover's delight.",
    price: 169,
    image:
      "https://images.unsplash.com/photo-1511421585906-57a6e6dc3a2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TG9ic3RlciUyMFJvbGx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    category: "Main Dishes",
  },
  {
    id: 35,
    name: "Spinach Dip",
    description: "Creamy spinach and artichoke dip served with tortilla chips.",
    price: 849,
    image:
      "https://plus.unsplash.com/premium_photo-1664472700331-78d01345b6d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8U3BpbmFjaCUyMERpcHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "Appetizers",
  },
  {
    id: 36,
    name: "Ravioli",
    description:
      "Cheese-filled ravioli pasta with marinara sauce and Parmesan cheese.",
    price: 1049,
    image:
      "https://images.unsplash.com/photo-1594610352113-ad218529cfb7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UmF2aW9saXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "Pasta",
  },
  {
    id: 37,
    name: "Berry Parfait",
    description:
      "Layers of yogurt, granola, and mixed berries in a delightful dessert parfait.",
    price: 699,
    image:
      "https://images.unsplash.com/photo-1530300846683-a0d623fbeff7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8QmVycnklMjBQYXJmYWl0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    category: "Desserts",
  },
  {
    id: 38,
    food: "Jollof Rice",
    category: "Main Course",
    price: 500,
    image:
      "https://media.istockphoto.com/id/1460396370/photo/tic-tac-toe-board-game-wood-block-cubes-to-play.webp?b=1&s=170667a&w=0&k=20&c=vLo1-tkUZf4bfrx2_tJjvXwfmGEvqLmE_EJEkJOVrLg=",
    description:
      "Jollof rice is a one-pot rice dish that is popular in West Africa. It is made with rice, tomatoes, onions, spices, and meat or fish. Jollof rice is a hearty and flavorful dish that is perfect for a family meal.",
  },
  {
    id: 39,
    name: "Egusi Soup",
    category: "Soup",
    price: 600,
    image:
      "https://media.istockphoto.com/id/498310620/photo/egusi-soup-nigerian-cuisine.webp?b=1&s=170667a&w=0&k=20&c=G7WsUxiSy6h_aVGegIKfYwCUhJP8OjiQlrh8kEa54kY=",
    description:
      "Egusi soup is a popular Nigerian soup made with egusi seeds, tomatoes, onions, spices, and meat or fish. It is a thick and creamy soup that is often served with fufu or pounded yam. Egusi soup is a nutritious and flavorful dish that is perfect for a cold day.",
  },
  {
    id: 40,
    name: "Akara",
    category: "Snack",
    price: 200,
    image:
      "https://media.istockphoto.com/id/1196425447/photo/acaraje.webp?b=1&s=170667a&w=0&k=20&c=AacAIBQHIz0IIMVNhaXD0V18t-E8wSIcwRThbjs4lRU=",
    description:
      "Akara is a popular Nigerian snack made with black-eyed peas, onions, eggs, baking powder, salt, and pepper. It is fried until golden brown and crispy. Akara is a savory and delicious snack that is perfect for a quick and easy meal.",
  },
  {
    id: 41,
    name: "Pounded Yam and Vegetable Soup",
    description: "Yam served with a variety of vegetable-based soups.",
    price: 1199,
    image:
      "https://media.istockphoto.com/id/1388098078/photo/garri-and-pounded-yam-served-with-efo-riro-vegetable-soup.webp?b=1&s=170667a&w=0&k=20&c=VFWrM0A_dEQH_hkFyflIjUAhoyCMd-Q6SxDz8EVHutY=",
    category: "Main Dishes",
  },
  {
    id: 42,
    name: "Suya",
    description:
      "Spicy skewered meat (often beef or chicken) coated with ground peanuts.",
    price: 799,
    image:
      "https://media.istockphoto.com/id/825938244/photo/barbecue-ribs.webp?b=1&s=170667a&w=0&k=20&c=Y51-chZfSHccJNrCajmIfbQe95JxYNRaXbArt8K_Y7w=",
    category: "Appetizers",
  },
  {
    id: 43,
    name: "Efo Riro",
    description: "Nigerian spinach stew with assorted meats and fish.",
    price: 999,
    image:
      "https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RWZvJTIwUmlyb3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    category: "Soups",
  },
  {
    id: 44,
    name: "Chin Chin",
    description: "Sweet and crunchy deep-fried pastry snack.",
    price: 349,
    image:
      "https://images.unsplash.com/photo-1665554837563-3782d21a676b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q2hpbiUyMENoaW58ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    category: "Snacks",
  },
  {
    id: 45,
    name: "Banga Soup",
    description:
      "Palm nut soup with fish, often served with pounded yam or fufu.",
    price: 1079,
    image:
      "data:image/jpeg;base64,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",
    category: "Soups",
  },
  {
    id: 46,
    name: "Moi Moi",
    description:
      "Steamed bean pudding with spices, vegetables, and sometimes fish.",
    price: 649,
    image:
      "data:image/jpeg;base64,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",
    category: "Appetizers",
  },
  {
    id: 47,
    name: "Puff-Puff",
    category: "Snack",
    price: 350,
    image:
      "https://images.unsplash.com/photo-1664993090321-b2caff794431?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UHVmZiUyMFB1ZmZ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
    description:
      "Puff-puff is a popular Nigerian snack made with all-purpose flour, water, sugar, salt, and vegetable oil. It is deep-fried until golden brown and fluffy. Puff-puff is a sweet and savory snack that is perfect for a quick and easy meal.",
  },
  {
    id: 48,
    name: "Ofada Rice",
    description:
      "A delicious Nigerian dish made with rice, tomatoes, onions, and spices. It is often served with stew or soup.",
    price: 150,
    image:
      "https://media.istockphoto.com/id/1410537698/photo/bowl-of-rice-served-with-ofada-and-pepper-tomato-stew.webp?b=1&s=170667a&w=0&k=20&c=42YTNazIlaFHVl-srMn30PN8dl9jJASWPgRgLdeuQ0k=",
    category: "Main Course",
    ingredients: ["Rice", "Tomatoes", "Onions", "Spices"],
    cooking_time: "30 minutes",
  },
  {
    id: 49,
    name: "Eba",
    description:
      "A Nigerian dish made with garri. It is often served with stew or soup.",
    price: 800,
    image:
      "https://media.istockphoto.com/id/1387397063/photo/nigerian-egusi-melon-soup-with-garri-eba-for-lunch-nigerian-food.webp?b=1&s=170667a&w=0&k=20&c=88QHtJoXWzMACj4cQLV60HW3YVw1JIyKJeEziGKnCKE=",
    category: "Side Dish",
  },
  {
    id: 50,
    name: "Mango Sticky Rice",
    description:
      "A Thai dessert made with mango, sticky rice, and coconut milk.",
    price: 510,
    image:
      "https://media.istockphoto.com/id/1441508438/photo/mango-with-sticky-rice-is-popular-traditional-dessert-of-thailand.webp?b=1&s=170667a&w=0&k=20&c=Eskf66U7r7tbgddPTe0ynii1OZo3Swz41tTwT5qYQBM=",
    category: "Dessert",
  },
  {
    id: 51,
    name: "Fufu",
    description:
      "A West African dish made with cassava or plantain dough. It is often served with soups or stews.",
    price: 239,
    image:
      "https://media.istockphoto.com/id/498310978/photo/egusi-soup-and-pounded-yam-nigerian-cuisine.webp?b=1&s=170667a&w=0&k=20&c=jAwy1TQoG_Ae2MP_uv0Xu4wuFml-71FF0OnlyLHDQOg=",
    category: "Side Dish",
  },
  {
    id: 52,
    name: "Shish Kebab",
    description:
      "A Middle Eastern dish made with skewered meat, vegetables, or tofu. It is often grilled or roasted.",
    price: 500,
    image:
      "https://media.istockphoto.com/id/538168264/photo/vegetable-and-meat-skewers-in-a-herb-marinade.webp?b=1&s=170667a&w=0&k=20&c=LRW-oZxj3cANdTmzGxFqqMgRXZDpZqaGZQE-bye_-Fk=",
    category: "Appetizer",
  },
  {
    "id": 53,
    "name": "Nigerian Fried Rice",
    "description": "Flavorful rice dish with vegetables, spices, and often, pieces of chicken or shrimp.",
    "price": 900,
    "image": "https://media.istockphoto.com/id/1299613532/photo/rice.webp?b=1&s=170667a&w=0&k=20&c=NGtGyz38Zpjnm37OkABriJ3Gn7AdYQQ_fnTUouTzNP4=",
    "category": "Main Dishes"
  },
  {
    "id": 54,
    "name": "Ewa Agoyin",
    "description": "Mashed beans served with spicy stew made from locust beans.",
    "price": 545.49,
    "image": "https://media.istockphoto.com/id/1008418658/photo/nigerian-bean-pottage-with-deep-fried-plantains.webp?b=1&s=170667a&w=0&k=20&c=KymbSzM6_dO8ONpcGEaAq_SXCn-_PzTFikre_x5OEvo=",
    "category": "Main Dishes"
  },
  {
    "id": 55,
    "name": "Okro Soup",
    "description": "Traditional Nigerian soup made with okra, often cooked with assorted meats and fish.",
    "price": 308.49,
    "image": "https://media.istockphoto.com/id/1168622830/photo/nigerian-spicy-okro-and-pepper-stew-served-with-eba-ready-to-eat.webp?b=1&s=170667a&w=0&k=20&c=_PtEmSwXcj9H7JaEmG0dR-cmh9oDIgf7WwMMyr-t3Vk=",
    "category": "Soups"
  }
];

export {foodItemsData}