const express = require('express');
const router = express.Router();
const models = require('../models')
const { Response } = require('../helpers/util')
const { Op } = require('sequelize')

/* GET users listing. */
router.get('/', async (req, res, next) => {
  try {
    const { searchName, searchPhone } = req.query

    const page = parseInt(req.query.page) || 1
    const limit = 9
    const offset = (page - 1) * limit

    const total = await models.User.count()
    const pages = Math.ceil(total / limit)

    if (searchName && searchPhone) {
      const users = await models.User.findAll({
        limit,
        offset,
        where: {
          [Op.or]: [
            {
              name: {
                [Op.iLike]: `%${searchName}%`
              }
            },
            {
              phone: {
                [Op.iLike]: `%${searchPhone}%`
              }
            }
          ]
        },
        order: [
          ['id', 'ASC']
        ]
      })

      res.json(new Response({
        users,
        page: Number(page),
        pages
      }))

    } else if (searchName) {
      const users = await models.User.findAll({
        limit,
        offset,
        where: {
          [Op.and]: [
            {
              id: {
                [Op.iLike]: `%${searchName}%`
              }
            }
          ]
        },
        order: [
          ['id', 'ASC']
        ]
      })

      res.json(new Response({
        users,
        page: Number(page),
        pages
      }))
    } else if (searchPhone) {
      const users = await models.User.findAll({
        limit,
        offset,
        where: {
          [Op.and]: [
            {
              phone: {
                [Op.iLike]: `%${searchPhone}%`
              }
            }
          ]
        },
        order: [
          ['id', 'ASC']
        ]
      })

      res.json(new Response({
        users,
        page: Number(page),
        pages
      }))

    } else {
      const users = await models.User.findAll({
        limit,
        offset,
        order: [
          ['id', 'ASC']
        ]
      })

      res.json(new Response({
        users,
        page: Number(page),
        pages
      }))
    }
  } catch (error) {
    console.log(error)
    res.status(500).json(new Response(error, false))
  }
});

router.post('/', async (req, res, next) => {
  try {
    const users = await models.User.create(req.body)

    res.json(new Response(users))
  } catch (error) {
    console.log(error)
    res.status(500).json(new Response(error, false))
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const users = await models.User.update(req.body, {
      where: {
        id: req.params.id
      },
      returning: true,
      plain: true
    })

    res.json(new Response(users[1]))
  } catch (error) {
    console.log(error)
    res.status(500).json(new Response(error, false))
  }
});

router.delete('/:id', async (req, res, next) => {
  try {
    const users = await models.User.destroy({
      where: {
        id: req.params.id
      }
    })

    res.json(new Response(users))
  } catch (error) {
    console.log(error)
    res.status(500).json(new Response(error, false))
  }
});

module.exports = router;
