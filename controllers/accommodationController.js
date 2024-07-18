const Accommodation = require('../models/Accommodation');

// Create a new accommodation
exports.createAccommodation = async (req, res) => {
  try {
    const accommodation = new Accommodation(req.body);
    await accommodation.save();
    res.status(201).json(accommodation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all accommodations
exports.getAccommodations = async (req, res) => {
  try {
    const accommodations = await Accommodation.find();
    res.status(200).json(accommodations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single accommodation by ID
exports.getAccommodationById = async (req, res) => {
  try {
    const accommodation = await Accommodation.findById(req.params.id);
    if (!accommodation) {
      return res.status(404).json({ message: 'Accommodation not found' });
    }
    res.status(200).json(accommodation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update an accommodation by ID
exports.updateAccommodation = async (req, res) => {
  try {
    const accommodation = await Accommodation.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!accommodation) {
      return res.status(404).json({ message: 'Accommodation not found' });
    }
    res.status(200).json(accommodation);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete an accommodation by ID
exports.deleteAccommodation = async (req, res) => {
  try {
    const accommodation = await Accommodation.findByIdAndDelete(req.params.id);
    if (!accommodation) {
      return res.status(404).json({ message: 'Accommodation not found' });
    }
    res.status(200).json({ message: 'Accommodation deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
