Google Form Automated PDF Generator (Google Apps Script + TypeScript)

This project automates the process of generating personalized PDFs from Google Form submissions. When a user submits the form, their answers are inserted into a template document, converted into a PDF, emailed to them, and saved automatically in Google Drive.

✔ What the project does

Collects data from a Google Form

Inserts responses into a Google Docs template

Generates a PDF automatically

Sends the PDF to the user via Gmail

Stores a copy of the PDF in a dedicated Google Drive folder

Deletes temporary files to keep Drive clean

✔ How the automation works

User submits the form
The Google Form triggers the aftersub(e) function.

Data is extracted
The script reads all fields using e.namedValues.

PDF is generated

A template Google Doc is copied

Placeholders like {Nom}, {Prenom}, {Grade}… are replaced

The document is exported as PDF

The generated PDF is saved in the target Drive folder

Email is sent automatically
The PDF is attached and sent to the user using GmailApp.

Temporary copy is deleted
The cloned document is removed from the temporary folder.


Générateur Automatique de PDF via Google Form (Apps Script + TypeScript)

Ce projet automatise la génération de PDF personnalisés à partir des réponses d’un Google Form. Lorsqu’un utilisateur envoie le formulaire, ses informations sont insérées dans un modèle, converties en PDF, envoyées par email et stockées dans Google Drive.

✔ Ce que fait le projet

Récupère les réponses d’un Google Form

Insère les informations dans un modèle Google Docs

Génère automatiquement un PDF

Envoie le PDF par email à l’utilisateur

Stocke une copie dans un dossier Google Drive

Supprime les fichiers temporaires

✔ Comment fonctionne l’automatisation

Soumission du formulaire
Le script aftersub(e) est déclenché.

Extraction des données
Les champs sont lus depuis e.namedValues.

Génération du PDF

Copie du modèle

Remplacement des balises {Nom}, {Grade}, etc.

Export en PDF

Sauvegarde dans Google Drive

Envoi de l’email
Le PDF est joint et envoyé via GmailApp.

Nettoyage des fichiers temporaires