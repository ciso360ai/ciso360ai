//upsert endpoint

const resData = {
  success: true,
  msg: 'Success',
  code: 200,
  data: null
}

export default (router, { database, services, exceptions }) => {
  const { ItemsService } = services;
  const { ServiceUnavailableException } = exceptions;
  router.post('/', async (req, res, next) => {
  try {
    let reqBody = req.body || {}
    const { collection = '', key = {}, body = {} } = reqBody
    if (!collection) return res.json({
      ...resData,
      success: false,
      msg: 'Lack collection name'
    })
    if (!key || !Object.keys(key).length) return res.json({
      ...resData,
      success: false,
      msg: 'Lack key'
    })
    const service = new ItemsService(collection, { schema: req.schema, accountability: req.accountability })
    const primaryKeyField = service.schema.collections[collection].primary
    const _where = { ...key }

    const exists = await service.knex
        .select(primaryKeyField)
        .from(collection)
        .where(_where)
        .first()

    if (exists) {
      await service.updateOne(exists[primaryKeyField], body);
      res.json({
        ...resData,
        msg: 'Update Success'
      })
    } else {
      await service.createOne(body)
      res.json({
        ...resData,
        msg: 'Create Success',
        code: 201
      })
    }
  } catch (error) {
    return next(new ServiceUnavailableException(error.message));
  }
})
}
