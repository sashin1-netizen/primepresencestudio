/** @param {string} phone @param {string} message */
export function buildWhatsAppUrl(phone, message) {
  if (!/^\d{8,15}$/.test(phone)) throw new Error("WhatsApp number must use international digits only.");
  return `https://wa.me/${phone}?text=${encodeURIComponent(message.trim())}`;
}
