// 首先注入QRCode库
const script = document.createElement('script');
script.src = chrome.runtime.getURL('qrcode.min.js');
document.head.appendChild(script);

function getFavicon() {
  let favicon = '';
  const links = document.getElementsByTagName('link');
  for (let i = 0; i < links.length; i++) {
    if (links[i].rel.includes('icon')) {
      favicon = links[i].href;
      break;
    }
  }
  return favicon || `${window.location.origin}/favicon.ico`;
}

function createQRContainer() {
  const container = document.createElement('div');
  container.className = 'page-qr-container';
  
  const logo = document.createElement('img');
  logo.className = 'page-logo';
  logo.src = getFavicon();
  
  const popup = document.createElement('div');
  popup.className = 'qr-popup';
  
  const qrDiv = document.createElement('div');
  qrDiv.id = 'qrcode';
  
  const siteName = document.createElement('div');
  siteName.className = 'site-name';
  siteName.textContent = new URL(window.location.href).hostname;
  
  const pageTitle = document.createElement('div');
  pageTitle.className = 'page-title';
  pageTitle.textContent = document.title.slice(0, 10);
  
  popup.appendChild(qrDiv);
  popup.appendChild(siteName);
  popup.appendChild(pageTitle);
  
  container.appendChild(logo);
  container.appendChild(popup);
  
  document.body.appendChild(container);
  
  let qrCodeGenerated = false;
  
  logo.addEventListener('click', () => {
    popup.classList.toggle('show');
    
    // 首次点击时才生成二维码
    if (!qrCodeGenerated) {
      new QRCode(qrDiv, {
        text: window.location.href,
        width: 256,
        height: 256,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
      });
      qrCodeGenerated = true;
    }
  });
}

// 等待DOM加载完成后执行
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', createQRContainer);
} else {
  createQRContainer();
} 