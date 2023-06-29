const create = (Model) => (req, res) => {
  const newObject = new Model(req.body);

  newObject.save()
    .then(object => {
      res.status(201).json(object);
    })
    .catch(err => {
      console.error('Erreur lors de la création de l\'objet:', err);
      res.status(500).json({ error: 'Une erreur est survenue' });
    });
};

const getAll = (Model) => (req, res) => {

  Model.find()
    .then(objects => {
      res.status(201).json(objects);
    })
    .catch(err => {
      console.error('Erreur lors de la récupération des objets:', err);
      res.status(500).json({ error: 'Une erreur est survenue' });
    });
};

const getById = (Model) => (req, res) => {
  const { id } = req.params;

  Model.findById(id)
    .then(object => {
      if (!object) {
        res.status(404).json({ error: 'Objet non trouvé' });
        return;
      }

      res.status(201).json(object);
    })
    .catch(err => {
      console.error('Erreur lors de la récupération de l\'objet:', err);
      res.status(500).json({ error: 'Une erreur est survenue' });
    });
};

const update = (Model) => (req, res) => {
  const { id } = req.params;
  const updatedObject = req.body;

  Model.findByIdAndUpdate(id, updatedObject, { new: true })
    .then(object => {
      if (!object) {
        res.status(404).json({ error: 'Objet non trouvé' });
        return;
      }

      res.status(201).json(object);
    })
    .catch(err => {
      console.error('Erreur lors de la mise à jour de l\'objet:', err);
      res.status(500).json({ error: 'Une erreur est survenue' });
    });
};

const remove = (Model) => (req, res) => {
  const { id } = req.params;

  Model.findByIdAndDelete(id)
    .then(() => {
      res.status(201).json({ message: 'Objet supprimé avec succès' });
    })
    .catch(err => {
      console.error('Erreur lors de la suppression de l\'objet:', err);
      res.status(500).json({ error: 'Une erreur est survenue' });
    });
};

module.exports = {
  create,
  getAll,
  getById,
  update,
  remove
};