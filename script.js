let inputEl = document.querySelector("#ip");
let buttonEl = document.querySelector("#btn");
let divEl = document.querySelector("#output");

function showText(num) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num);
    }, 2000);
  });
}

buttonEl.addEventListener("click", () => {
  let num = inputEl.value.trim();
  if (num.length !== 0) {
    showText(num).then((res) => {
      divEl.textContent = `Result: ${res}`;
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(res);
        }, 2000);
      }).then((res) => {
        res = res * 2;
        divEl.textContent = `Result: ${res}`;
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve(res);
          }, 1000);
        }).then((res) => {
          res = res - 3;
          divEl.textContent = `Result: ${res}`;

          return new Promise((resolve, reject) => {
            setTimeout(() => {
              resolve(res);
            }, 1000);
          }).then((res) => {
            res = (res / 2).toFixed(1);
            divEl.textContent = `Result: ${res}`;
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve(res);
              }, 1000);
            }).then((res) => {
              console.log(res)
              res = 10 + parseFloat(res) ;
              divEl.textContent = `Final Result: ${res}`;
            });
          });
        });
      });
    });
  }
});
