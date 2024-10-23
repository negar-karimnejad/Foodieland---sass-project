const categories = [
  { title: "Breakfast", src: "/categories/image 25.png" },
  { title: "Vegan", src: "/categories/image 20.png" },
  { title: "Meat", src: "/categories/image 21.png" },
  { title: "Dessert", src: "/categories/image 22.png" },
  { title: "Lunch", src: "/categories/image 23.png" },
  { title: "Chocolate", src: "/categories/image 24.png" },
];

export default function Categories() {
  return (
    <div>
      <div className="categories">
        <div className="categories_header">
          <h2>Categories</h2>
          <button>View All Categories</button>
        </div>
        <div className="all_categories">
          {categories.map((category, index) => (
            <div className={`category${index + 1}`} key={index}>
              <img
                loading="lazy"
                src={category.src}
                alt={category.title}
                className="img2"
              />
              <img loading="lazy" src={category.src} alt={category.title} />
              <p>{category.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
