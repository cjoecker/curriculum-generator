import puppeteer from 'puppeteer';


// eslint-disable-next-line unicorn/prefer-top-level-await
(async () => {
	const browser = await puppeteer.launch({headless:'new'});
	const page = await browser.newPage();

	await page.goto('http://localhost:3000/', { waitUntil: 'networkidle2' });

	await page.pdf({ path: 'export.pdf', format: 'A4', omitBackground:false, printBackground:true });

	await browser.close();
})();
