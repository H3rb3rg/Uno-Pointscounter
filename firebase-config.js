// ============================================================================
// Firebase-Konfiguration für den UNO-Flex-Punktezähler
// ============================================================================
// Diese Datei musst du EINMALIG selbst ausfüllen, damit Spiele dauerhaft
// gespeichert werden und Mitspieler über Link/QR-Code beitreten können.
// Mitspieler brauchen dafür KEINEN eigenen Account - nur du (der Spielleiter)
// richtest das folgende kostenlos ein:
//
// 1. Auf https://console.firebase.google.com ein neues Projekt anlegen
//    (kostenloser "Spark"-Tarif, keine Kreditkarte nötig)
// 2. Im Projekt: "Build" -> "Firestore Database" -> "Datenbank erstellen"
//    (Standort z.B. "eur3 (europe-west)", Produktionsmodus reicht)
// 3. Im Firestore-Bereich auf den Tab "Regeln" und folgendes einfügen
//    (WICHTIG: ohne diese Regeln kann die App nichts speichern/lesen):
//
//      rules_version = '2';
//      service cloud.firestore {
//        match /databases/{database}/documents {
//          match /games/{gameId} {
//            allow read, write: if true;
//          }
//          match /groups/{groupId} {
//            allow read, write: if true;
//          }
//        }
//      }
//
//    Hinweis zur Sicherheit: Diese Regel erlaubt jedem mit dem 5-stelligen
//    Spielcode Lese-/Schreibzugriff auf genau dieses eine Spiel - wie ein
//    Zugangscode. Es gibt keinen Login. Für einen privaten Punktezähler
//    unter Freunden ist das ein angemessener, unkomplizierter Kompromiss.
//
// 4. Im Projekt: Zahnrad-Symbol -> "Projekteinstellungen" -> ganz unten bei
//    "Meine Apps" auf das Web-Symbol "</>" klicken, App registrieren
//    (kein Hosting nötig, einfach überspringen)
// 5. Der dabei angezeigte "firebaseConfig"-Block unten einfügen und diese
//    Datei zusammen mit den anderen App-Dateien in dein Repo hochladen.
//
// Ohne ausgefüllte Werte läuft die App weiterhin, aber nur lokal auf einem
// Gerät (kein dauerhaftes Speichern, keine Mitspieler-Synchronisation).
// ============================================================================

window.FIREBASE_CONFIG = {
  apiKey: "AIzaSyAjV8afSQogGy1QDzLwJbI2ISGCtUU_Mbc",
  authDomain: "uno-punktezaehler.firebaseapp.com",
  projectId: "uno-punktezaehler",
  storageBucket: "uno-punktezaehler.firebasestorage.app",
  messagingSenderId: "383899308117",
  appId: "1:383899308117:web:df81fa3d9e15ad444004dc"
};
