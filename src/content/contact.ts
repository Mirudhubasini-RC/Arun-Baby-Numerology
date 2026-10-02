// Two different numbers: WhatsApp is for conversation, GPay is for payment only.
// Never swap or merge them.
export const contact = {
  whatsappNumber: '919342902958',
  whatsappDisplay: '+91 93429 02958',
  whatsappLink: 'https://wa.me/919342902958',
  phoneLink: 'tel:+919342902958',
  gpayNumber: '919363205036',
  gpayDisplay: '+91 93632 05036',
} as const;

export const whatsappWithMessage = (message: string) =>
  `${contact.whatsappLink}?text=${encodeURIComponent(message)}`;
