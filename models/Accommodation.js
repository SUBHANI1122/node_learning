const mongoose = require('mongoose');

const accommodationSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price_per_night: { type: mongoose.Decimal128, required: true },
  number_of_guests: { type: Number, required: true },
  description: { type: String },
  status: { type: String, enum: ['active', 'inactive'], default: 'active' },
  midweek_base_price: { type: mongoose.Decimal128, default: null },
  weekend_base_price: { type: mongoose.Decimal128, default: null },
  midweek_guest_3: { type: mongoose.Decimal128, default: null },
  midweek_guest_4: { type: mongoose.Decimal128, default: null },
  midweek_guest_5: { type: mongoose.Decimal128, default: null },
  midweek_guest_6: { type: mongoose.Decimal128, default: null },
  weekend_guest_3: { type: mongoose.Decimal128, default: null },
  weekend_guest_4: { type: mongoose.Decimal128, default: null },
  weekend_guest_5: { type: mongoose.Decimal128, default: null },
  weekend_guest_6: { type: mongoose.Decimal128, default: null },
}, {
  timestamps: true
});

module.exports = mongoose.model('Accommodation', accommodationSchema);
