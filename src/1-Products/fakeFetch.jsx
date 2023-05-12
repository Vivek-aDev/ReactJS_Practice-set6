export const fakeFetch = (url) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url === "https://example.com/api/products") {
        resolve({
          status: 200,
          message: "Success",
          data: {
            products: [
              {
                name: "Shoes",
                price: 3000,
                desc: "lorem ipsum dolor sit amit",
                src:
                  "https://hips.hearstapps.com/hmg-prod/images/nike-tying-shoe-1661882021.jpg"
              },
              {
                name: "Tshirt",
                price: 500,
                inStock: false,
                desc: "lorem ipsum dolor sit amit",
                src:
                  "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/43891d5d-27aa-4e44-b6b5-593c89965f3b/dri-fit-just-do-it-basketball-t-shirt-xt0vRh.png"
              },
              {
                name: "Trekking Bag",
                price: 2000,
                inStock: true,
                desc: "lorem ipsum dolor sit amit",
                src:
                  "https://www.jiomart.com/images/product/500x630/rvoshmnlsg/extreme-machine-90l-waterproof-detachabe-2-in-1-rucksack-bag-trekking-bag-hiking-backpack-product-images-rvoshmnlsg-0-202210190152.jpg"
              }
            ]
          }
        });
      } else {
        reject({
          status: 404,
          message: "Items list not found."
        });
      }
    }, 2000);
  });
};
