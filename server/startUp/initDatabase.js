const toolsMock = require("../mock/tools.json");
const Tools = require("../models/Tools");
const optionsMock = require("../mock/options.json");
const Options = require("../models/Options");

module.exports = async () => {
  const tools = await Tools.find();

  if (tools.length !== toolsMock.length) {
    await createInitialEntity(Tools, toolsMock);
  }

  const options = await Options.find();
  if (options.length !== optionsMock.length) {
    await createInitialEntity(Options, optionsMock);
  }

  async function createInitialEntity(Model, data) {
    if (Model.length !== 0) {
      await Model.collection.drop();
    }

    return Promise.all(
      data.map(async (item) => {
        try {
          if (item.id) {
            delete item.id;
          }

          const newItem = new Model(item);
          await newItem.save();
          return newItem;
        } catch (e) {
          return e;
        }
      })
    );
  }
};
