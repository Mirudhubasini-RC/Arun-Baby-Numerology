export const contact = {
  whatsappNumber: '919342902958',
  whatsappDisplay: '+91 93429 02958',
  whatsappLink: 'https://wa.me/919342902958',
  phoneLink: 'tel:+919342902958',
} as const;

export const whatsappWithMessage = (message: string) =>
  `${contact.whatsappLink}?text=${encodeURIComponent(message)}`;
