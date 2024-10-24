import { Ref } from "react";
import { GoHeartFill } from "react-icons/go";

const simpleRecipes = [
  {
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    src: "/simple_recipes/image 26 (7).png",
    category: "Snack",
  },
  {
    title: "Fresh Lime Roasted Salmon with Ginger Sauce",
    src: "/simple_recipes/image 26.png",
    category: "Fish",
  },
  {
    title: "Strawberry Oatmeal Pancake with Honey Syrup",
    src: "/simple_recipes/image 26 (1).png",
    category: "Breakfast",
  },
  {
    title: "Fresh and Healthy Mixed Mayonnaise Salad",
    src: "/simple_recipes/image 26 (2).png",
    category: "Healthy",
  },
  {
    title: "Chicken Meatballs with Cream Cheese",
    src: "/simple_recipes/image 26 (3).png",
    category: "Meat",
  },
  {
    title: "Fruity Pancake with Orange & Blueberry",
    src: "/simple_recipes/image 26 (4).png",
    category: "Sweet",
  },
  {
    title: "The Best Easy One Pot Chicken and Rice",
    src: "/simple_recipes/image 26 (5).png",
    category: "Snack",
  },
  {
    title: "The Creamiest Creamy Chicken and Bacon Pasta",
    src: "/simple_recipes/image 26 (6).png",
    category: "Noodles",
  },
  {
    title: "Barbeque Spicy Sandwiches with Chips ",
    src: "/simple_recipes/image 26 (8).png",
    category: "Snack",
  },
];

export default function SimpleRecipes({ ref }: { ref: Ref<HTMLDivElement> }) {
  return (
    <div ref={ref} className="simple_recipes">
      <h2>Simple and tasty recipes</h2>
      <p className="paragraph">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nulla,
        maxime culpa dicta odio eius provident molestiae perferendis qui nobis
        cumque dignissimos.
      </p>
      <div className="box">
        {simpleRecipes.map((recipe, index) => (
          <div className="card" key={index}>
            <img loading="lazy" src={recipe.src} alt={recipe.title} />
            <h3>{recipe.title}</h3>
            <div className="buttons_container">
              <button>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.75 1.5H14.25C14.4489 1.5 14.6397 1.42098 14.7803 1.28033C14.921 1.13968 15 0.948912 15 0.75C15 0.551088 14.921 0.360322 14.7803 0.21967C14.6397 0.0790176 14.4489 0 14.25 0L9.75 0C9.55109 0 9.36032 0.0790176 9.21967 0.21967C9.07902 0.360322 9 0.551088 9 0.75C9 0.948912 9.07902 1.13968 9.21967 1.28033C9.36032 1.42098 9.55109 1.5 9.75 1.5Z"
                    fill="black"
                  />
                  <path
                    d="M12 3C10.22 3 8.47991 3.52784 6.99987 4.51677C5.51983 5.50571 4.36628 6.91131 3.68509 8.55585C3.0039 10.2004 2.82567 12.01 3.17294 13.7558C3.5202 15.5016 4.37737 17.1053 5.63604 18.364C6.89472 19.6226 8.49836 20.4798 10.2442 20.8271C11.99 21.1743 13.7996 20.9961 15.4442 20.3149C17.0887 19.6337 18.4943 18.4802 19.4832 17.0001C20.4722 15.5201 21 13.78 21 12C20.9973 9.61388 20.0482 7.32626 18.361 5.63902C16.6737 3.95178 14.3861 3.0027 12 3ZM16.2426 8.81799L12.5304 12.5303C12.4607 12.6 12.378 12.6552 12.2871 12.6929C12.1961 12.7306 12.0985 12.75 12 12.75C11.9015 12.75 11.804 12.7306 11.713 12.6929C11.622 12.6553 11.5393 12.6 11.4697 12.5304C11.4 12.4607 11.3448 12.378 11.3071 12.2871C11.2694 12.1961 11.25 12.0985 11.25 12C11.25 11.9015 11.2694 11.804 11.3071 11.713C11.3448 11.622 11.4 11.5393 11.4696 11.4697L15.182 7.75736C15.2516 7.68771 15.3343 7.63246 15.4253 7.59477C15.5163 7.55708 15.6138 7.53767 15.7123 7.53767C15.8108 7.53767 15.9083 7.55707 15.9993 7.59476C16.0903 7.63244 16.173 7.68769 16.2426 7.75733C16.3123 7.82697 16.3675 7.90965 16.4052 8.00065C16.4429 8.09164 16.4623 8.18916 16.4623 8.28766C16.4623 8.38615 16.4429 8.48368 16.4052 8.57467C16.3675 8.66567 16.3123 8.74835 16.2427 8.81799H16.2426Z"
                    fill="black"
                  />
                </svg>
                30 Minutes
              </button>
              <button>
                <div>
                  <svg
                    width="9"
                    height="17"
                    viewBox="0 0 9 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.99895 5.47887C8.99854 5.46532 8.99803 5.45177 8.99688 5.43813C8.99574 5.42444 8.99405 5.41094 8.99222 5.39748C8.99121 5.39052 8.99093 5.38361 8.98979 5.37661L8.23979 0.876609C8.22365 0.779407 8.18852 0.686338 8.1364 0.60272C8.08427 0.519102 8.01619 0.446573 7.93602 0.389279C7.85586 0.331985 7.7652 0.291047 7.66921 0.268807C7.57322 0.246566 7.47379 0.243457 7.3766 0.259659C7.2794 0.275861 7.18636 0.311055 7.10277 0.36323C7.01919 0.415405 6.9467 0.483539 6.88946 0.563738C6.83222 0.643938 6.79134 0.73463 6.76916 0.830634C6.74699 0.926638 6.74394 1.02607 6.76021 1.12325L7.36464 4.74993H5.625V0.99993C5.625 0.801018 5.54598 0.610252 5.40533 0.4696C5.26468 0.328948 5.07391 0.24993 4.875 0.24993C4.67609 0.24993 4.48532 0.328948 4.34467 0.4696C4.20402 0.610252 4.125 0.801018 4.125 0.99993V4.74993H2.38536L2.98979 1.12325C3.00606 1.02607 3.00301 0.926638 2.98083 0.830634C2.95866 0.73463 2.91778 0.643938 2.86053 0.563738C2.80329 0.483539 2.73081 0.415405 2.64722 0.36323C2.56364 0.311055 2.47059 0.275861 2.3734 0.259659C2.27621 0.243457 2.17678 0.246566 2.08079 0.268807C1.9848 0.291047 1.89413 0.331985 1.81397 0.389279C1.73381 0.446573 1.66572 0.519102 1.6136 0.60272C1.56148 0.686338 1.52635 0.779407 1.51021 0.876609L0.760208 5.37661C0.759064 5.38361 0.758789 5.39052 0.757782 5.39748C0.755951 5.41094 0.754257 5.42444 0.753112 5.43813C0.751969 5.45177 0.751464 5.46532 0.75105 5.47887C0.75087 5.48592 0.75 5.49284 0.75 5.49993C0.75 5.50661 0.750458 5.51316 0.750504 5.5198C0.750641 5.52442 0.750641 5.529 0.75087 5.53358C0.759927 6.49114 1.1014 7.4158 1.71687 8.14941C2.33235 8.88302 3.18359 9.38 4.125 9.55535V18.9999C4.125 19.1988 4.20402 19.3896 4.34467 19.5303C4.48532 19.6709 4.67609 19.7499 4.875 19.7499C5.07391 19.7499 5.26468 19.6709 5.40533 19.5303C5.54598 19.3896 5.625 19.1988 5.625 18.9999V9.55535C6.56641 9.38 7.41765 8.88302 8.03313 8.14941C8.6486 7.4158 8.99007 6.49113 8.99913 5.53358C8.99936 5.529 8.99936 5.52442 8.9995 5.51979C8.99954 5.51316 9 5.50661 9 5.49993C9 5.49284 8.99913 5.48592 8.99895 5.47887Z"
                      fill="black"
                    />
                  </svg>
                  <svg
                    width="7"
                    height="17"
                    viewBox="0 0 7 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.87428 0.986725C6.87405 0.971256 6.87318 0.95578 6.87194 0.940261C6.87112 0.929733 6.87016 0.919296 6.86887 0.908905C6.86727 0.895951 6.86526 0.882995 6.86297 0.870041C6.86068 0.856995 6.85816 0.844085 6.85523 0.831314C6.85285 0.821152 6.8502 0.811036 6.8474 0.800918C6.84324 0.785858 6.83875 0.771027 6.83367 0.756378C6.83225 0.752167 6.83134 0.74791 6.82983 0.743698C6.82813 0.739166 6.82598 0.734955 6.82424 0.730469C6.81857 0.715774 6.81246 0.70134 6.80593 0.687165C6.80172 0.677915 6.79733 0.66879 6.79275 0.65979C6.78657 0.647705 6.78007 0.635819 6.77325 0.62413C6.76721 0.613648 6.76103 0.603348 6.75453 0.593231C6.74835 0.58371 6.74189 0.574463 6.7353 0.565216C6.72738 0.554046 6.71932 0.543106 6.71081 0.532486C6.70459 0.524658 6.69809 0.517105 6.69159 0.509552C6.6822 0.498749 6.67268 0.488083 6.66274 0.477874C6.65579 0.470733 6.64855 0.463867 6.64132 0.457001C6.63134 0.44748 6.62127 0.438141 6.61079 0.429214C6.60237 0.422027 6.59362 0.415253 6.58488 0.408432C6.57508 0.400833 6.56524 0.39328 6.55508 0.386139C6.54469 0.37886 6.53398 0.37204 6.52322 0.365311C6.51411 0.359592 6.505 0.353821 6.49562 0.348511C6.48339 0.341552 6.4709 0.335144 6.45826 0.328873C6.44961 0.32457 6.441 0.320267 6.43217 0.316284C6.41889 0.310333 6.40539 0.304932 6.3917 0.299713C6.38264 0.29628 6.37362 0.292847 6.36437 0.289734C6.35128 0.285293 6.33796 0.281403 6.32455 0.277695C6.31384 0.274719 6.30317 0.271927 6.29237 0.269409C6.28047 0.266708 6.26843 0.264374 6.25634 0.262222C6.24316 0.259842 6.23002 0.257828 6.2167 0.25618C6.20649 0.254943 6.19624 0.253936 6.18589 0.253066C6.17056 0.251831 6.15513 0.251053 6.13961 0.250732C6.13467 0.250641 6.12991 0.25 6.12496 0.25C6.12043 0.25 6.11599 0.250595 6.1115 0.250686C6.09612 0.250961 6.08074 0.251785 6.06532 0.253022C6.05474 0.253846 6.04426 0.254803 6.03382 0.256088C6.02087 0.25769 6.00796 0.259705 5.995 0.261994C5.98196 0.264283 5.96905 0.266801 5.95628 0.269776C5.94612 0.27211 5.936 0.274765 5.92588 0.277557C5.91082 0.281676 5.89599 0.286208 5.88134 0.291289C5.87713 0.292709 5.87287 0.293624 5.86866 0.295133C5.85941 0.29852 5.8503 0.302549 5.8411 0.305982C5.83762 0.3074 5.83405 0.308637 5.83057 0.310101C3.8984 1.03625 2.35107 3.4066 1.23147 7.35806C0.723603 9.18144 0.355139 11.0408 0.129266 12.9201C0.118059 13.0247 0.128994 13.1305 0.161359 13.2306C0.193725 13.3308 0.246798 13.423 0.317128 13.5012C0.387458 13.5795 0.473472 13.6421 0.569579 13.685C0.665685 13.7278 0.769734 13.75 0.874963 13.75H5.37496V19C5.37496 19.1989 5.45398 19.3897 5.59463 19.5303C5.73528 19.671 5.92605 19.75 6.12496 19.75C6.32387 19.75 6.51464 19.671 6.65529 19.5303C6.79595 19.3897 6.87496 19.1989 6.87496 19V1C6.87496 0.995514 6.87437 0.991211 6.87428 0.986725Z"
                      fill="black"
                    />
                  </svg>
                </div>
                {recipe.category}
              </button>
            </div>
            <div className="favorite">
              <GoHeartFill size={20} fill="rgba(255, 99, 99, 1)" />
              {/* <GoHeartFill size={20} fill="#cad0d3" /> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
