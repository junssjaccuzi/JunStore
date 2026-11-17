/**
 * ==========================================================================
 * JUNSTORE - SCRIPT ENGINE
 * Author: Rendra
 * Naming Convention: All classes and IDs prefixed with 'rendra-'
 * ==========================================================================
 */

// --- 1. MOCK DATA: GAMES & NOMINALS ---
const rendraGameData = {
  mlbb: {
    id: "mlbb",
    name: "Mobile Legends: Bang Bang",
    publisher: "Moonton",
    category: "mobile",
    image: "./images/MLBB.jpg",
    banner: "https://cdn.xcashshop.com/media/file-1794124062-od0o66qc-2610-xc-banner.webp",
    idPlaceholder: "Masukkan User ID",
    zonePlaceholder: "Masukkan Zone ID (4-5 digit)",
    hasZone: true,
    nominals: [
      { id: "ml-86", name: "86 Diamonds", price: 21500 },
      { id: "ml-172", name: "172 Diamonds", price: 42500 },
      { id: "ml-257", name: "257 Diamonds", price: 63000 },
      { id: "ml-706", name: "706 Diamonds", price: 168000 },
      { id: "ml-wdp", name: "Weekly Diamond Pass", price: 28000 },
      { id: "ml-2195", name: "2195 Diamonds", price: 510000 }
    ]
  },
  ff: {
    id: "ff",
    name: "Free Fire Max",
    publisher: "Garena",
    category: "mobile",
    image: "./images/download.jpg",
    idPlaceholder: "Masukkan Player ID FF",
    zonePlaceholder: "",
    hasZone: false,
    nominals: [
      { id: "ff-70", name: "70 Diamonds", price: 10000 },
      { id: "ff-140", name: "140 Diamonds", price: 19500 },
      { id: "ff-355", name: "355 Diamonds", price: 48000 },
      { id: "ff-720", name: "720 Diamonds", price: 95000 },
      { id: "ff-mem-w", name: "Member Mingguan", price: 29000 },
      { id: "ff-mem-m", name: "Member Bulanan", price: 89000 }
    ]
  },
  genshin: {
    id: "genshin",
    name: "Genshin Impact",
    publisher: "COGNOSPHERE / HoYoverse",
    category: "mobile",
    image: "./images/Genshin.jpg",
    idPlaceholder: "Masukkan UID",
    zonePlaceholder: "Pilih Server",
    hasZone: true,
    serverOptions: ["America", "Europe", "Asia", "TW/HK/MO"],
    nominals: [
      { id: "gi-60", name: "60 Genesis Crystals", price: 15500 },
      { id: "gi-300", name: "300+30 Genesis Crystals", price: 74000 },
      { id: "gi-980", name: "980+110 Genesis Crystals", price: 235000 },
      { id: "gi-welkin", name: "Blessing of the Welkin Moon", price: 75000 },
      { id: "gi-1980", name: "1980+260 Genesis Crystals", price: 465000 }
    ]
  },
  pubgm: {
    id: "pubgm",
    name: "PUBG Mobile",
    publisher: "Level Infinite",
    category: "mobile",
    image: "./images/PUBEG.jpg",
    idPlaceholder: "Masukkan Player ID PUBG",
    zonePlaceholder: "",
    hasZone: false,
    nominals: [
      { id: "pubg-60", name: "60 Unknown Cash (UC)", price: 14500 },
      { id: "pubg-325", name: "325 Unknown Cash (UC)", price: 72000 },
      { id: "pubg-660", name: "660 Unknown Cash (UC)", price: 145000 },
      { id: "pubg-1800", name: "1800 Unknown Cash (UC)", price: 360000 }
    ]
  },
  valorant: {
    id: "valorant",
    name: "Valorant Points",
    publisher: "Riot Games",
    category: "pc",
    image: "./images/HUSH VALORANT.jpg",
    idPlaceholder: "Masukkan Riot ID (Contoh: Player#ID)",
    zonePlaceholder: "",
    hasZone: false,
    nominals: [
      { id: "val-475", name: "475 Valorant Points", price: 52000 },
      { id: "val-1000", name: "1000 Valorant Points", price: 105000 },
      { id: "val-2050", name: "2050 Valorant Points", price: 210000 },
      { id: "val-3650", name: "3650 Valorant Points", price: 370000 }
    ]
  },
  hok: {
    id: "hok",
    name: "Honor of Kings",
    publisher: "Level Infinite",
    category: "mobile",
    image: "./images/download (2).jpg",
    idPlaceholder: "Masukkan Player ID HoK",
    zonePlaceholder: "",
    hasZone: false,
    nominals: [
      { id: "hok-80", name: "80 Tokens", price: 14000 },
      { id: "hok-240", name: "240 Tokens", price: 42000 },
      { id: "hok-400", name: "400 Tokens", price: 70000 },
      { id: "hok-weekly", name: "Weekly Card", price: 15000 }
    ]
  },
  steam: {
    id: "steam",
    name: "Steam Wallet Code (IDR)",
    publisher: "Valve Corporation",
    category: "voucher",
    image: "./images/Pc Gaming Steam Sticker.jpg",
    idPlaceholder: "Email Penerima Kode Voucher",
    zonePlaceholder: "",
    hasZone: false,
    nominals: [
      { id: "stm-12", name: "IDR 12,000 Wallet", price: 14000 },
      { id: "stm-45", name: "IDR 45,000 Wallet", price: 51000 },
      { id: "stm-90", name: "IDR 90,000 Wallet", price: 99000 },
      { id: "stm-250", name: "IDR 250,000 Wallet", price: 275000 }
    ]
  },
  roblox: {
    id: "roblox",
    name: "Roblox Robux",
    publisher: "Roblox Corporation",
    category: "pc",
    image: "./images/Roblox.jpg",
    idPlaceholder: "Username Akun Roblox",
    zonePlaceholder: "",
    hasZone: false,
    nominals: [
      { id: "rbx-80", name: "80 Robux", price: 15000 },
      { id: "rbx-400", name: "400 Robux", price: 72000 },
      { id: "rbx-800", name: "800 Robux", price: 142000 }
    ]
  }
};

// --- 2. LOCALSTORAGE SEEDER FOR TRANSACTIONS ---
function rendraInitStorage() {
  if (!localStorage.getItem("rendra_orders")) {
    const sampleOrders = [
      {
        invoice: "JUN-202611-1001",
        gameName: "Mobile Legends: Bang Bang",
        userId: "123456789",
        zoneId: "2104",
        nominal: "Weekly Diamond Pass",
        payment: "QRIS All Payment",
        whatsapp: "081234567890",
        price: 28000,
        status: "Berhasil",
        date: "2026-11-09 14:20:15"
      },
      {
        invoice: "JUN-202611-1002",
        gameName: "Free Fire Max",
        userId: "987654321",
        zoneId: "-",
        nominal: "355 Diamonds",
        payment: "DANA Instant",
        whatsapp: "082198765432",
        price: 48000,
        status: "Berhasil",
        date: "2026-11-10 09:12:44"
      }
    ];
    localStorage.setItem("rendra_orders", JSON.stringify(sampleOrders));
  }
}

// --- 3. TOAST NOTIFICATION UTILITY ---
function rendraShowToast(message, type = "info") {
  let toast = document.getElementById("rendra-toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "rendra-toast";
    toast.className = "rendra-toast";
    document.body.appendChild(toast);
  }
  
  let icon = "⚡";
  if (type === "success") icon = "✅";
  if (type === "warning") icon = "⚠️";
  if (type === "error") icon = "❌";

  toast.innerHTML = `<span>${icon}</span> <span>${message}</span>`;
  toast.className = "rendra-toast rendra-show";

  setTimeout(() => {
    toast.className = "rendra-toast";
  }, 3500);
}

// --- 4. FORMAT CURRENCY (IDR) ---
function rendraFormatRupiah(number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0
  }).format(number);
}

// --- 5.1 HERO ANIMATED SLIDER ENGINE ---
function rendraSetupHeroSlider() {
  const container = document.getElementById("rendra-hero-slider");
  if (!container) return;

  const slides = container.querySelectorAll(".rendra-slide");
  const dots = container.querySelectorAll(".rendra-dot");
  const btnPrev = document.getElementById("rendra-slider-prev");
  const btnNext = document.getElementById("rendra-slider-next");

  if (!slides.length) return;

  let currentIndex = 0;
  let slideTimer = null;
  const slideInterval = 4000;

  function showSlide(index) {
    if (index >= slides.length) currentIndex = 0;
    else if (index < 0) currentIndex = slides.length - 1;
    else currentIndex = index;

    slides.forEach((slide, i) => {
      if (i === currentIndex) {
        slide.classList.add("rendra-slide-active");
      } else {
        slide.classList.remove("rendra-slide-active");
      }
    });

    dots.forEach((dot, i) => {
      if (i === currentIndex) {
        dot.classList.add("rendra-dot-active");
      } else {
        dot.classList.remove("rendra-dot-active");
      }
    });
  }

  function startAutoPlay() {
    stopAutoPlay();
    slideTimer = setInterval(() => {
      showSlide(currentIndex + 1);
    }, slideInterval);
  }

  function stopAutoPlay() {
    if (slideTimer) {
      clearInterval(slideTimer);
      slideTimer = null;
    }
  }

  if (btnNext) {
    btnNext.addEventListener("click", () => {
      showSlide(currentIndex + 1);
      startAutoPlay();
    });
  }

  if (btnPrev) {
    btnPrev.addEventListener("click", () => {
      showSlide(currentIndex - 1);
      startAutoPlay();
    });
  }

  dots.forEach(dot => {
    dot.addEventListener("click", () => {
      const idx = parseInt(dot.getAttribute("data-index"), 10);
      showSlide(idx);
      startAutoPlay();
    });
  });

  // Pause on hover
  container.addEventListener("mouseenter", stopAutoPlay);
  container.addEventListener("mouseleave", startAutoPlay);

  // Initialize
  showSlide(0);
  startAutoPlay();
}

// --- 5. INITIALIZE NAVBAR HAMBURGER ---
function rendraSetupNav() {
  const hamburger = document.getElementById("rendra-hamburger");
  const mobileMenu = document.getElementById("rendra-mobile-menu");

  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      mobileMenu.classList.toggle("rendra-show");
      const icon = hamburger.querySelector("span") || hamburger;
      icon.textContent = mobileMenu.classList.contains("rendra-show") ? "✕" : "☰";
    });
  }
}

// --- 6. HOME PAGE LOGIC (Filter & Search) ---
function rendraSetupHome() {
  const filterTabs = document.querySelectorAll(".rendra-filter-tab");
  const searchInput = document.getElementById("rendra-home-search");
  const cards = document.querySelectorAll(".rendra-game-card");

  if (!cards.length) return;

  function filterCards() {
    const activeTab = document.querySelector(".rendra-filter-tab.rendra-active");
    const category = activeTab ? activeTab.getAttribute("data-category") : "all";
    const keyword = searchInput ? searchInput.value.toLowerCase().trim() : "";

    cards.forEach(card => {
      const cardCategory = card.getAttribute("data-category");
      const cardTitle = card.getAttribute("data-name").toLowerCase();

      const matchCategory = (category === "all" || cardCategory === category);
      const matchSearch = cardTitle.includes(keyword);

      if (matchCategory && matchSearch) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  }

  filterTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      filterTabs.forEach(t => t.classList.remove("rendra-active"));
      tab.classList.add("rendra-active");
      filterCards();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", filterCards);
  }
}

// --- 7. ORDER PAGE LOGIC (Interactive 5-Step Flow) ---
function rendraSetupOrder() {
  const urlParams = new URLSearchParams(window.location.search);
  const gameKey = urlParams.get("game") || "mlbb";
  const game = rendraGameData[gameKey] || rendraGameData.mlbb;

  // Bind Sidebar Details
  const titleEl = document.getElementById("rendra-order-game-title");
  const pubEl = document.getElementById("rendra-order-game-pub");
  const imgEl = document.getElementById("rendra-order-game-img");

  if (titleEl) titleEl.textContent = game.name;
  if (pubEl) pubEl.textContent = game.publisher;
  if (imgEl) imgEl.src = game.image;

  // Setup Step 1: Account Inputs
  const userIdInput = document.getElementById("rendra-input-userid");
  const zoneIdInput = document.getElementById("rendra-input-zoneid");
  const zoneGroup = document.getElementById("rendra-zone-group");

  if (userIdInput) userIdInput.placeholder = game.idPlaceholder;
  if (zoneGroup) {
    if (game.hasZone) {
      zoneGroup.style.display = "block";
      if (zoneIdInput) zoneIdInput.placeholder = game.zonePlaceholder;
    } else {
      zoneGroup.style.display = "none";
    }
  }

  // Setup Step 2: Nominals Grid
  const nominalContainer = document.getElementById("rendra-nominal-list");
  let selectedNominal = null;
  let selectedPrice = 0;

  if (nominalContainer) {
    nominalContainer.innerHTML = "";
    game.nominals.forEach(nom => {
      const item = document.createElement("div");
      item.className = "rendra-nominal-item";
      item.setAttribute("data-id", nom.id);
      item.setAttribute("data-price", nom.price);
      item.setAttribute("data-name", nom.name);
      item.innerHTML = `
        <div class="rendra-nominal-name">${nom.name}</div>
        <div class="rendra-nominal-price">${rendraFormatRupiah(nom.price)}</div>
      `;

      item.addEventListener("click", () => {
        document.querySelectorAll(".rendra-nominal-item").forEach(i => i.classList.remove("rendra-selected"));
        item.classList.add("rendra-selected");
        selectedNominal = nom.name;
        selectedPrice = nom.price;
        rendraUpdateTotal();
      });

      nominalContainer.appendChild(item);
    });
  }

  // Setup Step 3: Payment Selection
  let selectedPayment = null;
  const paymentItems = document.querySelectorAll(".rendra-payment-item");
  paymentItems.forEach(item => {
    item.addEventListener("click", () => {
      paymentItems.forEach(p => p.classList.remove("rendra-selected"));
      item.classList.add("rendra-selected");
      selectedPayment = item.getAttribute("data-payment");
      rendraUpdateTotal();
    });
  });

  // Update Bottom Total Bar
  function rendraUpdateTotal() {
    const totalEl = document.getElementById("rendra-order-total-display");
    if (totalEl) {
      totalEl.textContent = rendraFormatRupiah(selectedPrice);
    }
  }

  // Setup Step 5: Modal & Submit Handler
  const btnBuy = document.getElementById("rendra-btn-submit-order");
  const modal = document.getElementById("rendra-order-modal");
  const btnCloseModal = document.getElementById("rendra-modal-close");
  const btnCancelModal = document.getElementById("rendra-modal-cancel");
  const btnConfirmPay = document.getElementById("rendra-modal-confirm");
  const waInput = document.getElementById("rendra-input-wa");

  if (btnBuy && modal) {
    btnBuy.addEventListener("click", (e) => {
      e.preventDefault();

      // Validation
      const uidVal = userIdInput ? userIdInput.value.trim() : "";
      const zoneVal = (game.hasZone && zoneIdInput) ? zoneIdInput.value.trim() : "-";
      const waVal = waInput ? waInput.value.trim() : "";

      if (!uidVal) {
        rendraShowToast("Mohon masukkan User ID akun game Anda!", "warning");
        if (userIdInput) userIdInput.focus();
        return;
      }

      if (game.hasZone && !zoneVal) {
        rendraShowToast("Mohon masukkan Zone ID atau Server akun Anda!", "warning");
        if (zoneIdInput) zoneIdInput.focus();
        return;
      }

      if (!selectedNominal) {
        rendraShowToast("Silakan pilih nominal produk terlebih dahulu!", "warning");
        return;
      }

      if (!selectedPayment) {
        rendraShowToast("Silakan pilih metode pembayaran!", "warning");
        return;
      }

      if (!waVal || waVal.length < 9) {
        rendraShowToast("Mohon masukkan nomor WhatsApp aktif yang valid!", "warning");
        if (waInput) waInput.focus();
        return;
      }

      // Populate Modal Fields
      document.getElementById("rendra-modal-game").textContent = game.name;
      document.getElementById("rendra-modal-account").textContent = `${uidVal} ${game.hasZone ? `(${zoneVal})` : ''}`;
      document.getElementById("rendra-modal-item").textContent = selectedNominal;
      document.getElementById("rendra-modal-payment").textContent = selectedPayment;
      document.getElementById("rendra-modal-wa").textContent = waVal;
      document.getElementById("rendra-modal-price").textContent = rendraFormatRupiah(selectedPrice);

      modal.classList.add("rendra-open");
    });
  }

  const closeModal = () => modal && modal.classList.remove("rendra-open");
  if (btnCloseModal) btnCloseModal.addEventListener("click", closeModal);
  if (btnCancelModal) btnCancelModal.addEventListener("click", closeModal);

  // Confirm Payment & Generate Order
  if (btnConfirmPay) {
    btnConfirmPay.addEventListener("click", () => {
      const uidVal = userIdInput ? userIdInput.value.trim() : "";
      const zoneVal = (game.hasZone && zoneIdInput) ? zoneIdInput.value.trim() : "-";
      const waVal = waInput ? waInput.value.trim() : "";

      const now = new Date();
      const invoiceNum = `JUN-${now.getFullYear()}${String(now.getMonth()+1).padStart(2,'0')}-${Math.floor(1000 + Math.random() * 9000)}`;

      const newOrder = {
        invoice: invoiceNum,
        gameName: game.name,
        userId: uidVal,
        zoneId: zoneVal,
        nominal: selectedNominal,
        payment: selectedPayment,
        whatsapp: waVal,
        price: selectedPrice,
        status: "Berhasil",
        date: `${now.getFullYear()}-${String(now.getMonth()+1).padStart(2,'0')}-${String(now.getDate()).padStart(2,'0')} ${String(now.getHours()).padStart(2,'0')}:${String(now.getMinutes()).padStart(2,'0')}`
      };

      const orders = JSON.parse(localStorage.getItem("rendra_orders") || "[]");
      orders.unshift(newOrder);
      localStorage.setItem("rendra_orders", JSON.stringify(orders));

      closeModal();
      rendraShowToast(`Pesanan berhasil dibuat! No. Invoice: ${invoiceNum}`, "success");

      setTimeout(() => {
        window.location.href = `check-order.html?invoice=${invoiceNum}`;
      }, 1200);
    });
  }
}

// --- 8. CHECK ORDER / TRACKING LOGIC ---
function rendraSetupCheckOrder() {
  const form = document.getElementById("rendra-track-form");
  const input = document.getElementById("rendra-track-input");
  const resultCard = document.getElementById("rendra-track-result");

  if (!form || !input || !resultCard) return;

  function doSearch(query) {
    const q = query.trim().toUpperCase();
    if (!q) {
      rendraShowToast("Mohon masukkan Nomor Invoice yang ingin dilacak!", "warning");
      return;
    }

    const orders = JSON.parse(localStorage.getItem("rendra_orders") || "[]");
    const found = orders.find(o => o.invoice.toUpperCase() === q || o.whatsapp === q);

    if (found) {
      resultCard.style.display = "block";
      document.getElementById("rendra-res-invoice").textContent = found.invoice;
      document.getElementById("rendra-res-status").textContent = found.status;
      document.getElementById("rendra-res-status").className = `rendra-badge rendra-badge-success`;
      document.getElementById("rendra-res-game").textContent = found.gameName;
      document.getElementById("rendra-res-account").textContent = `${found.userId} ${found.zoneId !== '-' ? `(${found.zoneId})` : ''}`;
      document.getElementById("rendra-res-item").textContent = found.nominal;
      document.getElementById("rendra-res-payment").textContent = found.payment;
      document.getElementById("rendra-res-price").textContent = rendraFormatRupiah(found.price);
      document.getElementById("rendra-res-date").textContent = found.date;

      rendraShowToast("Data transaksi ditemukan!", "success");
      resultCard.scrollIntoView({ behavior: "smooth" });
    } else {
      resultCard.style.display = "none";
      rendraShowToast(`Invoice "${q}" tidak ditemukan. Silakan cek kembali nomor Anda!`, "error");
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    doSearch(input.value);
  });

  // Auto Search from URL params
  const urlParams = new URLSearchParams(window.location.search);
  const paramInvoice = urlParams.get("invoice");
  if (paramInvoice) {
    input.value = paramInvoice;
    doSearch(paramInvoice);
  }
}

// --- 9. PRICELIST PAGE LOGIC ---
function rendraSetupPricelist() {
  const searchInput = document.getElementById("rendra-price-search");
  const tableBody = document.getElementById("rendra-price-tbody");
  const categoryPills = document.querySelectorAll(".rendra-price-pill");

  if (!tableBody) return;

  // Generate All Rows Dynamically from rendraGameData
  let allRows = [];
  Object.values(rendraGameData).forEach(game => {
    game.nominals.forEach(nom => {
      allRows.push({
        gameName: game.name,
        category: game.category,
        itemName: nom.name,
        price: nom.price,
        status: "Tersedia",
        gameId: game.id
      });
    });
  });

  function renderRows(filterCategory = "all", keyword = "") {
    tableBody.innerHTML = "";
    const filtered = allRows.filter(row => {
      const matchCat = (filterCategory === "all" || row.category === filterCategory);
      const matchKey = (row.gameName.toLowerCase().includes(keyword) || row.itemName.toLowerCase().includes(keyword));
      return matchCat && matchKey;
    });

    if (filtered.length === 0) {
      tableBody.innerHTML = `<tr><td colspan="5" style="text-align: center; padding: 30px; color: var(--rendra-text-dim);">Produk tidak ditemukan</td></tr>`;
      return;
    }

    filtered.forEach(row => {
      const tr = document.createElement("tr");
      tr.innerHTML = `
        <td><strong>${row.gameName}</strong></td>
        <td>${row.itemName}</td>
        <td><span style="color: var(--rendra-accent); font-weight: 700;">${rendraFormatRupiah(row.price)}</span></td>
        <td><span class="rendra-badge rendra-badge-success">${row.status}</span></td>
        <td><a href="order.html?game=${row.gameId}" class="rendra-btn rendra-btn-primary" style="padding: 6px 14px; font-size: 0.8rem;">Top Up</a></td>
      `;
      tableBody.appendChild(tr);
    });
  }

  renderRows();

  categoryPills.forEach(pill => {
    pill.addEventListener("click", () => {
      categoryPills.forEach(p => p.classList.remove("rendra-active"));
      pill.classList.add("rendra-active");
      const cat = pill.getAttribute("data-category");
      const key = searchInput ? searchInput.value.toLowerCase().trim() : "";
      renderRows(cat, key);
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const activePill = document.querySelector(".rendra-price-pill.rendra-active");
      const cat = activePill ? activePill.getAttribute("data-category") : "all";
      renderRows(cat, searchInput.value.toLowerCase().trim());
    });
  }
}

// --- 10. FAQ ACCORDION LOGIC ---
function rendraSetupFaq() {
  const faqItems = document.querySelectorAll(".rendra-faq-item");
  faqItems.forEach(item => {
    const question = item.querySelector(".rendra-faq-question");
    if (question) {
      question.addEventListener("click", () => {
        const isActive = item.classList.contains("rendra-active");
        faqItems.forEach(f => f.classList.remove("rendra-active"));
        if (!isActive) {
          item.classList.add("rendra-active");
        }
      });
    }
  });
}

// --- 11. CONTACT FORM LOGIC (Mandatory Validation & Feedback) ---
function rendraSetupContact() {
  const form = document.getElementById("rendra-contact-form");
  if (!form) return;

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("rendra-contact-name").value.trim();
    const email = document.getElementById("rendra-contact-email").value.trim();
    const subject = document.getElementById("rendra-contact-subject").value.trim();
    const message = document.getElementById("rendra-contact-message").value.trim();

    if (!name || !email || !subject || !message) {
      rendraShowToast("Mohon lengkapi semua isian formulir!", "warning");
      return;
    }

    // Email pattern check
    if (!email.includes("@") || !email.includes(".")) {
      rendraShowToast("Mohon masukkan format email yang valid!", "warning");
      return;
    }

    rendraShowToast("Pesan Anda berhasil dikirim kepada Rendra (Admin JunStore). Kami akan segera membalas!", "success");
    form.reset();
  });
}

// --- DOM READY DISPATCHER ---
document.addEventListener("DOMContentLoaded", () => {
  rendraInitStorage();
  rendraSetupNav();
  rendraSetupHeroSlider();
  rendraSetupHome();
  rendraSetupOrder();
  rendraSetupCheckOrder();
  rendraSetupPricelist();
  rendraSetupFaq();
  rendraSetupContact();
});
