const Event = require("../models/event.model.js");

exports.create = (req, res) => {
  if (!req.body.title) {
    return res.status(500).send({ err: "name can not be empty" });
  }

  const event = new Event({
    title: req.body.title,
    date: req.body.date,
  });

  event
    .save()
    .then(event => res.send(event))
    .catch(err => {
      res.status(500).send({ error: err.event || "Error" });
    });
};

exports.findAll = async (req, res) => {
  try {
    const events = await Event.find();
    res.send(events);
  } catch (err) {
    res.status(500).send({ err: err.event || "Error" });
  }
};

exports.findOne = async (req, res) => {
  try {
    const event = await Event.findOne({
      _id: req.params.eventId
    });
    if (event) {
      res.send(event);
    } else {
      res.status(404).send("No event found");
    }
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(500).send("Geen geldig ID");
    }
    return res.status(500).send(err);
  }
};

exports.update = async (req, res) => {
  if (!req.body.title) {
    return res.status(400).send("title mag niet leeg zijn");
  }

  try {
    const event = await Event.findOneAndUpdate(
      {
        _id: req.params.eventId
      },
      {
        title: req.body.title,
        date: req.body.date
      },
      {
        new: true
      }
    );

    if (!event) {
      return res.status(404).send("No event found");
    }
    res.send(event);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(417).send("Geen geldig ID");
    }
    return res.status(500).send(err);
  }
};

exports.delete = async (req, res) => {
  try {
    const event = await Event.findOneAndRemove({
      _id: req.params.eventId
    });
    if (!event) {
      return res.status(404).send("No event found");
    }
    res.send(event);
  } catch (err) {
    if (err.kind === "ObjectId") {
      return res.status(417).send("Geen geldig ID");
    }
    return res.status(500).send(err);
  }
};
