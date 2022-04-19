const puppeteer = require("puppeteer");
const express = require("express");
require("dotenv").config();

const app = express();

app.get("/", (_, res) => res.send("OK"));

app.post("/blacklist", async (req, res) => {
  // const browser = await puppeteer.launch({
  //   headless: true,
  //   args: ["--no-sandbox", "--disable-setuid-sandbox"],
  // });
  // const page = await browser.newPage();
  // await page.goto(process.env.ACCESS_URL);

  // await page.type("#txt_Username", process.env.USERNAME_ACCESS);
  // await page.type("#txt_Password", process.env.PASSWORD_ACCESS);

  // await page.click("#loginbutton");

  // await page.waitForNavigation();

  // const fullContentFrame = await page.$("iframe[id='menuIframe']");
  // const fullFrame = await fullContentFrame.contentFrame();

  // await fullFrame.click("#wifidevCnt");

  // const wifiDeviceFrame = await fullFrame.$(
  //   "iframe[id='ContectdevmngtPageSrc']"
  // );

  // const deviceFrame = await wifiDeviceFrame.contentFrame();

  // await deviceFrame.waitForSelector(process.env.BLACKLIST_DEVICE);

  // await deviceFrame.click(process.env.BLACKLIST_DEVICE);

  // await browser.close();

  return res.status(200).json({
    message: "sucesso!",
  });
});

app.listen(process.env.PORT || 4000, () => {
  console.log("up!!!");
});

// (async () => {
//   const browser = await puppeteer.launch({
//     headless: true,
//     args: ["--no-sandbox", "--disable-setuid-sandbox"],
//   });
//   const page = await browser.newPage();
//   await page.goto(process.env.ACCESS_URL);

//   await page.type("#txt_Username", process.env.USERNAME_ACCESS);
//   await page.type("#txt_Password", process.env.PASSWORD_ACCESS);

//   await page.click("#loginbutton");

//   await page.waitForNavigation();

//   const fullContentFrame = await page.$("iframe[id='menuIframe']");
//   const fullFrame = await fullContentFrame.contentFrame();

//   await fullFrame.click("#wifidevCnt");

//   const wifiDeviceFrame = await fullFrame.$(
//     "iframe[id='ContectdevmngtPageSrc']"
//   );

//   const deviceFrame = await wifiDeviceFrame.contentFrame();

//   await deviceFrame.waitForSelector(process.env.BLACKLIST_DEVICE);

//   await deviceFrame.click(process.env.BLACKLIST_DEVICE);

//   await browser.close();
// })();
