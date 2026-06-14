const fs = require('fs');
const path = require('path');

// Le chemin vers ton dossier contenant tous les sous-dossiers de matchs
const photosDir = path.join(__dirname, 'photos');
const result = {};

// On parcourt chaque élément du dossier "photos"
fs.readdirSync(photosDir).forEach(folder => {
    const folderPath = path.join(photosDir, folder);

    // Si c'est bien un dossier (ex: "Hawks_Game1")
    if (fs.statSync(folderPath).isDirectory()) {

        // On liste tous les fichiers, en gardant uniquement les images
        const files = fs.readdirSync(folderPath).filter(file => {
            return /\.(jpg|jpeg|png|webp|avif)$/i.test(file);
        });

        // On ajoute ça à notre résultat
        if (files.length > 0) {
            result[folder] = files;
        }
    }
});

// On affiche le résultat prêt à être copié !
console.log("=== COPIE CE CODE DANS TON FICHIER HTML ===");
console.log("const AUTO_FILES = " + JSON.stringify(result, null, 2) + ";");