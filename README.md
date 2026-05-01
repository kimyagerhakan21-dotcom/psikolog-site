# PsikoLog — Ruh Sağlığı Platformu

React + Vite ile geliştirilmiş tam sayfalı ruh sağlığı platformu.

## Sayfalar
- Ana Sayfa (/)
- Makaleler (/makaleler)
- Makale Detay (/makale/:id)
- Aforizmalar (/aforizmalar)
- Terapistler (/terapistler)
- Online Terapi (/online-terapi)
- Hakkımızda (/hakkimizda)

---

## 🚀 Vercel'e Deploy Adımları

### 1. Node.js Kur (bilgisayarında yoksa)
https://nodejs.org → LTS sürümü indir ve kur.

### 2. Projeyi Bilgisayarına Al
Bu zip dosyasını bir klasöre çıkar.

### 3. Bağımlılıkları Yükle
```bash
cd psikolog-site
npm install
```

### 4. Yerel Önizleme (isteğe bağlı)
```bash
npm run dev
```
→ Tarayıcıda http://localhost:5173 aç

### 5. GitHub'a Yükle
1. https://github.com → Yeni repo oluştur ("psikolog-site")
2. Terminal'de:
```bash
git init
git add .
git commit -m "ilk yükleme"
git branch -M main
git remote add origin https://github.com/KULLANICI_ADIN/psikolog-site.git
git push -u origin main
```

### 6. Vercel'e Deploy Et
1. https://vercel.com → GitHub ile giriş yap
2. "Add New Project" → GitHub repo'nu seç
3. "Deploy" butonuna bas
4. ✅ Bitti! Siteye https://psikolog-site.vercel.app gibi bir adres verilir.

---

## 🎨 İçerik Güncelleme
Tüm makale, aforizma ve terapist bilgileri `src/data.js` dosyasındadır.
Bu dosyayı düzenleyerek içerikleri değiştirebilirsin.

## 🎨 Renk Paleti
- Forest (koyu yeşil): #2D4A3E
- Sage (açık yeşil): #8FAF95
- Cream (krem): #F5F0E8
- Terracotta (turuncu): #C4704A
