import dayjs from "dayjs";

// Check if a fee is overdue
export const isFeeOverdue = (dueDate) => {
  return dayjs().isAfter(dayjs(dueDate), "day");
};

// Get how many days late the fee is
export const getDaysLate = (dueDate) => {
  const now = dayjs();
  const due = dayjs(dueDate);
  return now.diff(due, "day");
};

// Get a human-readable status
export const getFeeStatus = (dueDate, isPaid) => {
  if (isPaid) return "Paid";
  if (isFeeOverdue(dueDate)) return "Overdue";
  return "Pending";
};

// Generate fee alert messages
export const getFeeAlertMessage = (dueDate) => {
  if (!isFeeOverdue(dueDate)) return null;

  const daysLate = getDaysLate(dueDate);
  if (daysLate < 7) return `⚠️ Your payment is ${daysLate} day(s) late.`;
  if (daysLate < 30) return `🚨 Payment overdue by ${daysLate} days. Risk of membership freeze.`;
  return `⛔ Membership suspended due to 30+ days non-payment.`;
};

// Format fee in ₹
export const formatRupee = (amount) => `₹${amount.toFixed(2)}`;
