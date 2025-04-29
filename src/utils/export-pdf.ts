import puppeteer from "puppeteer";

// eslint-disable-next-line unicorn/prefer-top-level-await
(async () => {
	const browser = await puppeteer.launch({ headless: true });
	const page = await browser.newPage();

	const lang = process.argv[2] ?? "en";

	await page.goto(`http://localhost:3000/?lang=${lang}`, {
		waitUntil: "networkidle2",
	});

	const fileName = `cv-${lang}-christian-joecker.pdf`;

	await page.pdf({
		path: fileName,
		format: "A4",
		omitBackground: false,
		printBackground: true,
	});

	await browser.close();
})();
