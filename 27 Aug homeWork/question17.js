// Get the current date and time
const now = new Date();

// Format the date for YYYY-MM-DD HH:mm
const yyyyMMddHHmm = now.getFullYear() + "-" +
                     (now.getMonth() + 1).toString().padStart(2, "0") + "-" +
                     now.getDate().toString().padStart(2, "0") + " " +
                     now.getHours().toString().padStart(2, "0") + ":" +
                     now.getMinutes().toString().padStart(2, "0");
console.log(`The date and time in format YYYY-MM-DD HH:mm is ${yyyyMMddHHmm}`);

// Format the date for DD-MM-YYYY HH:mm
const ddMMyyyyHHmm = now.getDate().toString().padStart(2, "0") + "-" +
                     (now.getMonth() + 1).toString().padStart(2, "0") + "-" +
                     now.getFullYear() + " " +
                     now.getHours().toString().padStart(2, "0") + ":" +
                     now.getMinutes().toString().padStart(2, "0");
console.log(`The date and time in format DD-MM-YYYY HH:mm is ${ddMMyyyyHHmm}`);

// Format the date for DD/MM/YYYY HH:mm
const ddMMyyyySlashHHmm = now.getDate().toString().padStart(2, "0") + "/" +
                          (now.getMonth() + 1).toString().padStart(2, "0") + "/" +
                          now.getFullYear() + " " +
                          now.getHours().toString().padStart(2, "0") + ":" +
                          now.getMinutes().toString().padStart(2, "0");
console.log(`The date and time in format DD/MM/YYYY HH:mm is ${ddMMyyyySlashHHmm}`);
