import { Ref } from "react";
import { GoDotFill } from "react-icons/go";

const posts = [
  {
    title: "Mixed Tropical Fruit Salad with Superfood Boosts",
    src: "/instagram/Rectangle.png",
    category: "Healthy",
  },
  {
    title: "Big and Juicy Wagyu Beef Cheeseburger",
    src: "/instagram/Rectangle (1).png",
    category: "Western",
  },
  {
    title: "Healthy Japanese Fried Rice with Asparagus",
    src: "/instagram/Rectangle (2).png",
    category: "Healthy",
  },
  {
    title: "Cauliflower Walnut Vegetarian Taco Meat",
    src: "/instagram/Rectangle (3).png",
    category: "Eastern",
  },
];

export default function Instagram({ ref }: { ref: Ref<HTMLDivElement> }) {
  return (
    <div ref={ref} className="instagram">
      <div className="instagram_header">
        <h2>Check out @foodieland on Instagram</h2>
        <p className="paragraph">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nulla,
          maxime culpa dicta odio eius provident molestiae perferendis qui nobis
          cumque dignissimos.
        </p>
      </div>
      <div className="box">
        {posts.map((recipe, index) => (
          <div className="card" key={index}>
            <div className="card_header">
              <div className="card_header_left">
                <img loading="lazy" src="/instagram/Oval.png" alt="instagram" />
                <div className="card_header_info">
                  <div>
                    <h5>Foodieland.</h5>
                    <img
                      loading="lazy"
                      src="/instagram/Official Icon.png"
                      alt="tick"
                    />
                  </div>
                  <p>Tokyo, Japan</p>
                </div>
              </div>
              <div>...</div>
            </div>

            <img loading="lazy" src={recipe.src} alt={recipe.title} />
            <div className="content">
              <ul>
                <li className="actions">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="17"
                    viewBox="0 0 20 17"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.0081 2.25665L9.5015 1.66459C7.46296 -0.373949 4.21201 -0.235034 2.17347 1.8035C0.134936 3.84204 0.527258 7.7832 2.56579 9.82174C3.39315 10.6491 4.63217 11.7946 6.28285 13.2584L7.67155 14.4801L9.23129 15.834C9.66075 16.2046 10.2953 16.2103 10.7313 15.8474L11.9948 14.788C14.2076 12.918 15.8496 11.445 16.9209 10.3692L17.1989 10.0856L17.4486 9.82174C19.3471 7.77441 19.835 3.79463 17.8439 1.8035L17.6996 1.66459C15.6523 -0.233931 12.5651 -0.326542 10.5739 1.66459L10.0081 2.25665ZM2.99374 2.6236C4.6057 1.01164 7.09948 0.936068 8.65131 2.45503L9.96057 3.98519L11.4126 2.4659C12.9019 0.97698 15.2755 0.998504 16.9109 2.51501L17.0392 2.63889C18.4463 4.0462 18.2069 7.29787 16.598 9.03284L16.3564 9.28814L16.0882 9.56149C15.2002 10.4528 13.884 11.6468 12.1487 13.1339L11.2461 13.9019L9.98924 14.9557L8.43197 13.6039L7.31742 12.6249C5.74693 11.2368 4.5354 10.1266 3.68713 9.29861L3.38606 9.00135C1.70674 7.32202 1.4967 4.12064 2.99374 2.6236Z"
                      fill="#262626"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.5467 8.70686C17.5467 4.00876 13.7381 0.200195 9.03999 0.200195C4.34189 0.200195 0.533325 4.00876 0.533325 8.70686C0.533325 13.405 4.34189 17.2135 9.03999 17.2135C10.0654 17.2135 11.474 16.8395 13.2659 16.0913L16.1634 17.2216L16.2493 17.2495C16.6238 17.3477 17.0207 17.1516 17.1649 16.7822C17.2225 16.6344 17.2333 16.4725 17.1958 16.3184L16.3879 12.9958L16.5202 12.6792C17.2045 11.0124 17.5467 9.68828 17.5467 8.70686ZM15.4365 12.2643L15.1699 12.8957L15.8933 15.8709L13.2511 14.8402L12.5295 15.1395C11.0078 15.7536 9.8323 16.0533 9.04 16.0533C4.98255 16.0533 1.69333 12.7641 1.69333 8.70667C1.69333 4.64921 4.98255 1.36 9.04 1.36C13.0975 1.36 16.3867 4.64921 16.3867 8.70667C16.3867 9.5152 16.075 10.7137 15.4365 12.2643Z"
                      fill="#262626"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="16"
                    viewBox="0 0 18 16"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M17.5748 1.0732L9.31158 15.1893C9.05142 15.6337 8.38425 15.5439 8.25083 15.0465L6.12389 7.11552L6.10635 7.09073C6.09055 7.06337 6.07724 7.03525 6.06634 7.00665L0.250997 1.19032C-0.114383 0.824938 0.144394 0.200195 0.661119 0.200195H17.0743C17.5223 0.200195 17.8011 0.686548 17.5748 1.0732ZM15.4866 2.34366L7.31125 7.0637L9.01164 13.4051L15.4866 2.34366ZM2.06135 1.35997L14.8718 1.35924L6.74999 6.04835L2.06135 1.35997Z"
                      fill="#262626"
                    />
                  </svg>
                </li>
                <li className="dots">
                  <span className="blueDot">
                    <GoDotFill />
                  </span>
                  <span className="grayDot">
                    <GoDotFill />
                  </span>
                  <span className="grayDot">
                    <GoDotFill />
                  </span>
                </li>
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="19"
                    viewBox="0 0 16 19"
                    fill="none"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.0522461 0.951852V17.6964C0.0522461 17.8996 0.132235 18.0946 0.274915 18.2393C0.574787 18.5435 1.06442 18.5469 1.36855 18.247L7.97949 11.7285L14.5904 18.247C14.7351 18.3897 14.9302 18.4697 15.1334 18.4697C15.5605 18.4697 15.9067 18.1235 15.9067 17.6964V0.951852C15.9067 0.738302 15.7336 0.565186 15.5201 0.565186H0.438913C0.225363 0.565186 0.0522461 0.738302 0.0522461 0.951852ZM1.21223 16.772V1.72511H14.7467V16.772L8.52244 10.6348C8.22134 10.3379 7.7376 10.3379 7.4365 10.6348L1.21223 16.772Z"
                      fill="#262626"
                    />
                  </svg>
                </li>
              </ul>
              <div className="likes">
                <img
                  loading="lazy"
                  src="/instagram/profile.png"
                  alt="profile"
                />
                Liked by <strong>craig_love</strong> and <strong>44,686</strong>{" "}
                others
              </div>
              <div>
                <strong>Foodieland.</strong> The vegetables dishes need to have
                certain vitamin for those people
              </div>
              <small>September 19</small>
            </div>
            <div className="slides">1/3</div>
          </div>
        ))}
      </div>
    </div>
  );
}
