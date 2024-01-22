
chrome.action.onClicked.addListener(handleClick);

function handleClick(tab) {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: () => {
      var brands = {
        amazon: {
          selector: '#productTitle'
        },
        hepsiburada: {
          selector: '#product-name'
        },
        n11: {
          selector: 'div.proNameHolder > div > h1'
        },
        trendyol: {
          selector: '#product-detail-app > div > div.flex-container > div > div:nth-child(2) > div:nth-child(2) > div > div.product-detail-wrapper > div.pr-in-w > div > div > div:nth-child(1)'
        },
        turkcell: {
          selector: '#product-detail > div > div > div > div > div > h1'
        },
        pazarama: {
          selector: '#app > div > div > div > div > h1'
        },
        pttavm: {
          selector: '#main > div > div > div > div > div > span > div > div > div > div > h1'
        },
        teknosa: {
          selector: '#pdp-main > div > div > h1'
        },
        mediamarkt: {
          selector: '#product-details > div > h1'
        },
        gurgencler: {
          selector: '#maincontent > div > div > div > div > div > h1 > span'
        },
        ciceksepeti: {
          selector: '#productDetailSend > div > div > div > div > div > div > div > h1 > span'
        },
        migros: {
          selector: 'body > sm-root > div > main > sm-product > article > sm-product-detail-page > div > div > div > h3'
        },
      };

      var currentBrand = Object.keys(brands).find(brand => window.location.host.includes(brand));

      if (currentBrand) {
        var selector = brands[currentBrand].selector;
        var productElement = document.querySelector(selector);
        if (productElement) {
          var productTitle = productElement.innerText;
          var searchUrl = 'https://www.akakce.com/arama/?q=' + encodeURIComponent(productTitle);
          console.log(productTitle);
          window.open(searchUrl, '_blank');
        } else {
          console.log("Ürün adı öğesi bulunamadı.");
        }
      } else {
        
        if(!window.location.host.includes("akakce")){
          window.open("https://www.akakce.com", '_blank');
        }
        console.log("URL, desteklenen bir markayı içermiyor.");
      }
    }

     
  });
}
